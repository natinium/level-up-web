# Installation

Learn how to configure Better Auth in your project.

---

title: Installation
description: Learn how to configure Better Auth in your project.

---

<Steps>
  <Step>
    ### Install the Package

    Let's start by adding Better Auth to your project:

    <CodeBlockTabs defaultValue="npm">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="npm">
          npm
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="pnpm">
          pnpm
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="yarn">
          yarn
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="bun">
          bun
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="npm">
        ```bash
        npm install better-auth
        ```
      </CodeBlockTab>

      <CodeBlockTab value="pnpm">
        ```bash
        pnpm add better-auth
        ```
      </CodeBlockTab>

      <CodeBlockTab value="yarn">
        ```bash
        yarn add better-auth
        ```
      </CodeBlockTab>

      <CodeBlockTab value="bun">
        ```bash
        bun add better-auth
        ```
      </CodeBlockTab>
    </CodeBlockTabs>

    <Callout type="info">
      If you're using a separate client and server setup, make sure to install Better Auth in both parts of your project.
    </Callout>

  </Step>

  <Step>
    ### Set Environment Variables

    Create a `.env` file in the root of your project and add the following environment variables:

    1. **Secret Key**

    A secret value used for encryption and hashing. It must be at least 32 characters and generated with high entropy. Click the button below to generate one. You can also use `openssl rand -base64 32` to generate one.

    ```txt title=".env"
    BETTER_AUTH_SECRET=
    ```

    <GenerateSecret />

    2. **Set Base URL**

    ```txt title=".env"
    BETTER_AUTH_URL=http://localhost:3000 # Base URL of your app
    ```

  </Step>

  <Step>
    ### Create A Better Auth Instance

    Create a file named `auth.ts` in one of these locations:

    * Project root
    * `lib/` folder
    * `utils/` folder

    You can also nest any of these folders under `src/`, `app/` or `server/` folder. (e.g. `src/lib/auth.ts`, `app/lib/auth.ts`).

    And in this file, import Better Auth and create your auth instance. Make sure to export the auth instance with the variable name `auth` or as a `default` export.

    ```ts title="auth.ts"
    import { betterAuth } from "better-auth";

    export const auth = betterAuth({
      //...
    });
    ```

  </Step>

  <Step>
    ### Configure Database

    Better Auth requires a database to store user data.
    You can easily configure Better Auth to use SQLite, PostgreSQL, or MySQL, and more!

    <Callout>
      You can also configure Better Auth to work in a stateless mode if you don't configure a database. See [Stateless Session Management](/docs/concepts/session-management#stateless-session-management) for more information. Note that most plugins will require a database.
    </Callout>

    <Tabs items={["sqlite", "postgres", "mysql"]}>
      <Tab value="sqlite">
        ```ts title="auth.ts"
        import { betterAuth } from "better-auth";
        import Database from "better-sqlite3";

        export const auth = betterAuth({
            database: new Database("./sqlite.db"),
        })
        ```
      </Tab>

      <Tab value="postgres">
        ```ts title="auth.ts"
        import { betterAuth } from "better-auth";
        import { Pool } from "pg";

        export const auth = betterAuth({
            database: new Pool({
                // connection options
            }),
        })
        ```
      </Tab>

      <Tab value="mysql">
        ```ts title="auth.ts"
        import { betterAuth } from "better-auth";
        import { createPool } from "mysql2/promise";

        export const auth = betterAuth({
            database: createPool({
                // connection options
            }),
        })
        ```
      </Tab>
    </Tabs>

    Alternatively, if you prefer to use an ORM, you can use one of the built-in adapters.

    <Tabs items={["drizzle", "prisma", "mongodb"]}>
      <Tab value="drizzle">
        ```ts title="auth.ts"
        import { betterAuth } from "better-auth";
        import { drizzleAdapter } from "better-auth/adapters/drizzle";
        import { db } from "@/db"; // your drizzle instance

        export const auth = betterAuth({
            database: drizzleAdapter(db, {
                provider: "pg", // or "mysql", "sqlite"
            }),
        });
        ```
      </Tab>

      <Tab value="prisma">
        ```ts title="auth.ts"
        import { betterAuth } from "better-auth";
        import { prismaAdapter } from "better-auth/adapters/prisma";
        // If your Prisma file is located elsewhere, you can change the path
        import { PrismaClient } from "@/generated/prisma/client";

        const prisma = new PrismaClient();
        export const auth = betterAuth({
            database: prismaAdapter(prisma, {
                provider: "sqlite", // or "mysql", "postgresql", ...etc
            }),
        });
        ```
      </Tab>

      <Tab value="mongodb">
        ```ts title="auth.ts"
        import { betterAuth } from "better-auth";
        import { mongodbAdapter } from "better-auth/adapters/mongodb";
        import { client } from "@/db"; // your mongodb client

        export const auth = betterAuth({
            database: mongodbAdapter(client),
        });
        ```
      </Tab>
    </Tabs>

    <Callout>
      If your database is not listed above, check out our other supported
      [databases](/docs/adapters/other-relational-databases) for more information,
      or use one of the supported ORMs.
    </Callout>

  </Step>

  <Step>
    ### Create Database Tables

    Better Auth includes a CLI tool to help manage the schema required by the library.

    * **Generate**: This command generates an ORM schema or SQL migration file.

    <Callout>
      If you're using Kysely, you can apply the migration directly with `migrate` command below. Use `generate` only if you plan to apply the migration manually.
    </Callout>

    ```bash title="Terminal"
    npx @better-auth/cli generate
    ```

    * **Migrate**: This command creates the required tables directly in the database. (Available only for the built-in Kysely adapter)

    ```bash title="Terminal"
    npx @better-auth/cli migrate
    ```

    see the [CLI documentation](/docs/concepts/cli) for more information.

    <Callout>
      If you instead want to create the schema manually, you can find the core schema required in the [database section](/docs/concepts/database#core-schema).
    </Callout>

  </Step>

  <Step>
    ### Authentication Methods

    Configure the authentication methods you want to use. Better Auth comes with built-in support for email/password, and social sign-on providers.

    ```ts title="auth.ts"
    import { betterAuth } from "better-auth";

    export const auth = betterAuth({
      //...other options // [!code highlight]
      emailAndPassword: { // [!code highlight]
        enabled: true, // [!code highlight]
      }, // [!code highlight]
      socialProviders: { // [!code highlight]
        github: { // [!code highlight]
          clientId: process.env.GITHUB_CLIENT_ID as string, // [!code highlight]
          clientSecret: process.env.GITHUB_CLIENT_SECRET as string, // [!code highlight]
        }, // [!code highlight]
      }, // [!code highlight]
    });
    ```

    <Callout type="info">
      You can use even more authentication methods like [passkey](/docs/plugins/passkey), [username](/docs/plugins/username), [magic link](/docs/plugins/magic-link) and more through plugins.
    </Callout>

  </Step>

  <Step>
    ### Mount Handler

    To handle API requests, you need to set up a route handler on your server.

    Create a new file or route in your framework's designated catch-all route handler. This route should handle requests for the path `/api/auth/*` (unless you've configured a different base path).

    <Callout>
      Better Auth supports any backend framework with standard Request and Response
      objects and offers helper functions for popular frameworks.
    </Callout>

    <Tabs items={["next-js-app-router", "next-js-pages-router", "nuxt", "svelte-kit", "remix", "solid-start", "hono", "cloudflare-workers", "express", "elysia", "tanstack-start", "expo"]} defaultValue="next-js-app-router">
      <Tab value="next-js-app-router">
        ```ts title="/app/api/auth/[...all]/route.ts"
        import { auth } from "@/lib/auth"; // path to your auth file
        import { toNextJsHandler } from "better-auth/next-js";

        export const { POST, GET } = toNextJsHandler(auth);
        ```
      </Tab>

      <Tab value="next-js-pages-router">
        ```ts title="/pages/api/auth/[...all].ts"
        import { auth } from "@/lib/auth"; // path to your auth file
        import { toNodeHandler } from "better-auth/node";

        // Disallow body parsing, we will parse it manually
        export const config = { api: { bodyParser: false } };
        export default toNodeHandler(auth.handler);
        ```
      </Tab>

      <Tab value="nuxt">
        ```ts title="/server/api/auth/[...all].ts"
        import { auth } from "~/utils/auth"; // path to your auth file

        export default defineEventHandler((event) => {
            return auth.handler(toWebRequest(event));
        });
        ```
      </Tab>

      <Tab value="svelte-kit">
        ```ts title="hooks.server.ts"
        import { auth } from "$lib/auth"; // path to your auth file
        import { svelteKitHandler } from "better-auth/svelte-kit";
        import { building } from '$app/environment'

        export async function handle({ event, resolve }) {
            return svelteKitHandler({ event, resolve, auth, building });
        }
        ```
      </Tab>

      <Tab value="remix">
        ```ts title="/app/routes/api.auth.$.ts"
        import { auth } from '~/lib/auth.server' // Adjust the path as necessary
        import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node"

        export async function loader({ request }: LoaderFunctionArgs) {
            return auth.handler(request)
        }

        export async function action({ request }: ActionFunctionArgs) {
            return auth.handler(request)
        }
        ```
      </Tab>

      <Tab value="solid-start">
        ```ts title="/routes/api/auth/*all.ts"
        import { auth } from "~/lib/auth"; // path to your auth file
        import { toSolidStartHandler } from "better-auth/solid-start";

        export const { GET, POST } = toSolidStartHandler(auth);
        ```
      </Tab>

      <Tab value="hono">
        ```ts title="src/index.ts"
        import { Hono } from "hono";
        import { auth } from "./auth"; // path to your auth file
        import { serve } from "@hono/node-server";
        import { cors } from "hono/cors";

        const app = new Hono();

        app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

        serve(app);
        ```
      </Tab>

      <Tab value="cloudflare-workers">
        ```ts title="src/index.ts"
        import { auth } from "./auth"; // path to your auth file

        export default {
            async fetch(request: Request) {
                const url = new URL(request.url);

                // Handle auth routes
                if (url.pathname.startsWith("/api/auth")) {
                    return auth.handler(request);
                }

                // Handle other routes
                return new Response("Not found", { status: 404 });
            },
        };
        ```

        <Callout type="info">
          **Node.js AsyncLocalStorage Support**: Better Auth uses AsyncLocalStorage for async context tracking. To enable this in Cloudflare Workers, add the `nodejs_compat` flag to your `wrangler.toml`:

          ```toml title="wrangler.toml"
          compatibility_flags = ["nodejs_compat"]
          compatibility_date = "2024-09-23"
          ```

          Alternatively, if you only need AsyncLocalStorage support:

          ```toml title="wrangler.toml"
          compatibility_flags = ["nodejs_als"]
          ```

          In the next major release, we will assume AsyncLocalStorage support by default, so this configuration will be necessary.
        </Callout>
      </Tab>

      <Tab value="express">
        <Callout type="warn">
          ExpressJS v5 introduced breaking changes to route path matching by switching to `path-to-regexp@6`. Wildcard routes like `*` should now be written using the new named syntax, e.g. `/{*any}`, to properly capture catch-all patterns. This ensures compatibility and predictable behavior across routing scenarios.
          See the [Express v5 migration guide](https://expressjs.com/en/guide/migrating-5.html) for details.

          As a result, the implementation in ExpressJS v5 should look like this:

          ```ts
          app.all('/api/auth/{*any}', toNodeHandler(auth));
          ```

          *The name any is arbitrary and can be replaced with any identifier you prefer.*
        </Callout>

        ```ts title="server.ts"
        import express from "express";
        import { toNodeHandler } from "better-auth/node";
        import { auth } from "./auth";

        const app = express();
        const port = 8000;

        app.all("/api/auth/*", toNodeHandler(auth));

        // Mount express json middleware after Better Auth handler
        // or only apply it to routes that don't interact with Better Auth
        app.use(express.json());

        app.listen(port, () => {
            console.log(`Better Auth app listening on port ${port}`);
        });
        ```

        This will also work for any other node server framework like express, fastify, hapi, etc., but may require some modifications. See [fastify guide](/docs/integrations/fastify). Note that CommonJS (cjs) isn't supported.
      </Tab>

      <Tab value="astro">
        ```ts title="/pages/api/auth/[...all].ts"
        import type { APIRoute } from "astro";
        import { auth } from "@/auth"; // path to your auth file

        export const GET: APIRoute = async (ctx) => {
            return auth.handler(ctx.request);
        };

        export const POST: APIRoute = async (ctx) => {
            return auth.handler(ctx.request);
        };
        ```
      </Tab>

      <Tab value="elysia">
        ```ts
        import { Elysia, Context } from "elysia";
        import { auth } from "./auth";

        const betterAuthView = (context: Context) => {
            const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"]
            // validate request method
            if(BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
                return auth.handler(context.request);
            } else {
                context.error(405)
            }
        }

        const app = new Elysia().all("/api/auth/*", betterAuthView).listen(3000);

        console.log(
        `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
        );
        ```
      </Tab>

      <Tab value="tanstack-start">
        ```ts title="src/routes/api/auth/$.ts"
        import { createFileRoute } from '@tanstack/react-router'
        import { auth } from '@/lib/auth/auth'

        export const Route = createFileRoute('/api/auth/$')({
        server: {
            handlers: {
                GET: async ({ request }:{ request: Request }) => {
                    return await auth.handler(request)
                },
                POST: async ({ request }:{ request: Request }) => {
                    return await auth.handler(request)
                },
            },
        },
        })
        ```
      </Tab>

      <Tab value="expo">
        ```ts title="app/api/auth/[...all]+api.ts"
        import { auth } from '@/lib/server/auth'; // path to your auth file

        const handler = auth.handler;
        export { handler as GET, handler as POST };
        ```
      </Tab>
    </Tabs>

  </Step>

  <Step>
    ### Create Client Instance

    The client-side library helps you interact with the auth server. Better Auth comes with a client for all the popular web frameworks, including vanilla JavaScript.

    1. Import `createAuthClient` from the package for your framework (e.g., "better-auth/react" for React).
    2. Call the function to create your client.
    3. Pass the base URL of your auth server. (If the auth server is running on the same domain as your client, you can skip this step.)

    <Callout type="info">
      If you're using a different base path other than `/api/auth` make sure to pass
      the whole URL including the path. (e.g.
      `http://localhost:3000/custom-path/auth`)
    </Callout>

    <Tabs
      items={["react", "vue", "svelte", "solid",

"vanilla"]}
defaultValue="react" >
<Tab value="vanilla">
`ts title="lib/auth-client.ts"
        import { createAuthClient } from "better-auth/client"
        export const authClient = createAuthClient({
            /** The base URL of the server (optional if you're using the same domain) */ // [!code highlight]
            baseURL: "http://localhost:3000" // [!code highlight]
        })
        `
</Tab>

      <Tab value="react" title="lib/auth-client.ts">
        ```ts title="lib/auth-client.ts"
        import { createAuthClient } from "better-auth/react"
        export const authClient = createAuthClient({
            /** The base URL of the server (optional if you're using the same domain) */ // [!code highlight]
            baseURL: "http://localhost:3000" // [!code highlight]
        })
        ```
      </Tab>

      <Tab value="vue" title="lib/auth-client.ts">
        ```ts title="lib/auth-client.ts"
        import { createAuthClient } from "better-auth/vue"
        export const authClient = createAuthClient({
            /** The base URL of the server (optional if you're using the same domain) */ // [!code highlight]
            baseURL: "http://localhost:3000" // [!code highlight]
        })
        ```
      </Tab>

      <Tab value="svelte" title="lib/auth-client.ts">
        ```ts title="lib/auth-client.ts"
        import { createAuthClient } from "better-auth/svelte"
        export const authClient = createAuthClient({
            /** The base URL of the server (optional if you're using the same domain) */ // [!code highlight]
            baseURL: "http://localhost:3000" // [!code highlight]
        })
        ```
      </Tab>

      <Tab value="solid" title="lib/auth-client.ts">
        ```ts title="lib/auth-client.ts"
        import { createAuthClient } from "better-auth/solid"
        export const authClient = createAuthClient({
            /** The base URL of the server (optional if you're using the same domain) */ // [!code highlight]
            baseURL: "http://localhost:3000" // [!code highlight]
        })
        ```
      </Tab>
    </Tabs>

    <Callout type="info">
      Tip: You can also export specific methods if you prefer:
    </Callout>

    ```ts
    export const { signIn, signUp, useSession } = createAuthClient()
    ```

  </Step>

  <Step>
    ### 🎉 That's it!

    That's it! You're now ready to use better-auth in your application. Continue to [basic usage](/docs/basic-usage) to learn how to use the auth instance to sign in users.

  </Step>
</Steps>

# Next.js integration

Integrate Better Auth with Next.js.

---

title: Next.js integration
description: Integrate Better Auth with Next.js.

---

Better Auth can be easily integrated with Next.js. Before you start, make sure you have a Better Auth instance configured. If you haven't done that yet, check out the [installation](/docs/installation).

### Create API Route

We need to mount the handler to an API route. Create a route file inside `/api/auth/[...all]` directory. And add the following code:

```ts title="api/auth/[...all]/route.ts"
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

<Callout type="info">
  You can change the path on your better-auth configuration but it's recommended to keep it as `/api/auth/[...all]`
</Callout>

For `pages` route, you need to use `toNodeHandler` instead of `toNextJsHandler` and set `bodyParser` to `false` in the `config` object. Here is an example:

```ts title="pages/api/auth/[...all].ts"
import { toNodeHandler } from "better-auth/node";
import { auth } from "@/lib/auth";

// Disallow body parsing, we will parse it manually
export const config = { api: { bodyParser: false } };

export default toNodeHandler(auth.handler);
```

## Create a client

Create a client instance. You can name the file anything you want. Here we are creating `auth-client.ts` file inside the `lib/` directory.

```ts title="auth-client.ts"
import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react

export const authClient = createAuthClient({
  //you can pass client configuration here
});
```

Once you have created the client, you can use it to sign up, sign in, and perform other actions.
Some of the actions are reactive. The client uses [nano-store](https://github.com/nanostores/nanostores) to store the state and re-render the components when the state changes.

The client also uses [better-fetch](https://github.com/bekacru/better-fetch) to make the requests. You can pass the fetch configuration to the client.

## RSC and Server actions

The `api` object exported from the auth instance contains all the actions that you can perform on the server. Every endpoint made inside Better Auth is a invocable as a function. Including plugins endpoints.

**Example: Getting Session on a server action**

```tsx title="server.ts"
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const someAuthenticatedAction = async () => {
  "use server";
  const session = await auth.api.getSession({
    headers: await headers(),
  });
};
```

**Example: Getting Session on a RSC**

```tsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function ServerComponent() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return <div>Not authenticated</div>;
  }
  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
    </div>
  );
}
```

<Callout type="warn">As RSCs cannot set cookies, the [cookie cache](/docs/concepts/session-management#cookie-cache) will not be refreshed until the server is interacted with from the client via Server Actions or Route Handlers.</Callout>

### Server Action Cookies

When you call a function that needs to set cookies, like `signInEmail` or `signUpEmail` in a server action, cookies won’t be set. This is because server actions need to use the `cookies` helper from Next.js to set cookies.

To simplify this, you can use the `nextCookies` plugin, which will automatically set cookies for you whenever a `Set-Cookie` header is present in the response.

```ts title="auth.ts"
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  //...your config
  plugins: [nextCookies()], // make sure this is the last plugin in the array // [!code highlight]
});
```

Now, when you call functions that set cookies, they will be automatically set.

```ts
"use server";
import { auth } from "@/lib/auth";

const signIn = async () => {
  await auth.api.signInEmail({
    body: {
      email: "user@email.com",
      password: "password",
    },
  });
};
```

## Auth Protection

In Next.js proxy/middleware, it's recommended to only check for the existence of a session cookie to handle redirection. To avoid blocking requests by making API or database calls.

### Next.js 16+ (Proxy)

Next.js 16 replaces "middleware" with "proxy". You can use the Node.js runtime for full session validation with database checks:

```ts title="proxy.ts"
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"], // Specify the routes the middleware applies to
};
```

For cookie-only checks (faster but less secure), use `getSessionCookie`:

```ts title="proxy.ts"
import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"], // Specify the routes the middleware applies to
};
```

<Callout type="info">
  **Migration from middleware:** Rename `middleware.ts` → `proxy.ts` and `middleware` → `proxy` function. All Better Auth methods work identically.
</Callout>

### Next.js 15.2.0+ (Node.js Runtime Middleware)

From Next.js 15.2.0, you can use the Node.js runtime in middleware for full session validation with database checks:

```ts title="middleware.ts"
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs", // Required for auth.api calls
  matcher: ["/dashboard"], // Specify the routes the middleware applies to
};
```

<Callout type="warn">
  Node.js runtime in middleware is experimental in Next.js versions before 16. Consider upgrading to Next.js 16+ for stable proxy support.
</Callout>

### Next.js 13-15.1.x (Edge Runtime Middleware)

In older Next.js versions, middleware runs on the Edge Runtime and cannot make database calls. Use cookie-based checks for optimistic redirects:

<Callout type="warn">
  The <code>getSessionCookie()</code> function does not automatically reference the auth config specified in <code>auth.ts</code>. Therefore, if you customized the cookie name or prefix, you need to ensure that the configuration in <code>getSessionCookie()</code> matches the config defined in your <code>auth.ts</code>.
</Callout>

#### For Next.js release `15.1.7` and below

If you need the full session object, you'll have to fetch it from the `/api/auth/get-session` API route. Since Next.js middleware doesn't support running Node.js APIs directly, you must make an HTTP request.

<Callout>
  The example uses [better-fetch](https://better-fetch.vercel.app), but you can use any fetch library.
</Callout>

```ts title="middleware.ts"
import { betterFetch } from "@better-fetch/fetch";
import type { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

type Session = typeof auth.$Infer.Session;

export async function middleware(request: NextRequest) {
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get("cookie") || "", // Forward the cookies from the request
      },
    },
  );

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"], // Apply middleware to specific routes
};
```

#### For Next.js release `15.2.0` and above

From Next.js 15.2.0, you can use the Node.js runtime in middleware for full session validation with database checks:

<Callout type="warn">
  You may refer to the [Next.js documentation](https://nextjs.org/docs/app/building-your-application/routing/middleware#runtime) for more information about runtime configuration, and how to enable it.
  Be careful when using the new runtime. It's an experimental feature and it may be subject to breaking changes.
</Callout>

```ts title="middleware.ts"
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs",
  matcher: ["/dashboard"], // Apply middleware to specific routes
};
```

#### Cookie-based checks (recommended for all versions)

```ts title="middleware.ts"
import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"], // Specify the routes the middleware applies to
};
```

<Callout type="warn">
  **Security Warning:** The `getSessionCookie` function only checks for the
  existence of a session cookie; it does **not** validate it. Relying solely
  on this check for security is dangerous, as anyone can manually create a
  cookie to bypass it. You must always validate the session on your server for
  any protected actions or pages.
</Callout>

<Callout type="info">
  If you have a custom cookie name or prefix, you can pass it to the `getSessionCookie` function.

```ts
const sessionCookie = getSessionCookie(request, {
  cookieName: "my_session_cookie",
  cookiePrefix: "my_prefix",
});
```

</Callout>

Alternatively, you can use the `getCookieCache` helper to get the session object from the cookie cache.

```ts title="middleware.ts"
import { getCookieCache } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  const session = await getCookieCache(request);
  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  return NextResponse.next();
}
```

### How to handle auth checks in each page/route

In this example, we are using the `auth.api.getSession` function within a server component to get the session object,
then we are checking if the session is valid. If it's not, we are redirecting the user to the sign-in page.

```tsx title="app/dashboard/page.tsx"
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return <h1>Welcome {session.user.name}</h1>;
}
```

## Next.js 16 Compatibility

Better Auth is fully compatible with Next.js 16. The main change is that "middleware" is now called "proxy". See the [Auth Protection](#auth-protection) section above for Next.js 16+ proxy examples.

### Migration Guide

Use Next.js codemod for automatic migration:

```bash
npx @next/codemod@canary middleware-to-proxy .
```

Or manually:

- Rename `middleware.ts` → `proxy.ts`
- Change function name: `middleware` → `proxy`

All Better Auth methods work identically. See the [Next.js migration guide](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#migration-to-proxy) for details.

# Basic Usage

Getting started with Better Auth

---

title: Basic Usage
description: Getting started with Better Auth

---

Better Auth provides built-in authentication support for:

- **Email and password**
- **Social provider (Google, GitHub, Apple, and more)**

But also can easily be extended using plugins, such as: [username](/docs/plugins/username), [magic link](/docs/plugins/magic-link), [passkey](/docs/plugins/passkey), [email-otp](/docs/plugins/email-otp), and more.

## Email & Password

To enable email and password authentication:

```ts title="auth.ts"
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  emailAndPassword: {
    // [!code highlight]
    enabled: true, // [!code highlight]
  }, // [!code highlight]
});
```

### Sign Up

To sign up a user you need to call the client method `signUp.email` with the user's information.

```ts title="sign-up.ts"
import { authClient } from "@/lib/auth-client"; //import the auth client // [!code highlight]

const { data, error } = await authClient.signUp.email(
  {
    email, // user email address
    password, // user password -> min 8 characters by default
    name, // user display name
    image, // User image URL (optional)
    callbackURL: "/dashboard", // A URL to redirect to after the user verifies their email (optional)
  },
  {
    onRequest: (ctx) => {
      //show loading
    },
    onSuccess: (ctx) => {
      //redirect to the dashboard or sign in page
    },
    onError: (ctx) => {
      // display the error message
      alert(ctx.error.message);
    },
  },
);
```

By default, the users are automatically signed in after they successfully sign up. To disable this behavior you can set `autoSignIn` to `false`.

```ts title="auth.ts"
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    autoSignIn: false, //defaults to true // [!code highlight]
  },
});
```

### Sign In

To sign a user in, you can use the `signIn.email` function provided by the client.

```ts title="sign-in"
const { data, error } = await authClient.signIn.email(
  {
    /**
     * The user email
     */
    email,
    /**
     * The user password
     */
    password,
    /**
     * A URL to redirect to after the user verifies their email (optional)
     */
    callbackURL: "/dashboard",
    /**
     * remember the user session after the browser is closed.
     * @default true
     */
    rememberMe: false,
  },
  {
    //callbacks
  },
);
```

<Callout type="warn">
  Always invoke client methods from the client side. Don't call them from the server.
</Callout>

### Server-Side Authentication

To authenticate a user on the server, you can use the `auth.api` methods.

```ts title="server.ts"
import { auth } from "./auth"; // path to your Better Auth server instance

const response = await auth.api.signInEmail({
  body: {
    email,
    password,
  },
  asResponse: true, // returns a response object instead of data
});
```

<Callout>
  If the server cannot return a response object, you'll need to manually parse and set cookies. But for frameworks like Next.js we provide [a plugin](/docs/integrations/next#server-action-cookies) to handle this automatically
</Callout>

## Social Sign-On

Better Auth supports multiple social providers, including Google, GitHub, Apple, Discord, and more. To use a social provider, you need to configure the ones you need in the `socialProviders` option on your `auth` object.

```ts title="auth.ts"
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  socialProviders: {
    // [!code highlight]
    github: {
      // [!code highlight]
      clientId: process.env.GITHUB_CLIENT_ID!, // [!code highlight]
      clientSecret: process.env.GITHUB_CLIENT_SECRET!, // [!code highlight]
    }, // [!code highlight]
  }, // [!code highlight]
});
```

### Sign in with social providers

To sign in using a social provider you need to call `signIn.social`. It takes an object with the following properties:

```ts title="sign-in.ts"
import { authClient } from "@/lib/auth-client"; //import the auth client // [!code highlight]

await authClient.signIn.social({
  /**
   * The social provider ID
   * @example "github", "google", "apple"
   */
  provider: "github",
  /**
   * A URL to redirect after the user authenticates with the provider
   * @default "/"
   */
  callbackURL: "/dashboard",
  /**
   * A URL to redirect if an error occurs during the sign in process
   */
  errorCallbackURL: "/error",
  /**
   * A URL to redirect if the user is newly registered
   */
  newUserCallbackURL: "/welcome",
  /**
   * disable the automatic redirect to the provider.
   * @default false
   */
  disableRedirect: true,
});
```

You can also authenticate using `idToken` or `accessToken` from the social provider instead of redirecting the user to the provider's site. See social providers documentation for more details.

## Signout

To signout a user, you can use the `signOut` function provided by the client.

```ts title="user-card.tsx"
await authClient.signOut();
```

you can pass `fetchOptions` to redirect onSuccess

```ts title="user-card.tsx"
await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/login"); // redirect to login page
    },
  },
});
```

## Session

Once a user is signed in, you'll want to access the user session. Better Auth allows you to easily access the session data from both the server and client sides.

### Client Side

#### Use Session

Better Auth provides a `useSession` hook to easily access session data on the client side. This hook is implemented using nanostore and has support for each supported framework and vanilla client, ensuring that any changes to the session (such as signing out) are immediately reflected in your UI.

<Tabs items={["React", "Vue","Svelte", "Solid", "Vanilla"]} defaultValue="react">
<Tab value="React">
```tsx title="user.tsx"
import { authClient } from "@/lib/auth-client" // import the auth client // [!code highlight]

    export function User(){

        const { // [!code highlight]
            data: session, // [!code highlight]
            isPending, //loading state // [!code highlight]
            error, //error object // [!code highlight]
            refetch //refetch the session
        } = authClient.useSession() // [!code highlight]

        return (
            //...
        )
    }
    ```

  </Tab>

  <Tab value="Vue">
    ```vue title="index.vue"
    <script setup lang="ts">
    import { authClient } from "~/lib/auth-client" // [!code highlight]

    const session = authClient.useSession() // [!code highlight]
    </script>

    <template>
        <div>
            <div>
                <pre>{{ session.data }}</pre>
                <button v-if="session.data" @click="authClient.signOut()">
                    Sign out
                </button>
            </div>
        </div>
    </template>
    ```

  </Tab>

  <Tab value="Svelte">
    ```svelte title="user.svelte"
    <script lang="ts">
    import { authClient } from "$lib/auth-client"; // [!code highlight]

    const session = authClient.useSession(); // [!code highlight]
    </script>
    <p>
        {$session.data?.user.email}
    </p>
    ```

  </Tab>

  <Tab value="Vanilla">
    ```ts title="user.svelte"
    import { authClient } from "~/lib/auth-client"; //import the auth client

    authClient.useSession.subscribe((value)=>{
        //do something with the session //
    })
    ```

  </Tab>

  <Tab value="Solid">
    ```tsx title="user.tsx"
    import { authClient } from "~/lib/auth-client"; // [!code highlight]

    export default function Home() {
        const session = authClient.useSession() // [!code highlight]
        return (
            <pre>{JSON.stringify(session(), null, 2)}</pre>
        );
    }
    ```

  </Tab>
</Tabs>

#### Get Session

If you prefer not to use the hook, you can use the `getSession` method provided by the client.

```ts title="user.tsx"
import { authClient } from "@/lib/auth-client"; // import the auth client // [!code highlight]

const { data: session, error } = await authClient.getSession();
```

You can also use it with client-side data-fetching libraries like [TanStack Query](https://tanstack.com/query/latest).

### Server Side

The server provides a `session` object that you can use to access the session data. It requires request headers object to be passed to the `getSession` method.

**Example: Using some popular frameworks**

<Tabs items={["Next.js", "Nuxt", "Svelte", "Astro", "Hono", "TanStack"]}>
<Tab value="Next.js">
```ts title="server.ts"
import { auth } from "./auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    ```

  </Tab>

  <Tab value="Remix">
    ```ts title="route.ts"
    import { auth } from "lib/auth"; // path to your Better Auth server instance

    export async function loader({ request }: LoaderFunctionArgs) {
        const session = await auth.api.getSession({
            headers: request.headers
        })

        return json({ session })
    }
    ```

  </Tab>

  <Tab value="Astro">
    ```astro title="index.astro"
    ---
    import { auth } from "./auth";

    const session = await auth.api.getSession({
        headers: Astro.request.headers,
    });
    ---
    <!-- Your Astro Template -->
    ```

  </Tab>

  <Tab value="Svelte">
    ```ts title="+page.ts"
    import { auth } from "./auth";

    export async function load({ request }) {
        const session = await auth.api.getSession({
            headers: request.headers
        })
        return {
            props: {
                session
            }
        }
    }
    ```

  </Tab>

  <Tab value="Hono">
    ```ts title="index.ts"
    import { auth } from "./auth";

    const app = new Hono();

    app.get("/path", async (c) => {
        const session = await auth.api.getSession({
            headers: c.req.raw.headers
        })
    });
    ```

  </Tab>

  <Tab value="Nuxt">
    ```ts title="server/session.ts"
    import { auth } from "~/utils/auth";

    export default defineEventHandler((event) => {
        const session = await auth.api.getSession({
            headers: event.headers,
        })
    });
    ```

  </Tab>

  <Tab value="TanStack">
    ```ts title="app/routes/api/index.ts"
    import { auth } from "./auth";
    import { createAPIFileRoute } from "@tanstack/start/api";

    export const APIRoute = createAPIFileRoute("/api/$")({
        GET: async ({ request }) => {
            const session = await auth.api.getSession({
                headers: request.headers
            })
        },
    });
    ```

  </Tab>
</Tabs>

<Callout>
  For more details check [session-management](/docs/concepts/session-management) documentation.
</Callout>

## Using Plugins

One of the unique features of Better Auth is a plugins ecosystem. It allows you to add complex auth related functionality with small lines of code.

Below is an example of how to add two factor authentication using two factor plugin.

<Steps>
  <Step>
    ### Server Configuration

    To add a plugin, you need to import the plugin and pass it to the `plugins` option of the auth instance. For example, to add two factor authentication, you can use the following code:

    ```ts title="auth.ts"
    import { betterAuth } from "better-auth"
    import { twoFactor } from "better-auth/plugins" // [!code highlight]

    export const auth = betterAuth({
        //...rest of the options
        plugins: [ // [!code highlight]
            twoFactor() // [!code highlight]
        ] // [!code highlight]
    })
    ```

    now two factor related routes and method will be available on the server.

  </Step>

  <Step>
    ### Migrate Database

    After adding the plugin, you'll need to add the required tables to your database. You can do this by running the `migrate` command, or by using the `generate` command to create the schema and handle the migration manually.

    generating the schema:

    ```bash title="terminal"
    npx @better-auth/cli generate
    ```

    using the `migrate` command:

    ```bash title="terminal"
    npx @better-auth/cli migrate
    ```

    <Callout>
      If you prefer adding the schema manually, you can check the schema required on the [two factor plugin](/docs/plugins/2fa#schema) documentation.
    </Callout>

  </Step>

  <Step>
    ### Client Configuration

    Once we're done with the server, we need to add the plugin to the client. To do this, you need to import the plugin and pass it to the `plugins` option of the auth client. For example, to add two factor authentication, you can use the following code:

    ```ts title="auth-client.ts"
    import { createAuthClient } from "better-auth/client";
    import { twoFactorClient } from "better-auth/client/plugins"; // [!code highlight]

    const authClient = createAuthClient({
        plugins: [ // [!code highlight]
            twoFactorClient({ // [!code highlight]
                twoFactorPage: "/two-factor" // the page to redirect if a user needs to verify 2nd factor // [!code highlight]
            }) // [!code highlight]
        ] // [!code highlight]
    })
    ```

    now two factor related methods will be available on the client.

    ```ts title="profile.ts"
    import { authClient } from "./auth-client"

    const enableTwoFactor = async() => {
        const data = await authClient.twoFactor.enable({
            password // the user password is required
        }) // this will enable two factor
    }

    const disableTwoFactor = async() => {
        const data = await authClient.twoFactor.disable({
            password // the user password is required
        }) // this will disable two factor
    }

    const signInWith2Factor = async() => {
        const data = await authClient.signIn.email({
            //...
        })
        //if the user has two factor enabled, it will redirect to the two factor page
    }

    const verifyTOTP = async() => {
        const data = await authClient.twoFactor.verifyTOTP({
            code: "123456", // the code entered by the user
            /**
             * If the device is trusted, the user won't
             * need to pass 2FA again on the same device
             */
            trustDevice: true
        })
    }
    ```

  </Step>

  <Step>
    Next step: See the <Link href="/docs/plugins/2fa">two factor plugin documentation</Link>.
  </Step>
</Steps>

# Drizzle ORM Adapter

Integrate Better Auth with Drizzle ORM.

---

title: Drizzle ORM Adapter
description: Integrate Better Auth with Drizzle ORM.

---

Drizzle ORM is a powerful and flexible ORM for Node.js and TypeScript. It provides a simple and intuitive API for working with databases, and supports a wide range of databases including MySQL, PostgreSQL, SQLite, and more.

Before getting started, make sure you have Drizzle installed and configured. For more information, see [Drizzle Documentation](https://orm.drizzle.team/docs/overview/)

## Example Usage

You can use the Drizzle adapter to connect to your database as follows.

```ts title="auth.ts"
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./database.ts";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    // [!code highlight]
    provider: "sqlite", // or "pg" or "mysql" // [!code highlight]
  }), // [!code highlight]
  //... the rest of your config
});
```

## Schema generation & migration

The [Better Auth CLI](/docs/concepts/cli) allows you to generate or migrate
your database schema based on your Better Auth configuration and plugins.

To generate the schema required by Better Auth, run the following command:

<CodeBlockTabs defaultValue="npm">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash title="Schema Generation"
    npx @better-auth/cli@latest generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash title="Schema Generation"
    pnpm dlx @better-auth/cli@latest generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash title="Schema Generation"
    yarn dlx @better-auth/cli@latest generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash title="Schema Generation"
    bun x @better-auth/cli@latest generate
    ```
  </CodeBlockTab>
</CodeBlockTabs>

To generate and apply the migration, run the following commands:

<CodeBlockTabs defaultValue="npm">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash title="Schema Migration"
    npx drizzle-kit generate # generate the migration file
    npx drizzle-kit migrate # apply the migration
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash title="Schema Migration"
    pnpm dlx drizzle-kit generate # generate the migration file
    npx drizzle-kit migrate # apply the migration
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash title="Schema Migration"
    yarn dlx drizzle-kit generate # generate the migration file
    npx drizzle-kit migrate # apply the migration
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash title="Schema Migration"
    bun x drizzle-kit generate # generate the migration file
    npx drizzle-kit migrate # apply the migration
    ```
  </CodeBlockTab>
</CodeBlockTabs>

## Joins (Experimental)

Database joins is useful when Better-Auth needs to fetch related data from multiple tables in a single query.
Endpoints like `/get-session`, `/get-full-organization` and many others benefit greatly from this feature,
seeing upwards of 2x to 3x performance improvements depending on database latency.

The Drizzle adapter supports joins out of the box since version `1.4.0`.
To enable this feature, you need to set the `experimental.joins` option to `true` in your auth configuration.

```ts title="auth.ts"
export const auth = betterAuth({
  experimental: { joins: true },
});
```

<Callout type="warn">
  Please make sure that your Drizzle schema has the necessary relations defined.
  If you do not see any relations in your Drizzle schema, you can manually add them using the [`relation`](https://orm.drizzle.team/docs/relations) drizzle-orm function
  or run our latest CLI version `npx @better-auth/cli@latest generate` to generate a new Drizzle schema with the relations.

Additionally, you're required to pass each [relation](https://orm.drizzle.team/docs/relations) through the drizzle adapter schema object.
</Callout>

## Modifying Table Names

The Drizzle adapter expects the schema you define to match the table names. For example, if your Drizzle schema maps the `user` table to `users`, you need to manually pass the schema and map it to the user table.

```ts
import { betterAuth } from "better-auth";
import { db } from "./drizzle";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { schema } from "./schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite", // or "pg" or "mysql"
    schema: {
      ...schema,
      user: schema.users,
    },
  }),
});
```

You can either modify the provided schema values like the example above,
or you can mutate the auth config's `modelName` property directly.
For example:

```ts
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite", // or "pg" or "mysql"
    schema,
  }),
  user: {
    modelName: "users", // [!code highlight]
  },
});
```

## Modifying Field Names

We map field names based on property you passed to your Drizzle schema.
For example, if you want to modify the `email` field to `email_address`,
you simply need to change the Drizzle schema to:

```ts
export const user = mysqlTable("user", {
  // Changed field name without changing the schema property name
  // This allows drizzle & better-auth to still use the original field name,
  // while your DB uses the modified field name
  email: varchar("email_address", { length: 255 }).notNull().unique(), // [!code highlight]
  // ... others
});
```

You can either modify the Drizzle schema like the example above,
or you can mutate the auth config's `fields` property directly.
For example:

```ts
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite", // or "pg" or "mysql"
    schema,
  }),
  user: {
    fields: {
      email: "email_address", // [!code highlight]
    },
  },
});
```

## Using Plural Table Names

If all your tables are using plural form, you can just pass the `usePlural` option:

```ts
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    ...
    usePlural: true,
  }),
});
```

## Additional Information

- If you're looking for performance improvements or tips, take a look at our guide to <Link href="/docs/guides/optimizing-for-performance">performance optimizations</Link>.
