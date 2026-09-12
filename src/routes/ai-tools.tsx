import { createFileRoute } from "@tanstack/react-router";
import AIToolsPage from "@/pages/AIToolsPage";

export const Route = createFileRoute("/ai-tools")({
  component: AIToolsPage,
});
