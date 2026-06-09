import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface InsightItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image?: string;
  category?: string;
}

interface FeedResponse {
  ok: boolean;
  source: string | null;
  fetchedAt: string;
  items: InsightItem[];
}

const INSIGHTS_HOME = "https://insights.beyondhorizons.sg";

const formatDate = (iso: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-SG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const fetchInsights = async (): Promise<FeedResponse> => {
  const { data, error } = await supabase.functions.invoke("fetch-insights");
  if (error) throw error;
  return data as FeedResponse;
};

const LatestInsightsFeed = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["latest-insights"],
    queryFn: fetchInsights,
    staleTime: 1000 * 60 * 10, // 10 min
    refetchInterval: 1000 * 60 * 15, // re-poll every 15 min while page open
    refetchOnWindowFocus: true,
    retry: 1,
  });

  const items = (data?.items ?? []).slice(0, 6);

  // SEO: ItemList JSON-LD — surfaces articles to Google even before users click through
  const jsonLd = items.length
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Latest Insights — Beyond Horizons",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: it.link,
          name: it.title,
        })),
      }
    : null;

  return (
    <section
      id="latest-insights"
      className="section-padding bg-secondary/20"
      aria-labelledby="latest-insights-heading"
    >
      {jsonLd && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
      )}

      <div className="max-w-6xl mx-auto container-padding">
        <header className="text-center mb-12">
          <div className="teal-line mx-auto mb-6" />
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Latest from insights.beyondhorizons.sg
          </p>
          <h2
            id="latest-insights-heading"
            className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Latest Insights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fresh weekly analysis on Singapore and APAC law — pulled live from
            our editorial publication.
          </p>
        </header>

        {isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="border-border animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-muted rounded w-1/3 mb-4" />
                  <div className="h-5 bg-muted rounded w-5/6 mb-3" />
                  <div className="h-4 bg-muted rounded w-full mb-2" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!isLoading && (isError || items.length === 0) && (
          <div className="text-center text-muted-foreground">
            <p className="mb-6">
              New analyses are published weekly on our editorial publication.
            </p>
            <Button asChild variant="outline">
              <a
                href={INSIGHTS_HOME}
                target="_blank"
                rel="noopener"
                aria-label="Visit insights.beyondhorizons.sg"
              >
                Visit Insights <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        )}

        {!isLoading && items.length > 0 && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <article key={item.link}>
                  <Card className="h-full border-border hover:shadow-elegant transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        {item.category && (
                          <span className="px-2 py-1 rounded bg-primary/10 text-primary uppercase tracking-wider">
                            {item.category}
                          </span>
                        )}
                        {item.pubDate && (
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <time dateTime={new Date(item.pubDate).toISOString?.() || item.pubDate}>
                              {formatDate(item.pubDate)}
                            </time>
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-lg text-foreground mb-3 leading-snug">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener"
                          className="hover:text-primary transition-colors"
                        >
                          {item.title}
                        </a>
                      </h3>
                      {item.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                          {item.description}
                          {item.description.length >= 260 ? "…" : ""}
                        </p>
                      )}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener"
                        className="text-sm text-primary inline-flex items-center mt-auto"
                        aria-label={`Read: ${item.title}`}
                      >
                        Read on Insights{" "}
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild>
                <a href={INSIGHTS_HOME} target="_blank" rel="noopener">
                  View all insights{" "}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {data?.fetchedAt && (
                <p className="text-xs text-muted-foreground mt-3">
                  Updated{" "}
                  <time dateTime={data.fetchedAt}>
                    {new Date(data.fetchedAt).toLocaleString("en-SG")}
                  </time>
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LatestInsightsFeed;
