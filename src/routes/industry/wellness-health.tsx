import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import WellnessHealthPage from "@/pages/industry/WellnessHealthPage";

export const Route = createFileRoute("/industry/wellness-health")({
  head: () => createStaticPageHead("/industry/wellness-health"),
  component: WellnessHealthPage,
});
