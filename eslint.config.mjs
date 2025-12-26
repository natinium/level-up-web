// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/**
 * @description ESLint configuration for the project.
 * This configuration extends from Next.js core web vitals and TypeScript configurations,
 * and includes Storybook specific rules.
 */
const eslintConfig = defineConfig([
  // Apply Next.js core web vitals rules.
  ...nextVitals,
  // Apply Next.js TypeScript specific rules.
  ...nextTs,
  // Apply recommended Storybook rules.
  storybook.configs["flat/recommended"],
  {
    // Ignore the .storybook directory from default ESLint processing,
    // as Storybook has its own linting configuration.
    ignores: ["!.storybook"],
  },
  // Override default ignores of eslint-config-next to include additional patterns.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**", // Next.js build output directory.
    "out/**", // Next.js export output directory.
    "build/**", // Generic build output directory.
    "next-env.d.ts", // Next.js environment declaration file.
  ]),
]);

export default eslintConfig;
