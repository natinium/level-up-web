import "dotenv/config";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error("DATABASE_URL is not defined in .env");
  process.exit(1);
}

const client = postgres(connectionString);

async function dropAllTables() {
  console.log("⚠️  Dropping all tables in the public schema...");

  try {
    // Determine all table names in the 'public' schema
    const tables = await client`
      SELECT tablename 
      FROM pg_tables 
      WHERE schemaname = 'public'
    `;

    if (tables.length === 0) {
      console.log("✅ No tables found to drop.");
      return;
    }

    // Drop each table
    // We use CASCADE to remove dependent objects like constraints/views
    for (const table of tables) {
      console.log(`Dropping table: ${table.tablename}`);
      await client.unsafe(
        `DROP TABLE IF EXISTS "public"."${table.tablename}" CASCADE`,
      );
    }

    console.log("✅ All tables dropped successfully.");
  } catch (error) {
    console.error("❌ Error dropping tables:", error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

dropAllTables();
