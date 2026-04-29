import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Heart,
    title: "Mit Liebe ausgewählt",
    description: "Jedes Stück wird von uns persönlich ausgesucht",
  },
  {
    icon: Sparkles,
    title: "Einzigartige Mode",
    description: "Individualität statt Massenware",
  },
  {
    icon: Users,
    title: "Persönliche Beratung",
    description: "Wir nehmen uns Zeit für Sie",
  },
]

export function AboutPreview() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-boutique.jpg"
                alt="Rinabelle Fashion Boutique Innenansicht"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium mb-3">Über uns</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
              Ein Traum wird wahr
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
              Rinabelle Fashion ist mehr als nur eine Boutique – es ist die Verwirklichung eines Traums. 
              Unsere Inhaberin Ekaterina Belskaya hat sich ihren langjährigen Wunsch erfüllt, einen Ort zu schaffen, 
              an dem Mode auf Persönlichkeit trifft.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              In gemütlicher Atmosphäre finden Sie hier sorgfältig ausgewählte Stücke, 
              die Ihren individuellen Stil unterstreichen. Wir glauben daran, dass Mode mehr ist als nur Kleidung – 
              sie ist ein Ausdruck Ihrer Persönlichkeit.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="text-center sm:text-left">
                  <feature.icon className="w-8 h-8 text-primary mx-auto sm:mx-0 mb-3" />
                  <h3 className="font-medium text-foreground text-sm mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs">{feature.description}</p>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" className="rounded-full px-6 border-primary text-foreground hover:bg-primary/10">
              <Link href="/ueber-uns">
                Mehr erfahren
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
