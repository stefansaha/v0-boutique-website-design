import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-boutique.jpg"
          alt="Rinabelle Fashion Boutique"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-2xl">
          <p className="text-primary font-medium mb-4 animate-fade-in-up opacity-0">
            Willkommen bei Rinabelle Fashion
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 animate-fade-in-up opacity-0 animation-delay-100 text-balance">
            Mode mit Persönlichkeit
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in-up opacity-0 animation-delay-200 text-pretty">
            Entdecken Sie Mode, die Ihre Persönlichkeit unterstreicht und Sie jeden Tag aufs Neue strahlen lässt. Mit Liebe ausgewählt, individuell beraten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 animation-delay-300">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-secondary rounded-full px-8">
              <Link href="/kollektion">
                Kollektion entdecken
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary text-foreground hover:bg-primary/10">
              <Link href="/standort">
                Besuchen Sie uns
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
