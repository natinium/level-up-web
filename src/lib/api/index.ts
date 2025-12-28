import { Grade, Subject, Quiz, QuizWithQuestions } from "@/types/content";

export const getGrades = async (): Promise<Grade[]> => {
  const res = await fetch(`/api/grades`);
  if (!res.ok) throw new Error("Failed to fetch grades");
  return res.json();
};

export const getSubjects = async (gradeId: string): Promise<Subject[]> => {
  const res = await fetch(`/api/subjects?gradeId=${gradeId}`);
  if (!res.ok) throw new Error("Failed to fetch subjects");
  return res.json();
};

export const getQuizzes = async (subjectId: string): Promise<Quiz[]> => {
  const res = await fetch(`/api/quizzes?subjectId=${subjectId}`);
  if (!res.ok) throw new Error("Failed to fetch quizzes");
  return res.json();
};

export const getQuiz = async (id: string): Promise<QuizWithQuestions> => {
  const res = await fetch(`/api/quizzes/${id}`);
  if (!res.ok) throw new Error("Failed to fetch quiz");
  return res.json();
};
