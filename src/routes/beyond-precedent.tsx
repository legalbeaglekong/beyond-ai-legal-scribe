import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead, createFaqScript } from "@/lib/seo";
import BeyondPrecedentPage, { beyondPrecedentFaqs } from "@/pages/BeyondPrecedentPage";

export const Route = createFileRoute("/beyond-precedent")({
  head: () => {
    const head = createStaticPageHead("/beyond-precedent");
    return {
      ...head,
      meta: [...(head.meta ?? []).filter((m: any) => m.property !== "og:title"), { property: "og:title", content: "Beyond Precedent" }],
      scripts: [
        ...((head as any).scripts ?? []),
        createFaqScript(beyondPrecedentFaqs),
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Beyond Precedent Episode 1 Trailer",
            description: "Trailer for Beyond Precedent, a supervised AI drafting challenge for law students from Beyond Horizons by Bethel Chambers LLC. Episode 1, The Energy Drink Influencer, is released on 23 October 2026.",
            thumbnailUrl: "https://i.ytimg.com/vi/6DSyE53xVoE/maxresdefault.jpg",
            uploadDate: "2026-10-12T00:00:00+08:00",
            duration: "PT1M13S",
            embedUrl: "https://www.youtube-nocookie.com/embed/6DSyE53xVoE",
            url: "https://youtu.be/6DSyE53xVoE",
            inLanguage: "en",
            publisher: { "@type": "Organization", name: "Beyond Horizons by Bethel Chambers LLC", url: "https://beyondhorizons.sg" },
          }),
        },
      ],
    };
  },
  component: BeyondPrecedentPage,
});
