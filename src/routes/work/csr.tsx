import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import CSRPage from "@/pages/CSRPage";

export const Route = createFileRoute("/work/csr")({
  head: () => createStaticPageHead("/work/csr"),
  component: CSRPage,
});
