"use client";

import { Quiz } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Play, LockOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface QuizCardProps {
  quiz: Quiz;
  index: number;
}

export function QuizCard({ quiz, index }: QuizCardProps) {
  // Determine difficulty color
  const isHard = quiz.difficulty === "Hard";
  const badgeColor = isHard
    ? "bg-red-100 text-red-600"
    : "bg-blue-100 text-blue-600";

  // Create a pseudo-progress for demo purposes if not tracked yet
  // In a real app, we'd pass progress prop
  const progress = index === 0 ? 0 : 60;

  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <span
          className={cn(
            "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
            badgeColor,
          )}
        >
          {quiz.difficulty}
        </span>
        <LockOpen className="h-4 w-4 text-gray-300" />
      </div>

      <h3 className="font-bold text-xl text-gray-800 mb-2">{quiz.title}</h3>
      <p className="text-xs text-gray-400 mb-6">
        {/* Placeholder for question count since generic Quiz type might not have it strictly count, but schema has it? Schema: title, description, maxScore. Questions table has count. In list API we might want to join count. For now hardcode or use fake */}
        Est. 15 mins
      </p>

      <div className="mt-auto">
        {index > 0 && (
          <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        <Link href={`/quiz/${quiz.id}`}>
          <Button
            className={cn(
              "w-full rounded-xl font-bold text-sm flex items-center justify-center gap-2",
              "bg-gray-900 text-white hover:bg-primary transition-colors",
            )}
          >
            {index === 0 ? "Start Quiz" : "Resume"} <Play className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
