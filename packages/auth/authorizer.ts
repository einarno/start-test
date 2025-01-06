import { authorizer } from "@openauthjs/openauth";
import { handle } from "hono/aws-lambda";
import { DynamoStorage } from "@openauthjs/openauth/storage/dynamo";
import { subjects } from "../../subjects.js";
import { Resource } from "sst";
import { GoogleAdapter } from "@openauthjs/openauth/adapter/google";
import { PasswordUI } from "@openauthjs/openauth/ui/password";
import { FacebookAdapter } from "sst/auth/adapter";

async function getUser(email: string) {
  // Get user from database
  // Return user ID
  return "123";
}

const app = authorizer({
  storage: DynamoStorage({
    table: Resource.LambdaAuthTable.name,
  }),
  subjects,
  providers: {
    google: GoogleAdapter(),
    facebook: FacebookAdapter(),
  },
  success: async (ctx, value) => {
    if (value.provider === "password") {
      return ctx.subject("user", {
        id: await getUser(value.email),
      });
    }
    throw new Error("Invalid provider");
  },
});

// @ts-ignore
export const handler = handle(app);
