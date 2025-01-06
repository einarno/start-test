import { pushSchema } from "drizzle-kit/api";
import { type PgDatabase } from "drizzle-orm/pg-core";
import { db, schema } from "./db";

export async function databasePush() {
  try {
    console.log("Starting DB Push");
    const result = await pushSchema(schema, db as unknown as PgDatabase<never>);

    await result.apply();
    console.log("DB Push Successful");
  } catch (error) {
    console.error(error);
  }
}
