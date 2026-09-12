import { createFileRoute } from "@tanstack/react-router";
import EnergyTransitionPage from "@/pages/industry/EnergyTransitionPage";

export const Route = createFileRoute("/industry/energy-transition")({
  component: EnergyTransitionPage,
});
