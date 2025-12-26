import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// For Supabase "Transaction" pool mode, we must disable prepare
// If using Session mode or direct connection, it might not be strictly necessary,
// but good practice for Supabase.
const connectionString = process.env.DATABASE_URL!;

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);
