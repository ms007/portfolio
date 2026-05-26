"use client"

import { type PointerEvent, type ReactNode, useEffect, useRef } from "react"
import { cn } from "@/lib/cn"

type CardProps = {
  /** When set, the whole card becomes an external link (opens in a new tab). */
  href?: string
  /** Accessible name, applied to the anchor when `href` is set. */
  "aria-label"?: string
  /** Layout classes for the card's direct children (e.g. a grid definition). */
  className?: string
  /**
   * Card content. Direct children participate in the layout defined by
   * `className`; give content wrappers `relative z-10` so they sit above the
   * hover wash.
   */
  children: ReactNode
}

/**
 * Container-only card: renders the hover wash + pointer-tracked glow and slots
 * arbitrary `children` into a caller-defined layout. Consumers (e.g.
 * `ExperienceCard`, `ProjectCard`) own the grid and the content markup.
 */
export function Card({ href, "aria-label": ariaLabel, className, children }: CardProps) {
  const frameRef = useRef(0)
  const rectRef = useRef<DOMRect | null>(null)
  const nextX = useRef(0)
  const nextY = useRef(0)

  useEffect(
    () => () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    },
    [],
  )

  const handlePointerEnter = (e: PointerEvent<HTMLElement>) => {
    rectRef.current = e.currentTarget.getBoundingClientRect()
  }

  const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
    if (!rectRef.current) return
    nextX.current = e.clientX - rectRef.current.left
    nextY.current = e.clientY - rectRef.current.top
    if (frameRef.current) return
    const target = e.currentTarget
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = 0
      target.style.setProperty("--card-mx", `${nextX.current}px`)
      target.style.setProperty("--card-my", `${nextY.current}px`)
    })
  }

  const handlePointerLeave = () => {
    rectRef.current = null
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = 0
    }
  }

  const pointerHandlers = {
    onPointerEnter: handlePointerEnter,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
  }

  const wrapperClasses = cn("group relative isolate", className)

  const wash = (
    <>
      <div
        aria-hidden="true"
        className={cn(
          "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md",
          "ease-out-quad transition-[background-color,box-shadow] duration-200",
          // Invisible at rest; subtle fill appears on hover.
          // Dark uses --color-surface-raised (near-neutral) instead of --color-card-hover,
          // which has a blue tilt that reads too cool at this opacity.
          "lg:-inset-x-6 lg:block",
          "lg:group-hocus:bg-surface/70 lg:group-hocus:shadow-[var(--shadow-card-hover)]",
          "dark:lg:group-hocus:bg-[#14141e]/70",
        )}
      />
      <div
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(250px circle at var(--card-mx, 50%) var(--card-my, 50%), rgba(129, 140, 248, 0.3), transparent 70%)",
          padding: "2px",
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
        }}
        className={cn(
          "pointer-events-none absolute -inset-x-4 -inset-y-4 z-[2] hidden rounded-md opacity-0",
          "ease-out-quad transition-opacity duration-200",
          "lg:-inset-x-6 dark:lg:block",
          "dark:lg:group-hocus:opacity-100",
        )}
      />
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={wrapperClasses}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
        {...pointerHandlers}
      >
        {wash}
        {children}
      </a>
    )
  }

  return (
    <div className={wrapperClasses} {...pointerHandlers}>
      {wash}
      {children}
    </div>
  )
}
