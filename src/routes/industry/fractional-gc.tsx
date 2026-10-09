import { createFileRoute } from "@tanstack/react-router";
import FractionalGCPage from "@/pages/industry/FractionalGCPage";
import { createStaticPageHead } from "@/lib/seo";

export const Route = createFileRoute("/industry/fractional-gc")({
  head: () => createStaticPageHead("/industry/fractional-gc"),
  component: FractionalGCPage,
});
