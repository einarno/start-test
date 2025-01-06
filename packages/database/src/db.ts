import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { Resource } from "sst";
import * as authSchema from "./auth-schema.sql";
import * as todoSchema from "./todo.sql";

export const schema = {
  ...todoSchema,
  ...authSchema,
};

const pool = new pg.Pool({
  host: Resource.MyDb.host,
  port: Resource.MyDb.port,
  user: Resource.MyDb.username,
  password: Resource.MyDb.password,
  database: Resource.MyDb.database,
});

export const db = drizzle(pool, { schema });
