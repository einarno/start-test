/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sstart",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const vpc = new sst.aws.Vpc("MyVpc", { bastion: true, nat: "ec2" });
    const database = new sst.aws.Postgres("MyDb", {
      vpc,
      transform: {
        parameterGroup: {
          parameters: [
            {
              name: "rds.logical_replication",
              value: "1",
              applyMethod: "pending-reboot",
            },
            {
              name: "rds.force_ssl",
              value: "0",
              applyMethod: "pending-reboot",
            },
            {
              name: "max_connections",
              value: "1000",
              applyMethod: "pending-reboot",
            },
          ],
        },
      },
    });

    const webApp = new sst.aws.TanstackStart(`sstart-app`, {
      link: [database],
      vpc,
      dev: { command: "pnpm run dev:app" },
    });

    new sst.x.DevCommand("Studio", {
      link: [database],
      dev: {
        command: "pnpm db:studio",
        autostart: true,
      },
    });

    return {
      webApp: webApp.url,
    };
  },
});
