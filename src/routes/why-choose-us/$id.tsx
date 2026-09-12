import { createFileRoute } from "@tanstack/react-router";
import WhyChooseUsDetail from "@/pages/WhyChooseUsDetail";

export const Route = createFileRoute("/why-choose-us/$id")({
  component: WhyChooseUsDetail,
});
