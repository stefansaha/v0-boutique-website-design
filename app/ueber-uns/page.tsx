import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, Star, Leaf, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Über uns | Rinabelle Fashion",
  description: "Lernen Sie die Geschichte hinter Rinabelle Fashion kennen. Eine Boutique mit Herz und Leidenschaft für individuelle Damenmode.",
}

const values = [
  {
    icon: Heart,
    title: "Leidenschaft",
    description: "Jedes Stück wird mit Liebe und Sorgfalt ausgewählt. Mode ist für uns mehr als Kleidung – sie ist ein Ausdruck von Persönlichkeit.",
  },
  {
    icon: Star,
    title: "Qualität",
    description: "Wir setzen auf hochwertige Materialien und zeitlose Designs, die Sie lange begleiten werden.",
  },
  {
    icon: Leaf,
    title: "Nachhaltigkeit",
    description: "Bewusster Konsum liegt uns am Herzen. Wir bevorzugen Stücke, die mehr als eine Saison überdauern.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4">Über uns</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
                Ein Traum wird Wirklichkeit
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                Die Geschichte einer Boutique, die aus Leidenschaft für Mode und dem Wunsch entstand, 
                Frauen dabei zu helfen, ihren eigenen Stil zu finden.
              </p>
            </div>
          </div>
        </section>

        {/* Owner Story */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/owner-portrait.jpg"
                    alt="Ekaterina Belskaya, Inhaberin von Rinabelle Fashion"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Quote Overlay */}
                <div className="absolute -bottom-8 -right-8 bg-primary/10 backdrop-blur-sm rounded-2xl p-6 max-w-xs">
                  <p className="font-serif text-foreground italic text-lg">
                    &ldquo;Mode sollte Sie jeden Tag zum Strahlen bringen.&rdquo;
                  </p>
                  <p className="text-primary text-sm mt-2">— Ekaterina Belskaya</p>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
                  Die Frau hinter Rinabelle
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Mein Name ist Ekaterina Belskaya, und Rinabelle Fashion ist die Verwirklichung meines langjährigen Traums. 
                    Schon immer faszinierte mich die Kraft der Mode – wie sie uns Selbstvertrauen schenken und unsere 
                    Persönlichkeit zum Ausdruck bringen kann.
                  </p>
                  <p>
                    Nach Jahren in der Modebranche entschied ich mich, meinen eigenen Weg zu gehen und einen Ort zu schaffen, 
                    an dem jede Frau willkommen ist. Einen Ort, an dem Mode nicht einschüchtert, sondern inspiriert.
                  </p>
                  <p>
                    In unserer Boutique in Lauda-Königshofen finden Sie nicht nur wunderschöne Kleidung, 
                    sondern auch eine persönliche Beratung, die Ihre individuellen Wünsche in den Mittelpunkt stellt. 
                    Denn ich glaube: Die beste Mode ist die, die zu Ihnen passt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Unsere Werte
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Diese Überzeugungen leiten uns bei allem, was wir tun.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-background rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Lernen Sie uns persönlich kennen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Besuchen Sie unsere Boutique und erleben Sie, was Rinabelle Fashion so besonders macht. 
              Wir freuen uns darauf, Sie kennenzulernen!
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-secondary rounded-full px-8">
              <Link href="/standort">
                Besuchen Sie uns
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
