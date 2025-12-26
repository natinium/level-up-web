import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

// Define the supported locales
const locales = ["en", "fr"];

export default getRequestConfig(async () => {
  // Get the locale from cookies, default to 'en'
  const store = await cookies();
  const localeFromCookie = store.get("locale")?.value;

  // Validate the locale and ensure it's always a string
  const locale = locales.includes(localeFromCookie || "")
    ? localeFromCookie || "en"
    : "en";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    timeZone: "America/New_York",
  };
});
