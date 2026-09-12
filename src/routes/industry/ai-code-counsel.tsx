import { createFileRoute } from "@tanstack/react-router";
import AICodeCounselPage from "@/pages/industry/AICodeCounselPage";

export const Route = createFileRoute("/industry/ai-code-counsel")({
  component: AICodeCounselPage,
});
