import { db } from "@/db";
import { quizzes, questions } from "@/db/schema/content";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { QuizGame } from "@/components/quiz/quiz-game";
import { QuizWithQuestions } from "@/types/content";

export default async function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch quiz
  const quizResult = await db.select().from(quizzes).where(eq(quizzes.id, id));
  if (!quizResult.length) {
    return notFound();
  }
  const quiz = quizResult[0];

  // Fetch questions
  const questionsResult = await db
    .select()
    .from(questions)
    .where(eq(questions.quizId, id));

  // Combine into QuizWithQuestions type (need to ensure type compatibility)
  // Assuming questions from DB match Question type roughly or exactly.
  // The 'options' field in DB is jsonb, in Question type it is likely string[] or any.
  // Drizzle jsonb is usually inferred as unknown or any, need casting if strict.

  const fullQuiz: QuizWithQuestions = {
    ...quiz,
    questions: questionsResult.map((q) => ({
      ...q,
      options: q.options as string[], // Cast jsonb options to string array
    })),
  };

  return <QuizGame quiz={fullQuiz} />;
}
