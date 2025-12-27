import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/db";
import { authSchema, contentSchema } from "@/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: { ...authSchema, ...contentSchema },
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
});
