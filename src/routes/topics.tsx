import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import TopicsPage from "@/pages/TopicsPage";

export const Route = createFileRoute("/topics")({
  head: () => createStaticPageHead("/topics"),
  component: TopicsPage,
});
