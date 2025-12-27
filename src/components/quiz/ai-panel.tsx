"use client";

import { motion } from "motion/react";
import { X, Bot, Send, Sparkles } from "lucide-react";
import { Question } from "@/types/content";

interface AIPanelProps {
  question: Question;
  onClose: () => void;
}

export function AIPanel({ question, onClose }: AIPanelProps) {
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
        className="absolute top-0 right-0 h-full w-full md:w-96 bg-white text-gray-900 z-40 p-6 shadow-2xl flex flex-col"
      >
        <div className="flex justify-between items-center mb-6 border-b pb-4">
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
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4">
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-sm text-gray-600 italic">
            &quot; {question.text} &quot;
          </div>

          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 mt-1 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div className="space-y-2">
              <div className="bg-blue-50 p-4 rounded-2xl rounded-tl-none text-sm text-gray-800 leading-relaxed">
                <p className="font-bold text-primary mb-2">
                  Here&apos;s the breakdown:
                </p>
                {question.explanation ||
                  "No explanation provided for this question."}
              </div>
              <div className="flex gap-2">
                <button className="text-xs bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 font-medium">
                  Simplify
                </button>
                <button className="text-xs bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 font-medium">
                  Show Example
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Ask a follow up question..."
              className="bg-transparent text-sm w-full outline-none"
            />
            <button className="text-primary hover:text-primary/80">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
