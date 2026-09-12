const SITE_URL = "https://beyondhorizons.sg";

type PageHeadOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  scripts?: Array<{ type: string; children: string }>;
};

export function createPageHead({
  title,
  description,
  path,
  type = "website",
  scripts,
}: PageHeadOptions) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    ...(scripts ? { scripts } : {}),
  };
}

type FaqItem = { question: string; answer: string };

export function createFaqScript(items: FaqItem[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    }),
  };
}