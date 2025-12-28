"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useSession } from "@/lib/auth/auth-client";
import { Bell, Globe, Moon, User, LogOut } from "lucide-react";
import { signOut } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SettingsPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed out successfully");
            router.push("/sign-in");
          },
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="space-y-8 p-8 max-w-4xl mx-auto h-full overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">
          Settings
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Manage your account and preferences.
        </p>
      </div>

      {/* Account Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <User className="text-primary" size={20} /> Account
        </h2>
        <div className="rounded-[2rem] bg-white dark:bg-zinc-900/50 p-8 shadow-sm ring-1 ring-gray-100 dark:ring-zinc-800 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input
                defaultValue={session?.user?.name || ""}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input
                defaultValue={session?.user?.email || ""}
                className="rounded-xl"
                disabled
              />
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100 dark:border-zinc-800">
            <Button
              variant="destructive"
              className="rounded-xl"
              onClick={handleSignOut}
            >
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
          </div>
        </div>
      </section>

      {/* Appearance & Language */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Moon className="text-primary" size={20} /> Appearance
        </h2>
        <div className="rounded-[2rem] bg-white dark:bg-zinc-900/50 p-8 shadow-sm ring-1 ring-gray-100 dark:ring-zinc-800 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Theme</p>
              <p className="text-sm text-gray-500">
                Switch between light and dark mode
              </p>
            </div>
            <ThemeToggle />
          </div>
          <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <Globe className="text-gray-400" />
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  Language
                </p>
                <p className="text-sm text-gray-500">
                  Change your preferred language
                </p>
              </div>
            </div>
            <select className="h-10 rounded-xl border border-gray-200 dark:border-zinc-700 bg-transparent px-3 text-sm font-medium">
              <option>English (US)</option>
              <option>Amharic</option>
              <option>Oromo</option>
            </select>
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Bell className="text-primary" size={20} /> Notifications
        </h2>
        <div className="rounded-[2rem] bg-white dark:bg-zinc-900/50 p-8 shadow-sm ring-1 ring-gray-100 dark:ring-zinc-800 space-y-6">
          {[
            {
              label: "Daily Reminders",
              desc: "Get reminded to keep your streak alive",
            },
            {
              label: "Leaderboard Updates",
              desc: "Know when a friend passes you",
            },
            { label: "New Quizzes", desc: "Updates when new content drops" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  {item.label}
                </p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <Switch defaultChecked={i === 0} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
