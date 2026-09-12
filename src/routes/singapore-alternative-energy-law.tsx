import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import SingaporeAlternativeEnergyPage from "@/pages/SingaporeAlternativeEnergyPage";

export const Route = createFileRoute("/singapore-alternative-energy-law")({
  head: () => createStaticPageHead("/singapore-alternative-energy-law"),
  component: SingaporeAlternativeEnergyPage,
});
