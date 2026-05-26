import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { HomeHeader } from "@/components/home-header"
import { ProjectsSection } from "@/components/projects-section"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <HomeHeader />
        <main id="content" className="min-w-0 flex-1 pt-24 lg:w-[52%] lg:py-24">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
        </main>
      </div>
    </div>
  )
}
