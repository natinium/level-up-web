"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "@/lib/auth/auth-client";
import { useTranslations } from "next-intl";
import { Trophy } from "lucide-react";

export function RightSidebar() {
  const { data: session } = useSession();
  const tCommon = useTranslations("Common");
  const tLeaderboard = useTranslations("Leaderboard");

  return (
    <aside className="hidden xl:flex flex-col col-span-3 w-80 fixed right-0 top-0 h-screen p-6 border-l border-gray-100 dark:border-zinc-800 bg-white dark:bg-black z-20">
      {/* Profile Snippet */}
      <div className="flex items-center gap-3 justify-end mb-4 shrink-0">
        <div className="text-right">
          <p className="font-bold text-sm text-gray-900 dark:text-white">
            {session?.user?.name || "Abebe B."}
          </p>
          <p className="text-xs text-gray-400">Level 12 Scholar</p>
        </div>
        <Avatar className="h-10 w-10 border-2 border-white dark:border-zinc-800 shadow-sm bg-blue-100">
          <AvatarImage
            src={
              session?.user?.image ||
              "https://api.dicebear.com/7.x/avataaars/svg?seed=Abebe"
            }
          />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-6 flex-1 min-h-0">
        {/* Stats Widget */}
        <div className="bg-white dark:bg-zinc-900/50 rounded-[2rem] p-6 shadow-sm shadow-black/5 ring-1 ring-gray-100 dark:ring-zinc-800 shrink-0">
          <h4 className="font-bold text-gray-800 dark:text-white mb-6">
            Global Statistic
          </h4>
          <div className="relative w-40 h-40 mx-auto">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="20"
                fill="transparent"
                className="text-gray-100 dark:text-zinc-800"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="20"
                fill="transparent"
                strokeDasharray="440"
                strokeDashoffset="110"
                strokeLinecap="round"
                className="text-primary"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-gray-800 dark:text-white">
                75%
              </span>
              <span className="text-[10px] text-gray-400 uppercase font-bold">
                Accuracy
              </span>
            </div>
          </div>
          <div className="mt-6 flex justify-between text-xs text-gray-500 font-medium">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-primary"></div> Math
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-secondary"></div> Phys
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-accent"></div> Bio
            </div>
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="bg-white dark:bg-zinc-900/50 rounded-[2rem] p-6 shadow-sm shadow-black/5 ring-1 ring-gray-100 dark:ring-zinc-800 flex flex-col flex-1 min-h-0">
          <div className="flex justify-between items-center mb-4 shrink-0">
            <h4 className="font-bold text-gray-800 dark:text-white">
              Top Scholars
            </h4>
            <Trophy className="text-yellow-500" size={16} />
          </div>
          <div className="space-y-4 overflow-y-auto no-scrollbar flex-1">
            {[
              { name: "Sara", score: 2450 },
              { name: "Dawit", score: 2300 },
              { name: "Hana", score: 2150 },
              { name: "Kirubel", score: 2100 },
              { name: "Yared", score: 2050 },
              { name: "Helen", score: 1900 },
            ].map((user, i) => (
              <div
                key={i}
                className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800 p-2 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div
                      className={`absolute -left-2 top-1/2 -translate-y-1/2 text-[10px] font-bold w-4 text-center ${i === 0 ? "text-yellow-500" : i === 1 ? "text-gray-400" : i === 2 ? "text-orange-400" : "text-gray-300"}`}
                    >
                      {i + 1}
                    </div>
                    <Avatar className="h-10 w-10 bg-gray-100 dark:bg-zinc-800 ml-3">
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                      />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-800 dark:text-white">
                      {user.name}
                    </p>
                    <p className="text-[10px] text-gray-400">
                      Level 12 Scholar
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-primary">
                  {user.score} XP
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-3 rounded-xl border border-dashed border-gray-300 dark:border-zinc-700 text-gray-400 text-xs font-bold hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-gray-600 dark:hover:text-gray-300 transition-colors shrink-0">
            View Full Leaderboard
          </button>
        </div>
      </div>
    </aside>
  );
}
