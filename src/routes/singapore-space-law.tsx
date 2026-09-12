import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import SingaporeSpaceLawPage from "@/pages/SingaporeSpaceLawPage";

export const Route = createFileRoute("/singapore-space-law")({
  head: () => createStaticPageHead("/singapore-space-law"),
  component: SingaporeSpaceLawPage,
});
