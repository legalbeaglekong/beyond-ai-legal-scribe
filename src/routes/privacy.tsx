import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import PrivacyPage from "@/pages/PrivacyPage";

export const Route = createFileRoute("/privacy")({
  head: () => createStaticPageHead("/privacy"),
  component: PrivacyPage,
});
