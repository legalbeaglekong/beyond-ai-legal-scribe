import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import TeamPage from "@/pages/TeamPage";

export const Route = createFileRoute("/team/")({
  head: () => createStaticPageHead("/team"),
  component: TeamPage,
});
