"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, BookOpen, Trophy, BarChart2, User } from "lucide-react";

export function MobileNav() {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (!pathname) return false;
    const cleanPath = pathname.replace(/^\/(en|am|or)/, "") || "/";
    return cleanPath === href || cleanPath.startsWith(href + "/");
  };

  const navItems = [
    {
      label: "Feed",
      icon: Home,
      href: "/dashboard",
    },
    {
      label: "Tests",
      icon: BookOpen,
      href: "/library",
    },
    {
      label: "Leaderboard",
      icon: Trophy,
      href: "/leaderboard",
    },
    {
      label: "Stats",
      icon: BarChart2,
      href: "/stats",
    },
    {
      label: "Profile",
      icon: User,
      href: "/profile",
    },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-lg border-t border-gray-200 dark:border-zinc-800 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = isActiveLink(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1 active:scale-95 transition-all",
                isActive
                  ? "text-primary dark:text-violet-500"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",
              )}
            >
              <item.icon
                size={24}
                strokeWidth={isActive ? 2.5 : 2}
                className={cn("transition-transform", isActive && "scale-110")}
              />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
