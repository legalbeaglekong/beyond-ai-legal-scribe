import { createFileRoute } from "@tanstack/react-router";
import ExpertiseOverview from "@/pages/ExpertiseOverview";

export const Route = createFileRoute("/expertise/")({
  component: ExpertiseOverview,
});
