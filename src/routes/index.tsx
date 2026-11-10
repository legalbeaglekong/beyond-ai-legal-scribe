import { createFileRoute } from "@tanstack/react-router";
import { createPageHead } from "@/lib/seo";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    ...createPageHead({ title: "Beyond Horizons | Practice Group of Bethel Chambers LLC", description: "The Beyond Horizons practice of Bethel Chambers LLC: Singapore-based cross-border counsel in aviation finance, energy and technology.", path: "/" }),
    links: [{ rel: "canonical", href: "https://beyondhorizons.sg/" }],
  }),
  component: Index,
});
