import { MobileSectionHeader } from "@/components/mobile-section-header"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Mozaicon",
    href: "https://github.com/ms007/mozaicon",
    description:
      "Browser-Editor zum Erstellen und Anpassen von SVG-Icons — modern engineertes Frontend mit Unit- und E2E-Tests, Storybook und CI/CD.",
    tags: ["React", "TypeScript", "Vite", "Vitest", "Playwright", "Storybook"],
    image: "/mozaicon.png",
  },
  {
    title: "MySchoolPro",
    href: "https://staging.myschoolpro.ch",
    description:
      "Web-Applikation für die Schulverwaltung — vereinfacht Schulleitern die Pensen- und Klassenplanung. Automatisches Deployment über CI/CD auf eigenen VPS Server. Authentication mittels Passwort oder Microsoft Account.",
    tags: ["React", "TypeScript", "shadcn/ui", "PostgreSQL", "GitHub Actions"],
    image: "/myschoolpro.png",
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
