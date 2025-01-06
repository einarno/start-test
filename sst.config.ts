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
    const webApp = await import("./infra/web");
    await import("./infra/storage");
    await import("./infra/vpc");
    return {
      webApp: webApp.webApp.url,
    };
  },
});
