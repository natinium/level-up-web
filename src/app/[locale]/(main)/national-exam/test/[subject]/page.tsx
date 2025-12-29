"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/db";
import { quizzes, questions, subjects } from "@/db/schema/content";
import { eq } from "drizzle-orm";
import { QuizGame } from "@/components/quiz/quiz-game";
import { QuizWithQuestions } from "@/types/content";
import { ArrowLeft, Clock, Target } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function NationalExamTestPage() {
  const params = useParams();
  const router = useRouter();
  const t = useTranslations("NationalExamTest");
  const [quiz, setQuiz] = useState<QuizWithQuestions | null>(null);
  const [loading, setLoading] = useState(true);
  const [subjectName, setSubjectName] = useState("");

  useEffect(() => {
    async function loadQuiz() {
      try {
        const subjectSlug = params.subject as string;

        const response = await fetch(`/api/national-exam/test/${subjectSlug}`);
        if (!response.ok) {
          throw new Error("Failed to load quiz");
        }

        const data = await response.json();
        setQuiz(data);
        setSubjectName(data.subjectName || subjectSlug);
      } catch (error) {
        console.error("Failed to load quiz:", error);
      } finally {
        setLoading(false);
      }
    }

    loadQuiz();
  }, [params.subject]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-zinc-900 dark:to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400">{t("loading")}</p>
        </div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-zinc-900 dark:to-black flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("quizNotFound.title")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {t("quizNotFound.description")}
          </p>
          <Button
            onClick={() => router.back()}
            className="bg-primary hover:bg-primary/90"
          >
            {t("goBack")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="md:pt-16">
        <QuizGame quiz={quiz} />
      </div>

      <div className="fixed top-4 left-4 z-30">
        <button
          onClick={() => router.back()}
          className="bg-black/50 backdrop-blur-md p-3 rounded-full hover:bg-black/70 transition-all"
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </button>
      </div>

      <div className="fixed top-16 left-1/2 -translate-x-1/2 z-30 hidden md:block">
        <div className="bg-black/50 backdrop-blur-md px-6 py-2 rounded-full flex items-center gap-4 text-white text-sm">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-green-400" />
            <span className="font-bold">{subjectName}</span>
          </div>
          <div className="w-px h-4 bg-white/30" />
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-yellow-400" />
            <span>
              {quiz.questions.length} {t("questions")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
