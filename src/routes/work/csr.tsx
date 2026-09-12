import { createFileRoute } from "@tanstack/react-router";
import CSRPage from "@/pages/CSRPage";

export const Route = createFileRoute("/work/csr")({
  component: CSRPage,
});
