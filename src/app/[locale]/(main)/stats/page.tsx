import { StatsWidget } from "@/components/dashboard/stats-widget";
import { Zap, Target, Trophy, Brain } from "lucide-react";

export default function StatsPage() {
  return (
    <div className="p-8 space-y-8 h-full overflow-y-auto">
      <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
        Your Statistics
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <StatsWidget />
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              label: "Total Questions",
              value: "1,240",
              icon: Brain,
              color: "text-purple-600 dark:text-purple-400",
              bg: "bg-purple-100 dark:bg-purple-900/20",
            },
            {
              label: "Hours Studied",
              value: "48h",
              icon: Zap,
              color: "text-amber-600 dark:text-amber-400",
              bg: "bg-amber-100 dark:bg-amber-900/20",
            },
            {
              label: "Accuracy Rate",
              value: "88%",
              icon: Target,
              color: "text-green-600 dark:text-green-400",
              bg: "bg-green-100 dark:bg-green-900/20",
            },
            {
              label: "Achievements",
              value: "14",
              icon: Trophy,
              color: "text-blue-600 dark:text-blue-400",
              bg: "bg-blue-100 dark:bg-blue-900/20",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] shadow-sm border border-gray-100 dark:border-zinc-800 flex items-center gap-4"
            >
              <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
                <p className="text-2xl font-black text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
        <h3 className="font-bold text-gray-900 dark:text-white mb-6">
          Learning Activity
        </h3>
        <div className="h-64 flex items-end justify-between gap-2">
          {Array.from({ length: 14 }).map((_, i) => {
            const height = ((i * 37) % 80) + 20;
            return (
              <div key={i} className="flex flex-col items-center gap-2 w-full">
                <div
                  className="w-full bg-primary/10 dark:bg-primary/20 rounded-t-xl hover:bg-primary transition-colors cursor-pointer group relative"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {height}m
                  </div>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                  {["M", "T", "W", "T", "F", "S", "S"][i % 7]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
