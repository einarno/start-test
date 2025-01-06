import { createFileRoute } from "@tanstack/react-router";
import { AboutUs } from "@/features/about/AboutUs";

export const Route = createFileRoute("/(info)/info/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AboutUs />;
}
