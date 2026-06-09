import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface InsightItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category?: string;
}
interface FeedResponse {
  ok: boolean;
  items: InsightItem[];
}

interface RelatedInsightsProps {
  /** Lower-cased keywords used to rank articles for this page (e.g. ["space","satellite","ostin"]). */
  keywords: string[];
  /** Heading shown above the strip. */
  heading?: string;
  /** Number of articles to show (default 3). */
  limit?: number;
}

const INSIGHTS_HOME = "https://www.insights.beyondhorizons.sg";

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-SG", { year: "numeric", month: "short", day: "numeric" });
};

const scoreItem = (it: InsightItem, keywords: string[]) => {
  const hay = `${it.title} ${it.description} ${it.category ?? ""}`.toLowerCase();
  return keywords.reduce((acc, k) => acc + (hay.includes(k) ? 1 : 0), 0);
};

const fetchInsights = async (): Promise<FeedResponse> => {
  const { data, error } = await supabase.functions.invoke("fetch-insights");
  if (error) throw error;
  return data as FeedResponse;
};

const RelatedInsights = ({
  keywords,
  heading = "Related Insights",
  limit = 3,
}: RelatedInsightsProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["latest-insights"], // shares cache with homepage feed
    queryFn: fetchInsights,
    staleTime: 1000 * 60 * 10,
    refetchInterval: 1000 * 60 * 15,
    retry: 1,
  });

  const all = data?.items ?? [];
  const lc = keywords.map((k) => k.toLowerCase());
  const ranked = [...all]
    .map((it) => ({ it, s: scoreItem(it, lc) }))
    .sort((a, b) => b.s - a.s || +new Date(b.it.pubDate) - +new Date(a.it.pubDate));
  const matches = ranked.filter((r) => r.s > 0).map((r) => r.it);
  const items = (matches.length ? matches : ranked.map((r) => r.it)).slice(0, limit);

  if (!isLoading && items.length === 0) return null;

  const jsonLd =
    items.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: heading,
          itemListElement: items.map((it, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: it.link,
            name: it.title,
          })),
        }
      : null;

  return (
    <section className="py-20 bg-background" aria-label={heading}>
      {jsonLd && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
      )}
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">{heading}</h2>
          <Button asChild variant="outline" size="sm">
            <a href={INSIGHTS_HOME} target="_blank" rel="noopener">
              All insights <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {isLoading &&
            Array.from({ length: limit }).map((_, i) => (
              <Card key={i} className="border-border animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-muted rounded w-1/3 mb-4" />
                  <div className="h-5 bg-muted rounded w-5/6 mb-3" />
                  <div className="h-4 bg-muted rounded w-full mb-2" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                </CardContent>
              </Card>
            ))}

          {!isLoading &&
            items.map((it) => (
              <article key={it.link}>
                <Card className="h-full border-border hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      {it.category && (
                        <span className="px-2 py-1 rounded bg-primary/10 text-primary uppercase tracking-wider">
                          {it.category}
                        </span>
                      )}
                      {it.pubDate && (
                        <time dateTime={new Date(it.pubDate).toISOString?.() || it.pubDate}>
                          {formatDate(it.pubDate)}
                        </time>
                      )}
                    </div>
                    <h3 className="font-serif text-lg text-foreground mb-3 leading-snug">
                      <a
                        href={it.link}
                        target="_blank"
                        rel="noopener"
                        className="hover:text-primary transition-colors"
                      >
                        {it.title}
                      </a>
                    </h3>
                    {it.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {it.description}
                        {it.description.length >= 260 ? "…" : ""}
                      </p>
                    )}
                    <a
                      href={it.link}
                      target="_blank"
                      rel="noopener"
                      className="text-sm text-primary inline-flex items-center mt-auto"
                    >
                      Read on Insights <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedInsights;
