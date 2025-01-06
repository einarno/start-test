import * as React from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LandingPageHeader } from "@/features/about/header";

export const Route = createFileRoute("/(info)/info")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="sticky top-0 z-10 bg-muted">
        <LandingPageHeader />
      </div>
      <Outlet />
    </>
  );
}
