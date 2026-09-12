import { createFileRoute } from "@tanstack/react-router";
import WellnessHealthPage from "@/pages/industry/WellnessHealthPage";

export const Route = createFileRoute("/industry/wellness-health")({
  component: WellnessHealthPage,
});
