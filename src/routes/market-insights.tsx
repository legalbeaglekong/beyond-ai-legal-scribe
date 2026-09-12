import { createFileRoute } from "@tanstack/react-router";
import MarketInsights from "@/pages/MarketInsights";

export const Route = createFileRoute("/market-insights")({
  component: MarketInsights,
});
