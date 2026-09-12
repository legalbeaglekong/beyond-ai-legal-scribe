import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import AscendingAsiaPage from "@/pages/AscendingAsiaPage";

export const Route = createFileRoute("/ascending-asia")({
  head: () => createStaticPageHead("/ascending-asia"),
  component: AscendingAsiaPage,
});
