import { type ComponentPropsWithoutRef, forwardRef } from "react"
import { cn } from "@/lib/cn"

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "default" | "accent"
  size?: "default" | "sm" | "xs"
  isActive?: boolean
  icon?: boolean
}

const base =
  "inline-flex items-center justify-center gap-1 font-medium whitespace-nowrap select-none cursor-pointer rounded-sm border transition-control active:scale-[0.97] disabled:opacity-30 disabled:pointer-events-none"

const sizes = {
  default: "h-7 px-3 text-xs",
  sm: "h-6 px-2 text-[11px]",
  xs: "h-5 px-1.5 text-[10px]",
} as const

const variants = {
  default:
    "text-foreground-muted bg-surface-elevated border-border hover:text-foreground hover:bg-surface-hover hover:border-border-strong",
  accent: "text-white bg-accent border-accent hover:bg-accent-hover hover:border-accent-hover",
} as const

const activeStyles =
  "text-accent-strong bg-accent-soft border-accent hover:text-accent-strong hover:bg-accent-soft hover:border-accent"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      isActive = false,
      icon = false,
      type = "button",
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        base,
        sizes[size],
        icon && "aspect-square px-0",
        isActive ? activeStyles : variants[variant],
        className,
      )}
      {...props}
    />
  ),
)

Button.displayName = "Button"
