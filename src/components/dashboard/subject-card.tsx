"use client";

import { cn } from "@/lib/utils";
import {
  MoveRight,
  Star,
  Users,
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  Scale,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { Subject } from "@/types/content";
import { motion } from "motion/react";
import { useTranslations } from "next-intl"; // Added for translations

interface SubjectCardProps {
  subject: Subject;
}

const iconMap: Record<string, React.ElementType> = {
  calculator: Calculator,
  atom: Atom,
  "flask-conical": FlaskConical,
  dna: Dna,
  scale: Scale,
  "book-open": BookOpen,
};

export function SubjectCard({ subject }: SubjectCardProps) {
  const Icon = iconMap[subject.icon] || BookOpen;
  const t = useTranslations("Dashboard"); // Initialized translations

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-[2rem] bg-white dark:bg-zinc-900/50 p-6 shadow-sm ring-1 ring-gray-100 dark:ring-zinc-800 transition-all hover:shadow-xl hover:shadow-indigo-900/5 cursor-pointer border border-gray-50 dark:border-zinc-800"
    >
      <div className="relative z-10 pointer-events-none">
        <div className="flex items-start justify-between mb-8">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg",
              subject.color,
            )}
          >
            <Icon className="h-7 w-7" />
          </div>
          <div className="flex items-center gap-1 rounded-full bg-gray-50 dark:bg-zinc-800 px-2.5 py-1 text-xs font-bold text-gray-600 dark:text-gray-400">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            {subject.rating}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
            {subject.name}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              {t("studentsCount", { count: subject.students.toLocaleString() })}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="h-1.5 flex-1 rounded-full bg-gray-100 dark:bg-zinc-800 overflow-hidden mr-4">
              <div
                className={cn("h-full w-[45%] rounded-full", subject.color)}
              ></div>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-400 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
              <MoveRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div
        className={cn(
          "absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10",
          subject.color,
        )}
      ></div>

      {/* Full Card Link - Placed last with z-20 to ensure it catches clicks */}
      <Link href={`/subjects/${subject.id}`} className="absolute inset-0 z-20">
        <span className="sr-only">
          {t("viewSubject", { subjectName: subject.name })}
        </span>
      </Link>
    </motion.div>
  );
}
