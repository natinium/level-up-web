"use client";

import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12 shadow-xl shadow-blue-900/10">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/30 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mb-6 border border-blue-400/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            New Feature: AI Tutor Available!
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl tracking-tight leading-tight">
            Ready to Ace Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300">
              Entrance Exams?
            </span>
          </h1>
          <p className="mb-8 text-lg text-blue-100 max-w-xl">
            Join thousands of students mastering their subjects with LevelUP.
            Personalized quizzes, detailed analytics, and AI-powered
            explanations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-6 rounded-2xl shadow-lg shadow-blue-900/20 text-lg transition-transform hover:scale-105 active:scale-95">
              Start Practicing
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-6 rounded-2xl font-bold text-lg backdrop-blur-sm"
            >
              View Roadmap
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block">
          {/* Placeholder for mascot/illustration */}
          <div className="w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl absolute -top-10 -right-10"></div>
          <div className="relative z-10 text-9xl">🚀</div>
        </div>
      </div>
    </div>
  );
}
