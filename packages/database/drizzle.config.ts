import { Resource } from "sst";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: ["./src/**/*.sql.ts"],
  out: ".migrations/",
  dbCredentials: {
    ssl: {
      rejectUnauthorized: false,
    },
    host: Resource.MyDb.host,
    port: Resource.MyDb.port,
    user: Resource.MyDb.username,
    password: Resource.MyDb.password,
    database: Resource.MyDb.database,
  },
});
