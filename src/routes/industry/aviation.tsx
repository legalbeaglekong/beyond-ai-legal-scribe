import { createFileRoute } from "@tanstack/react-router";
import AviationPage from "@/pages/industry/AviationPage";
import { createStaticPageHead } from "@/lib/seo";

export const Route = createFileRoute("/industry/aviation")({
  head: () => createStaticPageHead("/industry/aviation"),
  component: AviationPage,
});
