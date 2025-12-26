"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * A language switcher component that allows users to change the application's locale.
 * It updates a cookie and refreshes the page to apply the new language.
 *
 * @returns {React.ReactElement} The rendered language switcher component.
 */
export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("LanguageSwitcher");
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    // Update the locale cookie
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`; // 1 year

    // Refresh the page to apply the new locale
    router.refresh();
  };

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="language-select" className="text-sm font-medium">
        {t("label")}
      </label>
      <Select value={locale} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[80px] h-8">
          <SelectValue placeholder="Lang" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="fr">FR</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
