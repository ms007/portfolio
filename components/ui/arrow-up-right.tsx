import { cn } from "@/lib/cn"

type ArrowUpRightProps = {
  className?: string
}

export function ArrowUpRight({ className }: ArrowUpRightProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "ease-out-quad inline-block transition-transform duration-200",
        "group-hocus:translate-x-0.5 group-hocus:-translate-y-0.5",
        className,
      )}
    >
      ↗
    </span>
  )
}
