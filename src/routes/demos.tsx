import { createFileRoute } from "@tanstack/react-router";
import DemosPage from "@/pages/DemosPage";

export const Route = createFileRoute("/demos")({
  head: () => ({
    meta: [
      { title: "Interactive Demos | Beyond Horizons" },
      { name: "description", content: "Explore public Beyond Horizons demonstrations: Fleet Risk Monitor, CP Dashboard and Tiered DR. No sign-in required." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Interactive Demos | Beyond Horizons" },
      { property: "og:description", content: "Beyond Horizons demos: Fleet Risk Monitor, CP Dashboard and Tiered DR." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://demos.beyondhorizons.sg/demos" }],
  }),
  component: DemosPage,
});
