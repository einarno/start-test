import { createAPIFileRoute } from "@tanstack/start/api";

export const Route = createAPIFileRoute("/api/auth/$")({
  GET: () => {
    return new Response();
  },
  POST: () => {
    return new Response();
  },
});
