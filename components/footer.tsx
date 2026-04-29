import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#333333] text-white/80">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl text-white mb-4">Rinabelle</h3>
            <p className="leading-relaxed max-w-sm mb-6">
              Damenmode mit Herz. Persönlich ausgewählt, 
              ehrlich beraten. Dein Stil wartet auf dich.
            </p>
            <a 
              href="https://instagram.com/rinabelle.fashion" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#E8AFC1] hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@rinabelle.fashion</span>
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Stöbern</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/kollektion" className="hover:text-[#E8AFC1] transition-colors">
                Kollektion
              </Link>
              <Link href="/ueber-uns" className="hover:text-[#E8AFC1] transition-colors">
                Über uns
              </Link>
              <Link href="/erlebnis" className="hover:text-[#E8AFC1] transition-colors">
                Erlebnis
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Besuch uns</h4>
            <div className="space-y-2 text-white/60">
              <p>Lauda-Königshofen</p>
              <p>Mo – Fr: 10 – 18 Uhr</p>
              <p>Sa: Nach Absprache</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Rinabelle</p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-white/70 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white/70 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
