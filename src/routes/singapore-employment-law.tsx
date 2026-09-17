import { createFileRoute } from "@tanstack/react-router";
import SingaporeEmploymentLawPage from "@/pages/SingaporeEmploymentLawPage";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/singapore-employment-law")({
  head: () => createPageHead({
    title: "Singapore Employment Law Counsel | Workplace Fairness & Exits — Beyond Horizons",
    description: "Employer-side employment counsel in Singapore — Workplace Fairness, contracts/policies, investigations, and exits. Book a consultation.",
    path: "/singapore-employment-law",
  }),
  component: SingaporeEmploymentLawPage,
});
