import { createFileRoute } from "@tanstack/react-router";
import TransportationPage from "@/pages/industry/TransportationPage";

export const Route = createFileRoute("/industry/transportation")({
  component: TransportationPage,
});
