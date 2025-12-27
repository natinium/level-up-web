import { Button } from "@/components/ui/button";
import { Wallet, TrendingUp, History, CreditCard } from "lucide-react";

export default function WalletPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900">XP Wallet</h1>

      {/* Balance Card */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-indigo-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-indigo-200 font-medium mb-2 flex items-center gap-2">
              <Wallet className="h-5 w-5" /> Total Balance
            </p>
            <h2 className="text-5xl font-black tracking-tight mb-4">
              2,450 XP
            </h2>
            <div className="flex gap-3">
              <Button className="bg-white text-indigo-600 hover:bg-white/90 rounded-xl font-bold">
                Redeem Rewards
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-xl"
              >
                View Tiers
              </Button>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 w-full md:w-64">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">This Week</span>
              <span className="text-green-300 flex items-center gap-1 text-xs font-bold">
                <TrendingUp className="h-3 w-3" /> +12%
              </span>
            </div>
            <div className="h-24 flex items-end justify-between gap-1">
              {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-white/30 rounded-t-sm hover:bg-white/50 transition-colors cursor-pointer"
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div>
        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
          <History className="h-5 w-5 text-gray-400" /> Recent Activity
        </h3>
        <div className="bg-white rounded-[2rem] p-2 shadow-sm border border-gray-100 divide-y divide-gray-50">
          {[
            {
              title: "Completed Algebra Quiz",
              date: "Today, 10:23 AM",
              amount: "+150 XP",
              type: "earn",
            },
            {
              title: "Daily Streak Bonus",
              date: "Today, 08:00 AM",
              amount: "+50 XP",
              type: "earn",
            },
            {
              title: "Unlocked 'Scholar' Avatar",
              date: "Yesterday",
              amount: "-500 XP",
              type: "spend",
            },
          ].map((tx, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl ${tx.type === "earn" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
                >
                  {tx.type === "earn" ? (
                    <TrendingUp className="h-5 w-5" />
                  ) : (
                    <CreditCard className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{tx.title}</p>
                  <p className="text-xs text-gray-400">{tx.date}</p>
                </div>
              </div>
              <span
                className={`font-bold ${tx.type === "earn" ? "text-green-600" : "text-gray-900"}`}
              >
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
