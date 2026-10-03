import { createFileRoute } from "@tanstack/react-router";
import { createPageHead, createFaqScript } from "@/lib/seo";
import BorrowerFinanceCounselPage, { BORROWER_TITLE, BORROWER_DESCRIPTION, borrowerFaqs, borrowerLegalService } from "@/pages/BorrowerFinanceCounselPage";

export const Route = createFileRoute("/singapore-borrower-finance-counsel")({
  head: () =>
    createPageHead({
      title: BORROWER_TITLE,
      description: BORROWER_DESCRIPTION,
      path: "/singapore-borrower-finance-counsel",
      scripts: [
        createFaqScript(borrowerFaqs),
        { type: "application/ld+json", children: JSON.stringify(borrowerLegalService) },
      ],
    }),
  component: BorrowerFinanceCounselPage,
});
