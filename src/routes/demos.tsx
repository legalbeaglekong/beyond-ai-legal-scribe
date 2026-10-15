import { createFileRoute } from "@tanstack/react-router";
import DemosPage from "@/pages/DemosPage";

export const Route = createFileRoute("/demos")({
  head: () => ({
    meta: [
      { title: "Interactive Demos | Beyond Horizons" },
      { name: "description", content: "Working demonstrations of Beyond Horizons tools: the CP Dashboard conditions-precedent tracker and the Tiered DR dispute resolution walkthrough. Illustrative data only." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Interactive Demos | Beyond Horizons" },
      { property: "og:description", content: "Working demonstrations of Beyond Horizons tools: CP Dashboard and Tiered DR." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://demos.beyondhorizons.sg/demos" }],
  }),
  component: DemosPage,
});
