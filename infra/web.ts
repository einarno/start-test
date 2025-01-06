import { database } from "./storage";
import { vpc } from "./vpc";

export const webApp = new sst.aws.TanstackStart(`sstart-app`, {
  path: "packages/web",
  link: [database],
  vpc,
  dev: { command: "pnpm dev" },
});
