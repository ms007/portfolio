import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "@/components/ui/arrow-up-right"
import { Pill } from "@/components/ui/pill"
import { cn } from "@/lib/cn"

type ProjectCardProps = {
  title: string
  description: string
  href?: string
  /** Optional thumbnail (path under `/public`). Falls back to a placeholder. */
  image?: string
  tags: readonly string[]
  className?: string
}

export function ProjectCard({
  title,
  description,
  href,
  image,
  tags,
  className,
}: ProjectCardProps) {
  return (
    <Card
      href={href}
      aria-label={href ? title : undefined}
      className={cn("grid grid-cols-1 gap-2 md:grid-cols-[110px_1fr] md:gap-6", className)}
    >
      <div className="relative z-10 pt-1">
        <div className="border-border group-hocus:border-border-strong ease-out-quad relative aspect-[16/10] w-full max-w-[200px] overflow-hidden rounded-md border transition-colors duration-200 md:max-w-none">
          {image ? (
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 768px) 110px, 200px"
              className="object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="from-accent-soft to-surface-elevated flex h-full w-full items-center justify-center bg-gradient-to-br"
            >
              <span className="text-foreground-subtle font-mono text-[10px] tracking-[0.18em] uppercase">
                Preview
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="relative z-10 min-w-0">
        <h3 className="text-foreground group-hocus:text-accent-strong ease-out-quad text-base leading-snug font-semibold tracking-[-0.005em] text-pretty transition-colors duration-200">
          {title}
          {/* ↗ marks an external/new-tab link; internal routes navigate via <Link> in the same tab. */}
          {href && !href.startsWith("/") && (
            <>
              {" "}
              <ArrowUpRight />
            </>
          )}
        </h3>
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
    </Card>
  )
}
