import { db } from "@/db";
import { grades } from "@/db/schema/content";
import { NextResponse } from "next/server";
import { asc } from "drizzle-orm";

export async function GET() {
  try {
    const data = await db.select().from(grades).orderBy(asc(grades.name));
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch grades" },
      { status: 500 },
    );
  }
}
