import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  Button,
  ThemeToggle,
  LanguageSwitcher,
  AnimatedRocket,
} from "@/components/custom";

/**
 * The main landing page of the application.
 *
 * @returns {Promise<React.ReactElement>} The rendered home page.
 */
export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        {/* Top bar with logo and theme/language switchers */}
        <div className="flex w-full justify-between items-center">
          <Image
            className="dark:invert"
            src="/assets/images/logo.svg"
            alt="Orion Starter Logo"
            width={35}
            height={35}
            priority
          />
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {/* Animated rocket image */}
        <div className="flex w-full justify-center">
          <AnimatedRocket />
        </div>

        {/* Page title and description */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {t("title")}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {t("description")}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Button asChild>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              {t("deployButton")}
            </a>
          </Button>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("documentationButton")}
          </a>
        </div>
      </main>
    </div>
  );
}
