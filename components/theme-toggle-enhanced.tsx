"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggleEnhanced() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-9 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-9 w-16 items-center rounded-full transition-all duration-300 ease-in-out",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        isDark ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-gradient-to-r from-yellow-400 to-orange-500",
      )}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
    >
      {/* Background gradient overlay for smooth transition */}
      <div
        className={cn(
          "absolute inset-0 rounded-full transition-opacity duration-300",
          isDark
            ? "bg-gradient-to-r from-slate-800 to-slate-900 opacity-100"
            : "bg-gradient-to-r from-sky-400 to-blue-500 opacity-100",
        )}
      />

      {/* Sliding circle */}
      <div
        className={cn(
          "relative z-10 inline-block h-7 w-7 transform rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out",
          "flex items-center justify-center",
          isDark ? "translate-x-8" : "translate-x-1",
        )}
      >
        <Sun
          className={cn(
            "h-4 w-4 text-yellow-500 transition-all duration-300 ease-in-out",
            isDark ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
          )}
        />
        <Moon
          className={cn(
            "absolute h-4 w-4 text-slate-700 transition-all duration-300 ease-in-out",
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0",
          )}
        />
      </div>

      {/* Background stars for dark mode */}
      <div className={cn("absolute inset-0 transition-opacity duration-500", isDark ? "opacity-100" : "opacity-0")}>
        <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-white opacity-60" />
        <div className="absolute left-3 top-5 h-0.5 w-0.5 rounded-full bg-white opacity-40" />
        <div className="absolute right-3 top-3 h-0.5 w-0.5 rounded-full bg-white opacity-80" />
      </div>
    </button>
  )
}
