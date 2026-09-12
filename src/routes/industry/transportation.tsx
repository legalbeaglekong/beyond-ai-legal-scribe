import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import TransportationPage from "@/pages/industry/TransportationPage";

export const Route = createFileRoute("/industry/transportation")({
  head: () => createStaticPageHead("/industry/transportation"),
  component: TransportationPage,
});
