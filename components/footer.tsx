import Link from "next/link"

const footerLinks = [
  { href: "/kollektion", label: "Kollektion" },
  { href: "/ueber-uns", label: "Über mich" },
  { href: "/erlebnis", label: "Dein Besuch" },
  { href: "/standort", label: "Standort" },
  { href: "/kontakt", label: "Kontakt" },
]

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="font-serif text-3xl text-white">
              Rinabelle
            </Link>
            <p className="text-white/40 mt-6 max-w-sm leading-relaxed">
              Damenmode mit Persönlichkeit.
              <br />
              Persönlich ausgewählt, ehrlich beraten.
            </p>
            <a 
              href="https://instagram.com/rinabelle.fashion" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-white/60 hover:text-white transition-colors text-sm"
            >
              Instagram
              <span className="w-4 h-px bg-current" />
            </a>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-sm tracking-[0.15em] uppercase text-white/30 mb-6">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm tracking-[0.15em] uppercase text-white/30 mb-6">Kontakt</h4>
            <div className="space-y-4 text-white/60">
              <p className="leading-relaxed">
                Hauptstraße 12
                <br />
                97922 Lauda-Königshofen
              </p>
              <a href="tel:+4993439999999" className="block hover:text-white transition-colors">
                +49 9343 999 999 9
              </a>
              <a href="mailto:hallo@rinabelle.de" className="block hover:text-white transition-colors">
                hallo@rinabelle.de
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>&copy; {new Date().getFullYear()} Rinabelle Fashion</p>
          <div className="flex items-center gap-8">
            <Link href="/impressum" className="hover:text-white/60 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white/60 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
