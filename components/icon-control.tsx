import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

const iconControlClass =
  "text-foreground-muted hover:text-accent transition-control inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm bg-transparent"

type IconControlProps<C extends ElementType> = {
  as?: C
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<C>, "as" | "children" | "className">

export function IconControl<C extends ElementType = "button">({
  as,
  children,
  ...props
}: IconControlProps<C>) {
  const Component = as ?? "button"
  return (
    <Component className={iconControlClass} {...props}>
      {children}
    </Component>
  )
}
