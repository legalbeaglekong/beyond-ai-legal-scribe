import { createFileRoute } from "@tanstack/react-router";
import CybersecurityPage from "@/pages/industry/CybersecurityPage";

export const Route = createFileRoute("/industry/cybersecurity-tech")({
  component: CybersecurityPage,
});
