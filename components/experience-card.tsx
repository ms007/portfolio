"use client"

import { type PointerEvent, useEffect, useRef } from "react"
import { ArrowUpRight } from "@/components/ui/arrow-up-right"
import { Pill } from "@/components/ui/pill"
import { cn } from "@/lib/cn"

type ExperienceCardProps = {
  dateRange: string
  title: string
  company: string
  href?: string
  subroles?: readonly string[]
  description: string
  tags: readonly string[]
  className?: string
}

export function ExperienceCard({
  dateRange,
  title,
  company,
  href,
  subroles,
  description,
  tags,
  className,
}: ExperienceCardProps) {
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

  const wrapperClasses = cn(
    "group relative isolate grid grid-cols-1 gap-2",
    "md:grid-cols-[110px_1fr] md:gap-6",
    className,
  )

  const pointerHandlers = {
    onPointerEnter: handlePointerEnter,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
  }

  const wash = (
    <>
      <div
        aria-hidden="true"
        className={cn(
          "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md opacity-0",
          "ease-out-quad transition-[background-color,box-shadow,backdrop-filter,opacity] duration-200",
          "lg:-inset-x-6 lg:block",
          "lg:group-hocus:bg-card-hover/60 lg:group-hocus:opacity-100 lg:group-hocus:shadow-[var(--shadow-card-hover)] lg:group-hocus:backdrop-blur-md",
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

  const body = (
    <>
      <div className="text-foreground-subtle relative z-10 pt-1 font-mono text-[11px] font-semibold tracking-[0.12em] whitespace-nowrap uppercase">
        {dateRange}
      </div>
      <div className="relative z-10 min-w-0">
        <h3 className="text-foreground group-hocus:text-accent-strong ease-out-quad text-base leading-snug font-semibold tracking-[-0.005em] text-pretty transition-colors duration-200">
          {title} · {company}
          {href && (
            <>
              {" "}
              <ArrowUpRight />
            </>
          )}
        </h3>
        {subroles && subroles.length > 0 && (
          <div className="text-foreground-muted mt-0.5 text-[13px]">
            {subroles.map((role, i) => (
              <span key={role}>
                {i > 0 && <span className="text-foreground-subtle"> · </span>}
                {role}
              </span>
            ))}
          </div>
        )}
        <p className="text-foreground-muted mt-2 text-[15px] leading-[1.55] text-pretty">
          {description}
        </p>
        {tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologien">
            {tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </ul>
        )}
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={wrapperClasses}
        aria-label={`${title} bei ${company}`}
        target="_blank"
        rel="noopener noreferrer"
        {...pointerHandlers}
      >
        {wash}
        {body}
      </a>
    )
  }

  return (
    <div className={wrapperClasses} {...pointerHandlers}>
      {wash}
      {body}
    </div>
  )
}
