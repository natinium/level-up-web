"use client";

import { useSession, signOut } from "@/lib/auth/auth-client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { StatsWidget } from "@/components/dashboard/stats-widget";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  MapPin,
  Mail,
  Trophy,
  Medal,
  Star,
  LogOut,
} from "lucide-react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const locale = useLocale();
  const router = useRouter();

  return (
    <div className="space-y-8 p-4 md:p-8 max-w-5xl mx-auto h-full overflow-y-auto">
      {/* Profile Header */}
      <div className="relative rounded-[2.5rem] bg-white dark:bg-zinc-900/50 p-6 md:p-8 shadow-sm ring-1 ring-gray-100 dark:ring-zinc-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10"></div>

        <div className="relative flex flex-col items-center gap-6 pt-10">
          <div className="relative">
            <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-white dark:border-zinc-900 shadow-xl">
              <AvatarImage
                src={
                  session?.user?.image ||
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=Abebe"
                }
              />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-2 right-2 bg-green-500 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-white dark:border-zinc-900"></div>
          </div>

          <div className="text-center mb-2">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2">
              {session?.user?.name || "Abebe B."}
            </h1>
            <div className="flex flex-col gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
              <span className="flex items-center justify-center gap-1">
                <MapPin size={14} /> Addis Ababa, Ethiopia
              </span>
              <span className="flex items-center justify-center gap-1">
                <CalendarDays size={14} /> Joined Sept 2024
              </span>
              <span className="flex items-center justify-center gap-1">
                <Mail size={14} /> {session?.user?.email}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
            <Button className="rounded-xl font-bold bg-primary text-white hover:bg-primary/90 flex-1">
              Edit Profile
            </Button>
            <Button
              variant="outline"
              className="rounded-xl font-bold border-gray-200 dark:border-zinc-700 flex-1"
            >
              Share Profile
            </Button>
          </div>

          <Button
            variant="outline"
            className="rounded-xl font-bold border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 w-full max-w-xs"
            onClick={async () => {
              await signOut({
                fetchOptions: {
                  onSuccess: () => {
                    toast.success("Signed out successfully");
                    router.push(`/${locale}/sign-in`);
                  },
                  onError: (ctx) => {
                    toast.error(ctx.error?.message || "Sign out failed");
                  },
                },
              });
            }}
          >
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </div>

      {/* Language Selection */}
      <div className="rounded-[2rem] bg-white dark:bg-zinc-900/50 p-6 shadow-sm ring-1 ring-gray-100 dark:ring-zinc-800">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white flex items-center gap-2">
          <span className="text-blue-500">🌐</span> Language Settings
        </h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant={locale === "en" ? "default" : "outline"}
            className={`rounded-xl font-bold flex-1 ${locale === "en" ? "bg-primary hover:bg-primary/90" : ""}`}
            onClick={() => router.push("/en/profile")}
          >
            English
          </Button>
          <Button
            variant={locale === "am" ? "default" : "outline"}
            className={`rounded-xl font-bold flex-1 ${locale === "am" ? "bg-primary hover:bg-primary/90" : ""}`}
            onClick={() => router.push("/am/profile")}
          >
            አማርኛ
          </Button>
          <Button
            variant={locale === "or" ? "default" : "outline"}
            className={`rounded-xl font-bold flex-1 ${locale === "or" ? "bg-primary hover:bg-primary/90" : ""}`}
            onClick={() => router.push("/or/profile")}
          >
            Oromoo
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Stats Column */}
        <div className="space-y-8">
          {/* Using existing stats widget logic but customized wrapper */}
          <div className="rounded-[2rem] bg-white dark:bg-zinc-900/50 p-6 shadow-sm ring-1 ring-gray-100 dark:ring-zinc-800">
            <h3 className="font-bold text-lg mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <Trophy className="text-yellow-500" /> Achievements
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/30">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-full text-yellow-600">
                  <Medal size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-800 dark:text-gray-200">
                    Math Whiz
                  </p>
                  <p className="text-xs text-gray-500">Top 1% in Algebra</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600">
                  <Star size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-800 dark:text-gray-200">
                    Week Streak
                  </p>
                  <p className="text-xs text-gray-500">7 Days Learning</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-64">
            <StatsWidget />
          </div>
        </div>

        {/* Main Content Column */}
        <div className="space-y-8">
          <div className="rounded-[2rem] bg-white dark:bg-zinc-900/50 p-6 md:p-8 shadow-sm ring-1 ring-gray-100 dark:ring-zinc-800">
            <h3 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">
              Recent Activity
            </h3>
            <div className="space-y-6">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start pb-6 border-b border-gray-100 dark:border-zinc-800 last:border-0 last:pb-0"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-primary font-bold">
                    {i === 0 ? "95" : i === 1 ? "80" : "65"}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">
                      Completed &quot;Linear Functions&quot; Quiz
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Scored 95% • +120 XP • 2 hours ago
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary" className="rounded-lg text-xs">
                        Math
                      </Badge>
                      <Badge variant="outline" className="rounded-lg text-xs">
                        Grade 12
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
