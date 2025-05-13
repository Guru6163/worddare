"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"
import Sidebar from "@/components/sidebar"
import TodaySummary from "@/components/today-summary"
import History from "@/components/history"
import Settings from "@/components/settings"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("today")

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-4 md:p-8">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-blue-500" />
            <h1 className="text-2xl font-semibold text-gray-800">Daily Email Summary Bot</h1>
          </div>
          <Button variant="ghost" size="sm" asChild className="hidden md:flex">
            <Link href="/" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </header>

        <div className="w-full">
          <div className={cn("transition-all", activeTab === "today" ? "block" : "hidden")}>
            <TodaySummary />
          </div>
          <div className={cn("transition-all", activeTab === "history" ? "block" : "hidden")}>
            <History />
          </div>
          <div className={cn("transition-all", activeTab === "settings" ? "block" : "hidden")}>
            <Settings />
          </div>
        </div>
      </main>
    </div>
  )
}
