import { db } from "@/db";
import { quizzes, questions, subjects } from "@/db/schema/content";
import { eq, and } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ subject: string }> },
) {
  try {
    const { subject } = await params;

    const subjectMap: Record<string, string> = {
      biology: "Biology",
      civics: "Civics",
      english: "English",
      mathematics: "Mathematics",
    };

    const subjectName = subjectMap[subject];
    if (!subjectName) {
      return NextResponse.json({ error: "Invalid subject" }, { status: 400 });
    }

    const subjectResult = await db
      .select()
      .from(subjects)
      .where(eq(subjects.name, subjectName));

    if (subjectResult.length === 0) {
      return NextResponse.json({ error: "Subject not found" }, { status: 404 });
    }

    const subjectId = subjectResult[0].id;

    const quizResult = await db
      .select()
      .from(quizzes)
      .where(
        and(
          eq(quizzes.subjectId, subjectId),
          eq(quizzes.title, `National Exam - ${subjectName}`),
        ),
      );

    if (quizResult.length === 0) {
      return NextResponse.json({ error: "Quiz not found" }, { status: 404 });
    }

    const quiz = quizResult[0];

    const questionsResult = await db
      .select()
      .from(questions)
      .where(eq(questions.quizId, quiz.id));

    return NextResponse.json({
      ...quiz,
      questions: questionsResult.map((q) => ({
        ...q,
        options: q.options as string[],
      })),
      subjectName,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch quiz" },
      { status: 500 },
    );
  }
}
