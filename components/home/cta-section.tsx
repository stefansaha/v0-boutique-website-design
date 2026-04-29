import Link from "next/link"
import { MapPin, Clock, Instagram } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-[#F9F5F2]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#333333] mb-4">
            Schau doch mal vorbei
          </h2>
          <p className="text-[#333333]/60 text-lg mb-12 max-w-lg mx-auto">
            Am besten lernst du uns persönlich kennen. Wir freuen uns auf dich!
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[#E8AFC1]/20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-5 h-5 text-[#E8AFC1]" />
              </div>
              <p className="font-medium text-[#333333] mb-1">Lauda-Königshofen</p>
              <p className="text-[#333333]/50 text-sm">Baden-Württemberg</p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[#A8B5A2]/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-5 h-5 text-[#A8B5A2]" />
              </div>
              <p className="font-medium text-[#333333] mb-1">Mo – Fr</p>
              <p className="text-[#333333]/50 text-sm">10:00 – 18:00 Uhr</p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[#B88A9B]/20 flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-5 h-5 text-[#B88A9B]" />
              </div>
              <p className="font-medium text-[#333333] mb-1">@rinabelle.fashion</p>
              <p className="text-[#333333]/50 text-sm">Folg uns auf Instagram</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/standort"
              className="inline-flex items-center px-7 py-3.5 bg-[#333333] text-white rounded-full font-medium hover:bg-[#333333]/80 transition-colors"
            >
              Anfahrt & Zeiten
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center px-7 py-3.5 border border-[#333333]/20 text-[#333333] rounded-full font-medium hover:border-[#E8AFC1] hover:text-[#E8AFC1] transition-colors"
            >
              Schreib uns
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
