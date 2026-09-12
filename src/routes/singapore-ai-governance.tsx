import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import SingaporeAIGovernancePage from "@/pages/SingaporeAIGovernancePage";

export const Route = createFileRoute("/singapore-ai-governance")({
  head: () => createStaticPageHead("/singapore-ai-governance"),
  component: SingaporeAIGovernancePage,
});
