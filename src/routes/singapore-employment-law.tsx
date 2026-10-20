import { createFileRoute } from "@tanstack/react-router";
import SingaporeEmploymentLawPage from "@/pages/SingaporeEmploymentLawPage";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/singapore-employment-law")({
  head: () => createPageHead({
    title: "Singapore Employment Law & Workplace Fairness Act Guide",
    description: "Singapore employment law for employers: the Workplace Fairness Act is not yet in force (MOM aims for end-2027) — contracts, exits and investigations.",
    path: "/singapore-employment-law",
  }),
  component: SingaporeEmploymentLawPage,
});
