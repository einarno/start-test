import { createFileRoute, redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { deleteCookie } from "vinxi/http";

const signout = createServerFn({ method: "POST" }).handler(async () => {
  deleteCookie("better-auth.session_token", { path: "/" });

  throw redirect({ to: "/" });
});

export const Route = createFileRoute("/signout")({
  preload: false,
  loader: () => signout(),
});
