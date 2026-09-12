import { createFileRoute } from "@tanstack/react-router";
import JoinUsPage from "@/pages/JoinUsPage";

export const Route = createFileRoute("/join-us")({
  component: JoinUsPage,
});
