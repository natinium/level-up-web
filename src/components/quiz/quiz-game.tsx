"use client";

import { useEffect, useRef } from "react";
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
import { useQuizStore } from "@/lib/store/quiz-store";

interface QuizGameProps {
  quiz: QuizWithQuestions;
}

export function QuizGame({ quiz }: QuizGameProps) {
  const {
    quiz: storeQuiz,
    setQuiz,
    answers,
    answerQuestion,
    isAIPanelOpen,
    toggleAIPanel,
    currentQuestionIndex,
    setCurrentQuestionIndex,
  } = useQuizStore();

  const scrollRef = useRef<HTMLDivElement>(null);

  // Sync prop quiz to store on mount or change
  useEffect(() => {
    setQuiz(quiz);
  }, [quiz, setQuiz]);

  const handleAnswer = (
    qIndex: number,
    optionIdx: number,
    isCorrect: boolean,
  ) => {
    answerQuestion(qIndex, optionIdx);
    if (isCorrect) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    }
  };

  const handleScroll = () => {
    // Basic scroll logic could go here to update currentQuestionIndex in store
    // based on scroll position, but for now we rely on explicit interaction
    // or we could implement intersection observer.
    // For AI Context, we explicitly set index when opening panel.
  };

  // Use store quiz if available, otherwise fallback to prop (should be synced)
  const activeQuiz = storeQuiz || quiz;
  const questions = activeQuiz.questions || [];
  const progressPercent =
    (Object.keys(answers).length / questions.length) * 100;

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden font-sans">
      {/* Top Bar Overlay */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
        <Link
          href={`/subjects/${activeQuiz.subjectId}`}
          className="hidden md:block"
        >
          <button className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </Link>
        {/* Spacer for mobile to keep center alignment if needed, or just let it flow */}
        <div className="hidden md:block w-0" />

        <div className="flex flex-col items-center mx-auto md:mx-0">
          <span className="font-bold text-sm tracking-widest uppercase text-white/90">
            {activeQuiz.title}
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
        className="h-full overflow-y-scroll snap-y snap-mandatory no-scrollbar snap-proximity pt-[calc(env(safe-area-inset-top)+0.5rem)] pb-[calc(10rem+env(safe-area-inset-bottom))]"
        onScroll={handleScroll}
      >
        {questions.map((q, index) => {
          const isAnswered = answers[index] !== undefined;
          const selected = answers[index];

          return (
            <div
              key={q.id}
              className="relative w-full h-full snap-start snap-always"
            >
              {/* Removed mobile padding-right wrapper */}
              <div className="w-full h-full">
                <QuestionCard
                  question={q}
                  index={index}
                  selectedOption={isAnswered ? selected : null}
                  onSelect={(optIdx) =>
                    handleAnswer(index, optIdx, optIdx === q.correctIndex)
                  }
                  isAnswered={isAnswered}
                />
              </div>

              {/* Interaction Bar */}
              {/* Mobile: Horizontal Row at Bottom | Desktop: Vertical Column at Right */}
              <div className="absolute z-20 flex items-center transition-all md:flex-col md:right-4 md:bottom-24 md:gap-6 md:left-auto md:w-auto md:pb-0 md:pt-0 md:bg-none flex-row bottom-[calc(4rem+env(safe-area-inset-bottom))] left-0 w-full justify-evenly pb-4 pt-12 bg-gradient-to-t from-black/90 to-transparent">
                <button className="flex flex-col items-center gap-1 group text-white/80 hover:text-white">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition backdrop-blur-sm">
                    <Bookmark className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <span className="text-[10px] font-bold">Save</span>
                </button>

                <button className="flex flex-col items-center gap-1 group text-white/80 hover:text-white">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition backdrop-blur-sm">
                    <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <span className="text-[10px] font-bold">Discuss</span>
                </button>

                {/* AI BUTTON */}
                {isAnswered && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => {
                      setCurrentQuestionIndex(index);
                      toggleAIPanel(true);
                    }}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 animate-pulse">
                      <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-white" />
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
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 text-xs animate-bounce hidden md:flex"
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
        {isAIPanelOpen && questions[currentQuestionIndex] && (
          <AIPanel
            question={questions[currentQuestionIndex]}
            onClose={() => toggleAIPanel(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
