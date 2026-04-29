"use client"

import Link from "next/link"
import { MapPin, Clock, Phone, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10" />

      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/12 rounded-full blur-2xl animate-pulse-soft animation-delay-200" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-float" />

        {/* Decorative dots pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />

        {/* Decorative lines */}
        <svg className="absolute left-1/4 top-20 w-px h-32 opacity-20" viewBox="0 0 1 128">
          <line x1="0.5" y1="0" x2="0.5" y2="128" stroke="currentColor" strokeWidth="1" className="text-primary" strokeDasharray="4 4" />
        </svg>
        <svg className="absolute right-1/4 bottom-20 w-px h-32 opacity-20" viewBox="0 0 1 128">
          <line x1="0.5" y1="0" x2="0.5" y2="128" stroke="currentColor" strokeWidth="1" className="text-primary" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Wir freuen uns auf Sie</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance leading-tight">
              Besuchen Sie unsere <span className="text-gradient">Boutique</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Erleben Sie Mode zum Anfassen in einer Atmosphäre, die zum Verweilen einlädt. 
              Wir beraten Sie gerne persönlich und helfen Ihnen, Ihren perfekten Look zu finden.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="group p-8 bg-card rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">Adresse</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lauda-Königshofen<br />
                <span className="text-sm">Baden-Württemberg</span>
              </p>
            </div>

            <div className="group p-8 bg-card rounded-3xl border border-border/50 hover:border-accent/30 transition-all duration-300 hover-lift text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/25 transition-colors">
                <Clock className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">Öffnungszeiten</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mo - Fr: 10:00 - 18:00<br />
                <span className="text-sm">Sa: nach Vereinbarung</span>
              </p>
            </div>

            <div className="group p-8 bg-card rounded-3xl border border-border/50 hover:border-secondary/30 transition-all duration-300 hover-lift text-center">
              <div className="w-16 h-16 rounded-2xl bg-secondary/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/25 transition-colors">
                <Phone className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">Kontakt</h3>
              <p className="text-muted-foreground leading-relaxed">
                Persönliche Beratung<br />
                <span className="text-sm">Termin vereinbaren</span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-secondary rounded-full px-10 shadow-soft hover-lift group">
              <Link href="/standort">
                Anfahrt & Öffnungszeiten
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary backdrop-blur-sm group">
              <Link href="/kontakt">
                Nachricht senden
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Trust badge */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Persönliche Beratung garantiert
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
