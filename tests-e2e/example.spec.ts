import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Orion Next.js Starter/);
});

test("has heading", async ({ page }) => {
  await page.goto("/");

  // Expects page to have a heading with the new welcome message.
  await expect(
    page.getByRole("heading", {
      name: "Welcome to Orion Next.js Starter",
    }),
  ).toBeVisible();
});
