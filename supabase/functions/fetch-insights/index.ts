import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const FEED_CANDIDATES = [
  "https://www.insights.beyondhorizons.sg/feed",
  "https://insights.beyondhorizons.sg/feed",
  "https://beyondhorizons.substack.com/feed",
  "https://www.insights.beyondhorizons.sg/feed.xml",
  "https://www.insights.beyondhorizons.sg/rss",
  "https://www.insights.beyondhorizons.sg/atom.xml",
];

interface FeedItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image?: string;
  category?: string;
}

const decode = (s: string) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();

const stripHtml = (s: string) =>
  decode(s).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

const pick = (xml: string, tag: string): string | undefined => {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const m = xml.match(re);
  return m ? m[1] : undefined;
};

const pickLink = (xml: string): string | undefined => {
  // Atom-style <link href="..." />
  const atom = xml.match(/<link[^>]*href="([^"]+)"[^>]*\/?>/i);
  if (atom) return atom[1];
  // RSS-style <link>...</link>
  const rss = xml.match(/<link>([\s\S]*?)<\/link>/i);
  return rss ? decode(rss[1]) : undefined;
};

const pickImage = (xml: string): string | undefined => {
  const enc = xml.match(/<enclosure[^>]*url="([^"]+)"/i);
  if (enc) return enc[1];
  const media = xml.match(/<media:content[^>]*url="([^"]+)"/i);
  if (media) return media[1];
  const inHtml = xml.match(/<img[^>]*src="([^"]+)"/i);
  return inHtml ? inHtml[1] : undefined;
};

function parseFeed(xml: string): FeedItem[] {
  const items: FeedItem[] = [];
  // RSS <item> or Atom <entry>
  const blockRe = /<(item|entry)\b[\s\S]*?<\/\1>/gi;
  const blocks = xml.match(blockRe) ?? [];
  for (const block of blocks) {
    const title = decode(pick(block, "title") ?? "Untitled");
    const link = pickLink(block) ?? "";
    const descRaw =
      pick(block, "content:encoded") ??
      pick(block, "description") ??
      pick(block, "summary") ??
      pick(block, "content") ??
      "";
    const pubDate =
      pick(block, "pubDate") ??
      pick(block, "published") ??
      pick(block, "updated") ??
      "";
    const category = pick(block, "category");
    const image = pickImage(block) ?? pickImage(descRaw);
    items.push({
      title,
      link: link.trim(),
      description: stripHtml(descRaw).slice(0, 260),
      pubDate: decode(pubDate),
      image,
      category: category ? decode(category) : undefined,
    });
  }
  return items;
}

async function tryFeed(url: string): Promise<FeedItem[] | null> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        Accept:
          "application/rss+xml, application/atom+xml, application/xml;q=0.9, text/xml;q=0.9, */*;q=0.8",
      },
      redirect: "follow",
    });
    console.log(`[fetch-insights] ${url} -> ${res.status} ${res.headers.get("content-type")}`);
    if (!res.ok) return null;
    const ct = res.headers.get("content-type") ?? "";
    const text = await res.text();
    console.log(`[fetch-insights] ${url} body length=${text.length} startsWith=${text.slice(0, 60)}`);
    if (!/xml|rss|atom/i.test(ct) && !/<(rss|feed)\b/i.test(text)) return null;
    const items = parseFeed(text);
    console.log(`[fetch-insights] ${url} parsed items=${items.length}`);
    return items.length ? items : null;
  } catch (err) {
    console.log(`[fetch-insights] ${url} threw: ${(err as Error).message}`);
    return null;
  }
}

const FIRECRAWL_API_KEY = Deno.env.get("FIRECRAWL_API_KEY");

async function firecrawlSummary(url: string): Promise<string | null> {
  if (!FIRECRAWL_API_KEY) return null;
  try {
    const ac = new AbortController();
    const timer = setTimeout(() => ac.abort(), 20000);
    const res = await fetch("https://api.firecrawl.dev/v2/scrape", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${FIRECRAWL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        formats: ["summary"],
        onlyMainContent: true,
      }),
      signal: ac.signal,
    });
    clearTimeout(timer);
    if (!res.ok) {
      console.log(`[firecrawl] ${url} -> ${res.status}`);
      return null;
    }
    const json = await res.json();
    const summary =
      json?.summary ??
      json?.data?.summary ??
      null;
    return typeof summary === "string" && summary.trim().length > 0
      ? summary.trim()
      : null;
  } catch (err) {
    console.log(`[firecrawl] ${url} threw: ${(err as Error).message}`);
    return null;
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const debug: Array<Record<string, unknown>> = [];
  try {
    let items: FeedItem[] | null = null;
    let source: string | null = null;
    for (const url of FEED_CANDIDATES) {
      const t0 = Date.now();
      try {
        const res = await fetch(url, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
            Accept:
              "application/rss+xml, application/atom+xml, application/xml;q=0.9, text/xml;q=0.9, */*;q=0.8",
          },
          redirect: "follow",
        });
        const text = res.ok ? await res.text() : "";
        const parsed = text ? parseFeed(text) : [];
        debug.push({
          url,
          status: res.status,
          ct: res.headers.get("content-type"),
          len: text.length,
          parsed: parsed.length,
          ms: Date.now() - t0,
        });
        if (parsed.length) {
          items = parsed;
          source = url;
          break;
        }
      } catch (e) {
        debug.push({ url, err: (e as Error).message, ms: Date.now() - t0 });
      }
    }

    // Enrich top items with Firecrawl AI summaries (parallel, capped to 6).
    const top = (items ?? []).slice(0, 6);
    if (top.length && FIRECRAWL_API_KEY) {
      const summaries = await Promise.all(
        top.map((it) => (it.link ? firecrawlSummary(it.link) : Promise.resolve(null))),
      );
      summaries.forEach((s, i) => {
        if (s) top[i].description = s;
      });
    }

    const body = {
      ok: !!items,
      source,
      fetchedAt: new Date().toISOString(),
      items: top.concat((items ?? []).slice(6, 12)),
      debug,
    };

    return new Response(JSON.stringify(body), {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        "Cache-Control":
          items ? "public, max-age=600, s-maxage=600, stale-while-revalidate=86400" : "no-store",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: (err as Error).message, items: [] }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});

