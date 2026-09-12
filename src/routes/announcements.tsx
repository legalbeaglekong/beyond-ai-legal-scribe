import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import AnnouncementsPage from "@/pages/AnnouncementsPage";

export const Route = createFileRoute("/announcements")({
  head: () => createStaticPageHead("/announcements"),
  component: AnnouncementsPage,
});
