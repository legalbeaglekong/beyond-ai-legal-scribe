import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import MarineOffshoreRenewablesPage from "@/pages/industry/MarineOffshoreRenewablesPage";

export const Route = createFileRoute("/industry/marine-offshore-renewables")({
  head: () => createStaticPageHead("/industry/marine-offshore-renewables"),
  component: MarineOffshoreRenewablesPage,
});
