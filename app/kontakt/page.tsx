import type { Metadata } from "next"
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
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-accent text-sm tracking-[0.15em] uppercase font-medium">Kontakt</span>
              <h1 className="font-serif text-4xl lg:text-5xl text-foreground mt-4 mb-6 leading-tight">
                Lass uns reden.
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl">
                Fragen zur Kollektion? Möchtest du einen Beratungstermin? 
                Oder einfach mal Hallo sagen? Ich freu mich.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-20 bg-[#f8f6f3]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Form */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-2xl text-foreground mb-8">Nachricht schreiben</h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-4 lg:col-start-9">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-4">Direkt erreichen</h3>
                    <div className="space-y-3">
                      <a 
                        href="tel:+4993439999999" 
                        className="block text-foreground hover:text-secondary transition-colors"
                      >
                        +49 9343 999 999 9
                      </a>
                      <a 
                        href="mailto:hallo@rinabelle.de" 
                        className="block text-foreground hover:text-secondary transition-colors"
                      >
                        hallo@rinabelle.de
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-4">Social Media</h3>
                    <a 
                      href="https://instagram.com/rinabelle.fashion" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-secondary transition-colors"
                    >
                      @rinabelle.fashion
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Neuankünfte, Behind the Scenes und Styling-Inspiration
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-4">Adresse</h3>
                    <p className="text-foreground leading-relaxed">
                      Hauptstraße 12
                      <br />
                      97922 Lauda-Königshofen
                    </p>
                    <Link 
                      href="/standort" 
                      className="inline-flex items-center gap-2 mt-3 text-secondary hover:text-foreground transition-colors text-sm"
                    >
                      Anfahrt & Öffnungszeiten
                      <span className="w-4 h-px bg-current" />
                    </Link>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Ich antworte meistens innerhalb von 24 Stunden. 
                      Wenn es schneller gehen soll, ruf einfach an.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-white">
          <div className="aspect-[21/9] max-h-[400px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.5!2d9.7!3d49.566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDMzJzU3LjYiTiA5wrA0MicwMC4wIkU!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Rinabelle Fashion"
              className="w-full h-full grayscale"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
