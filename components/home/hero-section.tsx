"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
    <section className="relative min-h-[100svh] flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-boutique.jpg"
          alt="Rinabelle Fashion Boutique"
          fill
          className={`object-cover transition-opacity duration-1000 ${isVideoLoaded ? "opacity-0" : "opacity-100"}`}
          priority
          quality={100}
          sizes="100vw"
        />
        
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
          poster="/images/hero-boutique.jpg"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mp_-RutkdhvTvDPMy1RjySRDMLYCWdnxpL.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F5F2]/95 via-[#F9F5F2]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative pt-28 pb-20">
        <div className="max-w-xl">
          <p className="text-[#B88A9B] font-medium tracking-wide mb-4 text-sm">
            Damenmode in Lauda-Königshofen
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#333333] leading-[1.15] mb-6">
            Dein Stil,
            <br />
            <span className="text-[#E8AFC1]">deine Geschichte</span>
          </h1>

          <p className="text-[#333333]/70 text-lg leading-relaxed mb-10 max-w-md">
            Bei Rinabelle findest du Mode, die zu dir passt – persönlich ausgewählt, 
            liebevoll beraten. Komm vorbei und lass dich inspirieren.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/kollektion"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8AFC1] text-white rounded-full font-medium hover:bg-[#B88A9B] transition-colors"
            >
              Zur Kollektion
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/standort"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#333333]/20 text-[#333333] rounded-full font-medium hover:border-[#E8AFC1] hover:text-[#E8AFC1] transition-colors"
            >
              Uns besuchen
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F9F5F2] to-transparent" />
    </section>
  )
}
