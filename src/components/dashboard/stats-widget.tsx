"use client";

import { Trophy, Target, Sparkles, Zap } from "lucide-react";
import { auth } from "@/lib/auth/auth";
import { useSession } from "@/lib/auth/auth-client";

import { useTranslations } from "next-intl";

export function StatsWidget() {
  const { data: session } = useSession();
  const t = useTranslations("Stats");

  return (
    <div className="rounded-3xl bg-white dark:bg-zinc-900/50 p-6 shadow-sm ring-1 ring-gray-100 dark:ring-zinc-800 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-gray-900 dark:text-white">
          {t("yourProgress")}
        </h3>
        <select className="text-xs bg-gray-50 dark:bg-zinc-800 dark:text-gray-300 border-none rounded-lg px-2 py-1 font-medium text-gray-500 focus:ring-0 cursor-pointer">
          <option>{t("weekly")}</option>
          <option>{t("monthly")}</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-white dark:bg-indigo-900/50 rounded-lg shadow-sm">
              <Sparkles className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
            </div>
            <span className="text-xs font-bold text-indigo-400 dark:text-indigo-300">
              {t("xpEarned")}
            </span>
          </div>
          <p className="text-2xl font-black text-indigo-900 dark:text-white">
            2,450
          </p>
          <p className="text-[10px] font-medium text-indigo-400 dark:text-indigo-300 mt-1">
            {t("topStudents", { percent: 5 })}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-white dark:bg-emerald-900/50 rounded-lg shadow-sm">
              <Target className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
            </div>
            <span className="text-xs font-bold text-emerald-400 dark:text-emerald-300">
              {t("accuracy")}
            </span>
          </div>
          <p className="text-2xl font-black text-emerald-900 dark:text-white">
            88%
          </p>
          <p className="text-[10px] font-medium text-emerald-400 dark:text-emerald-300 mt-1">
            {t("fromLastWeek", { change: "+12" })}
          </p>
        </div>

        <div className="col-span-2 p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/20">
              {session?.user?.name?.[0] || "U"}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                {t("level", { level: 12 })}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {t("masterStudent")}
              </p>
            </div>
          </div>
          <div className="w-24 h-2 bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 w-[70%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
