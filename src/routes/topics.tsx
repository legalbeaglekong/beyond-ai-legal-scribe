import { createFileRoute } from "@tanstack/react-router";
import TopicsPage from "@/pages/TopicsPage";

export const Route = createFileRoute("/topics")({
  component: TopicsPage,
});
