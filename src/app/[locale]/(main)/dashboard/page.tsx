"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useSession } from "@/lib/auth/auth-client";
import { HeroBanner, SubjectCard } from "@/components/dashboard";
import { Button } from "@/components/ui/button";
import { getGrades, getSubjects } from "@/lib/api";
import { ActivityChart } from "@/components/dashboard/activity-chart";
import { Filter } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Grade, Subject } from "@/types/content";

export default function DashboardPage() {
  const { data: session } = useSession();
  const t = useTranslations("Dashboard");
  const [grades, setGrades] = useState<Grade[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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
    <div className="space-y-8 pb-10">
      <HeroBanner />

      {/* Activity Chart Section */}
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-zinc-900/50 dark:ring-zinc-800">
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
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {t("chooseSubject")}
          </h3>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 p-1 bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm">
              {grades.map((grade) => (
                <button
                  key={grade.id}
                  onClick={() => setSelectedGrade(grade.id)}
                  className={`
                                  relative px-4 py-2 rounded-lg text-sm font-bold transition-all
                                  ${
                                    selectedGrade === grade.id
                                      ? "bg-gray-900 text-white shadow-md dark:bg-white dark:text-black"
                                      : "text-gray-500 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-white"
                                  }
                              `}
                >
                  {t("grade", { grade: grade.name })}
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-dashed border-gray-300 text-gray-400 hover:text-primary hover:border-primary dark:border-zinc-700"
            >
              <Filter className="h-4 w-4" />
            </Button>
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
