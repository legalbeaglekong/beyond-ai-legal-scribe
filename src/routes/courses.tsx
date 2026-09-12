import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import CoursesPage from "@/pages/CoursesPage";

export const Route = createFileRoute("/courses")({
  head: () => createStaticPageHead("/courses"),
  component: CoursesPage,
});
