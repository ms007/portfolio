import { type ComponentPropsWithoutRef, forwardRef } from "react"
import { cn } from "@/lib/cn"

type InputProps = Omit<ComponentPropsWithoutRef<"input">, "size"> & {
  size?: "default" | "sm" | "xs"
}

const base =
  "font-mono text-foreground bg-surface-elevated border border-border rounded-sm outline-none transition-control focus:border-accent [font-variant-numeric:tabular-nums]"

const sizes = {
  default: "h-7 px-2 text-xs",
  sm: "h-7 px-2 text-xs w-12 text-center",
  xs: "h-5 px-0 text-[10px] w-[42px] text-center",
} as const

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size = "default", type = "text", ...props }, ref) => (
    <input ref={ref} type={type} className={cn(base, sizes[size], className)} {...props} />
  ),
)

Input.displayName = "Input"
