"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useSession } from "@/lib/auth/auth-client";
import { HeroBanner, SubjectCard } from "@/components/dashboard";
import { getGrades, getSubjects } from "@/lib/api";
import { ActivityChart } from "@/components/dashboard/activity-chart";
import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Grade, Subject } from "@/types/content";
import { ThemeToggle } from "@/components/theme-toggle";
import { useRouter, usePathname } from "next/navigation";

export default function DashboardPage() {
  const { data: session } = useSession();
  const t = useTranslations("Dashboard");
  const tCommon = useTranslations("Common"); // Added for common translations
  const [grades, setGrades] = useState<Grade[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split("/");
    // Assuming path is like /[locale]/... or /...
    // If segments[1] is a locale, replace it. Otherwise prepend.
    if (["en", "am", "or"].includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.push(segments.join("/"));
  };

  useEffect(() => {
    async function initData() {
      try {
        const gradesData = await getGrades();
        setGrades(gradesData);

        // Default to Grade 12 or first available
        const defaultGrade =
          gradesData.find((g) => g.name === "12") || gradesData[0];
        if (defaultGrade) {
          setSelectedGrade(defaultGrade.id);
        }
      } catch (error) {
        console.error("Failed to load initial data", error);
      }
    }
    initData();
  }, []);

  useEffect(() => {
    async function loadSubjects() {
      if (!selectedGrade) return;
      setLoading(true);
      try {
        const subjectsData = await getSubjects(selectedGrade);
        setSubjects(subjectsData);
      } catch (error) {
        console.error("Failed to load subjects", error);
      } finally {
        setLoading(false);
      }
    }
    loadSubjects();
  }, [selectedGrade]);

  return (
    <div className="p-8 space-y-8 h-full overflow-y-auto">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            {t("greeting", { name: session?.user?.name || "Abebe" })} 👋
          </h1>
          <p className="text-gray-400 text-sm">{t("tagline")}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white dark:bg-zinc-900 p-1.5 rounded-full flex items-center shadow-sm border border-gray-100 dark:border-zinc-800">
            <Search className="text-gray-400 ml-3" size={18} />
            <input
              type="text"
              placeholder={tCommon("searchPlaceholder")}
              className="bg-transparent border-none outline-none text-sm px-3 py-1 w-64 placeholder:text-gray-400 dark:text-white"
            />
          </div>

          <select
            value={locale}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="h-10 rounded-xl border-none bg-white dark:bg-zinc-900 text-xs font-bold text-gray-600 focus:ring-0 dark:text-gray-300 cursor-pointer shadow-sm border border-gray-100 dark:border-zinc-800 px-2"
          >
            <option value="en">🇺🇸 EN</option>
            <option value="am">🇪🇹 AM</option>
            <option value="or">🇪🇹 OR</option>
          </select>

          <div className="bg-white dark:bg-zinc-900 rounded-full shadow-sm border border-gray-100 dark:border-zinc-800">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <HeroBanner />

      {/* Activity Chart Section (Kept per request) */}
      <div className="rounded-[2.5rem] bg-white dark:bg-zinc-900/50 p-6 shadow-sm ring-1 ring-gray-100 dark:ring-zinc-800">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-gray-900 dark:text-white">
            {t("learningActivity")}
          </h3>
          <select className="text-xs bg-gray-50 dark:bg-zinc-800 dark:text-gray-300 border-none rounded-lg px-2 py-1 font-medium text-gray-500 cursor-pointer">
            <option>{t("thisWeek")}</option>
            <option>{t("lastWeek")}</option>
          </select>
        </div>
        <ActivityChart />
      </div>

      <div className="space-y-6">
        {/* Grade Selector */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {t("chooseSubject")}
          </h3>
          <div className="flex bg-white dark:bg-zinc-900 p-1 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm">
            {grades.length > 0
              ? grades.map((grade) => (
                  <button
                    key={grade.id}
                    onClick={() => setSelectedGrade(grade.id)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedGrade === grade.id
                        ? "bg-gray-900 text-white shadow-md dark:bg-white dark:text-black"
                        : "text-gray-500 hover:bg-gray-50 dark:hover:bg-zinc-800"
                    }`}
                  >
                    G-{t("grade", { grade: grade.name })}
                  </button>
                ))
              : ["9", "10", "11", "12"].map((g) => (
                  <button
                    key={g}
                    className="px-4 py-1.5 rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-50 dark:hover:bg-zinc-800"
                  >
                    G-{t("grade", { grade: g })}
                  </button>
                ))}
          </div>
        </div>

        {/* Subjects Grid */}
        <div>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-48 w-full rounded-3xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.length > 0 ? (
                subjects.map((subject) => (
                  <SubjectCard key={subject.id} subject={subject} />
                ))
              ) : (
                <div className="col-span-full py-12 text-center text-gray-500 bg-white dark:bg-zinc-900 rounded-3xl border border-dashed border-gray-200 dark:border-zinc-800">
                  <p>{t("noSubjects")}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
