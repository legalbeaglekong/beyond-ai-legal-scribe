import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import MarketInsights from "@/pages/MarketInsights";

export const Route = createFileRoute("/market-insights")({
  head: () => createStaticPageHead("/market-insights"),
  component: MarketInsights,
});
