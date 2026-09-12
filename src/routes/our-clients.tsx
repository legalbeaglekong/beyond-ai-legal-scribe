import { createFileRoute } from "@tanstack/react-router";
import OurClientsPage from "@/pages/OurClientsPage";

export const Route = createFileRoute("/our-clients")({
  component: OurClientsPage,
});
