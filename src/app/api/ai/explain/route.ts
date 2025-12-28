import { google } from "@ai-sdk/google";
import { streamText, convertToModelMessages, UIMessage } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
    questionContext,
    locale,
  }: {
    messages: UIMessage[];
    questionContext: {
      text?: string;
      options?: string[];
      correctIndex?: number;
      explanation?: string;
    };
    locale?: string;
  } = await req.json();

  const systemPrompt = `You are a helpful and encouraging AI tutor for students.
  You are helping a student with the following question:
  
  Question: ${questionContext?.text}
  Options: ${questionContext?.options?.join(", ")}
  Correct Answer Index: ${questionContext?.correctIndex}
  Explanation: ${questionContext?.explanation}
  
  Your goal is to help the student understand the concept. 
  - If they ask for the answer, try to guide them first before giving it, unless they are stuck.
  - Be concise and friendly.
  - Use markdown for formatting.
  - If the explanation is provided, use it to inform your answer but expand on it if needed.
  
  IMPORTANT: Always respond in the user's language. The user is currently using ${locale || "English"} language. Adapt your response to match their language preference.
  `;

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
    // Disable automatic retries to avoid hammering the API on quota/rate limit errors
    maxRetries: 0,
  });

  return result.toUIMessageStreamResponse();
}
