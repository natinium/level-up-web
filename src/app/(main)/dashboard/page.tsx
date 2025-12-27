"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth/auth-client";
import { HeroBanner, SubjectCard, StatsWidget } from "@/components/dashboard";
import { Button } from "@/components/ui/button";
import { getGrades, getSubjects } from "@/lib/api";
import { Grade, Subject } from "@/types/content";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Bell, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function DashboardPage() {
  const { data: session } = useSession();
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

  const userName = session?.user?.name || "Scholar";
  const firstName = userName.split(" ")[0];

  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {firstName}! 👋
          </h1>
          <p className="text-gray-500">
            Here&apos;s what&apos;s happening with your courses today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search subjects, topics..."
              className="pl-10 rounded-xl bg-white border-gray-200 focus-visible:ring-primary"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-xl border-gray-200 bg-white shadow-sm"
          >
            <Bell className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
      </div>

      <HeroBanner />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Grade Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 p-1 bg-white rounded-xl border border-gray-100 shadow-sm">
              {grades.map((grade) => (
                <button
                  key={grade.id}
                  onClick={() => setSelectedGrade(grade.id)}
                  className={`
                                relative px-4 py-2 rounded-lg text-sm font-bold transition-all
                                ${
                                  selectedGrade === grade.id
                                    ? "bg-primary text-white shadow-md shadow-primary/20"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                }
                            `}
                >
                  Grade {grade.name}
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-dashed border-gray-300 text-gray-400 hover:text-primary hover:border-primary"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {/* Subjects Grid */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Your Subjects
            </h2>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-40 w-full rounded-3xl" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subjects.length > 0 ? (
                  subjects.map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} />
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center text-gray-500 bg-white rounded-3xl border border-dashed border-gray-200">
                    <p>No subjects found for this grade.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <StatsWidget />

          {/* Leaderboard/Friends/Extra Widgets can go here */}
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h3 className="font-bold text-gray-900 mb-4">Live Leaderboard</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm text-gray-500">
                      {i}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Student {i}
                      </p>
                      <p className="text-xs text-gray-500">1,2{i}0 XP</p>
                    </div>
                  </div>
                  {i === 1 && <span className="text-lg">👑</span>}
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              className="w-full mt-4 text-primary text-sm font-bold"
            >
              View Full Leaderboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
