import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import SingaporeAviationLawPage from "@/pages/SingaporeAviationLawPage";

export const Route = createFileRoute("/singapore-aviation-law")({
  head: () => createStaticPageHead("/singapore-aviation-law"),
  component: SingaporeAviationLawPage,
});
