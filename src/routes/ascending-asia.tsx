import { createFileRoute } from "@tanstack/react-router";
import { createPageHead } from "@/lib/seo";
import AscendingAsiaPage from "@/pages/AscendingAsiaPage";

export const Route = createFileRoute("/ascending-asia")({
  head: () => createPageHead({
    title: "Ascending Asia | AAM Market Entry & Section 232 UAS Counsel | Beyond Horizons",
    description:
      "Advanced Air Mobility market-entry guide for APAC — plus Section 232 UAS tariff and content-origin certification issues for suppliers into US programmes. Register for the playbook or schedule a consultation.",
    path: "/ascending-asia",
  }),
  component: AscendingAsiaPage,
});
