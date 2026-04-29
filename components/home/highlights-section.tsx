"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

const highlights = [
  {
    title: "Elegante Kleider",
    description: "Für besondere Anlässe und stilvolle Auftritte",
    image: "/images/fashion-1.jpg",
    href: "/kollektion",
    accent: "primary",
  },
  {
    title: "Alltagslooks",
    description: "Stilsicher durch den Tag mit ausgewählten Pieces",
    image: "/images/fashion-2.jpg",
    href: "/kollektion",
    accent: "accent",
  },
  {
    title: "Besondere Styles",
    description: "Einzigartige Stücke, die Ihre Persönlichkeit unterstreichen",
    image: "/images/fashion-3.jpg",
    href: "/kollektion",
    accent: "secondary",
  },
]

export function HighlightsSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Top gradient from hero */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10" />

      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-primary" />
            <Star className="w-4 h-4 text-primary fill-primary" />
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Unsere aktuellen <span className="text-gradient">Highlights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty leading-relaxed">
            Entdecken Sie unsere sorgfältig kuratierte Auswahl an Damenmode, die Eleganz mit Alltagstauglichkeit verbindet.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {highlights.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4] bg-muted hover-lift"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
                quality={90}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 animate-shimmer" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                {/* Category tag */}
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs font-medium text-primary-foreground/90">Neu eingetroffen</span>
                </div>

                <h3 className="font-serif text-2xl text-background mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-background/70 text-sm mb-5 leading-relaxed">{item.description}</p>
                
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  <span className="relative">
                    Entdecken
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </span>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-12 h-12 border border-background/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-0 group-hover:rotate-90">
                <ArrowRight className="w-4 h-4 text-background/80 -rotate-45" />
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-16">
          <Link 
            href="/kollektion" 
            className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
          >
            <span className="text-lg">Alle Kollektionen ansehen</span>
            <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
    </section>
  )
}
