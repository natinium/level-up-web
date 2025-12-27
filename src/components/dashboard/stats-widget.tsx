"use client";

import { Card } from "@/components/ui/card";
import { Trophy, Target, Zap } from "lucide-react";

export function StatsWidget() {
  return (
    <Card className="overflow-hidden rounded-3xl border-none bg-indigo-900 p-6 text-white shadow-xl shadow-indigo-900/20 relative">
      <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="relative z-10">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          Weekly Progress
        </h3>

        <div className="flex items-center justify-between mb-8">
          <div className="relative h-24 w-24">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-indigo-800"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                strokeDasharray="75, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-xl font-bold">75%</span>
            </div>
          </div>
          <div className="text-right space-y-2">
            <div>
              <p className="text-xs text-indigo-300">Questions Solved</p>
              <p className="text-xl font-bold">142</p>
            </div>
            <div>
              <p className="text-xs text-indigo-300">Accuracy</p>
              <p className="text-xl font-bold text-green-400">88%</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors cursor-pointer border border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-yellow-400/20 rounded-lg text-yellow-400">
                <Trophy className="h-4 w-4" />
              </div>
              <span className="font-medium text-sm">Top 5% in Math</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors cursor-pointer border border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-green-400/20 rounded-lg text-green-400">
                <Target className="h-4 w-4" />
              </div>
              <span className="font-medium text-sm">Goal Reached</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
