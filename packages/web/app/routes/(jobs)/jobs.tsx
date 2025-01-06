import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(jobs)/jobs")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Outlet />
    </div>
  );
}
