import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, Coffee, Sparkles, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Boutique-Erlebnis | Rinabelle Fashion",
  description: "Erleben Sie persönliche Beratung und eine einladende Atmosphäre in unserer Boutique. Mode-Shopping wie es sein sollte.",
}

const experiences = [
  {
    icon: Heart,
    title: "Persönliche Beratung",
    description: "Wir nehmen uns Zeit für Sie und Ihre Wünsche. Gemeinsam finden wir den Look, der perfekt zu Ihnen passt.",
  },
  {
    icon: Coffee,
    title: "Gemütliche Atmosphäre",
    description: "Bei uns können Sie in Ruhe stöbern. Genießen Sie die entspannte Atmosphäre unserer Boutique.",
  },
  {
    icon: Sparkles,
    title: "Styling-Tipps",
    description: "Profitieren Sie von unserer Erfahrung und entdecken Sie neue Kombinationsmöglichkeiten für Ihren Kleiderschrank.",
  },
  {
    icon: Clock,
    title: "Zeit zum Anprobieren",
    description: "Nehmen Sie sich alle Zeit, die Sie brauchen. Bei uns gibt es keinen Druck – nur Freude an der Mode.",
  },
]

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4">Boutique-Erlebnis</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
                Mehr als nur Shopping
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                Bei Rinabelle Fashion geht es nicht nur um Kleidung. Es geht darum, sich wohlzufühlen, 
                inspiriert zu werden und die Freude an Mode zu entdecken – in einer Atmosphäre, die zum Verweilen einlädt.
              </p>
            </div>
          </div>
        </section>

        {/* Interior Showcase */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/boutique-interior.jpg"
                    alt="Boutique Innenansicht"
                    fill
                    className="object-cover relative"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="/images/personal-consultation.jpg"
                    alt="Persönliche Beratung"
                    fill
                    className="object-cover relative"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
                  Ein Ort zum Wohlfühlen
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Treten Sie ein und lassen Sie den Alltag hinter sich. Unsere Boutique ist mehr als ein Geschäft – 
                    sie ist ein kleiner Rückzugsort, an dem Mode und Entspannung zusammenkommen.
                  </p>
                  <p>
                    Florale Akzente, warme Farben und eine sorgfältig kuratierte Auswahl an Damenmode erwarten Sie. 
                    Hier können Sie in Ruhe stöbern, verschiedene Looks ausprobieren und sich von uns beraten lassen.
                  </p>
                  <p>
                    Wir glauben, dass gutes Mode-Shopping Zeit braucht. Deshalb gibt es bei uns keinen Druck, 
                    nur die Freude daran, schöne Dinge zu entdecken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Features */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Was Sie bei uns erwartet
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Entdecken Sie, was das Einkaufen bei Rinabelle Fashion so besonders macht.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="bg-background rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <exp.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground italic mb-6 text-balance">
                &ldquo;Bei uns steht nicht der Verkauf im Vordergrund, sondern Ihre Zufriedenheit. 
                Wir möchten, dass Sie mit einem Lächeln nach Hause gehen – egal ob mit oder ohne Einkaufstüte.&rdquo;
              </blockquote>
              <p className="text-primary font-medium">— Ekaterina Belskaya, Inhaberin</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Erleben Sie es selbst
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Wir freuen uns darauf, Sie in unserer Boutique willkommen zu heißen. 
              Kommen Sie vorbei und erleben Sie, was Rinabelle Fashion so besonders macht.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-secondary rounded-full px-8">
              <Link href="/standort">
                Anfahrt & Öffnungszeiten
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
