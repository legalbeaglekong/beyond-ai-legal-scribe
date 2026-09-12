import { createFileRoute } from "@tanstack/react-router";
import TeamMemberPage from "@/pages/TeamMemberPage";

export const Route = createFileRoute("/team/$slug")({
  component: TeamMemberPage,
});
