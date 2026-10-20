import { createFileRoute, notFound } from "@tanstack/react-router";
import TeamMemberPage from "@/pages/TeamMemberPage";
import { createTeamHead } from "@/lib/seo";

export const Route = createFileRoute("/team/$slug")({
  beforeLoad: ({ params }) => { if (!(["hui-ling-teo", "sonia-motwani"].includes(params.slug))) throw notFound(); },
  notFoundComponent: TeamMemberPage,
  head: ({ params }) => createTeamHead(params.slug),
  component: TeamMemberPage,
});
