import { MobileSectionHeader } from "@/components/mobile-section-header"

export function AboutSection() {
  return (
    <section id="about" aria-label="Über mich" className="mb-24 scroll-mt-24">
      <MobileSectionHeader>Über mich</MobileSectionHeader>

      <div className="text-foreground-muted [&_a]:text-foreground [&_a:hover]:text-accent-strong [&_strong]:text-foreground text-base leading-[1.6] text-pretty [&_a]:border-b [&_a]:border-dotted [&_a]:border-current [&_a]:font-medium [&_a]:transition-colors [&_a]:duration-150 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_strong]:font-medium">
        <p>
          Ich bin Software-Entwickler mit Leib und Seele – und das Frontend ist mein absoluter Sweet
          Spot. Ich liebe es, das technisch Machbare auszureizen und die Brücke zwischen starkem
          Engineering und modernem Design zu schlagen. Mein Blick gilt den Details, die eine
          Applikation nicht nur funktionstüchtig, sondern intuitiv und rund machen.
        </p>
        <p>
          Diese Begeisterung bringe ich aktuell im{" "}
          <a href="https://berufsbildungscenter.ch/" target="_blank" rel="noopener noreferrer">
            ICT Berufsbildungscenter
          </a>{" "}
          ein. Als Berufsbildner coache ich die Tech-Talente von morgen und entwickle unsere
          Frontend-Module mit <strong>React</strong> und <strong>React Native</strong> weiter. Ein
          zentraler Fokus liegt dabei auf der Integration von KI – ein Thema, das unseren Beruf
          fundamental verändert und das wir smart nutzen müssen, ohne dass das solide
          Software-Handwerk an Stellenwert verliert.{" "}
        </p>
        <p>
          Mein Fundament habe ich bei zwei der grössten IT-Player der Schweiz gelegt: Bei der
          Swisscom führte mein Weg vom Support bis tief in die Software-Entwicklung. Bei der SBB
          kamen schliesslich erste Linienführungsaufgaben hinzu. Mein technologischer Fokus lag
          dabei vor allem auf <strong>C# (.Net)</strong> im Backend und <strong>React</strong> im
          Frontend.
        </p>
        <p>
          Wenn ich nicht vor dem Bildschirm sitze? Den Ausgleich zum Coden finde ich auf dem
          Motorrad, beim Wandern mit meiner Frau in den Schweizer Bergen oder beim Rezepte
          ausprobieren in der Küche.
        </p>
      </div>
    </section>
  )
}
