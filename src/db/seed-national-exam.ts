import { db } from "./index";
import { quizzes, questions, subjects } from "./schema/content";
import { eq } from "drizzle-orm";

async function seedNationalExams() {
  console.log("🌱 Seeding National Exam data...");

  try {
    const mathSubject = await db
      .select()
      .from(subjects)
      .where(eq(subjects.name, "Mathematics"));
    const biologySubject = await db
      .select()
      .from(subjects)
      .where(eq(subjects.name, "Biology"));
    const civicsSubject = await db
      .select()
      .from(subjects)
      .where(eq(subjects.name, "Civics"));
    const englishSubject = await db
      .select()
      .from(subjects)
      .where(eq(subjects.name, "English"));

    if (
      !mathSubject[0] ||
      !biologySubject[0] ||
      !civicsSubject[0] ||
      !englishSubject[0]
    ) {
      console.error(
        "❌ One or more subjects not found. Please run main seed first.",
      );
      return;
    }

    console.log("Creating National Exam quizzes...");

    const nationalExamMath = await db
      .insert(quizzes)
      .values({
        title: "National Exam - Mathematics",
        difficulty: "Hard",
        questionsCount: 5,
        subjectId: mathSubject[0].id,
      })
      .onConflictDoNothing()
      .returning();

    if (nationalExamMath.length > 0) {
      console.log("Seeding Mathematics questions...");
      await db.insert(questions).values([
        {
          quizId: nationalExamMath[0].id,
          text: "What is value of x in equation 2x + 5 = 15?",
          options: ["5", "7", "8", "10"],
          correctIndex: 0,
          explanation:
            "Subtract 5 from both sides: 2x = 10. Then divide by 2: x = 5.",
        },
        {
          quizId: nationalExamMath[0].id,
          text: "What is area of a circle with radius 7? (Use π ≈ 22/7)",
          options: ["154", "44", "49", "308"],
          correctIndex: 0,
          explanation: "Area = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154.",
        },
        {
          quizId: nationalExamMath[0].id,
          text: "What is sum of first 10 natural numbers?",
          options: ["55", "45", "50", "60"],
          correctIndex: 0,
          explanation:
            "Sum of first n natural numbers = n(n+1)/2. For n=10: 10×11/2 = 55.",
        },
        {
          quizId: nationalExamMath[0].id,
          text: "What is value of 3² + 4²?",
          options: ["12", "25", "49", "81"],
          correctIndex: 1,
          explanation: "3² = 9, 4² = 16. 9 + 16 = 25.",
        },
        {
          quizId: nationalExamMath[0].id,
          text: "Solve: 5x - 3 = 2x + 9",
          options: ["2", "3", "4", "5"],
          correctIndex: 2,
          explanation:
            "Subtract 2x from both sides: 3x - 3 = 9. Add 3: 3x = 12. x = 4.",
        },
      ]);
    }

    const nationalExamBiology = await db
      .insert(quizzes)
      .values({
        title: "National Exam - Biology",
        difficulty: "Medium",
        questionsCount: 5,
        subjectId: biologySubject[0].id,
      })
      .onConflictDoNothing()
      .returning();

    if (nationalExamBiology.length > 0) {
      console.log("Seeding Biology questions...");
      await db.insert(questions).values([
        {
          quizId: nationalExamBiology[0].id,
          text: "What is basic unit of life?",
          options: ["Cell", "Tissue", "Organ", "Organism"],
          correctIndex: 0,
          explanation:
            "The cell is smallest structural and functional unit of all living organisms.",
        },
        {
          quizId: nationalExamBiology[0].id,
          text: "Which organelle is known as powerhouse of cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
          correctIndex: 1,
          explanation:
            "Mitochondria produce ATP through cellular respiration, providing energy for cell.",
        },
        {
          quizId: nationalExamBiology[0].id,
          text: "What is process by which plants make their own food?",
          options: [
            "Respiration",
            "Digestion",
            "Photosynthesis",
            "Fermentation",
          ],
          correctIndex: 2,
          explanation:
            "Photosynthesis uses sunlight, CO2, and water to produce glucose and oxygen.",
        },
        {
          quizId: nationalExamBiology[0].id,
          text: "What is DNA short for?",
          options: [
            "Dioxyribonucleic Acid",
            "Deoxyribonucleic Acid",
            "Dioxyribonuclear Acid",
            "Deoxyribonuclear Acid",
          ],
          correctIndex: 1,
          explanation:
            "DNA stands for Deoxyribonucleic Acid, the molecule carrying genetic information.",
        },
        {
          quizId: nationalExamBiology[0].id,
          text: "Which blood cells fight infection?",
          options: [
            "Red blood cells",
            "White blood cells",
            "Platelets",
            "Plasma",
          ],
          correctIndex: 1,
          explanation:
            "White blood cells (leukocytes) are part of immune system that fights infections.",
        },
      ]);
    }

    const nationalExamCivics = await db
      .insert(quizzes)
      .values({
        title: "National Exam - Civics",
        difficulty: "Easy",
        questionsCount: 5,
        subjectId: civicsSubject[0].id,
      })
      .onConflictDoNothing()
      .returning();

    if (nationalExamCivics.length > 0) {
      console.log("Seeding Civics questions...");
      await db.insert(questions).values([
        {
          quizId: nationalExamCivics[0].id,
          text: "What is highest form of government in a democracy?",
          options: [
            "Monarchy",
            "Dictatorship",
            "People's sovereignty",
            "Oligarchy",
          ],
          correctIndex: 2,
          explanation:
            "In a democracy, ultimate power rests with the people through voting and participation.",
        },
        {
          quizId: nationalExamCivics[0].id,
          text: "What is a constitution?",
          options: [
            "A book of laws",
            "The fundamental law of a country",
            "International treaty",
            "Political party manifesto",
          ],
          correctIndex: 1,
          explanation:
            "A constitution is the supreme law that establishes the framework of government and citizens' rights.",
        },
        {
          quizId: nationalExamCivics[0].id,
          text: "What does rule of law mean?",
          options: [
            "Lawyers rule the country",
            "Everyone is subject to the law",
            "Judges make all decisions",
            "Only politicians follow laws",
          ],
          correctIndex: 1,
          explanation:
            "Rule of law means no one is above the law, including government officials and citizens.",
        },
        {
          quizId: nationalExamCivics[0].id,
          text: "What is democracy?",
          options: [
            "Rule by one person",
            "Rule by military",
            "Government by the people",
            "Rule by the wealthy",
          ],
          correctIndex: 2,
          explanation:
            "Democracy is a system of government where power is held by the people through voting.",
        },
        {
          quizId: nationalExamCivics[0].id,
          text: "What is a citizen?",
          options: [
            "Anyone living in a country",
            "A person with legal rights and duties in a state",
            "A tourist",
            "A diplomat",
          ],
          correctIndex: 1,
          explanation:
            "A citizen is a legally recognized subject or national of a state with rights and duties.",
        },
      ]);
    }

    const nationalExamEnglish = await db
      .insert(quizzes)
      .values({
        title: "National Exam - English",
        difficulty: "Medium",
        questionsCount: 5,
        subjectId: englishSubject[0].id,
      })
      .onConflictDoNothing()
      .returning();

    if (nationalExamEnglish.length > 0) {
      console.log("Seeding English questions...");
      await db.insert(questions).values([
        {
          quizId: nationalExamEnglish[0].id,
          text: "Choose correct word: She _____ to school every day.",
          options: ["go", "goes", "going", "gone"],
          correctIndex: 1,
          explanation:
            "With third-person singular subjects (She, He, It), we use the verb form ending in -s.",
        },
        {
          quizId: nationalExamEnglish[0].id,
          text: "What is past tense of 'write'?",
          options: ["wrote", "writed", "writing", "written"],
          correctIndex: 0,
          explanation:
            "'Write' is an irregular verb. Its past tense form is 'wrote'.",
        },
        {
          quizId: nationalExamEnglish[0].id,
          text: "Which word is a synonym for 'happy'?",
          options: ["sad", "joyful", "angry", "tired"],
          correctIndex: 1,
          explanation:
            "Synonyms are words with similar meanings. 'Joyful' has a similar meaning to 'happy'.",
        },
        {
          quizId: nationalExamEnglish[0].id,
          text: "Choose the correct sentence:",
          options: [
            "He don't like coffee.",
            "He doesn't like coffee.",
            "He not like coffee.",
            "He don't likes coffee.",
          ],
          correctIndex: 1,
          explanation:
            "The correct negative form for third-person singular is 'doesn't' + base verb.",
        },
        {
          quizId: nationalExamEnglish[0].id,
          text: "What is plural of 'child'?",
          options: ["childs", "childes", "children", "childrens"],
          correctIndex: 2,
          explanation:
            "'Child' is an irregular noun. Its plural form is 'children'.",
        },
      ]);
    }

    console.log("✅ National Exam data seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding National Exam data:", error);
  }
}

seedNationalExams();
