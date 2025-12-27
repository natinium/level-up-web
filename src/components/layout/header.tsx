"use client";

import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "@/lib/auth/auth-client";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export function Header() {
  const { data: session } = useSession();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Header");
  const tCommon = useTranslations("Common");

  const handleLanguageChange = (newLocale: string) => {
    // Simple replacement for now, assumes path starts with locale.
    // Robust solution uses next-intl navigation/link.
    const segments = pathname.split("/");
    if (["en", "am", "or"].includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.push(segments.join("/"));
  };

  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-gray-100 bg-white/80 px-8 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-extrabold text-gray-900 dark:text-white">
            {t("greeting", {
              name: session?.user?.name?.split(" ")[0] || "Scholar",
            })}
          </h1>
          <p className="hidden text-xs text-gray-500 md:block">
            {t("subtitle")}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden w-96 md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder={tCommon("searchPlaceholder")}
              className="rounded-xl border-gray-200 bg-gray-50 pl-10 focus-visible:ring-primary dark:border-zinc-800 dark:bg-zinc-900"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={locale}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="h-9 rounded-lg border-none bg-gray-100 text-xs font-bold text-gray-600 focus:ring-0 dark:bg-zinc-800 dark:text-gray-300 cursor-pointer"
            >
              <option value="en">🇺🇸 EN</option>
              <option value="am">🇪🇹 AM</option>
              <option value="or">🇪🇹 OR</option>
            </select>

            <Button
              variant="outline"
              size="icon"
              className="relative rounded-xl border-gray-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <Bell className="h-5 w-5 text-gray-400" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-black"></span>
            </Button>

            <ThemeToggle />

            <div className="md:hidden">
              <Avatar className="h-9 w-9 border cursor-pointer">
                <AvatarImage src={session?.user?.image || ""} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
