import { createFileRoute } from "@tanstack/react-router";
import TradeTariffPage from "@/pages/industry/TradeTariffPage";

export const Route = createFileRoute("/industry/trade-tariff")({
  component: TradeTariffPage,
});
