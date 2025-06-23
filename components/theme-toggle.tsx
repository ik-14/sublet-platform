"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <div className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "relative h-9 w-9 rounded-full transition-all duration-300 ease-in-out",
        "hover:bg-gray-100 dark:hover:bg-gray-800",
        "focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600",
      )}
    >
      <div className="relative h-4 w-4 overflow-hidden">
        <Sun
          className={cn(
            "absolute inset-0 h-4 w-4 transition-all duration-500 ease-in-out",
            theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 h-4 w-4 transition-all duration-500 ease-in-out",
            theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
          )}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
