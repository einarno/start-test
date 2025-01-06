import { createFileRoute } from "@tanstack/react-router";
import { Workers } from "@/features/about/workers";

export const Route = createFileRoute("/(info)/info/workers")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Workers />;
}
