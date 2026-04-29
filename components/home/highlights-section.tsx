import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const highlights = [
  {
    title: "Elegante Kleider",
    description: "Für besondere Anlässe und stilvolle Auftritte",
    image: "/images/fashion-1.jpg",
    href: "/kollektion",
  },
  {
    title: "Alltagslooks",
    description: "Stilsicher durch den Tag mit ausgewählten Pieces",
    image: "/images/fashion-2.jpg",
    href: "/kollektion",
  },
  {
    title: "Besondere Styles",
    description: "Einzigartige Stücke, die Ihre Persönlichkeit unterstreichen",
    image: "/images/fashion-3.jpg",
    href: "/kollektion",
  },
]

export function HighlightsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">Mit Liebe ausgewählt</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">
            Unsere aktuellen Highlights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Entdecken Sie unsere sorgfältig kuratierte Auswahl an Damenmode, die Eleganz mit Alltagstauglichkeit verbindet.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-muted"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-background/80 text-sm mb-4">{item.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Entdecken
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
