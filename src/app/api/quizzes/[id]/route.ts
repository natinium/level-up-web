import { db } from "@/db";
import { quizzes, questions } from "@/db/schema/content";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    // Fetch quiz
    const quizResult = await db
      .select()
      .from(quizzes)
      .where(eq(quizzes.id, id));

    if (quizResult.length === 0) {
      return NextResponse.json({ error: "Quiz not found" }, { status: 404 });
    }

    const quiz = quizResult[0];

    // Fetch questions
    const questionsResult = await db
      .select()
      .from(questions)
      .where(eq(questions.quizId, id));

    return NextResponse.json({ ...quiz, questions: questionsResult });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch quiz" },
      { status: 500 },
    );
  }
}
