import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import WorkPage from "@/pages/WorkPage";

export const Route = createFileRoute("/work/")({
  head: () => createStaticPageHead("/work"),
  component: WorkPage,
});
