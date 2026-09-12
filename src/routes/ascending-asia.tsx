import { createFileRoute } from "@tanstack/react-router";
import AscendingAsiaPage from "@/pages/AscendingAsiaPage";

export const Route = createFileRoute("/ascending-asia")({
  component: AscendingAsiaPage,
});
