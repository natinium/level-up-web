import { db } from "@/db";
import { subjects, quizzes, grades } from "@/db/schema/content";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { QuizCard } from "@/components/subject/quiz-card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import {
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  Scale,
  BookOpen,
} from "lucide-react";

// Icon mapping (simplified for server component, passing only name/component logic might need handling if we want to render Icon here)
const iconMap: Record<string, React.ElementType> = {
  calculator: Calculator,
  atom: Atom,
  "flask-conical": FlaskConical,
  dna: Dna,
  scale: Scale,
  "book-open": BookOpen,
};

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch subject
  const subjectResult = await db
    .select()
    .from(subjects)
    .where(eq(subjects.id, id));
  if (subjectResult.length === 0) {
    return notFound();
  }
  const subject = subjectResult[0];

  // Fetch Grade name
  const gradeResult = await db
    .select()
    .from(grades)
    .where(eq(grades.id, subject.gradeId));
  const gradeName = gradeResult[0]?.name || "Unknown";

  // Fetch quizzes
  const quizList = await db
    .select()
    .from(quizzes)
    .where(eq(quizzes.subjectId, id));

  const Icon = iconMap[subject.icon] || BookOpen;

  return (
    <div className="space-y-8 pb-10">
      <Link
        href="/dashboard"
        className="inline-flex items-center text-gray-500 hover:text-gray-900 font-bold text-sm transition-colors"
      >
        <ChevronLeft className="mr-1 h-5 w-5" /> Back to Dashboard
      </Link>

      <div className="flex items-end justify-between">
        <div className="flex items-center gap-6">
          <div
            className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-lg ${subject.color}`}
          >
            <Icon className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              {subject.name}
            </h1>
            <p className="text-gray-500 font-medium text-lg">
              Grade {gradeName} • National Curriculum
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizList.map((quiz, i) => (
          <QuizCard key={quiz.id} quiz={quiz} index={i} />
        ))}

        {quizList.length === 0 && (
          <div className="col-span-full py-20 text-center bg-white rounded-[2rem] border border-dashed border-gray-200 text-gray-400">
            <p>No quizzes available for this subject yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
