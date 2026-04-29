"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Sparkles, Users, Quote } from "lucide-react"
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
    <section className="py-32 bg-card relative overflow-hidden">
      {/* Top gradient from highlights */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-card to-transparent z-10" />

      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-primary/30 rounded-full animate-float" />
      <div className="absolute top-40 right-32 w-2 h-2 bg-accent/40 rounded-full animate-float animation-delay-200" />
      <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-secondary/20 rounded-full animate-float animation-delay-400" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Column */}
          <div className="relative">
            {/* Main image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
                <Image
                  src="/images/boutique-interior.jpg"
                  alt="Rinabelle Fashion Boutique Innenansicht"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>

              {/* Floating quote card */}
              <div className="absolute -bottom-8 -right-8 lg:-right-12 w-64 p-6 bg-background rounded-2xl shadow-soft glass animate-float">
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <p className="text-sm text-foreground italic leading-relaxed">
                  {"\"Mode ist nicht nur Kleidung – sie ist ein Ausdruck Ihrer Seele.\""}
                </p>
                <p className="text-xs text-muted-foreground mt-3">– Ekaterina Belskaya</p>
              </div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-3xl -z-10" />

            {/* Decorative blobs */}
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-accent/15 rounded-full blur-2xl animate-pulse-soft animation-delay-300" />
          </div>

          {/* Content Column */}
          <div className="lg:pl-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-sm font-medium text-primary tracking-wider uppercase">Über uns</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Ein <span className="text-gradient">Traum</span> wird wahr
            </h2>

            <div className="space-y-5 mb-10">
              <p className="text-muted-foreground leading-relaxed text-lg text-pretty">
                Rinabelle Fashion ist mehr als nur eine Boutique – es ist die Verwirklichung eines Traums. 
                Unsere Inhaberin Ekaterina Belskaya hat sich ihren langjährigen Wunsch erfüllt, einen Ort zu schaffen, 
                an dem Mode auf Persönlichkeit trifft.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                In gemütlicher Atmosphäre finden Sie hier sorgfältig ausgewählte Stücke, 
                die Ihren individuellen Stil unterstreichen.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="group p-5 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-background transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <Button asChild className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-secondary shadow-soft hover-lift group">
              <Link href="/ueber-uns">
                Mehr erfahren
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
