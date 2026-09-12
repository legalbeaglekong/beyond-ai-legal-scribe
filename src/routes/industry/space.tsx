import { createFileRoute } from "@tanstack/react-router";
import SpacePage from "@/pages/industry/SpacePage";

export const Route = createFileRoute("/industry/space")({
  component: SpacePage,
});
