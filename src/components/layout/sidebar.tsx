"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { signOut } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  LayoutGrid,
  Library,
  Wallet,
  BarChart2,
  Users,
  Zap,
  Flame,
  User,
  Settings,
  LogOut,
  Award,
} from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const t = useTranslations("Sidebar");
  const router = useRouter();
  const locale = useLocale();

  // Helper to check active state regardless of locale
  const isActiveLink = (href: string) => {
    if (!pathname) return false;
    // Remove locale prefix (e.g., /en, /am, /or)
    const cleanPath = pathname.replace(/^\/(en|am|or)/, "") || "/";
    return cleanPath === href || cleanPath.startsWith(href + "/");
  };

  const menuItems = [
    {
      id: "dashboard",
      label: t("dashboard"),
      icon: LayoutGrid,
      href: "/dashboard",
    },
    { id: "library", label: t("library"), icon: Library, href: "/library" },
    {
      id: "national-exam",
      label: t("nationalExam"),
      icon: Award,
      href: "/national-exam",
    },
    { id: "wallet", label: t("wallet"), icon: Wallet, href: "/wallet" },
    { id: "stats", label: t("statistics"), icon: BarChart2, href: "/stats" },
    { id: "teams", label: t("teams"), icon: Users, href: "/teams" },
    { id: "profile", label: t("profile"), icon: User, href: "/profile" },
    { id: "settings", label: t("settings"), icon: Settings, href: "/settings" },
  ];

  return (
    <div
      className={cn(
        "hidden md:flex flex-col w-64 bg-white dark:bg-black h-screen fixed left-0 top-0 border-r border-gray-100 dark:border-zinc-800 p-6 z-20",
        className,
      )}
    >
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
          L
        </div>
        <span className="font-bold text-xl tracking-tight text-gray-800 dark:text-white">
          LevelUP
        </span>
      </div>

      <div className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const isActive = isActiveLink(item.href);
          return (
            <Link key={item.id} href={item.href} className="block w-full">
              <button
                className={cn(
                  "flex items-center gap-4 w-full px-4 py-3 rounded-2xl transition-all cursor-pointer",
                  isActive
                    ? "bg-primary dark:bg-violet-600 text-white shadow-lg shadow-primary/30"
                    : "text-gray-400 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-zinc-800 dark:text-gray-500",
                )}
              >
                <item.icon size={22} />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto space-y-4">
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-4 rounded-3xl border border-blue-100 dark:border-blue-900/30 relative overflow-hidden group cursor-pointer">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-primary font-bold text-xs mb-1">
              <Zap size={14} /> {t("dailyStreak")}
            </div>
            <h4 className="font-bold text-gray-800 dark:text-white">
              7 Days Fire!
            </h4>
            <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">
              {t("streakMessage")}
            </p>
          </div>
          <div className="absolute -right-4 -bottom-4 text-blue-200 dark:text-blue-800 opacity-50 group-hover:scale-110 transition-transform">
            <Flame size={80} />
          </div>
        </div>

        <button
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
          className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-gray-400 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-zinc-800 dark:text-gray-500 transition-all cursor-pointer"
        >
          <LogOut size={22} />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
}
