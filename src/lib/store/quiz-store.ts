import { create } from "zustand";
import { QuizWithQuestions } from "@/types/content";

interface QuizState {
  quiz: QuizWithQuestions | null;
  currentQuestionIndex: number;
  answers: Record<number, number>; // questionIndex -> optionIndex
  isAIPanelOpen: boolean;

  // AI Chat State
  aiChatKey: number; // Used to reset chat when opening for different question
  hasInitiatedChat: boolean;

  // Actions
  setQuiz: (quiz: QuizWithQuestions) => void;
  answerQuestion: (questionIndex: number, optionIndex: number) => void;
  setCurrentQuestionIndex: (index: number) => void;
  toggleAIPanel: (isOpen: boolean) => void;
  resetQuiz: () => void;
  setHasInitiatedChat: (value: boolean) => void;
  resetAIChat: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  quiz: null,
  currentQuestionIndex: 0,
  answers: {},
  isAIPanelOpen: false,
  aiChatKey: 0,
  hasInitiatedChat: false,

  setQuiz: (quiz) =>
    set({
      quiz,
      currentQuestionIndex: 0,
      answers: {},
      isAIPanelOpen: false,
      hasInitiatedChat: false,
    }),

  answerQuestion: (qIdx, oIdx) =>
    set((state) => ({
      answers: { ...state.answers, [qIdx]: oIdx },
    })),

  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),

  toggleAIPanel: (isOpen) =>
    set((state) => ({
      isAIPanelOpen: isOpen,
      // Reset chat state when closing the panel
      hasInitiatedChat: isOpen ? state.hasInitiatedChat : false,
      aiChatKey: isOpen ? state.aiChatKey : state.aiChatKey + 1,
    })),

  resetQuiz: () =>
    set({
      currentQuestionIndex: 0,
      answers: {},
      isAIPanelOpen: false,
      hasInitiatedChat: false,
    }),

  setHasInitiatedChat: (value) => set({ hasInitiatedChat: value }),

  resetAIChat: () =>
    set((state) => ({
      aiChatKey: state.aiChatKey + 1,
      hasInitiatedChat: false,
    })),
}));
