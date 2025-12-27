import { db } from "./index";
import { grades, subjects, quizzes, questions } from "./schema/content";

async function seed() {
  console.log("🌱 Seeding data...");

  try {
    // --- GRADES ---
    console.log("Creating grades...");
    const insertedGrades = await db
      .insert(grades)
      .values([{ name: "9" }, { name: "10" }, { name: "11" }, { name: "12" }])
      .returning();

    const gradeMap = Object.fromEntries(
      insertedGrades.map((g) => [g.name, g.id]),
    );

    // --- SUBJECTS ---
    console.log("Creating subjects...");
    const subjectData = [
      {
        name: "Mathematics",
        icon: "calculator",
        color: "bg-blue-500",
        gradeId: gradeMap["12"],
        students: 1200,
        rating: "4.8",
      },
      {
        name: "Physics",
        icon: "atom",
        color: "bg-purple-500",
        gradeId: gradeMap["12"],
        students: 850,
        rating: "4.5",
      },
      {
        name: "Chemistry",
        icon: "flask-conical",
        color: "bg-green-500",
        gradeId: gradeMap["12"],
        students: 700,
        rating: "4.6",
      },
      {
        name: "Biology",
        icon: "dna",
        color: "bg-pink-500",
        gradeId: gradeMap["12"],
        students: 920,
        rating: "4.7",
      },
      {
        name: "Civics",
        icon: "scale",
        color: "bg-orange-500",
        gradeId: gradeMap["12"],
        students: 600,
        rating: "4.2",
      },
      {
        name: "English",
        icon: "book-open",
        color: "bg-indigo-500",
        gradeId: gradeMap["12"],
        students: 1100,
        rating: "4.4",
      },
    ];

    const insertedSubjects = await db
      .insert(subjects)
      .values(subjectData)
      .returning();

    // --- QUIZZES (For Math) ---
    console.log("Creating quizzes...");
    const mathSubject = insertedSubjects.find((s) => s.name === "Mathematics");

    if (mathSubject) {
      const quizData = [
        {
          title: "Algebra II: Functions",
          difficulty: "Hard",
          questionsCount: 10,
          subjectId: mathSubject.id,
        },
        {
          title: "Geometric Sequences",
          difficulty: "Medium",
          questionsCount: 8,
          subjectId: mathSubject.id,
        },
        {
          title: "Matrices & Determinants",
          difficulty: "Hard",
          questionsCount: 12,
          subjectId: mathSubject.id,
        },
      ];

      const insertedQuizzes = await db
        .insert(quizzes)
        .values(quizData)
        .returning();

      // --- QUESTIONS (For Algebra Quiz) ---
      console.log("Creating questions...");
      const algebraQuiz = insertedQuizzes[0];

      await db.insert(questions).values([
        {
          quizId: algebraQuiz.id,
          text: "If f(x) = 2x + 3 and g(x) = x², what is f(g(2))?",
          options: ["7", "11", "19", "25"],
          correctIndex: 1,
          explanation:
            "First, find g(2): 2² = 4. Then plug that into f(x): f(4) = 2(4) + 3 = 11.",
        },
        {
          quizId: algebraQuiz.id,
          text: "Which vector represents the displacement from A(2,3) to B(5,7)?",
          options: ["(3, 4)", "(7, 10)", "(3, -4)", "(-3, -4)"],
          correctIndex: 0,
          explanation: "Displacement is Final - Initial. (5-2, 7-3) = (3, 4).",
        },
        {
          quizId: algebraQuiz.id,
          text: "What is the derivative of sin(x)?",
          options: ["-cos(x)", "tan(x)", "cos(x)", "-sin(x)"],
          correctIndex: 2,
          explanation: "The derivative of sin(x) with respect to x is cos(x).",
        },
      ]);
    }

    console.log("✅ Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  }
}

seed();
