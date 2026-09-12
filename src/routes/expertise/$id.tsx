import { createFileRoute } from "@tanstack/react-router";
import ExpertiseDetail from "@/pages/ExpertiseDetail";

export const Route = createFileRoute("/expertise/$id")({
  component: ExpertiseDetail,
});
