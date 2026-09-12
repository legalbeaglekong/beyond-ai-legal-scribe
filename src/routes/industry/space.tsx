import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import SpacePage from "@/pages/industry/SpacePage";

export const Route = createFileRoute("/industry/space")({
  head: () => createStaticPageHead("/industry/space"),
  component: SpacePage,
});
