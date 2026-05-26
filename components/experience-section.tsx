import { ExperienceCard } from "@/components/experience-card"
import { MobileSectionHeader } from "@/components/mobile-section-header"
import { ArrowUpRight } from "@/components/ui/arrow-up-right"

const experience = [
  {
    dateRange: "2022 — Heute",
    title: "Berufsbildner",
    company: "ICT Berufsbildungscenter AG",
    href: "https://berufsbildungscenter.ch/",
    description:
      "Begleitung angehender Entwickler von null Vorkenntnissen bis hin zu eigenständigen Fullstack- und Mobile-Projekten. Dazu gehört die komplette Neukonzeption und Modernisierung der Frontend-Module nach aktuellen Industriestandards. Bei komplexen Projektarbeiten steht das praxisnahe Coaching im Vordergrund, um Clean Code und Software-Architektur ab Tag eins greifbar zu vermitteln.",
    tags: ["React", "React Native", "C#", "Java Spring Boot", "SQL"],
  },
  {
    dateRange: "2019 — 2022",
    title: "Team Lead",
    company: "SBB",
    href: "https://company.sbb.ch/de/home.html",
    description:
      "Als Team Lead durfte ich die praxisintegrierten Bachelor-Studenten der SBB durch ihren Alltag begleiten. In der TalentFactory haben wir das Projekt Bahnknowhow aufgezogen – inklusive SCRUM-Teams und der passenden Software-Architektur. Die Idee: Lernende digitalisieren zusammen mit ihren Coaches das geballte Wissen der SBB.",
    tags: ["Angular", "Neo4j", "Spring Boot", "REST", "AWS", "D3.js"],
  },
  {
    dateRange: "2016 — 2019",
    title: "Senior Lead Software Engineer",
    company: "Swisscom",
    href: "https://www.swisscom.ch/",
    description:
      "Fullstack-Entwicklung mit Fachverantwortung im Frontend. Mit dabei: das Raumbuchungssystem der Swisscom – das alte Tool war bei den 20'000 Mitarbeitenden unbeliebt, also haben wir es in 2-Wochen-Sprints neu gedacht und über kontinuierliches User-Feedback zu einem Tool gemacht, das die Leute tatsächlich gerne benutzt haben.",
    tags: ["React", "Redux", "JavaScript", "C#", "HTML5", "CSS"],
  },
  {
    dateRange: "2013 — 2016",
    title: "Senior Software Engineer",
    company: "Swisscom",
    href: "https://www.swisscom.ch/",
    description:
      "Fachverantwortung in mittelgrossen Enterprise-Software-Projekten – mein Steckenpferd war eOrder, der Bestell- und Warenkorb für die Enterprise-Kunden der Swisscom. Vom Konzept bis zur letzten Zeile war ich auf der .NET-Seite federführend mit dabei. Das alte Backend war ziemlich träge, also haben wir es mit einer modernen, objektorientierten RavenDB ergänzt – und die User-Experience hat einen richtigen Sprung gemacht.",
    tags: ["C#", "REST", "RavenDB", "jQuery"],
  },
] as const

export function ExperienceSection() {
  return (
    <section id="experience" aria-label="Erfahrung" className="mb-24 scroll-mt-24">
      <MobileSectionHeader>Erfahrung</MobileSectionHeader>

      <ol className="flex flex-col gap-12">
        {experience.map((entry) => (
          <li key={`${entry.dateRange}-${entry.company}`}>
            <ExperienceCard {...entry} />
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-accent-strong focus-visible:text-accent-strong group ease-out-quad inline-flex items-baseline gap-1 text-base leading-tight font-semibold tracking-[-0.005em] transition-colors duration-200"
        >
          <span className="border-b border-dotted border-current">Komplettes Resume ansehen</span>
          <ArrowUpRight />
        </a>
      </div>
    </section>
  )
}
