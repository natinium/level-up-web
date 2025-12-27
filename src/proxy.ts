import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "am", "or"],

  // Used when no locale matches
  defaultLocale: "en",
});

export function proxy(request: NextRequest) {
  // Use next-intl middleware to handle i18n routing
  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(am|en|or)/:path*"],
};
