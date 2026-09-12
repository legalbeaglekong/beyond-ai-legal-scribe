import { createFileRoute } from "@tanstack/react-router";
import SingaporeRoboticsLawPage from "@/pages/SingaporeRoboticsLawPage";

export const Route = createFileRoute("/singapore-robotics-law")({
  component: SingaporeRoboticsLawPage,
});
