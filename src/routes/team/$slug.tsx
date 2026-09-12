import { createFileRoute } from "@tanstack/react-router";
import TeamMemberPage from "@/pages/TeamMemberPage";
import { createTeamHead } from "@/lib/seo";

export const Route = createFileRoute("/team/$slug")({
  head: ({ params }) => createTeamHead(params.slug),
  component: TeamMemberPage,
});
