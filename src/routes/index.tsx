import { createFileRoute } from "@tanstack/react-router";
import { createPageHead } from "@/lib/seo";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    ...createPageHead({ title: "Beyond Horizons | by Bethel Chambers LLC", description: "Beyond Horizons by Bethel Chambers LLC, a Singapore law practice: Singapore-based cross-border counsel in aviation finance, energy and technology.", path: "/" }),
    links: [{ rel: "canonical", href: "https://beyondhorizons.sg/" }],
  }),
  component: Index,
});
