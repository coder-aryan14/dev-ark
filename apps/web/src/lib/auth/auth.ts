import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import * as schema from "@repo/db";
import { db } from "@repo/db";

export const auth = betterAuth({
  baseURL: "http://localhost:3000",

  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),

  emailAndPassword: {
    enabled: true,
  },
});