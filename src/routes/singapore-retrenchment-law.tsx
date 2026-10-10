import { createFileRoute } from "@tanstack/react-router";
import { createPageHead } from "@/lib/seo";
import Page from "@/pages/SingaporeRetrenchmentLawPage";
import {
  RETRENCHMENT_DESCRIPTION,
  RETRENCHMENT_OG_IMAGE,
  RETRENCHMENT_PATH,
  RETRENCHMENT_TITLE,
  retrenchmentArticleSchema,
  retrenchmentFaqSchema,
} from "@/content/singapore-retrenchment-law";

export const Route = createFileRoute("/singapore-retrenchment-law")({
  head: () => {
    const head = createPageHead({
      title: RETRENCHMENT_TITLE,
      description: RETRENCHMENT_DESCRIPTION,
      path: RETRENCHMENT_PATH,
      type: "article",
      scripts: [retrenchmentArticleSchema, retrenchmentFaqSchema].map((s) => ({
        type: "application/ld+json",
        children: JSON.stringify(s),
      })),
    });
    return {
      ...head,
      meta: [
        ...head.meta,
        { property: "og:image", content: RETRENCHMENT_OG_IMAGE },
        { name: "twitter:image", content: RETRENCHMENT_OG_IMAGE },
        { name: "robots", content: "index, follow" },
      ],
    };
  },
  component: Page,
});
