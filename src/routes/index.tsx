import { createFileRoute } from "@tanstack/react-router";
import { createPageHead } from "@/lib/seo";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    ...createPageHead({ title: "Beyond Horizons by Bethel Chambers | Singapore Legal Counsel", description: "Beyond Horizons by Bethel Chambers LLC: Singapore-based cross-border legal counsel with AI efficiency, across aviation finance, energy and technology.", path: "/" }),
    links: [{ rel: "canonical", href: "https://beyondhorizons.sg/" }],
  }),
  component: Index,
});
