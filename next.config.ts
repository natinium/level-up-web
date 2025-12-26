import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Initialize the next-intl plugin for internationalization support.
const withNextIntl = createNextIntlPlugin();

/**
 * @type {import('next').NextConfig}
 * @description Configuration object for Next.js.
 * This includes settings for various Next.js features and integrations.
 */
const nextConfig: NextConfig = {
  /* Add your Next.js configuration options here.
     For example:
     reactStrictMode: true,
     images: {
       domains: ['example.com'],
     },
  */
  sassOptions: {
    includePaths: ["./src/styles"],
  },
};

// Wrap the Next.js configuration with the next-intl plugin to enable i18n routing and features.
export default withNextIntl(nextConfig);
