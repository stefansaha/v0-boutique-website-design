import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Mail, Car, Train, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Standort & Öffnungszeiten | Rinabelle Fashion",
  description: "Besuchen Sie unsere Boutique in Lauda-Königshofen. Finden Sie Adresse, Öffnungszeiten und Anfahrtsinformationen.",
}

const openingHours = [
  { day: "Montag", hours: "10:00 - 18:00" },
  { day: "Dienstag", hours: "10:00 - 18:00" },
  { day: "Mittwoch", hours: "10:00 - 18:00" },
  { day: "Donnerstag", hours: "10:00 - 18:00" },
  { day: "Freitag", hours: "10:00 - 18:00" },
  { day: "Samstag", hours: "10:00 - 14:00" },
  { day: "Sonntag", hours: "Geschlossen" },
]

export default function LocationPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4">Besuchen Sie uns</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
                Wir freuen uns auf Sie
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                Entdecken Sie unsere Boutique im Herzen von Lauda-Königshofen. 
                Wir heißen Sie herzlich willkommen!
              </p>
            </div>
          </div>
        </section>

        {/* Map & Info Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Map */}
              <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-2xl overflow-hidden bg-muted">
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

              {/* Info Cards */}
              <div className="space-y-6">
                {/* Address */}
                <div className="bg-card rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-2">Adresse</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Rinabelle Fashion<br />
                        Hauptstraße 12<br />
                        97922 Lauda-Königshofen
                      </p>
                      <a
                        href="https://maps.google.com/?q=Hauptstraße+12+97922+Lauda-Königshofen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-secondary transition-colors mt-3"
                      >
                        In Google Maps öffnen
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-card rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-foreground mb-4">Öffnungszeiten</h3>
                      <div className="space-y-2">
                        {openingHours.map((item) => (
                          <div
                            key={item.day}
                            className="flex justify-between text-sm"
                          >
                            <span className="text-muted-foreground">{item.day}</span>
                            <span className={item.hours === "Geschlossen" ? "text-secondary" : "text-foreground font-medium"}>
                              {item.hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-card rounded-2xl p-6">
                  <h3 className="font-serif text-xl text-foreground mb-4">Kontakt</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+4993439999999"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      <span>+49 9343 999 999 9</span>
                    </a>
                    <a
                      href="mailto:hallo@rinabelle.de"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary shrink-0" />
                      <span>hallo@rinabelle.de</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Here */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                So finden Sie uns
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Lauda-Königshofen ist gut erreichbar – sowohl mit dem Auto als auch mit öffentlichen Verkehrsmitteln.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* By Car */}
              <div className="bg-background rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Car className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground">Mit dem Auto</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Über die A81 (Ausfahrt Boxberg) oder A3 (Ausfahrt Wertheim). 
                  Kostenlose Parkplätze finden Sie direkt in der Nähe der Boutique in der Innenstadt.
                </p>
              </div>

              {/* By Train */}
              <div className="bg-background rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center">
                    <Train className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground">Mit der Bahn</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Der Bahnhof Lauda liegt an der Frankenbahn. Von dort sind es nur wenige Gehminuten 
                  bis zu unserer Boutique in der Hauptstraße.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Haben Sie Fragen?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Kontaktieren Sie uns gerne vorab, wenn Sie Fragen haben oder einen Termin für eine persönliche Beratung vereinbaren möchten.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-secondary rounded-full px-8">
              <Link href="/kontakt">
                Nachricht senden
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
