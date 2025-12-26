/**
 * @description Commitlint configuration for the project.
 * This configuration enforces conventional commit messages,
 * ensuring a consistent and readable commit history.
 *
 * @see https://commitlint.js.org/
 */
const config = {
  // Extends the conventional commit configuration, which defines
  // a set of rules for commit message formats (e.g., feat: add new feature).
  extends: ["@commitlint/config-conventional"],
};

export default config;
