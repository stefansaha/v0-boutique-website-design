"use client"

import Image from "next/image"
import Link from "next/link"

const looks = [
  {
    title: "Kleider",
    subtitle: "Für jeden Anlass",
    image: "/images/fashion-1.jpg",
  },
  {
    title: "Everyday",
    subtitle: "Casual & Chic",
    image: "/images/fashion-2.jpg",
  },
  {
    title: "Besonderes",
    subtitle: "Einzigartige Stücke",
    image: "/images/fashion-3.jpg",
  },
]

export function HighlightsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F9F5F2]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-4">
            Was dich erwartet
          </h2>
          <p className="text-[#333333]/60 text-lg">
            Schöne Teile für Frauen, die wissen was sie wollen – 
            oder es bei uns entdecken möchten.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {looks.map((look, index) => (
            <Link
              key={look.title}
              href="/kollektion"
              className="group block"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={look.image}
                  alt={look.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-serif text-xl text-[#333333] group-hover:text-[#E8AFC1] transition-colors">
                {look.title}
              </h3>
              <p className="text-[#333333]/50 text-sm">{look.subtitle}</p>
            </Link>
          ))}
        </div>

        {/* Link */}
        <div className="mt-12 text-center">
          <Link
            href="/kollektion"
            className="inline-block text-[#B88A9B] hover:text-[#E8AFC1] transition-colors border-b border-current pb-1"
          >
            Alle Styles entdecken
          </Link>
        </div>
      </div>
    </section>
  )
}
