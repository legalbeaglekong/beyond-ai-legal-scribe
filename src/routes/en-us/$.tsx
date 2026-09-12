import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/en-us/$")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
});
