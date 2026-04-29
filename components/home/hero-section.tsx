"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.playbackRate = 0.75

    const handleTimeUpdate = () => {
      if (video.currentTime >= 4) {
        video.currentTime = 0
      }
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    return () => video.removeEventListener("timeupdate", handleTimeUpdate)
  }, [])

  return (
    <section className="relative h-[100svh] min-h-[500px] sm:min-h-[600px] max-h-[900px]">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mp_-RutkdhvTvDPMy1RjySRDMLYCWdnxpL.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Overlay - Strong gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-[#1a1a1a]/20" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-xl">
            <span className="inline-block text-white/70 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-6">
              Lauda-Königshofen
            </span>

            <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-4 sm:mb-6">
              Mode, die sich
              <br />
              <span className="italic">anfühlt wie du</span>
            </h1>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md">
              Persönliche Beratung, handverlesene Stücke und eine Atmosphäre zum Wohlfühlen. 
              Komm vorbei.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/kollektion"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#1a1a1a] font-medium hover:bg-white/90 transition-colors text-center"
              >
                Kollektion ansehen
              </Link>
              <Link
                href="/standort"
                className="px-6 sm:px-8 py-3 sm:py-4 border border-white/40 text-white font-medium hover:bg-white/10 transition-colors text-center"
              >
                Boutique finden
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="w-px h-10 sm:h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  )
}
