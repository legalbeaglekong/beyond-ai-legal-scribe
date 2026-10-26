import { createFileRoute } from "@tanstack/react-router";
import { createPageHead, createFaqScript } from "@/lib/seo";
import Page from "@/pages/SingaporeBusinessSuccessionPage";
import { SUCCESSION_DESCRIPTION, SUCCESSION_PATH, SUCCESSION_TITLE, successionFaqs } from "@/content/singapore-business-succession-lawyer";

export const Route = createFileRoute("/singapore-business-succession-lawyer")({
  head: () =>
    createPageHead({
      title: SUCCESSION_TITLE,
      description: SUCCESSION_DESCRIPTION,
      path: SUCCESSION_PATH,
      scripts: [createFaqScript(successionFaqs)],
    }),
  component: Page,
});
