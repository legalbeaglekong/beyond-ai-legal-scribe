import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import SingaporeRoboticsLawPage from "@/pages/SingaporeRoboticsLawPage";

export const Route = createFileRoute("/singapore-robotics-law")({
  head: () => createStaticPageHead("/singapore-robotics-law"),
  component: SingaporeRoboticsLawPage,
});
