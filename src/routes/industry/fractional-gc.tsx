import { createFileRoute } from "@tanstack/react-router";
import FractionalGCPage, { data } from "@/pages/industry/FractionalGCPage";
import { createFaqScript, createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/industry/fractional-gc")({
  head: () => createPageHead({
    title: "Fractional General Counsel Singapore | Beyond Horizons",
    description: data.seo.description,
    path: "/industry/fractional-gc",
    scripts: data.faqs ? [createFaqScript(data.faqs.items)] : undefined,
  }),
  component: FractionalGCPage,
});
