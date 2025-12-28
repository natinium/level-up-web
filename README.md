# LevelUp — Entrance Exam Prep Platform

LevelUp is a localized, gamified exam preparation platform for Ethiopian students. It provides subject content by grade, a mobile-friendly quiz feed, XP and streak-based motivation, and AI-powered explanations that answer in the user's selected language (English, Amharic, or Oromo).

## About LevelUp

This application evolves from a Next.js boilerplate into a focused learning platform. It keeps the professional tooling and structure but adds:

- A clear content schema (grades → subjects → quizzes → questions)
- Locale-aware UI and AI explanations
- Secure authentication with Better Auth
- PostgreSQL + Drizzle ORM for durable data

## Features

- **Personalized dashboard** with subjects filtered by grade
- **Quiz feed** optimized for mobile with animated UI
- **Gamification**: XP wallet, daily streaks, leaderboard
- **AI explanations** that respond in the user's locale
- **Localization** with `next-intl` for `en`, `am`, `or`
- **Authentication** with Better Auth (Drizzle adapter)
- **PostgreSQL + Drizzle ORM** for structured content data
- **Robust tooling**: ESLint, Prettier, Husky, Storybook, Vitest, Playwright, MSW

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4, Shadcn UI, Framer Motion (`motion`), Next Themes
- Drizzle ORM (`src/db`), PostgreSQL (`drizzle/` migrations)
- Vercel AI SDK (`ai`, `@ai-sdk/google`) for AI explanations
- next-intl for i18n (`src/app/[locale]`, `messages/*.json`)
- Better Auth with Drizzle adapter

## UI Components with Shadcn UI

Shadcn UI components are installed and used across the app. Build custom components by composing primitives from `/src/components/ui`.

### Installing New Components

To add new Shadcn UI components, run:

```bash
yarn dlx shadcn@latest add component1 component2 etc
```

For example:

```bash
yarn dlx shadcn@latest add button card dialog
```

### Component Organization

Component folders:

- `/src/components/ui` — installed Shadcn components (do not modify)
- `/src/components/custom` — custom components built from Shadcn primitives

All custom components in the `/src/components/custom` folder should follow the component folder structure:

**Component folders** (required for all components):

```
/src/components/custom/component-name/
├── component-name.tsx          # Main component file
├── component-name.test.tsx     # Component tests (if needed)
├── component-name.stories.tsx  # Storybook stories (if needed)
├── component-name.module.scss  # Component-specific styles (if needed)
└── index.ts                    # Export file
```

Each component should have its own folder with an index.ts file that exports the component.

### Component Customization Guidelines

Do not modify components in `/src/components/ui`. Create custom components in `/src/components/custom` by composing Shadcn primitives.

### Component Development Standards

All custom components should follow these standards:

#### Functional Components with Arrow Functions

Use pure functional components with arrow function syntax:

```tsx
import { Button } from "@/components/ui/button";

export const CustomButton = ({
  children,
  variant = "default",
  onClick,
}: {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "destructive";
  onClick?: () => void;
}) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};
```

#### Direct Props Destructuring

Always destructure props directly in the function signature:

```tsx
// ✅ Correct
export const MyComponent = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

// ❌ Incorrect
export const MyComponent = (props: { title: string; description?: string }) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.description && <p>{props.description}</p>}
    </div>
  );
};
```

#### Using Framer Motion for Animations

The project includes the `motion` package (Framer Motion) for animations. You can use it in your custom components:

```tsx
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export const AnimatedButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button>{children}</Button>
    </motion.div>
  );
};
```

See the `AnimatedRocket` component in `/src/components/custom/animated-rocket.tsx` for a practical example of how to use the `motion` library in this project.

## Project Structure

```
/level-up-web
├── .github/              # GitHub Actions workflows
├── .husky/               # Pre-commit hooks
├── .storybook/           # Storybook configuration
├── public/               # Static assets
├── drizzle/              # Drizzle migrations and snapshots
├── src/
│   ├── app/              # App Router (locale-aware routes under [locale])
│   │   ├── api/          # REST endpoints (grades, subjects, quizzes, ai)
│   │   └── (main)/dashboard  # Dashboard (client) and pages
│   ├── components/       # UI (custom + Shadcn)
│   ├── db/               # Drizzle schemas and index
│   ├── lib/              # Utilities and stores (e.g., Zustand)
│   └── providers/        # Theme and other providers
├── messages/             # i18n message catalogs (en, am, or)
├── msw/                  # Mock Service Worker setup
├── tests-e2e/            # Playwright tests
```

## Internationalization (i18n)

Localization is handled by `next-intl` with locale-based routing under `src/app/[locale]`. Messages are stored per locale and loaded into Server and Client Components.

### Message Storage

Translation messages live in `messages/en.json`, `messages/am.json`, and `messages/or.json`.

```json
// messages/en.json
{
  "HomePage": {
    "title": "Welcome to Orion Next.js Starter",
    "description": "Your production-ready starter template..."
  }
}
```

### Usage in Components

Use `getTranslations` in Server Components and `useTranslations`/`useLocale` in Client Components.

```tsx
// src/app/page.tsx
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  return <h1>{t("title")}</h1>;
}
```

### Usage in Client Components

In Client Components, use the `useTranslations` hook. Make sure the component has the `"use client";` directive.

```tsx
// src/components/custom/language-switcher.tsx
"use client";

import { useTranslations } from "next-intl";

export function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  return <label>{t("label")}</label>;
}
```

### Writing Tests for i18n

Testing components that use `next-intl` requires a bit of setup, especially for Server Components or components that use navigation hooks.

#### Testing Server Components

When testing Server Components that use `getTranslations`, you need to mock the `next-intl/server` module in your test file.

```tsx
// src/app/page.test.tsx
import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";
import messages from "../../messages/en.json";

// Mock getTranslations from next-intl/server
vi.mock("next-intl/server", () => ({
  getTranslations: async (namespace) => {
    return (key) => {
      return messages[namespace]?.[key] || key;
    };
  },
}));

test("Home Page", async () => {
  const PageComponent = await Page();
  render(PageComponent);
  expect(
    screen.getByText("Welcome to Orion Next.js Starter"),
  ).toBeInTheDocument();
});
```

#### Testing Client Components

For Client Components that use hooks like `useTranslations`, `useLocale`, or `useRouter`, you need to wrap your component in `NextIntlClientProvider` and mock the necessary hooks from `next/navigation`.

```tsx
// src/app/page.test.tsx (covering client components within the page)
import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import Page from "./page";
import messages from "../../messages/en.json";

// Mock next/navigation for components using useRouter, usePathname, etc.
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

// Mock getTranslations for the server component part
vi.mock("next-intl/server", () => ({
  getTranslations: async (namespace) => (key) =>
    messages[namespace]?.[key] || key,
}));

test("Home Page with Client Components", async () => {
  const PageComponent = await Page();
  render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {PageComponent}
    </NextIntlClientProvider>,
  );

  // Assert content from both server and client components
  expect(
    screen.getByText("Welcome to Orion Next.js Starter"),
  ).toBeInTheDocument();
  expect(screen.getByLabelText("Language")).toBeInTheDocument();
});
```

## Getting Started

1. Install dependencies:

```bash
yarn install
```

2. Run the development server:

```bash
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `yarn dev` — Start development server
- `yarn build` — Build for production
- `yarn start` — Start production server
- `yarn lint` — Run ESLint
- `yarn typecheck` — TypeScript type checking
- `yarn test`, `yarn test:unit`, `yarn test:e2e` — Tests
- `yarn storybook` — Storybook
- `yarn db:studio` — Drizzle Studio

## Contributing

This project follows conventional commits and code of conduct. Please read our contributing guidelines before submitting pull requests.

## Semantic Release

This project uses semantic release for automated versioning and publishing. The version is automatically bumped based on commit messages following conventional commit format.

### Commit Format

- `fix:` - Patches (0.1.0 → 0.1.1)
- `feat:` - Minor releases (0.1.0 → 0.2.0)
- `BREAKING CHANGE:` - Major releases (0.1.0 → 1.0.0)

### Example Commits

```bash
git commit -m "feat: add new authentication module"
git commit -m "fix: resolve memory leak in data fetcher"
git commit -m "refactor: update component structure with breaking changes

BREAKING CHANGE: This changes the component API"
```

## MSW (Mock Service Worker)

MSW is integrated for local API mocking in development and testing. See `msw/` for handlers and setup.

### Adding New Mocks

To add new API mocks:

1. Create a new handler file in `msw/handlers/` (e.g., `product.ts`)
2. Define your request handlers using MSW's `http` methods:

```ts
// msw/handlers/product.ts
import { http, HttpResponse } from "msw";

export const productHandlers = [
  http.get("/api/products", () => {
    return HttpResponse.json([
      { id: 1, name: "Product 1", price: 9.99 },
      { id: 2, name: "Product 2", price: 19.99 },
    ]);
  }),

  http.get("/api/products/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      id: Number(id),
      name: `Product ${id}`,
      price: 9.99,
    });
  }),
];
```

3. Export the handlers in your file
4. Import and add them to the exports in `msw/handlers/index.ts`

### Using MSW in Components

To enable MSW in your Next.js application during development, call the `initMsw()` function in your main application wrapper or layout:

```ts
// Example in your root layout or App wrapper
import { useEffect } from 'react';
import { initMsw } from '@/lib';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize MSW for API mocking in development
    if (process.env.NODE_ENV === 'development') {
      initMsw();
    }
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### Using MSW in Storybook

In Storybook stories, you can mock API requests using the `parameters.msw.handlers`:

```ts
// stories/ProductList.stories.ts
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { http, HttpResponse } from "msw";
import { ProductList } from "./ProductList";

const meta = {
  title: "Components/ProductList",
  component: ProductList,
  parameters: {
    msw: {
      handlers: [
        http.get("/api/products", () => {
          return HttpResponse.json([
            { id: 1, name: "Sample Product", price: 29.99 },
          ]);
        }),
      ],
    },
  },
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

// Error state story
export const ErrorState: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/products", () => {
          return new HttpResponse(null, { status: 500 });
        }),
      ],
    },
  },
};
```

### Using MSW in Vitest Tests

For Node.js-based unit tests, MSW is automatically configured via `tests/unit/msw.setup.ts`. Create your tests like this:

```ts
// tests/unit/api.test.ts
// @vitest-environment node
import { describe, it, expect } from "vitest";
import { server } from "../tests/unit/msw.setup";
import { http, HttpResponse } from "msw";

describe("API Integration", () => {
  it("should return user data", async () => {
    server.use(
      http.get("/api/users/1", () => {
        return HttpResponse.json({ id: 1, name: "John Doe" });
      }),
    );

    const response = await fetch("/api/users/1");
    const data = await response.json();

    expect(data).toEqual({ id: 1, name: "John Doe" });
  });

  it("should handle error responses", async () => {
    server.use(
      http.get("/api/users/999", () => {
        return new HttpResponse(null, { status: 404 });
      }),
    );

    const response = await fetch("/api/users/999");
    expect(response.status).toBe(404);
  });
});
```

### Running Tests with MSW

- Unit tests with MSW: `yarn test --run tests/unit/`
- Storybook tests with MSW: `yarn test` (includes Storybook integration tests)

## MSW Browser vs Node.js Usage

Mock Service Worker provides two different implementations for different environments:

### Browser Environment (msw/browser)

Use the browser implementation during:

- Development (enables API mocking in the actual browser)
- Component development in Storybook
- Browser-based integration tests
- Manual testing in the development environment

**Example use case:**

```ts
// lib/msw.ts
import { worker } from "../msw/browser";

export const initMsw = async () => {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    await worker.start({
      onUnhandledRequest: "bypass", // Don't log unhandled requests
    });
    console.log("MSW: Mocking enabled");
  }
};
```

### Node.js Environment (msw/node)

Use the Node.js implementation during:

- Unit/integration tests with Vitest
- Server-side rendering tests
- API contract testing
- CI/CD pipelines

**Example use case:**

```ts
// tests/unit/msw.setup.ts
import { setupServer } from "msw/node";
import { handlers } from "../../msw/handlers";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

### Developer Use Case: Full-Stack Development with MSW

Let's follow Maya, a frontend developer working on a user dashboard:

1. **Development Phase**: Maya runs `yarn dev` and MSW browser worker automatically starts in development mode, mocking API calls to `/api/users` and `/api/settings`. She can develop components without waiting for the backend team to implement those endpoints.

2. **Component Storybook**: Maya creates a story for her `UserDashboard` component and uses MSW to mock different states: successful data loading, loading states, error states, and empty states. This allows her to showcase all possible UI states in Storybook.

3. **Unit Testing**: Maya writes unit tests for her data fetching logic, using the Node.js MSW server to mock API responses and verify that her error handling works correctly.

4. **CI/CD Pipeline**: When the code is pushed, the automated tests run with MSW Node.js server, ensuring all components work as expected with mocked API responses.

## License

This project is licensed under the MIT License.
