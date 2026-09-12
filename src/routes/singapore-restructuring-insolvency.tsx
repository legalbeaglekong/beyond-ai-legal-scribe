import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import SingaporeRestructuringPage from "@/pages/SingaporeRestructuringPage";

export const Route = createFileRoute("/singapore-restructuring-insolvency")({
  head: () => createStaticPageHead("/singapore-restructuring-insolvency"),
  component: SingaporeRestructuringPage,
});
