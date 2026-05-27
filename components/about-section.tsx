import { MobileSectionHeader } from "@/components/mobile-section-header"

export function AboutSection() {
  return (
    <section id="about" aria-label="Über mich" className="mb-24 scroll-mt-24">
      <MobileSectionHeader>Über mich</MobileSectionHeader>

      <div className="text-foreground-muted [&_a]:text-foreground [&_a:hover]:text-accent-strong [&_strong]:text-foreground text-base leading-[1.6] text-pretty [&_a]:border-b [&_a]:border-dotted [&_a]:border-current [&_a]:font-medium [&_a]:transition-colors [&_a]:duration-150 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_strong]:font-medium">
        <p>
          Ich bin Software-Engineer und Tech Lead aus Leidenschaft. Mein Fokus liegt auf dem
          modernen Frontend, wo ich komplexe Business-Anforderungen in skalierbare, performante
          Lösungen übersetze. Für mich gehören eine durchdachte Softwarearchitektur und
          herausragende UI/UX untrennbar zusammen – beides ist Teil desselben Handwerks.
        </p>
        <p>
          Mein Fundament habe ich bei zwei der grössten IT-Player der Schweiz gelegt: Bei Swisscom
          führte mein Weg vom PC-Supporter bis zum Senior Lead mit Architekturverantwortung. Bei der
          SBB kamen schliesslich agile Transformationen und die Führung interdisziplinärer Teams
          hinzu.
        </p>
        <p>
          Heute gebe ich diese Erfahrung am{" "}
          <a href="https://berufsbildungscenter.ch/" target="_blank" rel="noopener noreferrer">
            ICT Berufsbildungscenter
          </a>{" "}
          weiter, um die Tech-Talente von morgen fit für die Praxis zu machen.
        </p>
        <p>
          Wenn ich nicht vor dem Bildschirm sitze? Den Ausgleich zum Coden finde ich auf dem
          Motorrad, beim Wandern in den Schweizer Bergen mit meiner Frau oder beim Experimentieren
          in der Küche.
        </p>
      </div>
    </section>
  )
}
