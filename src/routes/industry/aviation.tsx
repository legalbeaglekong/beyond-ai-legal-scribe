import { createFileRoute } from "@tanstack/react-router";
import AviationPage, { data } from "@/pages/industry/AviationPage";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/industry/aviation")({
  head: () => createPageHead({
    title: "Aviation Finance Counsel Singapore | Beyond Horizons",
    description: data.seo.description,
    path: "/industry/aviation",
  }),
  component: AviationPage,
});
