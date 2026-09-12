import { createFileRoute } from "@tanstack/react-router";
import WhyChooseUsDetail from "@/pages/WhyChooseUsDetail";
import { createWhyHead } from "@/lib/seo";

export const Route = createFileRoute("/why-choose-us/$id")({
  head: ({ params }) => createWhyHead(params.id),
  component: WhyChooseUsDetail,
});
