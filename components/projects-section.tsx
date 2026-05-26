import { MobileSectionHeader } from "@/components/mobile-section-header"
import { ProjectCard } from "@/components/project-card"

// Placeholder teasers — replace title/description/href/image with real projects.
const projects = [
  {
    title: "Projekt Eins",
    href: "https://example.com",
    description:
      "Kurzer Teaser, der das Projekt in zwei, drei Sätzen einordnet: Problem, Ansatz und das Ergebnis, auf das du stolz bist.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Projekt Zwei",
    href: "https://example.com",
    description:
      "Noch ein Teaser. Hier zeigst du eine andere Facette deiner Arbeit — etwa Backend-Architektur, eine Mobile-App oder ein Design-System.",
    tags: ["React Native", "Spring Boot", "PostgreSQL"],
  },
] as const

export function ProjectsSection() {
  return (
    <section id="projects" aria-label="Projekte" className="mb-24 scroll-mt-24">
      <MobileSectionHeader>Projekte</MobileSectionHeader>

      <ol className="flex flex-col gap-12">
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ol>
    </section>
  )
}
