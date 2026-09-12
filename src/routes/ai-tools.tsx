import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import AIToolsPage from "@/pages/AIToolsPage";

export const Route = createFileRoute("/ai-tools")({
  head: () => createStaticPageHead("/ai-tools"),
  component: AIToolsPage,
});
