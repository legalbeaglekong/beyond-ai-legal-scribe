import { createFileRoute } from "@tanstack/react-router";
import RoboticsPage from "@/pages/industry/RoboticsPage";

export const Route = createFileRoute("/industry/robotics")({
  component: RoboticsPage,
});
