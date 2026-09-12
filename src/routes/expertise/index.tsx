import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import ExpertiseOverview from "@/pages/ExpertiseOverview";

export const Route = createFileRoute("/expertise/")({
  head: () => createStaticPageHead("/expertise"),
  component: ExpertiseOverview,
});
