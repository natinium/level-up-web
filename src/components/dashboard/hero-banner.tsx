"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export function HeroBanner() {
  const t = useTranslations("Hero");
  const locale = useLocale();

  return (
    <div className="relative w-full py-8 rounded-[2.5rem] overflow-hidden shadow-lg shadow-primary/20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

      <div className="relative z-10 px-10 w-2/3 text-white flex flex-col justify-center h-full">
        <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block self-start">
          {t("termFinals")}
        </span>
        <h2 className="text-4xl font-black mb-2 leading-tight">{t("title")}</h2>
        <p className="text-blue-100 mb-6 text-sm max-w-md">
          {t("description")}
        </p>
        <Link
          href={`/${locale}/national-exam`}
          className="bg-white text-primary dark:bg-white dark:text-indigo-600 dark:hover:bg-gray-200 px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 shadow-lg transition-transform hover:scale-105 flex items-center gap-2 cursor-pointer self-start"
        >
          {t("startSprint")} <ArrowRight size={16} />
        </Link>
      </div>

      {/* 3D Illustration Placeholder */}
      <div className="absolute right-10 bottom-0 transform translate-y-4 hidden md:block">
        <img
          src="https://api.dicebear.com/7.x/bottts/svg?seed=Felix&backgroundColor=transparent"
          className="w-56 h-56 drop-shadow-2xl"
          alt="Mascot"
        />
      </div>
    </div>
  );
}
