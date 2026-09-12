import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import WhySpecialistCounselPage from "@/pages/WhySpecialistCounselPage";

export const Route = createFileRoute("/why-specialist-counsel")({
  head: () => createStaticPageHead("/why-specialist-counsel"),
  component: WhySpecialistCounselPage,
});
