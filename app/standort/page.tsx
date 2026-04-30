import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Standort | Rinabelle Fashion",
  description: "Finde uns in Lauda-Königshofen. Adresse, Öffnungszeiten und Anfahrt zur Boutique.",
}

const openingHours = [
  { day: "Montag", hours: "10 – 18 Uhr" },
  { day: "Dienstag", hours: "10 – 18 Uhr" },
  { day: "Mittwoch", hours: "10 – 18 Uhr" },
  { day: "Donnerstag", hours: "10 – 18 Uhr" },
  { day: "Freitag", hours: "10 – 18 Uhr" },
  { day: "Samstag", hours: "10 – 14 Uhr" },
  { day: "Sonntag", hours: "geschlossen" },
]

export default function LocationPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-[#8b7355] text-xs sm:text-sm tracking-[0.15em] uppercase font-medium">Standort</span>
              <h1 className="font-serif text-[1.75rem] sm:text-4xl lg:text-5xl text-foreground mt-3 sm:mt-4 mb-3 sm:mb-4 leading-[1.2] sm:leading-tight">
                Komm vorbei.
                <br />
                <span className="text-muted-foreground">Die Tür ist offen.</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-none">
                Besuche mich in Lauda-Königshofen – ich freue mich auf dich.
              </p>
              
              {/* Mobile Quick Actions */}
              <div className="grid grid-cols-2 gap-3 sm:hidden mb-6">
                <a
                  href="https://maps.google.com/?q=Hauptstraße+12+97922+Lauda-Königshofen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-5 bg-[#faf9f7] rounded-2xl active:scale-[0.98] transition-transform"
                >
                  <div className="w-10 h-10 rounded-full bg-[#d4c4b0]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#8b7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#3d3632]">Route planen</span>
                </a>
                <a
                  href="tel:+4993439999999"
                  className="flex flex-col items-center gap-2 p-5 bg-[#faf9f7] rounded-2xl active:scale-[0.98] transition-transform"
                >
                  <div className="w-10 h-10 rounded-full bg-[#d4c4b0]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#8b7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#3d3632]">Anrufen</span>
                </a>
              </div>

              {/* Desktop CTAs */}
              <div className="hidden sm:flex flex-col items-start gap-3">
                <div className="flex flex-row items-center gap-4">
                  <a
                    href="https://maps.google.com/?q=Hauptstraße+12+97922+Lauda-Königshofen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-[#d4c4b0] text-[#3d3632] font-serif text-base tracking-wide rounded-full shadow-sm hover:shadow-md hover:bg-[#e0d3c3] hover:-translate-y-0.5 transition-all duration-300 ease-out"
                  >
                    <span>In Google Maps öffnen</span>
                    <svg className="w-4 h-4 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                  <Link
                    href="/termin"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#c4a47c]/40 text-[#5c524a] font-serif text-base tracking-wide rounded-full hover:border-[#c4a47c]/70 hover:bg-[#c4a47c]/5 transition-all duration-300"
                  >
                    <span>Termin vereinbaren</span>
                  </Link>
                </div>
                <span className="text-muted-foreground/60 text-sm tracking-wide italic">
                  Einfach anklicken und direkt navigieren
                </span>
              </div>
              
              {/* Mobile CTA */}
              <Link
                href="/termin"
                className="w-full sm:hidden inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#d4c4b0] text-[#3d3632] font-serif text-sm tracking-wide rounded-full shadow-sm active:scale-[0.98] transition-all"
              >
                <span>Termin vereinbaren</span>
                <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Map & Info */}
        <section className="py-10 sm:py-20 bg-[#faf9f7]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
              {/* Map */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="aspect-[4/3] sm:aspect-square lg:aspect-[4/3] overflow-hidden bg-muted rounded-xl sm:rounded-none">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.5!2d9.7!3d49.566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDMzJzU3LjYiTiA5wrA0MicwMC4wIkU!5e0!3m2!1sde!2sde!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Standort Rinabelle Fashion"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-4 lg:col-start-9 order-1 lg:order-2">
                <div className="space-y-8 sm:space-y-10">
                  {/* Address */}
                  <div>
                    <h2 className="text-xs sm:text-sm tracking-[0.1em] uppercase text-muted-foreground/70 mb-3 sm:mb-4">Adresse</h2>
                    <p className="text-foreground text-base sm:text-lg leading-relaxed">
                      Rinabelle Fashion
                      <br />
                      Hauptstraße 12
                      <br />
                      97922 Lauda-Königshofen
                    </p>
                    <a
                      href="https://maps.google.com/?q=Hauptstraße+12+97922+Lauda-Königshofen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center gap-2 mt-4 text-[#8b7355] hover:text-foreground transition-colors text-sm"
                    >
                      In Google Maps öffnen
                      <span className="w-4 h-px bg-current" />
                    </a>
                  </div>

                  {/* Hours */}
                  <div>
                    <h2 className="text-xs sm:text-sm tracking-[0.1em] uppercase text-muted-foreground/70 mb-3 sm:mb-4">Öffnungszeiten</h2>
                    <div className="space-y-1.5 sm:space-y-2">
                      {openingHours.map((item) => (
                        <div key={item.day} className="flex justify-between text-foreground text-[0.9rem] sm:text-base">
                          <span>{item.day}</span>
                          <span className={item.hours === "geschlossen" ? "text-muted-foreground" : ""}>
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Parking - Hidden on mobile, shown in getting here section */}
                  <div className="hidden sm:block">
                    <h2 className="text-sm tracking-[0.1em] uppercase text-muted-foreground/70 mb-4">Parkmöglichkeiten</h2>
                    <p className="text-foreground leading-relaxed">
                      Kostenlose Parkplätze direkt in der Innenstadt, nur eine Minute zu Fuß.
                    </p>
                  </div>

                  {/* Contact */}
                  <div>
                    <h2 className="text-xs sm:text-sm tracking-[0.1em] uppercase text-muted-foreground/70 mb-3 sm:mb-4">Kontakt</h2>
                    <div className="space-y-1.5 sm:space-y-2 text-foreground text-[0.9rem] sm:text-base">
                      <a href="tel:+4993439999999" className="block hover:text-[#8b7355] transition-colors">
                        +49 9343 999 999 9
                      </a>
                      <a href="mailto:hallo@rinabelle.de" className="block hover:text-[#8b7355] transition-colors">
                        hallo@rinabelle.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Here */}
        <section className="py-14 sm:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-xl sm:text-3xl text-foreground mb-8 sm:mb-12">Anfahrt</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 max-w-4xl">
              <div className="p-5 sm:p-0 bg-[#faf9f7] sm:bg-transparent rounded-xl sm:rounded-none">
                <div className="flex items-start gap-4 sm:block">
                  <div className="w-10 h-10 sm:w-0 sm:h-0 shrink-0 rounded-full bg-[#d4c4b0]/20 flex sm:hidden items-center justify-center">
                    <svg className="w-5 h-5 text-[#8b7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2 sm:mb-3 text-[0.95rem] sm:text-base">Mit dem Auto</h3>
                    <p className="text-muted-foreground leading-[1.7] sm:leading-relaxed text-[0.85rem] sm:text-base">
                      Über die A81 (Ausfahrt Boxberg) oder A3 (Ausfahrt Wertheim). 
                      Kostenlose Parkplätze gibt es direkt in der Innenstadt, 
                      nur eine Minute zu Fuß von der Boutique.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-0 bg-[#faf9f7] sm:bg-transparent rounded-xl sm:rounded-none">
                <div className="flex items-start gap-4 sm:block">
                  <div className="w-10 h-10 sm:w-0 sm:h-0 shrink-0 rounded-full bg-[#d4c4b0]/20 flex sm:hidden items-center justify-center">
                    <svg className="w-5 h-5 text-[#8b7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2 sm:mb-3 text-[0.95rem] sm:text-base">Mit der Bahn</h3>
                    <p className="text-muted-foreground leading-[1.7] sm:leading-relaxed text-[0.85rem] sm:text-base">
                      Der Bahnhof Lauda liegt an der Frankenbahn (Würzburg – Stuttgart). 
                      Von dort sind es etwa 5 Minuten zu Fuß zur Hauptstraße.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-24 bg-[#2a2a2a]">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6">
              Fragen? Schreib mir.
            </h2>
            <p className="text-white/50 max-w-md sm:max-w-xl mx-auto mb-8 sm:mb-10 text-[0.9rem] sm:text-base leading-[1.7] sm:leading-relaxed">
              Ob Terminanfrage, Frage zur Kollektion oder einfach Hallo sagen – 
              ich antworte meistens noch am selben Tag.
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
                href="/kontakt"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 border border-white/30 text-white font-serif tracking-wide rounded-full hover:border-white/50 hover:bg-white/5 active:scale-[0.98] transition-all duration-300"
              >
                Nachricht schreiben
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
