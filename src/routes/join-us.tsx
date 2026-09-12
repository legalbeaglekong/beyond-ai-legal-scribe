import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import JoinUsPage from "@/pages/JoinUsPage";

export const Route = createFileRoute("/join-us")({
  head: () => createStaticPageHead("/join-us"),
  component: JoinUsPage,
});
