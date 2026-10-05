import { createFileRoute } from "@tanstack/react-router";
import { createPageHead } from "@/lib/seo";
import Page from "@/pages/SingaporePetLawPage";
import content from "@/content/singapore-pet-law.json";

export const Route = createFileRoute("/singapore-pet-law")({
  head: () => {
    const head = createPageHead({
      title: content.title,
      description: content.description,
      path: content.path,
      scripts: [content.faqSchema, content.serviceSchema].map(schema => ({ type: "application/ld+json", children: JSON.stringify(schema) })),
    });
    return { ...head, meta: [...head.meta, { name: "robots", content: "index, follow" }] };
  },
  component: Page,
});
