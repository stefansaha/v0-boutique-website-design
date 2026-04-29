"use client"

import Link from "next/link"
import { ShapeGrid } from "@/components/ui/shape-grid"

export function CTASection() {
  return (
    <section className="relative pt-16 sm:pt-20 pb-24 lg:pb-32 bg-gradient-to-br from-[#2a2a2a] via-[#1f1f1f] to-[#1a1a1a] text-white overflow-hidden -mt-1">
      {/* Shape Grid Background */}
      <div className="absolute inset-0 opacity-40">
        <ShapeGrid
          direction="diagonal"
          speed={0.2}
          squareSize={60}
          borderColor="rgba(200, 138, 155, 0.12)"
        />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-[#1a1a1a]/50 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl leading-snug mb-4 sm:mb-6">
              Lust auf einen Besuch?
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto">
              Montag bis Freitag, 10 bis 18 Uhr. Samstag bis 14 Uhr. 
              Kein Termin nötig – einfach vorbeikommen.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            <div className="text-center md:text-left">
              <span className="text-white/40 text-xs sm:text-sm tracking-wider uppercase">Adresse</span>
              <p className="text-white mt-2 text-sm sm:text-base">
                Hauptstraße 12
                <br />
                97922 Lauda-Königshofen
              </p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-white/40 text-xs sm:text-sm tracking-wider uppercase">Kontakt</span>
              <p className="text-white mt-2 text-sm sm:text-base">
                hallo@rinabelle.de
                <br />
                +49 9343 999 999 9
              </p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-white/40 text-xs sm:text-sm tracking-wider uppercase">Social</span>
              <p className="mt-2">
                <a 
                  href="https://instagram.com/rinabelle.fashion" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/70 transition-colors text-sm sm:text-base"
                >
                  @rinabelle.fashion
                </a>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/standort"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#2a2a2a] font-medium hover:bg-white/90 transition-colors text-center text-sm sm:text-base"
            >
              Anfahrt planen
            </Link>
            <Link
              href="/kontakt"
              className="px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors text-center text-sm sm:text-base"
            >
              Nachricht schreiben
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
