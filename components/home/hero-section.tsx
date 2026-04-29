"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Fallback image while video loads */}
        <Image
          src="/images/hero-boutique.jpg"
          alt="Rinabelle Fashion Boutique"
          fill
          className={`object-cover transition-opacity duration-1000 ${isVideoLoaded ? "opacity-0" : "opacity-100"}`}
          priority
          quality={100}
          sizes="100vw"
        />
        
        {/* Video background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
          poster="/images/hero-boutique.jpg"
        >
          <source
            src="https://videos.pexels.com/video-files/5706616/5706616-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-accent/15 rounded-full blur-2xl animate-pulse-soft animation-delay-200" />
      <div className="absolute top-1/2 left-2/3 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" />

      {/* Decorative lines */}
      <svg className="absolute right-20 top-32 w-px h-40 opacity-30 hidden lg:block" viewBox="0 0 1 160">
        <line x1="0.5" y1="0" x2="0.5" y2="160" stroke="currentColor" strokeWidth="1" className="text-primary" strokeDasharray="4 4" />
      </svg>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up opacity-0">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Willkommen bei Rinabelle Fashion</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-8 animate-fade-in-up opacity-0 animation-delay-100">
            <span className="block">Mode mit</span>
            <span className="block text-gradient">Persönlichkeit</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-in-up opacity-0 animation-delay-200 text-pretty max-w-lg">
            Entdecken Sie Mode, die Ihre Persönlichkeit unterstreicht und Sie jeden Tag aufs Neue strahlen lässt. Mit Liebe ausgewählt, individuell beraten.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 animation-delay-300">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-secondary rounded-full px-8 shadow-soft hover-lift group">
              <Link href="/kollektion">
                Kollektion entdecken
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary backdrop-blur-sm">
              <Link href="/standort">
                Besuchen Sie uns
              </Link>
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-16 flex gap-12 animate-fade-in-up opacity-0 animation-delay-400">
            <div>
              <p className="font-serif text-3xl text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Ausgewählte Stücke</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-serif text-3xl text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Persönliche Beratung</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0 animation-delay-500">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Entdecken</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
