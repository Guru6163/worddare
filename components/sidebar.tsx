"use client";

import Link from "next/link";
import { Mail, History, Settings, Home, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: "today", label: "Today's Summary", icon: Mail },
  ];

  return (
    <aside className="bg-white border-r border-gray-200 w-full md:w-64 md:min-h-screen p-4">
      {/* Top Branding */}
      <div className="flex items-center justify-between md:justify-start md:gap-3 mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-purple-600" />
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">Worddare</h1>
        </div>
        <Link
          href="/"
          className="text-sm text-blue-600 flex items-center gap-1 md:hidden"
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex md:flex-col gap-1 overflow-x-auto md:overflow-x-visible">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              activeTab === item.id
                ? "bg-blue-50 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="hidden md:inline">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
