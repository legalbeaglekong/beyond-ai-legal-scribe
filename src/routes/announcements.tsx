import { createFileRoute } from "@tanstack/react-router";
import AnnouncementsPage from "@/pages/AnnouncementsPage";

export const Route = createFileRoute("/announcements")({
  component: AnnouncementsPage,
});
