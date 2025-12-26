import { integer, pgTable, varchar, text, serial } from "drizzle-orm/pg-core";

// Define your tables here
export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  age: integer("age").notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
});
