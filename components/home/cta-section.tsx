import Link from "next/link"
import { MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium mb-3">Wir freuen uns auf Sie</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Besuchen Sie unsere Boutique
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-pretty">
            Erleben Sie Mode zum Anfassen in einer Atmosphäre, die zum Verweilen einlädt. 
            Wir beraten Sie gerne persönlich und helfen Ihnen, Ihren perfekten Look zu finden.
          </p>

          {/* Info Cards */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <div className="flex items-center gap-4 bg-card rounded-xl px-6 py-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Adresse</p>
                <p className="font-medium text-foreground">Lauda-Königshofen</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card rounded-xl px-6 py-4">
              <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Öffnungszeiten</p>
                <p className="font-medium text-foreground">Mo-Fr: 10-18 Uhr</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-secondary rounded-full px-8">
              <Link href="/standort">
                Anfahrt & Kontakt
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary text-foreground hover:bg-primary/10">
              <Link href="/kontakt">
                Nachricht senden
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
