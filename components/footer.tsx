import Link from "next/link"
import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-foreground">Rinabelle</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mode mit Persönlichkeit. Entdecken Sie stilvolle Damenmode, sorgfältig ausgewählt mit Liebe zum Detail.
            </p>
            <a 
              href="https://instagram.com/rinabelle.fashion" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@rinabelle.fashion</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-foreground">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Startseite
              </Link>
              <Link href="/ueber-uns" className="text-muted-foreground hover:text-primary transition-colors">
                Über uns
              </Link>
              <Link href="/kollektion" className="text-muted-foreground hover:text-primary transition-colors">
                Kollektion
              </Link>
              <Link href="/erlebnis" className="text-muted-foreground hover:text-primary transition-colors">
                Boutique-Erlebnis
              </Link>
              <Link href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-foreground">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Hauptstraße 12<br />
                  97922 Lauda-Königshofen
                </span>
              </div>
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

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-foreground">Öffnungszeiten</h4>
            <div className="flex items-start gap-3 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p>Mo - Fr: 10:00 - 18:00</p>
                <p>Sa: 10:00 - 14:00</p>
                <p>So: Geschlossen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Rinabelle Fashion. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-primary transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-primary transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
