import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import Page from "./page";
import messages from "../../messages/en.json";

// Mock getTranslations from next-intl/server
vi.mock("next-intl/server", () => ({
  getTranslations: async (namespace: keyof typeof messages) => {
    return (key: string) => {
      // Basic key lookup for testing purposes
      const namespaceMessages = messages[namespace];
      if (namespaceMessages && key in namespaceMessages) {
        return namespaceMessages[key as keyof typeof namespaceMessages];
      }
      return key;
    };
  },
}));

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

test("Home Page", async () => {
  // Page is an async server component, so we need to await it
  const PageComponent = await Page();
  render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {PageComponent}
    </NextIntlClientProvider>,
  );

  // Test for the main heading
  expect(
    screen.getByText("Welcome to Orion Next.js Starter"),
  ).toBeInTheDocument();

  // Test for some key content
  expect(
    screen.getByText(
      "Your production-ready starter template with all essential features pre-configured. Get started quickly with the latest Next.js 16, TypeScript, Tailwind CSS, and more.",
    ),
  ).toBeInTheDocument();
  expect(screen.getByText("Deploy Now")).toBeInTheDocument();
  expect(screen.getByText("Documentation")).toBeInTheDocument();
});
