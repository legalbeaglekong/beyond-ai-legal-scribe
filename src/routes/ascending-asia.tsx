import { createFileRoute } from "@tanstack/react-router";
import { createFaqScript, createPageHead } from "@/lib/seo";
import AscendingAsiaPage, { section232Faqs } from "@/pages/AscendingAsiaPage";

export const Route = createFileRoute("/ascending-asia")({
  head: () => createPageHead({
    title: "Ascending Asia | AAM Market Entry & Section 232 UAS Counsel | Beyond Horizons",
    description:
      "Advanced Air Mobility market-entry guide for APAC — plus Section 232 UAS tariff and content-origin certification issues for suppliers into US programmes. Register for the playbook or schedule a consultation.",
    path: "/ascending-asia",
    canonicalUrl: "https://ascendingasia.beyondhorizons.sg/",
    ogUrl: "https://ascendingasia.beyondhorizons.sg/",
    scripts: [createFaqScript(section232Faqs)],
  }),
  component: AscendingAsiaPage,
});
