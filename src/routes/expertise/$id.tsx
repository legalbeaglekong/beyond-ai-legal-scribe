import { createFileRoute, notFound } from "@tanstack/react-router";
import ExpertiseDetail from "@/pages/ExpertiseDetail";
import { createExpertiseHead, PUBLIC_EXPERTISE_IDS } from "@/lib/seo";

export const Route = createFileRoute("/expertise/$id")({
  beforeLoad: ({ params }) => { if (!(PUBLIC_EXPERTISE_IDS.includes(params.id))) throw notFound(); },
  notFoundComponent: ExpertiseDetail,
  head: ({ params }) => createExpertiseHead(params.id),
  component: ExpertiseDetail,
});
