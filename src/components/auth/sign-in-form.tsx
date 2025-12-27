"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export function SignInForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signIn.email({
        email,
        password,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Welcome back!");
            router.push("/dashboard");
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || "Invalid email or password");
            setIsLoading(false);
          },
        },
      });
    } catch (error) {
      // handled by onError
      setIsLoading(false);
    }
  };

  return (
    <Card className="rounded-3xl border-none shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Sign in
        </CardTitle>
        <CardDescription className="text-center">
          Enter your email to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl px-4 py-6 bg-gray-50 border-gray-200 focus-visible:ring-primary"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="#"
                className="ml-auto inline-block text-sm underline text-primary"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl px-4 py-6 bg-gray-50 border-gray-200 focus-visible:ring-primary"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl py-6 text-base font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-center w-full text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="underline text-primary font-bold">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
