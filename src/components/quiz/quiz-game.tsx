"use client";

import { useState, useRef } from "react";
import { QuizWithQuestions } from "@/types/content";
import { QuestionCard } from "./question-card";
import { AIPanel } from "./ai-panel";
import {
  X,
  Flame,
  Bookmark,
  MessageCircle,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";

interface QuizGameProps {
  quiz: QuizWithQuestions;
}

export function QuizGame({ quiz }: QuizGameProps) {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({}); // { qIndex: optionIndex }
  const [showAI, setShowAI] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleAnswer = (
    qIndex: number,
    optionIdx: number,
    isCorrect: boolean,
  ) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: optionIdx }));
    if (isCorrect) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    }
  };

  const handleScroll = () => {
    // Basic scroll logic to track current question could go here
    // For now relying on simple index state updates when interacting
  };

  const questions = quiz.questions || [];
  const progressPercent =
    (Object.keys(answers).length / questions.length) * 100;

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden font-sans">
      {/* Top Bar Overlay */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
        <Link href={`/subjects/${quiz.subjectId}`}>
          <button className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </Link>
        <div className="flex flex-col items-center">
          <span className="font-bold text-sm tracking-widest uppercase text-white/90">
            {quiz.title}
          </span>
          <div className="flex gap-1 mt-1 h-1 overflow-hidden rounded-full bg-gray-800 w-32">
            <div
              className="h-full bg-green-500 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 text-xs font-bold ring-1 ring-white/20">
          <Flame className="h-3 w-3 text-orange-500 fill-orange-500" /> 12
        </div>
      </div>

      {/* Vertical Feed Container */}
      <div
        ref={scrollRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth"
        onScroll={handleScroll}
      >
        {questions.map((q, index) => {
          const isAnswered = answers[index] !== undefined;
          const selected = answers[index];
          const isCorrect = selected === q.correctAnswer;

          return (
            <div
              key={q.id}
              className="relative w-full h-full snap-start snap-always"
            >
              <QuestionCard
                question={q}
                index={index}
                selectedOption={isAnswered ? selected : null}
                onSelect={(optIdx) =>
                  handleAnswer(index, optIdx, optIdx === q.correctAnswer)
                }
                isAnswered={isAnswered}
              />

              {/* Interaction Bar (Right Side) */}
              <div className="absolute right-4 bottom-24 flex flex-col gap-6 items-center z-20">
                <button className="flex flex-col items-center gap-1 group text-white/80 hover:text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition backdrop-blur-sm">
                    <Bookmark className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold">Save</span>
                </button>

                <button className="flex flex-col items-center gap-1 group text-white/80 hover:text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition backdrop-blur-sm">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold">Discuss</span>
                </button>

                {/* AI BUTTON */}
                {isAnswered && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => {
                      setShowAI(true);
                      setCurrentQIndex(index);
                    }}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 animate-pulse">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-[10px] font-bold text-blue-400">
                      Explain
                    </span>
                  </motion.button>
                )}
              </div>

              {/* Hint: Scroll for next */}
              {isAnswered && index < questions.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 text-xs animate-bounce"
                >
                  <p>Scroll for next</p>
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              )}
            </div>
          );
        })}

        {questions.length === 0 && (
          <div className="h-full flex items-center justify-center text-gray-500">
            No questions found for this quiz.
          </div>
        )}
      </div>

      {/* AI SIDEBAR OVERLAY */}
      <AnimatePresence>
        {showAI && questions[currentQIndex] && (
          <AIPanel
            question={questions[currentQIndex]}
            onClose={() => setShowAI(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
