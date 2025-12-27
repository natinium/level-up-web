"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutGrid,
  Library,
  Wallet,
  BarChart2,
  Users,
  LogOut,
  Flame,
} from "lucide-react";
import { signOut } from "@/lib/auth/auth-client";
import { toast } from "sonner";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutGrid,
      href: "/dashboard",
    },
    { id: "library", label: "My Library", icon: Library, href: "/library" },
    { id: "wallet", label: "XP Wallet", icon: Wallet, href: "/wallet" },
    { id: "stats", label: "Statistics", icon: BarChart2, href: "/stats" },
    { id: "leaderboard", label: "Leaderboard", icon: Users, href: "/teams" },
  ];

  const handleSignOut = async () => {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed out successfully");
            router.push("/sign-in");
          },
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      className={cn(
        "pb-12 h-screen flex flex-col justify-between bg-white dark:bg-black border-r border-gray-100 dark:border-gray-800",
        className,
      )}
    >
      <div className="space-y-4 py-4">
        <div className="px-6 py-2 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-xl font-bold text-white shadow-lg shadow-primary/20">
            E
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            EthioScholar
          </h2>
        </div>
        <div className="px-3 py-2">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const isActive =
                pathname === item.href || pathname?.startsWith(item.href + "/");
              return (
                <Link key={item.id} href={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-3 rounded-2xl px-4 py-6 font-medium transition-all hover:bg-gray-50 dark:hover:bg-gray-900/50",
                      isActive &&
                        "bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary/90 hover:text-white dark:bg-primary dark:text-white",
                    )}
                  >
                    <item.icon
                      className={cn(
                        "h-5 w-5",
                        isActive ? "text-white" : "text-gray-400",
                      )}
                    />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-3 py-4 space-y-4">
        {/* Daily Streak Widget */}
        <div className="mx-3 rounded-3xl bg-orange-50 dark:bg-orange-950/20 p-4 border border-orange-100 dark:border-orange-900/40">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-100 rounded-full text-orange-500">
              <Flame className="h-5 w-5 fill-orange-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                Daily Streak
              </p>
              <p className="text-lg font-black text-gray-900 dark:text-white">
                12 Days
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            You&apos;re on fire! 🔥 Keep learning to maintain your streak.
          </p>
        </div>

        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-2xl px-6 py-6"
          onClick={handleSignOut}
        >
          <LogOut className="h-5 w-5" />
          Log Out
        </Button>
      </div>
    </div>
  );
}
