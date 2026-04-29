"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-[#F4D6DC]/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/boutique-interior.jpg"
                alt="Rinabelle Boutique"
                fill
                className="object-cover"
              />
            </div>
            {/* Small accent image */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-4 border-[#F9F5F2] shadow-lg hidden sm:block">
              <Image
                src="/images/owner-portrait.jpg"
                alt="Ekaterina"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-[#A8B5A2] font-medium text-sm tracking-wide mb-3">
              Die Geschichte dahinter
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6 leading-snug">
              Ein kleiner Laden,
              <br />
              ein großer Traum
            </h2>
            
            <div className="space-y-4 text-[#333333]/70 leading-relaxed mb-8">
              <p>
                Rinabelle ist mein Herzensprojekt. Nach Jahren in der Modebranche 
                wollte ich einen Ort schaffen, wo sich Frauen wohlfühlen und 
                ehrliche Beratung bekommen.
              </p>
              <p>
                Hier gibt es keine Massenware – jedes Teil wähle ich selbst aus, 
                weil es mich begeistert. Und diese Begeisterung möchte ich mit dir teilen.
              </p>
            </div>

            <p className="font-serif text-[#E8AFC1] text-lg mb-8">
              – Ekaterina
            </p>

            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-2 text-[#333333] hover:text-[#E8AFC1] transition-colors group"
            >
              <span className="border-b border-current pb-0.5">Mehr über uns</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
