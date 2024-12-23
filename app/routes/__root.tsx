import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import * as React from "react";
import appCss from "@/app.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title: "TSS",
    },
  ],
  component: RootComponent,
  links: () => [{ rel: "stylesheet", href: appCss }],
  beforeLoad: async () => {
    return { user: "test" };
  },
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
