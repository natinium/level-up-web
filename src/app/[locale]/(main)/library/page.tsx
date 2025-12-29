import { Button } from "@/components/ui/button";
import { Bookmark, Clock } from "lucide-react";

export default function LibraryPage() {
  return (
    <div className="p-8 space-y-8 h-full overflow-y-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
          My Library
        </h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="rounded-xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white border-gray-200 dark:border-zinc-800"
          >
            Saved
          </Button>
          <Button
            variant="ghost"
            className="rounded-xl text-gray-500 dark:text-gray-400"
          >
            History
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder Items */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col gap-4"
          >
            <div className="flex items-start justify-between">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl">
                <Bookmark className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold text-gray-400 dark:text-gray-500">
                2 days ago
              </span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                Algebra II: Functions
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                Mastering quadratic functions and their graphs.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 font-medium">
              <Clock className="h-3 w-3" /> 15 mins left
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
