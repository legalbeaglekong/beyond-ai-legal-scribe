import { createFileRoute } from "@tanstack/react-router";
import AICodeCounselPage, { data } from "@/pages/industry/AICodeCounselPage";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/industry/ai-code-counsel")({
  head: () => createPageHead({
    title: "AI Code Counsel Singapore | Beyond Horizons",
    description: data.seo.description,
    path: "/industry/ai-code-counsel",
  }),
  component: AICodeCounselPage,
});
