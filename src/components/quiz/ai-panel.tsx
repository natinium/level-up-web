"use client";

import { motion } from "motion/react";
import {
  X,
  Bot,
  Send,
  Sparkles,
  User,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { Question } from "@/types/content";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useQuizStore } from "@/lib/store/quiz-store";
import { useLocale } from "next-intl";

interface AIPanelProps {
  question: Question;
  onClose: () => void;
}

// Animated typing indicator component
function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 mt-1 flex items-center justify-center">
        <Sparkles className="h-4 w-4 text-white" />
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl rounded-tl-none">
        <div className="flex items-center gap-1.5">
          <motion.span
            className="w-2 h-2 bg-primary/60 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
          />
          <motion.span
            className="w-2 h-2 bg-primary/60 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
          />
          <motion.span
            className="w-2 h-2 bg-primary/60 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
}

// Error display component
function ErrorMessage({ onRetry }: { onRetry: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3"
    >
      <div className="w-8 h-8 rounded-full bg-red-500 flex-shrink-0 mt-1 flex items-center justify-center">
        <AlertCircle className="h-4 w-4 text-white" />
      </div>
      <div className="flex-1 space-y-2">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-2xl rounded-tl-none text-sm text-red-700 dark:text-red-300">
          Something went wrong. Please try again.
        </div>
        <button
          onClick={onRetry}
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          Retry
        </button>
      </div>
    </motion.div>
  );
}

export function AIPanel({ question, onClose }: AIPanelProps) {
  const [input, setInput] = useState("");
  const locale = useLocale();

  // Use Zustand store for tracking if we've initiated the chat
  const { hasInitiatedChat, setHasInitiatedChat, aiChatKey, resetAIChat } =
    useQuizStore();

  // Ref to track if we've triggered the initial message (prevents React StrictMode double-fire)
  const hasFiredRef = useRef(false);

  const { messages, sendMessage, status, error, regenerate } = useChat({
    // Use aiChatKey as part of ID to reset chat state when panel reopens
    id: `ai-explain-${question.id}-${aiChatKey}`,
    transport: new DefaultChatTransport({
      api: "/api/ai/explain",
      body: {
        questionContext: question,
        locale: locale,
      },
    }),
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  // Trigger initial AI explanation when panel opens (only once)
  useEffect(() => {
    // Guard against React StrictMode double-mounting and duplicate fires
    if (!hasInitiatedChat && status === "ready" && !hasFiredRef.current) {
      hasFiredRef.current = true;
      setHasInitiatedChat(true);
      sendMessage({
        text: "Explain this question and why the answer is correct.",
      });
    }
  }, [hasInitiatedChat, status, sendMessage, setHasInitiatedChat]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && status === "ready") {
      sendMessage({ text: input });
      setInput("");
    }
  };

  const handleRetry = () => {
    if (regenerate) {
      regenerate();
    }
  };

  const isLoading = status === "submitted" || status === "streaming";

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm z-30"
      />
      {/* Slider Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="absolute top-0 right-0 h-full w-full md:w-96 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 z-40 p-6 shadow-2xl flex flex-col"
      >
        <div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Ababa AI</h3>
              <p className="text-xs text-gray-500">Your Personal Tutor</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2" ref={scrollRef}>
          {/* Question Context */}
          <div className="bg-gray-50 dark:bg-zinc-800/50 p-4 rounded-2xl border border-gray-100 dark:border-zinc-800 text-sm text-gray-600 dark:text-gray-300 italic">
            &quot; {question.text} &quot;
          </div>

          {/* Chat Messages */}
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "flex gap-3",
                m.role === "user" ? "flex-row-reverse" : "flex-row",
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex-shrink-0 mt-1 flex items-center justify-center",
                  m.role === "user"
                    ? "bg-gray-200 dark:bg-zinc-700"
                    : "bg-primary",
                )}
              >
                {m.role === "user" ? (
                  <User className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Sparkles className="h-4 w-4 text-white" />
                )}
              </div>
              <div
                className={cn(
                  "p-4 rounded-2xl text-sm leading-relaxed max-w-[85%] whitespace-pre-wrap",
                  m.role === "user"
                    ? "bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white rounded-tr-none"
                    : "bg-blue-50 dark:bg-blue-900/20 text-gray-800 dark:text-gray-200 rounded-tl-none",
                )}
              >
                {/* Render message parts */}
                {m.parts.map((part, index) =>
                  part.type === "text" ? (
                    <span key={index}>{part.text}</span>
                  ) : null,
                )}
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && <TypingIndicator />}

          {/* Error State */}
          {error && <ErrorMessage onRetry={handleRetry} />}
        </div>

        {/* Input Area */}
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-zinc-800">
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 rounded-full px-4 py-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Ask a follow up question..."
              disabled={isLoading}
              className="bg-transparent text-sm w-full outline-none text-gray-900 dark:text-white placeholder:text-gray-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="text-primary hover:text-primary/80 disabled:opacity-50 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
}
