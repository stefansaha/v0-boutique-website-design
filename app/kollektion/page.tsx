import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Kollektion | Rinabelle Fashion",
  description: "Entdecke unsere sorgfältig ausgewählte Kollektion. Elegante Kleider, Alltagslooks und besondere Styles.",
}

const categories = [
  {
    title: "Kleider",
    subtitle: "Für jeden Moment",
    description: "Luftige Sommerkleider, elegante Abendroben, lässige Wickelkleider. Ich suche Schnitte aus, die schmeicheln – nicht verkleiden.",
    image: "/images/collection-dresses.jpg",
  },
  {
    title: "Everyday Pieces",
    subtitle: "Die Basics, die keine sind",
    description: "Blusen mit dem gewissen Etwas. Hosen, die wirklich sitzen. Strick, der nicht kratzt. Stücke für jeden Tag, die trotzdem besonders sind.",
    image: "/images/collection-casual.jpg",
  },
  {
    title: "Besondere Anlässe",
    subtitle: "Wenn es zählt",
    description: "Hochzeit, Jubiläum, der eine wichtige Abend. Outfits, bei denen alle fragen: Wo hast du das her?",
    image: "/images/collection-elegant.jpg",
  },
  {
    title: "Accessoires",
    subtitle: "Die kleinen Dinge",
    description: "Schals aus feinster Wolle, handgefertigter Schmuck, Taschen mit Charakter. Das gewisse Extra.",
    image: "/images/collection-accessories.jpg",
  },
]

export default function CollectionPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Hero with Image */}
        <section className="relative h-[70vh] sm:h-[70vh] min-h-[520px] sm:min-h-[500px]">
          <Image
            src="/images/kollektion-hero.jpg"
            alt="Kollektion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#1a1a1a]/85 via-[#1a1a1a]/50 to-transparent" />
          <div className="absolute inset-0 flex items-end sm:items-center pb-12 sm:pb-0">
            <div className="container mx-auto px-6 sm:px-6 lg:px-12">
              <div className="max-w-[320px] sm:max-w-xl">
                <span className="text-white/50 text-xs tracking-[0.2em] uppercase">Kollektion</span>
                <h1 className="font-serif text-[1.65rem] sm:text-4xl md:text-5xl lg:text-6xl text-white mt-3 sm:mt-4 leading-[1.25] sm:leading-[1.1]">
                  Finde dein perfektes Outfit –
                  <br />
                  <span className="text-white/70">persönlich beraten in Lauda-Königshofen</span>
                </h1>
                <p className="text-white/50 mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed max-w-[280px] sm:max-w-md">
                  Buche deinen Termin und entdecke die Kollektion in entspannter Atmosphäre.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <Link
                    href="/termin"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 bg-[#d4c4b0] text-[#3d3632] font-serif text-sm sm:text-base tracking-wide rounded-full shadow-sm hover:shadow-md hover:bg-[#e0d3c3] active:scale-[0.98] transition-all duration-300 ease-out"
                  >
                    <span>Deinen Termin sichern</span>
                    <svg className="w-4 h-4 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </Link>
                  <Link
                    href="#kollektion"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border border-white/30 text-white font-serif text-sm sm:text-base tracking-wide rounded-full hover:border-white/50 hover:bg-white/5 active:scale-[0.98] transition-all duration-300"
                  >
                    Kollektion entdecken
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-14 sm:py-20 lg:py-28">
          <div className="container mx-auto px-6 sm:px-6 lg:px-12">
            <div className="max-w-2xl sm:max-w-3xl mx-auto text-center">
              <p className="text-[0.95rem] sm:text-lg lg:text-xl text-muted-foreground leading-[1.8] sm:leading-relaxed">
                Jedes Stück in meiner Boutique habe ich selbst ausgesucht. Ich fahre zu kleinen Herstellern, 
                fühle jeden Stoff, prüfe jede Naht. Was hier hängt, würde ich selbst tragen.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Collection Section */}
        <section className="pb-14 sm:pb-20 -mt-4 sm:-mt-8">
          <div className="container mx-auto px-6 sm:px-6 lg:px-12">
            <div className="max-w-xl mx-auto">
              <h2 className="font-serif text-lg sm:text-2xl text-foreground text-center mb-8 sm:mb-10">
                Warum diese Kollektion besonders ist
              </h2>
              
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-[#d4c4b0]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8b7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                  <p className="text-foreground text-xs sm:text-sm leading-relaxed">
                    Handverlesene Stücke
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-[#d4c4b0]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8b7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                  </div>
                  <p className="text-foreground text-xs sm:text-sm leading-relaxed">
                    Individuelle Auswahl
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-[#d4c4b0]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8b7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-foreground text-xs sm:text-sm leading-relaxed">
                    Persönliche Beratung
                  </p>
                </div>
              </div>

              <div className="mt-10 sm:mt-12 text-center">
                <Link
                  href="/termin"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-4 bg-[#d4c4b0] text-[#3d3632] font-serif text-sm sm:text-base tracking-wide rounded-full shadow-sm hover:shadow-md hover:bg-[#e0d3c3] active:scale-[0.98] transition-all duration-300 ease-out"
                >
                  <span>Jetzt Termin vereinbaren</span>
                  <svg className="w-4 h-4 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="kollektion" className="pb-14 sm:pb-24 scroll-mt-20">
          <div className="container mx-auto px-6 sm:px-6 lg:px-12">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-16 items-center ${
                  index !== categories.length - 1 ? "mb-14 sm:mb-24 lg:mb-32" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative aspect-[4/5] sm:aspect-[4/5] overflow-hidden rounded-xl sm:rounded-none ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1 lg:pr-12" : "lg:pl-12"} px-1 sm:px-0`}>
                  <span className="text-[#8b7355] text-xs sm:text-sm tracking-[0.15em] uppercase">{category.subtitle}</span>
                  <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl text-foreground mt-2 sm:mt-3 mb-3 sm:mb-6">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground leading-[1.8] sm:leading-relaxed text-[0.9rem] sm:text-lg">
                    {category.description}
                  </p>
                  <div className="mt-5 sm:mt-8 w-10 sm:w-12 h-px bg-[#c4a47c]/40" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note Section */}
        <section className="py-14 sm:py-24 bg-[#faf9f7]">
          <div className="container mx-auto px-6 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-serif text-xl sm:text-3xl text-foreground mb-4 sm:mb-6">
                  Die Kollektion wechselt
                </h2>
                <p className="text-muted-foreground leading-[1.8] sm:leading-relaxed mb-4 text-[0.9rem] sm:text-base">
                  Was du hier siehst, ist nur ein kleiner Einblick. Ich bekomme regelmäßig 
                  neue Stücke – manchmal nur wenige von jedem. Wenn dir etwas gefällt, 
                  komm lieber früher als später vorbei.
                </p>
                <p className="text-muted-foreground leading-[1.8] sm:leading-relaxed text-[0.9rem] sm:text-base">
                  Auf Instagram zeige ich neue Arrivals oft zuerst. 
                  Folg mir, wenn du nichts verpassen willst.
                </p>
                <a 
                  href="https://instagram.com/rinabelle.fashion" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-6 sm:mt-8 text-foreground hover:text-[#8b7355] transition-colors"
                >
                  <span className="text-xs sm:text-sm tracking-[0.1em] uppercase">@rinabelle.fashion</span>
                  <span className="w-6 sm:w-8 h-px bg-current" />
                </a>
              </div>
              <div className="relative aspect-square rounded-xl sm:rounded-none overflow-hidden order-1 lg:order-2">
                <Image
                  src="/images/boutique-detail-1.jpg"
                  alt="Detail aus der Boutique"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-24 bg-[#2a2a2a]">
          <div className="container mx-auto px-6 sm:px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6">
                Nicht sicher, was dir steht?
              </h2>
              <p className="text-white/50 mb-8 sm:mb-10 leading-[1.8] sm:leading-relaxed text-[0.9rem] sm:text-base max-w-md mx-auto">
                Dafür bin ich da. Komm vorbei und wir finden gemeinsam heraus, 
                welche Schnitte, Farben und Stile dich am besten zur Geltung bringen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/termin"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#d4c4b0] text-[#3d3632] font-serif tracking-wide rounded-full shadow-sm hover:shadow-md hover:bg-[#e0d3c3] active:scale-[0.98] transition-all duration-300 ease-out"
                >
                  <span>Termin sichern</span>
                  <svg className="w-4 h-4 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/erlebnis"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 border border-white/30 text-white font-serif tracking-wide rounded-full hover:border-white/50 hover:bg-white/5 active:scale-[0.98] transition-all duration-300"
                >
                  So läuft ein Besuch ab
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
