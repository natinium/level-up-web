"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  Clock,
  Users,
  Trophy,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function NationalExamPage() {
  const t = useTranslations("NationalExam");
  const router = useRouter();
  const locale = useLocale();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const examDate = new Date("2025-07-15T09:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = examDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const subjects = [
    {
      name: "Biology",
      slug: "biology",
      icon: "🧬",
      questions: 150,
      completed: 45,
    },
    {
      name: "Civics",
      slug: "civics",
      icon: "🏛️",
      questions: 120,
      completed: 30,
    },
    {
      name: "English",
      slug: "english",
      icon: "📚",
      questions: 100,
      completed: 60,
    },
    {
      name: "Mathematics",
      slug: "mathematics",
      icon: "📐",
      questions: 180,
      completed: 20,
    },
  ];

  const features = [
    {
      icon: Clock,
      title: t("features.realTime"),
      desc: t("features.realTimeDesc"),
    },
    {
      icon: Users,
      title: t("features.compete"),
      desc: t("features.competeDesc"),
    },
    { icon: Trophy, title: t("features.earn"), desc: t("features.earnDesc") },
    {
      icon: BookOpen,
      title: t("features.access"),
      desc: t("features.accessDesc"),
    },
  ];

  return (
    <div className="h-full w-full overflow-y-auto bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-black">
      <div className="max-w-6xl mx-auto p-6 md:p-8 space-y-8">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push(`/${locale}/dashboard`)}
            className="rounded-xl"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-black text-gray-900 dark:text-white">
              {t("title")}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">{t("subtitle")}</p>
          </div>
        </div>

        <Card className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 border-0 shadow-2xl shadow-blue-500/30 rounded-[2.5rem] p-8 md:p-12">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                {t("countdown.label")}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              {t("countdown.title")}
            </h2>
            <div className="grid grid-cols-4 gap-4 max-w-lg">
              {[
                { label: t("countdown.days"), value: timeLeft.days },
                { label: t("countdown.hours"), value: timeLeft.hours },
                { label: t("countdown.minutes"), value: timeLeft.minutes },
                { label: t("countdown.seconds"), value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <span className="text-3xl md:text-4xl font-black text-white">
                      {String(item.value).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-white/80 mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="rounded-[2.5rem] p-6 shadow-sm border-0 bg-white dark:bg-zinc-900">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
              {t("examSubjects")}
            </h3>
            <div className="space-y-4">
              {subjects.map((subject) => {
                const progress = (subject.completed / subject.questions) * 100;
                return (
                  <Link
                    key={subject.name}
                    href={`/${locale}/national-exam/test/${subject.slug}`}
                    className="group flex items-center gap-4 p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <span className="text-3xl">{subject.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-gray-900 dark:text-white text-sm">
                          {subject.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {subject.completed}/{subject.questions}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform"
                    >
                      <Play className="h-4 w-4 mr-1" />
                      {t("start")}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </Card>

          <Card className="rounded-[2.5rem] p-6 shadow-sm border-0 bg-white dark:bg-zinc-900">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
              {t("features.title")}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/50"
                >
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                    <feature.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="rounded-[2.5rem] p-6 md:p-8 shadow-sm border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                {t("participation.title")}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {t("participation.subtitle")}
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-green-600 dark:text-green-400">
                15,432
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {t("participation.students")}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`/${locale}/national-exam/test/biology`}
              className="flex-1"
            >
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl h-12 font-bold">
                {t("actions.startPracticing")}
              </Button>
            </Link>
            <Button
              variant="outline"
              className="flex-1 rounded-xl h-12 font-bold border-2 border-gray-200 dark:border-zinc-700"
            >
              {t("actions.viewLeaderboard")}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
