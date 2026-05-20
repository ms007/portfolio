type MobileSectionHeaderProps = {
  children: React.ReactNode
}

export function MobileSectionHeader({ children }: MobileSectionHeaderProps) {
  return (
    <div className="bg-surface border-border text-foreground sticky top-0 z-[5] mx-[-1.5rem] mb-6 border-b px-6 py-4 text-[11px] font-semibold tracking-[0.16em] uppercase lg:hidden">
      {children}
    </div>
  )
}
