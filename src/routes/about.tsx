import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import AboutPage from "@/pages/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => createStaticPageHead("/about"),
  component: AboutPage,
});
