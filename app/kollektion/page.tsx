import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Kollektion | Rinabelle Fashion",
  description: "Entdecke unsere sorgfältig ausgewählte Kollektion. Elegante Kleider, Alltagslooks und besondere Styles.",
}

const categories = [
  {
    title: "Kleider",
    description: "Von lässig bis festlich – Kleider für jeden Moment.",
    image: "/images/collection-dresses.jpg",
    tags: ["Cocktail", "Abend", "Casual"],
  },
  {
    title: "Alltagslooks",
    description: "Stücke, die du immer wieder anziehen willst.",
    image: "/images/collection-casual.jpg",
    tags: ["Blusen", "Hosen", "Strick"],
  },
  {
    title: "Besondere Styles",
    description: "Für Momente, die in Erinnerung bleiben.",
    image: "/images/collection-elegant.jpg",
    tags: ["Statement", "Besondere Anlässe"],
  },
  {
    title: "Accessoires",
    description: "Die Details, die den Unterschied machen.",
    image: "/images/collection-accessories.jpg",
    tags: ["Schals", "Schmuck", "Taschen"],
  },
]

export default function CollectionPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6">
                <span className="text-accent text-sm tracking-[0.15em] uppercase font-medium">Kollektion</span>
                <h1 className="font-serif text-4xl lg:text-5xl text-foreground mt-4 leading-tight">
                  Nicht viel. Aber gut.
                </h1>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 flex items-end">
                <p className="text-muted-foreground text-lg">
                  Jedes Stück hier habe ich selbst ausgewählt. 
                  Keine Massenware, keine leeren Versprechen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-[#f8f6f3]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-32">
              {categories.map((category, index) => (
                <div
                  key={category.title}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-4 ${index % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}>
                    <span className="text-secondary/60 font-serif text-6xl lg:text-7xl">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-serif text-2xl lg:text-3xl text-foreground mt-2 mb-4">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white text-sm text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Die Kollektion wechselt regelmäßig. Was du hier siehst, ist nur ein kleiner Einblick. 
                Am besten kommst du vorbei und entdeckst selbst, was gerade bei uns hängt.
              </p>
              <p className="text-sm text-secondary">
                Psst: Auf Instagram zeige ich oft Neuankünfte zuerst.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#2a2a2a]">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-6">
              Lass dich beraten
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10">
              Nicht sicher, was zu dir passt? Dafür bin ich da. 
              Komm vorbei und wir finden es gemeinsam heraus.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/standort"
                className="px-8 py-4 bg-white text-[#2a2a2a] font-medium hover:bg-white/90 transition-colors"
              >
                Boutique besuchen
              </Link>
              <Link
                href="/erlebnis"
                className="px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                So läuft ein Besuch ab
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
