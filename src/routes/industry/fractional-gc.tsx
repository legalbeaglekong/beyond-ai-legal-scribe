import { createFileRoute } from "@tanstack/react-router";
import FractionalGCPage from "@/pages/industry/FractionalGCPage";

export const Route = createFileRoute("/industry/fractional-gc")({
  component: FractionalGCPage,
});
