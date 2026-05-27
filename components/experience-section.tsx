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
      "Als Berufsbildner coache und führe ich jährlich bis zu 14 angehende Software Engineers von den ersten Codezeilen bis zu eigenständigen Fullstack-Projekten. Neben dem täglichen, praxisnahen Mentoring liegt meine Hauptverantwortung darin, unsere Web-Applikationen und Schulungsmodule komplett neu aufzuziehen und modernste Best Practices rund um Clean Code und automatisierte CI/CD-Pipelines zu etablieren. Ein echtes Herzensthema ist für mich das bewusste Management von KI im Entwickleralltag – hier zeige ich den Tech-Talenten von morgen, wie sie Effizienz steigern können, während das solide Software-Handwerk und das eigene kritische Denken das Fundament bleiben.",
    tags: ["React", "React Native", "C#", "Java Spring Boot", "SQL"],
  },
  {
    dateRange: "2019 — 2022",
    title: "Team Lead",
    company: "SBB",
    href: "https://company.sbb.ch/de/home.html",
    description:
      "Als Team Lead habe ich drei interdisziplinäre Scrum-Teams durch die agile Transformation gesteuert. Ein echtes Highlight war für mich, ein kriselndes Entwicklerteam wieder auf Kurs und in den produktiven Modus zu bringen. Neben der personellen Führung der Studierenden hatte ich die technische Gesamtverantwortung für das Projekt „Bahnknowhow“, bei dem wir das geballte Wissen der SBB durch komplexe Datenvisualisierungen digitalisiert haben.",
    tags: ["Angular", "Neo4j", "Spring Boot", "REST", "AWS", "D3.js"],
  },
  {
    dateRange: "2016 — 2019",
    title: "Senior Lead Software Engineer",
    company: "Swisscom",
    href: "https://www.swisscom.ch/",
    description:
      "Hier war ich als Fullstack-Entwickler mit Fachverantwortung im Enterprise-Umfeld unterwegs. Eines meiner Herzensprojekte war der Aufbau einer zentralen UI-Komponenten-Library, die unternehmensweit genutzt wurde. Ausserdem habe ich die Architektur für das neue Raumbuchungssystem von über 20'000 Mitarbeitenden hochgezogen – das alte Tool war unbeliebt, also haben wir es in agilen Sprints komplett neu gedacht, bis es die Leute tatsächlich gerne genutzt haben.",
    tags: ["React", "Redux", "JavaScript", "C#", "HTML5", "CSS"],
  },
  {
    dateRange: "2013 — 2016",
    title: "Senior Software Engineer",
    company: "Swisscom",
    href: "https://www.swisscom.ch/",
    description:
      "Bei dieser Station ging es um die vollständige Ablösung unseres alten Enterprise-Warenkorbs (eOrder). Ich durfte hier von der ersten Konzeption moderner Schnittstellen über die Datenmigration bis zum erfolgreichen Rollout die technische Gesamtverantwortung übernehmen. Der Aufwand hat sich gelohnt: Am Ende konnten wir die User-Experience und die Performance für die Kunden massiv nach vorne bringen.",
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
