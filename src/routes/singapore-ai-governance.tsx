import { createFileRoute } from "@tanstack/react-router";
import SingaporeAIGovernancePage from "@/pages/SingaporeAIGovernancePage";

export const Route = createFileRoute("/singapore-ai-governance")({
  component: SingaporeAIGovernancePage,
});
