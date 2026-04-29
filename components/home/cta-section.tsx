import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-[#2a2a2a] text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-5xl leading-snug mb-6">
              Lust auf einen Besuch?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Montag bis Freitag, 10 bis 18 Uhr. Samstag bis 14 Uhr. 
              Kein Termin nötig – einfach vorbeikommen.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            <div className="text-center md:text-left">
              <span className="text-white/40 text-sm tracking-wider uppercase">Adresse</span>
              <p className="text-white mt-2">
                Hauptstraße 12
                <br />
                97922 Lauda-Königshofen
              </p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-white/40 text-sm tracking-wider uppercase">Kontakt</span>
              <p className="text-white mt-2">
                hallo@rinabelle.de
                <br />
                +49 9343 999 999 9
              </p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-white/40 text-sm tracking-wider uppercase">Social</span>
              <p className="mt-2">
                <a 
                  href="https://instagram.com/rinabelle.fashion" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/70 transition-colors"
                >
                  @rinabelle.fashion
                </a>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/standort"
              className="px-8 py-4 bg-white text-[#2a2a2a] font-medium hover:bg-white/90 transition-colors"
            >
              Anfahrt planen
            </Link>
            <Link
              href="/kontakt"
              className="px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Nachricht schreiben
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
