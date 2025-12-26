/**
 * @description Stylelint configuration for the project.
 * This configuration enforces consistent styling rules for CSS/SCSS files.
 * @type {import("stylelint").Config}
 */
const config = {
  // Extends the standard Stylelint configuration.
  extends: ["stylelint-config-standard"],
  rules: {
    // Configures `at-rule-no-unknown` to ignore specific at-rules used by Tailwind CSS and other custom directives.
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "layer",
          "config",
          "theme",
          "screen",
          "variants",
          "responsive",
          "custom-variant",
          "container",
        ],
      },
    ],
    // Enforces a specific notation for `@import` rules.
    "import-notation": "string",
    // Defines a pattern for class selectors, allowing kebab-case and Storybook-specific classes.
    "selector-class-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$|^storybook-.*$",
    ],
  },
};

export default config;
