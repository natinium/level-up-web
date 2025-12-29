"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { QuizGame } from "@/components/quiz/quiz-game";
import { Question } from "@/types/content";

export function QuizFeed() {
  const t = useTranslations("QuizFeed");
  const router = useRouter();
  const [feedQuestions, setFeedQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSubject, setCurrentSubject] = useState("all");

  const subjects = [
    { id: "all", name: t("allSubjects"), icon: "📱" },
    { id: "mathematics", name: t("math"), icon: "📐" },
    { id: "biology", name: t("biology"), icon: "🧬" },
    { id: "civics", name: t("civics"), icon: "🏛️" },
    { id: "english", name: t("english"), icon: "📚" },
  ];

  useEffect(() => {
    async function loadFeed() {
      try {
        setLoading(true);
        let url = "/api/quiz-feed";
        if (currentSubject !== "all") {
          url += `?subject=${currentSubject}`;
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to load feed");

        const data = await response.json();
        setFeedQuestions(data.questions || []);
      } catch (error) {
        console.error("Failed to load quiz feed:", error);
      } finally {
        setLoading(false);
      }
    }

    loadFeed();
  }, [currentSubject]);

  const mockFeedQuiz = {
    id: "feed-quiz",
    title: t("dailyMix"),
    difficulty: "Mixed",
    questionsCount: feedQuestions.length,
    subjectId: "feed",
    createdAt: new Date(),
    questions: feedQuestions,
  };

  return (
    <div className="fixed inset-0 z-40 bg-black pb-[env(safe-area-inset-bottom)]">
      {loading ? (
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-white/80 text-sm">{t("loading")}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent pt-4 pb-8 px-4">
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {subjects.map((subject) => (
                <button
                  key={subject.id}
                  onClick={() => setCurrentSubject(subject.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    currentSubject === subject.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  <span className="mr-1">{subject.icon}</span>
                  {subject.name}
                </button>
              ))}
            </div>
          </div>

          <QuizGame quiz={mockFeedQuiz} />

          <div className="fixed bottom-4 left-4 z-50">
            <button
              onClick={() => router.push("/national-exam")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 rounded-full shadow-lg shadow-blue-500/30 text-white text-xs font-bold flex items-center gap-2"
            >
              <span>🎯</span>
              {t("nationalExam")}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
