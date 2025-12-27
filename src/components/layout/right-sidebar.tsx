"use client";

import { StatsWidget } from "@/components/dashboard/stats-widget";
import { LeaderboardWidget } from "@/components/dashboard/leaderboard-widget";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "@/lib/auth/auth-client";
import { useTranslations } from "next-intl";

export function RightSidebar() {
  const { data: session } = useSession();
  const tCommon = useTranslations("Common");
  const tLeaderboard = useTranslations("Leaderboard");

  return (
    <aside className="hidden xl:flex flex-col w-80 fixed right-0 top-0 h-screen p-6 overflow-y-auto border-l border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-black z-20">
      {/* Profile Snippet */}
      <div className="flex items-center gap-3 justify-end mb-8">
        <div className="text-right">
          <p className="font-bold text-sm text-gray-900 dark:text-white">
            {session?.user?.name || tCommon("guestUser")}
          </p>
          <p className="text-xs text-gray-400">
            {tLeaderboard("scholarLevel", { level: 12 })}
          </p>
        </div>
        <Avatar className="h-10 w-10 border-2 border-white dark:border-zinc-800 shadow-sm cursor-pointer hover:scale-105 transition-transform">
          <AvatarImage
            src={
              session?.user?.image ||
              "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            }
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      <div className="space-y-6">
        <StatsWidget />
        <LeaderboardWidget />
      </div>
    </aside>
  );
}
