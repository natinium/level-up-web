"use client";

import { QuizGame } from "@/components/quiz/quiz-game";
import { QuizWithQuestions } from "@/types/content";

// Mock data to simulate a "Feed" of questions
const mockFeedQuiz: QuizWithQuestions = {
  id: "feed-quiz",
  title: "Daily Mix",
  difficulty: "Mixed",
  questionsCount: 5,
  subjectId: "feed",
  createdAt: new Date(),
  questions: [
    {
      id: "1",
      quizId: "feed-quiz",
      text: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"],
      correctIndex: 1,
      explanation:
        "Mitochondria generate most of the chemical energy needed to power the cell's biochemical reactions.",
      createdAt: new Date(),
    },
    {
      id: "2",
      quizId: "feed-quiz",
      text: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctIndex: 1,
      explanation: "Mars is often referred to as the 'Red Planet'.",
      createdAt: new Date(),
    },
    {
      id: "3",
      quizId: "feed-quiz",
      text: "Who wrote 'Romeo and Juliet'?",
      options: [
        "Charles Dickens",
        "William Shakespeare",
        "Mark Twain",
        "Jane Austen",
      ],
      correctIndex: 1,
      explanation: "William Shakespeare wrote the tragedy early in his career.",
      createdAt: new Date(),
    },
    {
      id: "4",
      quizId: "feed-quiz",
      text: "What is the chemical symbol for Gold?",
      options: ["Au", "Ag", "Fe", "Pb"],
      correctIndex: 0,
      explanation: "The symbol 'Au' is from the Latin name for gold, 'aurum'.",
      createdAt: new Date(),
    },
    {
      id: "5",
      quizId: "feed-quiz",
      text: "What is the capital of France?",
      options: ["London", "Berlin", "Madrid", "Paris"],
      correctIndex: 3,
      explanation: "Paris is the capital and most populous city of France.",
      createdAt: new Date(),
    },
  ],
};

export function QuizFeed() {
  return (
    <div className="fixed inset-0 z-40 bg-black pb-[env(safe-area-inset-bottom)]">
      {/* 
         We reuse the QuizGame component as the feed UI.
         It already implements the vertical snap scroll and question logic.
      */}
      <QuizGame quiz={mockFeedQuiz} />
    </div>
  );
}
