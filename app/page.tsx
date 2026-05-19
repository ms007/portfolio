import { HomeHeader } from "@/components/home-header"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <HomeHeader />
        <main id="content" className="min-w-0 flex-1 pt-24 lg:w-[52%] lg:py-24">
          <section id="about" aria-label="Über mich" className="mb-24 scroll-mt-24">
            <div className="bg-surface/85 border-border text-foreground sticky top-0 z-[5] mx-[-1.5rem] mb-6 border-b px-6 py-4 text-[11px] font-semibold tracking-[0.16em] uppercase backdrop-blur-md lg:hidden">
              Über mich
            </div>

            <div className="text-foreground-muted [&_a]:text-foreground [&_a:hover]:text-accent-strong [&_strong]:text-foreground text-base leading-[1.6] text-pretty [&_a]:border-b [&_a]:border-dotted [&_a]:border-current [&_a]:font-medium [&_a]:transition-colors [&_a]:duration-150 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_strong]:font-medium">
              <p>
                Ich bin Software-Entwickler mit Leib und Seele – und das Frontend ist mein absoluter
                Sweet Spot. Ich liebe es, das technisch Machbare auszureizen. Mein Ding ist die
                Brücke zwischen starkem Engineering und coolem Design: Ich habe ein echtes Faible
                für die Details, die eine App nicht nur funktionstüchtig, sondern richtig rund
                machen.
              </p>

              <p>
                Diesen Vibe bringe ich aktuell im{" "}
                <a href="https://berufsbildungscenter.ch/">ICT Berufsbildungscenter</a> ein. Als{" "}
                <strong>Berufsbildner</strong> coache ich die Tech-Talente von morgen und entwickle
                unsere Frontend-Module mit React und React Native weiter. Ein zentraler Fokus liegt
                dabei auf der Integration von KI – ein Thema, das unseren Beruf fundamental
                verändert und das wir smart nutzen müssen, ohne dass das solide Handwerk flöten
                geht.
              </p>
              <p>
                Mein Fundament habe ich bei zwei der grössten IT-Player der Schweiz gelegt: Bei der
                Swisscom führte mein Weg vom Support bis tief in die Software-Entwicklung. Bei der
                SBB kamen schliesslich erste Linienführungsaufgaben hinzu. Mein technologischer
                Fokus lag dabei vor allem auf C# im Backend und React im Frontend.
              </p>
              <p>
                Wenn ich nicht vor dem Bildschirm sitze? Den Ausgleich zum Coden finde ich auf dem
                Motorrad, beim Wandern mit meiner Frau in den Schweizer Bergen oder beim Rezepte
                ausprobieren in der Küche.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
