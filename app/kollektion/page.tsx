import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Kollektion | Rinabelle Fashion",
  description: "Entdecken Sie unsere sorgfältig ausgewählte Kollektion an Damenmode. Elegante Kleider, Alltagslooks und besondere Styles.",
}

const categories = [
  {
    title: "Elegante Kleider",
    description: "Für besondere Anlässe und stilvolle Auftritte. Von Cocktailkleidern bis zu eleganten Abendroben.",
    image: "/images/collection-dresses.jpg",
    features: ["Cocktailkleider", "Abendkleider", "Festliche Mode"],
  },
  {
    title: "Alltagslooks",
    description: "Stilsicher durch den Tag mit ausgewählten Pieces, die Komfort und Eleganz verbinden.",
    image: "/images/collection-casual.jpg",
    features: ["Blusen & Tops", "Hosen & Röcke", "Strickwaren"],
  },
  {
    title: "Besondere Styles",
    description: "Einzigartige Stücke, die Ihre Persönlichkeit unterstreichen und Ihren Look unvergesslich machen.",
    image: "/images/collection-elegant.jpg",
    features: ["Statement Pieces", "Designer Highlights", "Limitierte Editionen"],
  },
  {
    title: "Accessoires",
    description: "Die perfekten Begleiter für Ihr Outfit. Ausgewählte Accessoires, die den Look vollenden.",
    image: "/images/collection-accessories.jpg",
    features: ["Schals & Tücher", "Schmuck", "Taschen"],
  },
]

export default function CollectionPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4">Unsere Kollektion</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
                Mit Liebe ausgewählt
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                Jedes Stück in unserer Boutique wurde sorgfältig ausgewählt, um Qualität, Stil und Individualität zu vereinen. 
                Entdecken Sie Mode, die Ihre Persönlichkeit unterstreicht.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="space-y-24">
              {categories.map((category, index) => (
                <div
                  key={category.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Decorative */}
                    <div 
                      className={`absolute -z-10 w-full h-full rounded-2xl bg-primary/10 ${
                        index % 2 === 0 ? "-bottom-4 -right-4" : "-bottom-4 -left-4"
                      }`} 
                    />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {category.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-4 py-2 bg-card rounded-full text-sm text-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Note Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-serif text-2xl text-foreground mb-4">
                Einzigartig statt Massenware
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unsere Kollektion wechselt regelmäßig, da wir auf Einzigartigkeit statt Massenproduktion setzen. 
                Besuchen Sie uns in der Boutique, um unsere aktuellen Stücke zu entdecken und sich persönlich beraten zu lassen.
              </p>
              <p className="text-sm text-primary">
                Tipp: Folgen Sie uns auf Instagram für die neuesten Ankünfte!
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Entdecken Sie Ihren neuen Lieblingslook
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Besuchen Sie unsere Boutique und erleben Sie unsere Kollektion hautnah. 
              Wir beraten Sie gerne persönlich und finden gemeinsam das perfekte Outfit für Sie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-secondary rounded-full px-8">
                <Link href="/standort">
                  Boutique besuchen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary text-foreground hover:bg-primary/10">
                <Link href="/erlebnis">
                  Mehr zum Erlebnis
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
