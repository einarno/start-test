import { createFileRoute } from "@tanstack/react-router";
import { Employeers } from "@/features/about/employeers";

export const Route = createFileRoute("/(info)/info/empoyeers")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Employeers />;
}
