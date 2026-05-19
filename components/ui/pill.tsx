import { type ComponentPropsWithoutRef, forwardRef } from "react"
import { cn } from "@/lib/cn"

type PillProps = ComponentPropsWithoutRef<"li">

const base =
  "text-accent-strong bg-accent-soft border-accent/40 transition-control inline-flex h-[26px] items-center rounded-sm border px-2 text-[11px] font-medium select-none"

export const Pill = forwardRef<HTMLLIElement, PillProps>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn(base, className)} {...props} />
))

Pill.displayName = "Pill"
