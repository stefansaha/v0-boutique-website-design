import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Dein Besuch | Rinabelle Fashion",
  description: "So läuft ein Besuch bei Rinabelle ab. Persönliche Beratung, entspannte Atmosphäre, keine Hektik.",
}

const steps = [
  {
    number: "01",
    title: "Du kommst rein",
    description: "Kein Termin nötig. Die Tür ist offen, du kannst dich in Ruhe umschauen. Ich komme auf dich zu, wenn du Hilfe brauchst – oder lass dich einfach treiben.",
  },
  {
    number: "02",
    title: "Wir reden kurz",
    description: "Was suchst du? Für welchen Anlass? Oder stöberst du einfach? Ich höre zu und frage nach – aber nur so viel wie nötig.",
  },
  {
    number: "03",
    title: "Du probierst an",
    description: "Nimm dir Zeit in der Umkleide. Die Spiegel sind ehrlich, das Licht ist schmeichelhaft. Ich sage dir meine Meinung – aber nur wenn du fragst.",
  },
  {
    number: "04",
    title: "Du entscheidest",
    description: "Kein Druck, kein Upselling. Wenn nichts dabei ist, ist das völlig okay. Du bist jederzeit wieder willkommen.",
  },
]

const faqs = [
  {
    question: "Brauche ich einen Termin?",
    answer: "Nein. Komm einfach vorbei. Nur wenn du eine ausführliche Stilberatung möchtest, melde dich vorher kurz – dann nehme ich mir extra Zeit.",
  },
  {
    question: "Kann ich Sachen zurückbringen?",
    answer: "Ja, innerhalb von 14 Tagen mit Etikett. Aber ehrlich: Wenn du unsicher bist, lass es lieber erstmal hier. Wir legen es dir gern zur Seite.",
  },
  {
    question: "Welche Größen gibt es?",
    answer: "Von 34 bis 44, je nach Stück. Ich achte darauf, verschiedene Körper zu berücksichtigen. Bei Fragen ruf kurz an.",
  },
  {
    question: "Gibt es Parkplätze?",
    answer: "Ja, kostenlose Parkplätze direkt vor der Tür und in der Nähe. Alle Details findest du auf der Standort-Seite.",
  },
]

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Hero with Image */}
        <section className="relative h-[60vh] sm:h-[70vh] min-h-[400px] sm:min-h-[500px]">
          <Image
            src="/images/erlebnis-hero.jpg"
            alt="Boutique Erlebnis"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/70 via-[#1a1a1a]/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="max-w-xl">
                <span className="text-white/60 text-xs sm:text-sm tracking-[0.2em] uppercase">Dein Besuch</span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-3 sm:mt-4 leading-[1.1]">
                  Kein Stress.
                  <br />
                  <span className="text-white/70">Nur Mode und gute Gespräche.</span>
                </h1>
                <p className="text-white/70 mt-4 sm:mt-6 text-base sm:text-lg">
                  Komm vorbei oder sichere dir deinen Termin – ganz entspannt.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <Link
                    href="/termin"
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/95 text-[#1a1a1a] font-serif text-sm sm:text-base tracking-wide rounded-full hover:bg-white transition-all duration-300 hover:shadow-lg"
                  >
                    <span>Termin vereinbaren</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/standort"
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-white/40 text-white font-serif text-sm sm:text-base tracking-wide rounded-full hover:border-white/70 hover:bg-white/5 transition-all duration-300"
                  >
                    <span>Einfach vorbeikommen</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 sm:py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Bei mir gibt es keine aufdringlichen Verkäufer, keine überfüllten Regale, keinen Zeitdruck. 
                Nur eine entspannte Atmosphäre und ehrliche Beratung, wenn du sie möchtest.
              </p>
            </div>
          </div>
        </section>

        {/* Simple Process Steps */}
        <section className="py-12 sm:py-16 bg-[#faf9f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground text-center mb-10 sm:mb-14">
                So läuft dein Besuch ab
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5 rounded-full border border-[#c4a47c]/30 flex items-center justify-center">
                    <span className="font-serif text-lg sm:text-xl text-[#c4a47c]">1</span>
                  </div>
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">
                    Du kommst vorbei oder buchst einen Termin
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5 rounded-full border border-[#c4a47c]/30 flex items-center justify-center">
                    <span className="font-serif text-lg sm:text-xl text-[#c4a47c]">2</span>
                  </div>
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">
                    Persönliche Beratung in Ruhe
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5 rounded-full border border-[#c4a47c]/30 flex items-center justify-center">
                    <span className="font-serif text-lg sm:text-xl text-[#c4a47c]">3</span>
                  </div>
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">
                    Du findest dein perfektes Outfit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Images Grid */}
        <section className="pb-16 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/boutique-interior.jpg"
                  alt="Boutique Innenansicht"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/boutique-detail-2.jpg"
                  alt="Umkleide"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/boutique-detail-3.jpg"
                  alt="Accessoires"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 sm:py-24 bg-[#f8f6f3]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 sm:mb-16">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground">
                  So läuft es ab
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-12">
                {steps.map((step) => (
                  <div key={step.number} className="relative">
                    <span className="font-serif text-4xl sm:text-5xl text-secondary/30">{step.number}</span>
                    <h3 className="font-serif text-lg sm:text-xl text-foreground mt-2 mb-2 sm:mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="font-serif text-4xl sm:text-6xl text-secondary/30 mb-4 sm:mb-6">&ldquo;</div>
              <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-foreground leading-relaxed">
                Bei Rinabelle fühlt es sich an wie bei einer Freundin vorbeischauen, 
                die zufällig einen unglaublich guten Geschmack hat.
              </blockquote>
              <p className="text-muted-foreground mt-6 sm:mt-8 text-sm sm:text-base">— Sarah, Stammkundin</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-[#f8f6f3]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground text-center mb-16">
                Gut zu wissen
              </h2>
              
              <div className="space-y-0">
                {faqs.map((faq, index) => (
                  <div 
                    key={faq.question} 
                    className={`py-8 ${index !== faqs.length - 1 ? "border-b border-foreground/10" : ""}`}
                  >
                    <h3 className="font-medium text-foreground text-lg mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#2a2a2a]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl lg:text-4xl text-white mb-6">
                Ich freu mich auf dich
              </h2>
              <p className="text-white/60 mb-10 leading-relaxed">
                Wirklich. Komm vorbei, schau dich um, lass uns plaudern. 
                Die Adresse und Öffnungszeiten findest du hier:
              </p>
              <Link
                href="/standort"
                className="inline-block px-10 py-4 bg-white text-[#2a2a2a] font-medium hover:bg-white/90 transition-colors"
              >
                Standort & Öffnungszeiten
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
