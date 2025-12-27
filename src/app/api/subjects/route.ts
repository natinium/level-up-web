import { db } from "@/db";
import { subjects } from "@/db/schema/content";
import { NextResponse, NextRequest } from "next/server";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const gradeId = searchParams.get("gradeId");

    if (!gradeId) {
      return NextResponse.json(
        { error: "Grade ID is required" },
        { status: 400 },
      );
    }

    const data = await db
      .select()
      .from(subjects)
      .where(eq(subjects.gradeId, gradeId));

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch subjects" },
      { status: 500 },
    );
  }
}
