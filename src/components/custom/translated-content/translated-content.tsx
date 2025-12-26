"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/custom";

/**
 * A component that displays translated content for the home page, including a title, description, and action buttons.
 * It uses `next-intl` for translation.
 *
 * @returns {React.ReactElement} The rendered translated content component.
 */
export function TranslatedContent() {
  const t = useTranslations("HomePage");

  return (
    <>
      {/* TEXT CONTENT (Original structure maintained) */}
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          {t("title")}
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {t("description")}
        </p>
      </div>

      {/* BUTTONS (Original structure maintained) */}
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
    </>
  );
}
