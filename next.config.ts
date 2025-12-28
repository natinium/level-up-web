import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/**
 * @type {import('next').NextConfig}
 * @description Configuration object for Next.js.
 * This includes settings for various Next.js features and integrations.
 */
const nextConfig: NextConfig = {
  // Disable strict mode to prevent double-firing of useEffect hooks
  // which can cause duplicate API calls during development
  reactStrictMode: false,
  sassOptions: {
    includePaths: ["./src/styles"],
  },
};

export default withNextIntl(nextConfig);
