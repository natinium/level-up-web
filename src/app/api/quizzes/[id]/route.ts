import { db } from "@/db";
import { quizzes } from "@/db/schema/content";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    // Fetch quiz with full questions relation
    const data = await db.query.quizzes.findFirst({
      where: eq(quizzes.id, id),
      with: {
        questions: true,
      },
    });

    if (!data) {
      return NextResponse.json({ error: "Quiz not found" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch quiz" },
      { status: 500 },
    );
  }
}
