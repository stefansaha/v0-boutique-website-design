import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Über uns | Rinabelle Fashion",
  description: "Die Geschichte hinter Rinabelle Fashion. Eine Boutique mit Herz und Leidenschaft für individuelle Damenmode.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-accent text-sm tracking-[0.15em] uppercase font-medium">Über uns</span>
              <h1 className="font-serif text-4xl lg:text-5xl text-foreground mt-4 mb-6 leading-tight">
                Nicht nur ein Laden.
                <br />
                <span className="text-secondary">Eine kleine Welt für sich.</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Lerne die Boutique kennen und erlebe persönliche Beratung in entspannter Atmosphäre.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                <div className="flex flex-col items-center sm:items-start">
                  <Link
                    href="/termin"
                    className="group inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 bg-[#d4c4b0] text-[#3d3632] font-serif text-sm sm:text-base tracking-wide rounded-full shadow-sm hover:shadow-md hover:bg-[#e0d3c3] hover:-translate-y-0.5 transition-all duration-300 ease-out"
                  >
                    <span>Deinen Termin sichern</span>
                    <svg className="w-4 h-4 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </Link>
                  <span className="text-muted-foreground/70 text-xs sm:text-sm mt-2.5 tracking-wide italic">
                    Unverbindlich & ganz entspannt
                  </span>
                </div>
                <Link
                  href="/erlebnis"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 text-[#5c524a] font-serif text-sm tracking-wide hover:text-[#3d3632] transition-all duration-300"
                >
                  <span className="border-b border-[#5c524a]/30 group-hover:border-[#3d3632]/50 pb-0.5 transition-colors duration-300">Deinen Besuch planen</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Warum Rinabelle Section */}
        <section className="py-16 sm:py-20 bg-[#faf9f7]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground text-center mb-10 sm:mb-14">
                Warum Rinabelle?
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5 rounded-full border border-[#c4a47c]/30 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#c4a47c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">
                    Handverlesene Stücke mit Liebe ausgewählt
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5 rounded-full border border-[#c4a47c]/30 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#c4a47c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">
                    Persönliche Beratung ohne Druck
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5 rounded-full border border-[#c4a47c]/30 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#c4a47c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  </div>
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">
                    Eine Atmosphäre zum Wohlfühlen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-[#f8f6f3]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Image */}
              <div className="lg:col-span-5">
                <div className="sticky top-32">
                  <div className="aspect-[3/4] overflow-hidden">
                    <Image
                      src="/images/owner-portrait.jpg"
                      alt="Ekaterina, Inhaberin von Rinabelle"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Ekaterina in der Boutique, 2024
                  </p>
                </div>
              </div>

              {/* Story Text */}
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-foreground leading-relaxed mb-8">
                    Ich bin Ekaterina, und Rinabelle ist mein Herzensprojekt.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Bevor ich diese Boutique eröffnete, habe ich Jahre in der Modebranche gearbeitet. 
                    Große Läden, schnelle Trends, hoher Druck. Irgendwann fragte ich mich: Worum geht 
                    es hier eigentlich noch?
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Mode sollte Freude machen. Sie sollte dir das Gefühl geben, genau richtig zu sein – 
                    nicht zu viel, nicht zu wenig. Einfach du, nur vielleicht ein bisschen strahlender.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Bei Rinabelle gibt es keine Verkaufszahlen, die ich erreichen muss. Keine saisonale 
                    Massenware. Stattdessen: Stücke, die ich selbst tragen würde. Beratung, die ehrlich ist. 
                    Und die Zeit, die du brauchst.
                  </p>

                  <blockquote className="border-l-2 border-secondary pl-6 my-10">
                    <p className="font-serif text-foreground text-xl italic">
                      Mein Ziel ist nicht, dir etwas zu verkaufen. Mein Ziel ist, dass du dich gut fühlst.
                    </p>
                  </blockquote>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Wenn du vorbeischaust, wirst du verstehen was ich meine. Bis dahin – ich freue mich auf dich.
                  </p>

                  <p className="font-serif text-secondary text-lg mt-8">
                    Deine Ekaterina
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Simple horizontal */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              <div>
                <span className="text-secondary font-serif text-4xl">01</span>
                <h3 className="font-serif text-xl text-foreground mt-4 mb-3">Ehrlichkeit</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wenn etwas nicht sitzt, sage ich es dir. Schmeichelei bringt niemandem etwas.
                </p>
              </div>
              <div>
                <span className="text-secondary font-serif text-4xl">02</span>
                <h3 className="font-serif text-xl text-foreground mt-4 mb-3">Qualität</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jedes Stück wird mit Bedacht ausgewählt. Materialien, Verarbeitung, Passform – alles zählt.
                </p>
              </div>
              <div>
                <span className="text-secondary font-serif text-4xl">03</span>
                <h3 className="font-serif text-xl text-foreground mt-4 mb-3">Persönlichkeit</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Keine Trends um der Trends willen. Mode, die zu dir passt, nicht umgekehrt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#2a2a2a]">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-6">
              Neugierig geworden?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10">
              Am besten lernst du Rinabelle persönlich kennen. Ich freu mich auf deinen Besuch.
            </p>
            <Link
              href="/termin"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/95 text-[#2a2a2a] font-serif tracking-wide rounded-full hover:bg-white transition-all duration-300 hover:shadow-lg"
            >
              <span>Jetzt Termin vereinbaren</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
