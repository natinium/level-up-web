/**
 * @description PostCSS configuration for the project.
 * This configuration is used by tools like Next.js to process CSS.
 */
const config = {
  plugins: {
    // Integrates Tailwind CSS v4 with PostCSS.
    // This plugin is responsible for processing Tailwind directives and optimizing the CSS.
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

export default config;
