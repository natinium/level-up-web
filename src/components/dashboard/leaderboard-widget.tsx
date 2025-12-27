"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Medal } from "lucide-react";

import { useTranslations } from "next-intl";

export function LeaderboardWidget() {
  const t = useTranslations("Leaderboard");
  return (
    <div className="rounded-3xl bg-white dark:bg-zinc-900/50 p-6 shadow-sm ring-1 ring-gray-100 dark:ring-zinc-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-gray-900 dark:text-white">
          {t("topStudents")}
        </h3>
        <Medal className="h-5 w-5 text-yellow-400" />
      </div>

      <div className="space-y-4">
        {[
          {
            name: "Sara",
            score: 2450,
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
          },
          {
            name: "Dawit",
            score: 2300,
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dawit",
          },
          {
            name: "Hana",
            score: 2150,
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hana",
          },
          {
            name: "Kirubel",
            score: 2100,
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kirubel",
          },
        ].map((user, i) => (
          <div
            key={i}
            className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800/50 p-2 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="h-10 w-10 border-2 border-white dark:border-zinc-800 shadow-sm">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white ring-2 ring-white dark:ring-black">
                  {i + 1}
                </div>
              </div>
              <div>
                <p className="font-bold text-sm text-gray-800 dark:text-gray-200">
                  {user.name}
                </p>
                <p className="text-[10px] text-gray-400">
                  {t("scholarLevel", { level: 12 })}
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-primary">
              {user.score} XP
            </span>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-3 rounded-xl border border-dashed border-gray-300 dark:border-zinc-700 text-gray-400 text-xs font-bold hover:bg-gray-50 dark:hover:bg-zinc-800/50 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
        {t("viewFull")}
      </button>
    </div>
  );
}
