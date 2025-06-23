"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggleMinimal() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-8 w-8 rounded-lg bg-gray-200 dark:bg-gray-700" />
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group relative h-8 w-8 rounded-lg transition-all duration-300 ease-in-out",
        "hover:scale-110 active:scale-95",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        isDark ? "bg-slate-800 hover:bg-slate-700" : "bg-yellow-100 hover:bg-yellow-200",
      )}
      aria-label="Toggle theme"
    >
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        <Sun
          className={cn(
            "absolute inset-0 m-auto h-4 w-4 text-yellow-600 transition-all duration-500 ease-in-out",
            "group-hover:text-yellow-700",
            isDark ? "translate-y-8 rotate-180 scale-0 opacity-0" : "translate-y-0 rotate-0 scale-100 opacity-100",
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 m-auto h-4 w-4 text-slate-300 transition-all duration-500 ease-in-out",
            "group-hover:text-slate-100",
            isDark ? "translate-y-0 rotate-0 scale-100 opacity-100" : "-translate-y-8 -rotate-180 scale-0 opacity-0",
          )}
        />
      </div>
    </button>
  )
}
