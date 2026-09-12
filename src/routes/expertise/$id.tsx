import { createFileRoute } from "@tanstack/react-router";
import ExpertiseDetail, { maFaqs } from "@/pages/ExpertiseDetail";
import { createExpertiseHead, createFaqScript } from "@/lib/seo";

export const Route = createFileRoute("/expertise/$id")({
  head: ({ params }) => {
    const head = createExpertiseHead(params.id);
    return params.id === "ma-cross-border"
      ? { ...head, scripts: [createFaqScript(maFaqs)] }
      : head;
  },
  component: ExpertiseDetail,
});
