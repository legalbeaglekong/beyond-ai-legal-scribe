import { createFileRoute } from "@tanstack/react-router";
import SingaporeEmploymentLawPage, { employmentFaqs } from "@/pages/SingaporeEmploymentLawPage";
import { createFaqScript, createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/singapore-employment-law")({
  head: () => createPageHead({
    title: "Singapore Employment & ONE Pass Counsel | Beyond Horizons",
    description: "Employment counsel for MOM compliance, EP and COMPASS, ONE Pass transition, workplace fairness and cross-border exits.",
    path: "/singapore-employment-law",
    scripts: [createFaqScript(employmentFaqs)],
  }),
  component: SingaporeEmploymentLawPage,
});
