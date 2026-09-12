import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import RoboticsPage from "@/pages/industry/RoboticsPage";

export const Route = createFileRoute("/industry/robotics")({
  head: () => createStaticPageHead("/industry/robotics"),
  component: RoboticsPage,
});
