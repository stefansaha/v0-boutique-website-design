"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  isLoading: boolean
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    if (!isLoading) {
      setIsVisible(false)
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: "linear-gradient(135deg, #fdfbfa 0%, #f8f4f1 50%, #f5efe9 100%)"
      }}
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#C88A9B]/5 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#D4A5B0]/5 blur-3xl" />
      
      {/* Main content */}
      <div className="relative flex flex-col items-center">
        {/* Brand name with elegant styling */}
        <div className="mb-12">
          <h1 className="font-serif text-[#2a2a2a] text-4xl sm:text-5xl tracking-[0.15em] font-light">
            Rinabelle
          </h1>
          <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-[#C88A9B]/40 to-transparent" />
        </div>

        {/* Elegant line loader */}
        <div className="relative w-48 h-px bg-[#e8e4e0] overflow-hidden rounded-full">
          <div 
            className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-transparent via-[#C88A9B] to-transparent rounded-full"
            style={{
              animation: "elegantSlide 1.8s ease-in-out infinite"
            }}
          />
        </div>

        {/* Tagline */}
        <p className="mt-10 text-[#8a8279] text-sm tracking-[0.2em] uppercase font-light">
          Dein Moment beginnt
        </p>
      </div>

      <style jsx>{`
        @keyframes elegantSlide {
          0% {
            transform: translateX(-64px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(192px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
