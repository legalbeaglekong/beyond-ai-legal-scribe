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
      title: "Retrenchment Law Singapore 2026: Benefits, MOM Rules, Notice",
      description: "Singapore retrenchment law for employers (2026): is a retrenchment benefit mandatory, notifying MOM within 5 working days, notice and fair selection.",
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
        ...head.meta.filter((m) => !("property" in m && String(m.property).startsWith("og:image")) && !("name" in m && m.name === "twitter:image")),
        { property: "og:image", content: RETRENCHMENT_OG_IMAGE },
        { name: "twitter:image", content: RETRENCHMENT_OG_IMAGE },
        { name: "robots", content: "index, follow" },
      ],
    };
  },
  component: Page,
});
