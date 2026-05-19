"use client"

import { useTheme } from "next-themes"

import { IconControl } from "@/components/icon-control"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <IconControl
      type="button"
      aria-label="Theme umschalten"
      title="Theme umschalten"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <svg
        data-theme-icon="sun"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <svg
        data-theme-icon="moon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
      </svg>
    </IconControl>
  )
}
