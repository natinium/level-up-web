import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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

export default withNextIntl(nextConfig);
