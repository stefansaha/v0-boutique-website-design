import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="font-serif text-2xl">
              Rinabelle
            </Link>
            <p className="text-white/50 mt-4 max-w-sm leading-relaxed">
              Damenmode in Lauda-Königshofen. Persönlich ausgewählt, 
              ehrlich beraten.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-sm tracking-[0.1em] uppercase text-white/40 mb-5">Entdecken</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/kollektion" className="text-white/70 hover:text-white transition-colors">
                Kollektion
              </Link>
              <Link href="/ueber-uns" className="text-white/70 hover:text-white transition-colors">
                Über uns
              </Link>
              <Link href="/erlebnis" className="text-white/70 hover:text-white transition-colors">
                Dein Besuch
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-sm tracking-[0.1em] uppercase text-white/40 mb-5">Kontakt</h4>
            <div className="space-y-3 text-white/70">
              <p>Hauptstraße 12</p>
              <p>97922 Lauda-Königshofen</p>
              <a href="mailto:hallo@rinabelle.de" className="block hover:text-white transition-colors">
                hallo@rinabelle.de
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h4 className="text-sm tracking-[0.1em] uppercase text-white/40 mb-5">Social</h4>
            <a 
              href="https://instagram.com/rinabelle.fashion" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>&copy; {new Date().getFullYear()} Rinabelle</p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-white/50 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white/50 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
