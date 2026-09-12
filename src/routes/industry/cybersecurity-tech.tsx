import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import CybersecurityPage from "@/pages/industry/CybersecurityPage";

export const Route = createFileRoute("/industry/cybersecurity-tech")({
  head: () => createStaticPageHead("/industry/cybersecurity-tech"),
  component: CybersecurityPage,
});
