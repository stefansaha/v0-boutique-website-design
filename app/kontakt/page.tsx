import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Kontakt | Rinabelle Fashion",
  description: "Schreib mir eine Nachricht. Fragen, Terminwünsche oder einfach Hallo sagen – ich freu mich.",
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Hero with Image */}
        <section className="relative h-[50vh] sm:h-[55vh] min-h-[400px] sm:min-h-[450px]">
          <Image
            src="/images/kontakt-hero.jpg"
            alt="Kontakt"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/50 to-transparent" />
          <div className="absolute inset-0 flex items-end sm:items-center pb-8 sm:pb-0">
            <div className="container mx-auto px-5 sm:px-6 lg:px-12">
              <div className="max-w-xl">
                <span className="text-white/60 text-xs tracking-[0.2em] uppercase">Kontakt</span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-2 sm:mt-4 leading-[1.1]">
                  Lass uns reden.
                </h1>
                <p className="text-white/70 mt-3 sm:mt-6 text-sm sm:text-lg leading-relaxed">
                  Fragen zur Kollektion oder möchtest du einen Termin? Schreib mir ganz unkompliziert.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5 mt-5 sm:mt-8">
                  <Link
                    href="/termin"
                    className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-9 py-3 sm:py-4 bg-[#d4c4b0] text-[#3d3632] font-serif text-sm sm:text-base tracking-wide rounded-full shadow-sm hover:shadow-md hover:bg-[#e0d3c3] hover:-translate-y-0.5 transition-all duration-300 ease-out"
                  >
                    <span>Termin vereinbaren</span>
                    <svg className="w-4 h-4 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </Link>
                  <a
                    href="https://wa.me/4993439999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3.5 border border-white/30 text-white font-serif text-sm tracking-wide rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            {/* Quick Contact Cards - Mobile First */}
            <div className="grid grid-cols-2 gap-3 sm:hidden mb-10">
              <a
                href="tel:+4993439999999"
                className="flex flex-col items-center gap-2 p-5 bg-[#faf9f7] rounded-2xl hover:bg-[#f5f3f0] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#d4c4b0]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#8b7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#3d3632]">Anrufen</span>
              </a>
              <a
                href="https://wa.me/4993439999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-5 bg-[#faf9f7] rounded-2xl hover:bg-[#f5f3f0] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#3d3632]">WhatsApp</span>
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Form Side */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-6 sm:mb-8">Schreib mir eine Nachricht</h2>
                <ContactForm />
              </div>

              {/* Contact Info Side */}
              <div className="lg:col-span-4 lg:col-start-9 order-1 lg:order-2">
                <div className="lg:sticky lg:top-32 hidden sm:block">
                  <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-6 sm:mb-10">Direkt erreichen</h2>
                  
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <span className="text-sm tracking-[0.1em] uppercase text-muted-foreground/60">Telefon</span>
                      <a 
                        href="tel:+4993439999999" 
                        className="block text-foreground text-lg mt-2 hover:text-secondary transition-colors"
                      >
                        +49 9343 999 999 9
                      </a>
                    </div>

                    <div>
                      <span className="text-sm tracking-[0.1em] uppercase text-muted-foreground/60">WhatsApp</span>
                      <a 
                        href="https://wa.me/4993439999999" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground text-lg mt-2 hover:text-secondary transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Nachricht schreiben
                      </a>
                    </div>

                    <div>
                      <span className="text-sm tracking-[0.1em] uppercase text-muted-foreground/60">E-Mail</span>
                      <a 
                        href="mailto:hallo@rinabelle.de" 
                        className="block text-foreground text-lg mt-2 hover:text-secondary transition-colors"
                      >
                        hallo@rinabelle.de
                      </a>
                    </div>

                    <div>
                      <span className="text-sm tracking-[0.1em] uppercase text-muted-foreground/60">Instagram</span>
                      <a 
                        href="https://instagram.com/rinabelle.fashion" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-foreground text-lg mt-2 hover:text-secondary transition-colors"
                      >
                        @rinabelle.fashion
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Neuankünfte & Styling-Inspiration
                      </p>
                    </div>

                    <div className="pt-6 border-t border-foreground/10">
                      <span className="text-sm tracking-[0.1em] uppercase text-muted-foreground/60">Adresse</span>
                      <p className="text-foreground text-lg mt-2 leading-relaxed">
                        Hauptstraße 12
                        <br />
                        97922 Lauda-Königshofen
                      </p>
                      <Link 
                        href="/standort" 
                        className="inline-flex items-center gap-3 mt-4 text-secondary hover:text-foreground transition-colors text-sm"
                      >
                        Anfahrt & Öffnungszeiten
                        <span className="w-6 h-px bg-current" />
                      </Link>
                    </div>

                    <div className="pt-6 border-t border-foreground/10">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Ich antworte meistens innerhalb von 24 Stunden. 
                        Wenn es schneller gehen soll, ruf einfach an.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-[#f8f6f3]">
          <div className="aspect-[4/3] sm:aspect-[21/9] max-h-[350px] sm:max-h-[450px] overflow-hidden">
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
        </section>
      </main>
      <Footer />
    </>
  )
}
