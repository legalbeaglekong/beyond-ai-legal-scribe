import { createFileRoute } from "@tanstack/react-router";
import TradeTariffPage, { data } from "@/pages/industry/TradeTariffPage";
import { createFaqScript, createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/industry/trade-tariff")({
  head: () => createPageHead({
    title: "Trade & Tariff Counsel | UAS Section 232",
    description: data.seo.description,
    path: "/industry/trade-tariff",
    scripts: data.faqs ? [createFaqScript(data.faqs.items)] : undefined,
  }),
  component: TradeTariffPage,
});
