import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ property: "og:url", content: "https://beyondhorizons.sg/" }],
    links: [{ rel: "canonical", href: "https://beyondhorizons.sg/" }],
  }),
  component: Index,
});
