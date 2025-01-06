import { vpc } from "./vpc";

export const database = new sst.aws.Postgres("MyDb", {
  vpc,
  proxy: true,
});

export const studio = new sst.x.DevCommand("Studio", {
  link: [database],
  dev: {
    command: "pnpm db:studio",
    autostart: true,
  },
});
