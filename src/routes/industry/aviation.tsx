import { createFileRoute } from "@tanstack/react-router";
import AviationPage, { data } from "@/pages/industry/AviationPage";
import { createFaqScript, createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/industry/aviation")({
  head: () => createPageHead({
    title: "Aviation Finance Counsel Singapore | Beyond Horizons",
    description: data.seo.description,
    path: "/industry/aviation",
    scripts: data.faqs ? [createFaqScript(data.faqs.items)] : undefined,
  }),
  component: AviationPage,
});
