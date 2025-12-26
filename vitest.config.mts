import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
/**
 * @description Vitest configuration for the project.
 * This configuration sets up Vitest for unit and integration testing,
 * including environment, setup files, and test file patterns.
 */
export default defineConfig({
  plugins: [
    // Enables React support for Vitest, allowing testing of React components.
    react(),
    // Resolves TypeScript path aliases in Vitest tests.
    tsconfigPaths(),
  ],
  test: {
    // Enables global APIs for tests (e.g., `describe`, `it`, `expect`).
    globals: true,
    // Sets the test environment to JSDOM, simulating a browser environment.
    environment: "jsdom",
    // Specifies setup files to run before each test suite.
    setupFiles: ["./vitest.setup.ts", "./msw/msw.setup.ts"],
    // Defines patterns for test files to include.
    include: [
      "src/app/**/*.test.{ts,tsx}",
      "src/lib/**/*.test.{ts,tsx}",
      "src/components/**/*.test.{ts,tsx}",
    ],
    // Defines patterns for files and directories to exclude from testing.
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache", "tests-e2e"],
  },
});
