import { db } from "@/db";
import { questions, quizzes, subjects } from "@/db/schema/content";
import { eq, or, like } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const subject = searchParams.get("subject");

    if (subject && subject !== "all") {
      const subjectMap: Record<string, string> = {
        mathematics: "Mathematics",
        biology: "Biology",
        civics: "Civics",
        english: "English",
      };

      const subjectName = subjectMap[subject];
      if (subjectName) {
        const subjectResult = await db
          .select()
          .from(subjects)
          .where(eq(subjects.name, subjectName));

        if (subjectResult.length > 0) {
          const subjectId = subjectResult[0].id;

          const quizzesForSubject = await db
            .select()
            .from(quizzes)
            .where(eq(quizzes.subjectId, subjectId));

          const quizIds = quizzesForSubject.map((q) => q.id);
          if (quizIds.length > 0) {
            const conditions = quizIds.map((id) => eq(questions.quizId, id));
            const questionsResult = await db
              .select({
                id: questions.id,
                quizId: questions.quizId,
                text: questions.text,
                options: questions.options,
                correctIndex: questions.correctIndex,
                explanation: questions.explanation,
                createdAt: questions.createdAt,
              })
              .from(questions)
              .where(or(...conditions))
              .limit(10);

            return NextResponse.json({
              questions: questionsResult.map((q) => ({
                ...q,
                options: q.options as string[],
              })),
            });
          }
        }
      }
    }

    const allNationalExamQuizzes = await db
      .select()
      .from(quizzes)
      .where(like(quizzes.title, "National Exam -%"));

    const quizIds = allNationalExamQuizzes.map((q) => q.id);

    if (quizIds.length > 0) {
      const conditions = quizIds.map((id) => eq(questions.quizId, id));
      const questionsResult = await db
        .select({
          id: questions.id,
          quizId: questions.quizId,
          text: questions.text,
          options: questions.options,
          correctIndex: questions.correctIndex,
          explanation: questions.explanation,
          createdAt: questions.createdAt,
        })
        .from(questions)
        .where(or(...conditions))
        .limit(20);

      return NextResponse.json({
        questions: questionsResult.map((q) => ({
          ...q,
          options: q.options as string[],
        })),
      });
    }

    return NextResponse.json({ questions: [] });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to load feed" }, { status: 500 });
  }
}
