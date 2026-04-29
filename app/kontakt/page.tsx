import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt | Rinabelle Fashion",
  description: "Kontaktieren Sie uns! Wir freuen uns auf Ihre Nachricht oder Ihren Besuch in unserer Boutique.",
}

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Hauptstraße 12, 97922 Lauda-Königshofen",
    href: "https://maps.google.com/?q=Hauptstraße+12+97922+Lauda-Königshofen",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 9343 999 999 9",
    href: "tel:+4993439999999",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "hallo@rinabelle.de",
    href: "mailto:hallo@rinabelle.de",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@rinabelle.fashion",
    href: "https://instagram.com/rinabelle.fashion",
  },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4">Kontakt</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
                Schreiben Sie uns
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                Haben Sie Fragen zu unserer Kollektion, möchten einen Beratungstermin vereinbaren 
                oder einfach nur Hallo sagen? Wir freuen uns auf Ihre Nachricht!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  Nachricht senden
                </h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  So erreichen Sie uns
                </h2>
                
                <div className="space-y-4 mb-8">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 bg-card rounded-xl p-4 hover:shadow-md transition-shadow group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Opening Hours */}
                <div className="bg-card rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h3 className="font-serif text-lg text-foreground">Öffnungszeiten</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Montag - Freitag</span>
                      <span className="text-foreground font-medium">10:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Samstag</span>
                      <span className="text-foreground font-medium">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sonntag</span>
                      <span className="text-secondary">Geschlossen</span>
                    </div>
                  </div>
                </div>

                {/* Social Note */}
                <div className="mt-8 p-6 bg-primary/10 rounded-xl">
                  <p className="text-foreground font-medium mb-2">
                    Folgen Sie uns auf Instagram!
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    Entdecken Sie unsere neuesten Ankünfte, Styling-Tipps und einen Blick hinter die Kulissen.
                  </p>
                  <a
                    href="https://instagram.com/rinabelle.fashion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
                  >
                    <Instagram className="w-5 h-5" />
                    @rinabelle.fashion
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Besuchen Sie uns
              </h2>
              <p className="text-muted-foreground">
                Wir freuen uns darauf, Sie persönlich in unserer Boutique begrüßen zu dürfen.
              </p>
            </div>
            <div className="aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10416.123456!2d9.7!3d49.566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47990!2sLauda-K%C3%B6nigshofen!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort von Rinabelle Fashion"
                className="w-full h-full"
              />
            </div>
            <div className="text-center mt-6">
              <Link
                href="/standort"
                className="text-primary hover:text-secondary transition-colors font-medium"
              >
                Mehr zur Anfahrt
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
