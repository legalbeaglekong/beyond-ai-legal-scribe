import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import EnergyTransitionPage from "@/pages/industry/EnergyTransitionPage";

export const Route = createFileRoute("/industry/energy-transition")({
  head: () => createStaticPageHead("/industry/energy-transition"),
  component: EnergyTransitionPage,
});
