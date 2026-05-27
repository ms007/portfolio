import { type ComponentPropsWithoutRef, forwardRef } from "react"
import { cn } from "@/lib/cn"

type SwatchProps = Omit<ComponentPropsWithoutRef<"button">, "color"> & {
  color: string
  isActive?: boolean
}

const base =
  "w-5 h-5 rounded-[3px] cursor-pointer flex-shrink-0 border-2 [outline-offset:-1px] transition-control"

const inactive = "border-transparent outline outline-border"
const active = "border-accent outline outline-accent"

export const Swatch = forwardRef<HTMLButtonElement, SwatchProps>(
  ({ className, color, isActive = false, type = "button", style, ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      aria-pressed={isActive}
      className={cn(base, isActive ? active : inactive, className)}
      style={{ background: color, ...style }}
      {...props}
    />
  ),
)

Swatch.displayName = "Swatch"
