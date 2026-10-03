import { createFileRoute } from "@tanstack/react-router";
import { createPageHead, createFaqScript } from "@/lib/seo";
import LenderFinanceCounselPage, { LENDER_TITLE, LENDER_DESCRIPTION, lenderFaqs, lenderLegalService } from "@/pages/LenderFinanceCounselPage";

export const Route = createFileRoute("/singapore-lender-finance-counsel")({
  head: () =>
    createPageHead({
      title: LENDER_TITLE,
      description: LENDER_DESCRIPTION,
      path: "/singapore-lender-finance-counsel",
      scripts: [
        createFaqScript(lenderFaqs),
        { type: "application/ld+json", children: JSON.stringify(lenderLegalService) },
      ],
    }),
  component: LenderFinanceCounselPage,
});
