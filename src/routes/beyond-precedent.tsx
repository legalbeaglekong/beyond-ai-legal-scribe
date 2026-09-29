import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead, createFaqScript } from "@/lib/seo";
import BeyondPrecedentPage, { beyondPrecedentFaqs } from "@/pages/BeyondPrecedentPage";

export const Route = createFileRoute("/beyond-precedent")({
  head: () => {
    const head = createStaticPageHead("/beyond-precedent");
    return {
      ...head,
      meta: [...(head.meta ?? []).filter((m: any) => m.property !== "og:title"), { property: "og:title", content: "Beyond Precedent" }],
      scripts: [...((head as any).scripts ?? []), createFaqScript(beyondPrecedentFaqs)],
    };
  },
  component: BeyondPrecedentPage,
});
