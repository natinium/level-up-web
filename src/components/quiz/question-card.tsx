"use client";

import { cn } from "@/lib/utils";
import { Question } from "@/types/content"; // Need to check if Question type has options/correctAnswer
import { CheckCircle, XCircle } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  index: number;
  selectedOption: number | null;
  onSelect: (optionIndex: number) => void;
  isAnswered: boolean;
}

export function QuestionCard({
  question,
  index,
  selectedOption,
  onSelect,
  isAnswered,
}: QuestionCardProps) {
  // Helper to parse options if they are stored as JSON or string array
  // Assuming schema defines options as JSON. valid types needed.
  // In seed.ts options were string[].
  const options = Array.isArray(question.options) ? question.options : [];
  const correctIndex = question.correctIndex;

  return (
    <div className="h-[calc(100svh-8rem)] w-full snap-start snap-always flex flex-col justify-center items-center px-4 relative">
      <div className="w-full max-w-md space-y-6 z-10">
        <div className="space-y-4">
          <span className="text-blue-400 font-bold text-sm tracking-wide">
            QUESTION {index + 1}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold leading-relaxed text-white break-words">
            {question.text}
          </h2>
        </div>

        <div className="space-y-3">
          {options.map((opt: string, i: number) => {
            let btnClass = "bg-white/10 border-transparent hover:bg-white/20";
            if (isAnswered) {
              if (i === correctIndex)
                btnClass = "bg-green-500/20 border-green-500 text-green-400";
              else if (i === selectedOption)
                btnClass = "bg-red-500/20 border-red-500 text-red-400";
              else btnClass = "bg-white/5 opacity-50";
            }

            return (
              <button
                key={i}
                disabled={isAnswered}
                onClick={() => onSelect(i)}
                className={cn(
                  "w-full text-left p-3 md:p-4 rounded-2xl border-2 transition-all font-medium text-base md:text-lg flex justify-between items-center text-white",
                  btnClass,
                )}
              >
                {opt}
                {isAnswered && i === correctIndex && (
                  <CheckCircle className="h-5 w-5" />
                )}
                {isAnswered && i === selectedOption && i !== correctIndex && (
                  <XCircle className="h-5 w-5" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
