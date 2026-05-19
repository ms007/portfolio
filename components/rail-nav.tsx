"use client"

import { useScrollSpy, type UseScrollSpyOptions } from "@/hooks/use-scroll-spy"
import { cn } from "@/lib/cn"

export type RailNavItem = {
  /** Target element ID (without the leading `#`). */
  id: string
  /** Visible label. */
  label: string
}

export type RailNavProps = {
  items: readonly RailNavItem[]
  /** Extra classes merged onto the `<nav>` element. */
  className?: string
  /** Accessible name for the navigation landmark. */
  "aria-label"?: string
  /** Override the underlying scroll-spy observer options. */
  scrollSpyOptions?: UseScrollSpyOptions
}

export function RailNav({
  items,
  className,
  "aria-label": ariaLabel = "On this page",
  scrollSpyOptions,
}: RailNavProps) {
  const activeId = useScrollSpy(
    items.map((item) => item.id),
    scrollSpyOptions,
  )

  if (items.length === 0) return null

  return (
    <nav aria-label={ariaLabel} className={cn("hidden lg:block", className)}>
      <ul className="flex list-none flex-col gap-2">
        {items.map(({ id, label }) => {
          const isActive = activeId === id
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group inline-flex cursor-pointer items-center gap-4 py-1 font-mono text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-200",
                  isActive
                    ? "text-accent-strong"
                    : "text-foreground-subtle hover:text-accent-hover focus-visible:text-accent-hover",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-block h-px transition-all duration-200",
                    isActive
                      ? "bg-accent-strong w-16"
                      : "bg-foreground-subtle group-hover:bg-accent-hover group-focus-visible:bg-accent-hover w-8 group-hover:w-16 group-focus-visible:w-16",
                  )}
                />
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
