import { createFileRoute } from "@tanstack/react-router";
import AviationPage from "@/pages/industry/AviationPage";

export const Route = createFileRoute("/industry/aviation")({
  component: AviationPage,
});
