import { Button } from "@/components/ui/button";
import { Trophy, Medal, Users } from "lucide-react";

export default function TeamsPage() {
  const leaders = [
    {
      name: "Abebe B.",
      xp: 12500,
      avatar: "bg-blue-100 dark:bg-blue-900/30",
      medal: "🥇",
    },
    {
      name: "Sara M.",
      xp: 11200,
      avatar: "bg-pink-100 dark:bg-pink-900/30",
      medal: "🥈",
    },
    {
      name: "Dawit K.",
      xp: 10800,
      avatar: "bg-green-100 dark:bg-green-900/30",
      medal: "🥉",
    },
    {
      name: "Hana T.",
      xp: 9500,
      avatar: "bg-orange-100 dark:bg-orange-900/30",
      medal: "4",
    },
    {
      name: "Kirubel",
      xp: 9200,
      avatar: "bg-indigo-100 dark:bg-indigo-900/30",
      medal: "5",
    },
  ];

  return (
    <div className="p-8 space-y-8 h-full overflow-y-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Leaderboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Compete with friends and earn rewards.
          </p>
        </div>
        <Button className="rounded-xl font-bold bg-white dark:bg-zinc-900 text-gray-900 dark:text-white border border-gray-200 dark:border-zinc-800">
          <Users className="h-4 w-4 mr-2" /> Create Team
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top 3 Podium (Visual only for now, just list) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white dark:bg-zinc-900 rounded-[2rem] shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden">
            <div className="p-6 border-b border-gray-50 dark:border-zinc-800 flex items-center justify-between">
              <h3 className="font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                <Trophy className="h-5 w-5 text-yellow-500" /> Global Ranking
              </h3>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary font-bold bg-primary/5 dark:bg-primary/10"
                >
                  Weekly
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 dark:text-gray-500"
                >
                  All Time
                </Button>
              </div>
            </div>
            <div className="divide-y divide-gray-50 dark:divide-zinc-800">
              {leaders.map((leader, i) => (
                <div
                  key={i}
                  className={`p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors ${i < 3 ? "bg-gradient-to-r from-yellow-50/50 dark:from-yellow-900/10 to-transparent" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 font-bold text-gray-400 dark:text-gray-500 text-center">
                      {leader.medal}
                    </div>
                    <div
                      className={`w-10 h-10 rounded-full ${leader.avatar} flex items-center justify-center font-bold text-gray-600 dark:text-gray-300`}
                    >
                      {leader.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        {leader.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Level {12 - i}
                      </p>
                    </div>
                  </div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {leader.xp.toLocaleString()} XP
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-[2rem] p-6 text-white text-center">
            <Medal className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Your Rank</h3>
            <p className="text-indigo-200 mb-6 text-sm">
              You are in the top 15% this week!
            </p>
            <div className="text-4xl font-black mb-2">#42</div>
            <p className="text-xs text-indigo-300">150 XP to reach #40</p>
          </div>
        </div>
      </div>
    </div>
  );
}
