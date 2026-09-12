import { createFileRoute } from "@tanstack/react-router";
import SingaporeAviationLawPage from "@/pages/SingaporeAviationLawPage";

export const Route = createFileRoute("/singapore-aviation-law")({
  component: SingaporeAviationLawPage,
});
