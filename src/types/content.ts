export type Grade = {
  id: string;
  name: string;
  createdAt: Date;
};

export type Subject = {
  id: string;
  name: string;
  icon: string;
  color: string;
  gradeId: string;
  students: number;
  rating: string;
  createdAt: Date;
};

export type Quiz = {
  id: string;
  title: string;
  difficulty: string;
  questionsCount: number;
  subjectId: string;
  createdAt: Date;
};

export type Question = {
  id: string;
  quizId: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string | null;
  createdAt: Date;
};

export type QuizWithQuestions = Quiz & {
  questions: Question[];
};
