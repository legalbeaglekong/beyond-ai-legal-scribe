import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import OurClientsPage from "@/pages/OurClientsPage";

export const Route = createFileRoute("/our-clients")({
  head: () => createStaticPageHead("/our-clients"),
  component: OurClientsPage,
});
