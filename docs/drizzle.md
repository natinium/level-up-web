Get Started with Drizzle and Supabase
This guide assumes familiarity with:
dotenv - package for managing environment variables - read here
tsx - package for running TypeScript files - read here
Supabase - open source Firebase alternative - read here
Basic file structure
This is the basic file structure of the project. In the src/db directory, we have table definition in schema.ts. In drizzle folder there are sql migration file and snapshots.

📦 <project root>
├ 📂 drizzle
├ 📂 src
│ ├ 📂 db
│ │ └ 📜 schema.ts
│ └ 📜 index.ts
├ 📜 .env
├ 📜 drizzle.config.ts
├ 📜 package.json
└ 📜 tsconfig.json

Step 1 - Install postgres package
yarn add drizzle-orm postgres dotenv
yarn add -D drizzle-kit tsx

Step 2 - Setup connection variables
Create a .env file in the root of your project and add your database connection variable:

DATABASE_URL=

Step 3 - Connect Drizzle ORM to the database
Create a index.ts file in the src directory and initialize the connection:

index.ts

import { drizzle } from 'drizzle-orm'
async function main() {
const db = drizzle('postgres-js', process.env.DATABASE_URL);
}
main();
If you need a synchronous connection, you can use our additional connection API, where you specify a driver connection and pass it to the Drizzle instance.

index.ts

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
async function main() {
const client = postgres(process.env.DATABASE_URL)
const db = drizzle({ client });
}
main();
tips
If you decide to use connection pooling via Supabase (described here), and have “Transaction” pool mode enabled, then ensure to turn off prepare, as prepared statements are not supported.

index.ts

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
async function main() {
// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(process.env.DATABASE_URL, { prepare: false })
const db = drizzle({ client });
}
main();
Step 4 - Create a table
Create a schema.ts file in the src/db directory and declare your table:

src/db/schema.ts

import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
id: integer().primaryKey().generatedAlwaysAsIdentity(),
name: varchar({ length: 255 }).notNull(),
age: integer().notNull(),
email: varchar({ length: 255 }).notNull().unique(),
});
Step 5 - Setup Drizzle config file
Drizzle config - a configuration file that is used by Drizzle Kit and contains all the information about your database connection, migration folder and schema files.

Create a drizzle.config.ts file in the root of your project and add the following content:

drizzle.config.ts

import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
out: './drizzle',
schema: './src/db/schema.ts',
dialect: 'postgresql',
dbCredentials: {
url: process.env.DATABASE_URL!,
},
});
Step 6 - Applying changes to the database
You can directly apply changes to your database using the drizzle-kit push command. This is a convenient method for quickly testing new schema designs or modifications in a local development environment, allowing for rapid iterations without the need to manage migration files:

npx drizzle-kit push

Read more about the push command in documentation.

Tips
Alternatively, you can generate migrations using the drizzle-kit generate command and then apply them using the drizzle-kit migrate command:

Generate migrations:

npx drizzle-kit generate

Apply migrations:

npx drizzle-kit migrate

Read more about migration process in documentation.

Step 7 - Seed and Query the database
Let’s update the src/index.ts file with queries to create, read, update, and delete users

src/index.ts

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm';
import { usersTable } from './db/schema';

const db = drizzle(process.env.DATABASE_URL!);
async function main() {
const user: typeof usersTable.$inferInsert = {
name: 'John',
age: 30,
email: 'john@example.com',
};
await db.insert(usersTable).values(user);
console.log('New user created!')
const users = await db.select().from(usersTable);
console.log('Getting all users from the database: ', users)
/_
const users: {
id: number;
name: string;
age: number;
email: string;
}[]
_/
await db
.update(usersTable)
.set({
age: 31,
})
.where(eq(usersTable.email, user.email));
console.log('User info updated!')
await db.delete(usersTable).where(eq(usersTable.email, user.email));
console.log('User deleted!')
}
main();
Step 8 - Run index.ts file
To run any TypeScript files, you have several options, but let’s stick with one: using tsx

You’ve already installed tsx, so we can run our queries now

Run index.ts script

yarn tsx src/index.ts

tips
We suggest using bun to run TypeScript files. With bun, such scripts can be executed without issues or additional settings, regardless of whether your project is configured with CommonJS (CJS), ECMAScript Modules (ESM), or any other module format. To run a script with bun, use the following command:

bun src/index.ts

If you don’t have bun installed, check the Bun installation docs for more information.

Connecting with Drizzle#
Drizzle ORM is a TypeScript ORM for SQL databases designed with maximum type safety in mind. You can use their ORM to connect to your database.

If you plan on solely using Drizzle instead of the Supabase Data API (PostgREST), you can turn off the latter in the API Settings.

1
Install
Install Drizzle and related dependencies.

npm i drizzle-orm postgres
npm i -D drizzle-kit
2
Create your models
Create a schema.ts file and define your models.

import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
export const users = pgTable('users', {
id: serial('id').primaryKey(),
fullName: text('full_name'),
phone: varchar('phone', { length: 256 }),
});
3
Connect
Connect to your database using the Connection Pooler.

From the project Connect panel, copy the URI from the "Shared Pooler" option and save it as the DATABASE_URL environment variable. Remember to replace the password placeholder with your actual database password.

In local SUPABASE_DB_URL require to be adapted to work with Docker resolver

import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
let connectionString = process.env.DATABASE*URL
if (host.includes('postgres:postgres@supabase_db*')) {
const url = URL.parse(host)!
url.hostname = url.hostname.split('\_')[1]
connectionString = url.href
}
// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client);
