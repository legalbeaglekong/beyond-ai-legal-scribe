import { createFileRoute } from "@tanstack/react-router";
import ExpertiseDetail from "@/pages/ExpertiseDetail";
import { createExpertiseHead } from "@/lib/seo";

export const Route = createFileRoute("/expertise/$id")({
  head: ({ params }) => createExpertiseHead(params.id),
  component: ExpertiseDetail,
});
