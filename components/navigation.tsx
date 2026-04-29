"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/kollektion", label: "Kollektion" },
  { href: "/ueber-uns", label: "Über mich" },
  { href: "/erlebnis", label: "Dein Besuch" },
  { href: "/standort", label: "Standort" },
  { href: "/kontakt", label: "Kontakt" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const showDarkNav = !isHomePage || isScrolled

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          showDarkNav
            ? "bg-white/95 backdrop-blur-md py-3 shadow-sm"
            : "bg-gradient-to-b from-black/30 to-transparent py-4 sm:py-5"
        )}
      >
        <nav className="container mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className={cn(
                "font-serif text-xl sm:text-2xl tracking-wide transition-colors",
                showDarkNav ? "text-foreground" : "text-white"
              )}
            >
              Rinabelle
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm tracking-wide transition-all duration-200 relative rounded-full",
                    showDarkNav 
                      ? pathname === link.href
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      : pathname === link.href
                        ? "text-white bg-white/15"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 transition-colors z-50",
                isOpen ? "text-foreground" : showDarkNav ? "text-foreground" : "text-white"
              )}
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isOpen}
            >
              <span 
                className={cn(
                  "w-6 h-0.5 bg-current transition-all duration-300 origin-center",
                  isOpen && "rotate-45 translate-y-2"
                )} 
              />
              <span 
                className={cn(
                  "w-6 h-0.5 bg-current transition-all duration-300",
                  isOpen && "opacity-0 scale-0"
                )} 
              />
              <span 
                className={cn(
                  "w-6 h-0.5 bg-current transition-all duration-300 origin-center",
                  isOpen && "-rotate-45 -translate-y-2"
                )} 
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation - Full Screen Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-out",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-white transition-opacity duration-500",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Content */}
        <div className="relative h-full flex flex-col pt-24 pb-12 px-8">
          <nav className="flex-1 flex flex-col justify-center">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block py-3 font-serif text-3xl sm:text-4xl transition-all duration-500",
                      isOpen 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-0 -translate-x-8",
                      pathname === link.href 
                        ? "text-secondary" 
                        : "text-foreground hover:text-secondary"
                    )}
                    style={{ 
                      transitionDelay: isOpen ? `${100 + index * 50}ms` : "0ms" 
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Footer info */}
          <div 
            className={cn(
              "transition-all duration-500 border-t border-border pt-6",
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: isOpen ? "400ms" : "0ms" }}
          >
            <a 
              href="https://instagram.com/rinabelle.fashion" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              @rinabelle.fashion
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              Lauda-Königshofen
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
