"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

export default function SignInPage() {
  const handleGoogleSignIn = () => {
    // Replace this with your auth logic (e.g., next-auth signIn("google"))
    console.log("Google Sign-In clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 px-4">
      <div className="w-full max-w-md">
        <Card className="border-none shadow-xl rounded-xl bg-white dark:bg-zinc-900 transition-colors">
          <CardHeader className="text-center space-y-2">
            <ShieldCheck className="mx-auto text-primary h-10 w-10" />
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription className="text-muted-foreground">
              Sign in to continue to your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={handleGoogleSignIn}
              variant="outline"
              className="w-full gap-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-5 h-5"
              >
                <path
                  fill="#FFC107"
                  d="M43.6 20.5H42V20H24v8h11.3C33.4 32.4 29.1 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.3 2.7l6.1-6.1C33.7 6.1 29.1 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.7-.4-3.5z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.3 14.7l6.6 4.8C14.5 16.4 18.9 13 24 13c2.8 0 5.3 1 7.3 2.7l6.1-6.1C33.7 6.1 29.1 4 24 4 16.3 4 9.5 8.6 6.3 14.7z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.1 0 9.8-1.9 13.4-5.1l-6.2-5.2C29.2 35.6 26.7 37 24 37c-5 0-9.2-3.3-10.7-7.8l-6.6 5.1C9.6 39.3 16.3 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20.5H42V20H24v8h11.3c-1.1 2.9-3.1 5.2-5.7 6.7l6.2 5.2c-0.4 0.3 7.9-5.8 7.9-15.9 0-1.3-.1-2.7-.4-3.5z"
                />
              </svg>
              Continue with Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
