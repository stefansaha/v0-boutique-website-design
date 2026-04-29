"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
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
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // On inner pages, always show dark nav
  const showDarkNav = !isHomePage || isScrolled

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        showDarkNav
          ? "bg-white/95 backdrop-blur-sm py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className={cn(
              "font-serif text-2xl tracking-wide transition-colors",
              showDarkNav ? "text-foreground" : "text-white"
            )}
          >
            Rinabelle
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-wide transition-colors relative",
                  showDarkNav 
                    ? "text-muted-foreground hover:text-foreground" 
                    : "text-white/80 hover:text-white",
                  pathname === link.href && "font-medium"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className={cn(
                    "absolute -bottom-1 left-0 right-0 h-px",
                    showDarkNav ? "bg-foreground" : "bg-white"
                  )} />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              showDarkNav ? "text-foreground" : "text-white"
            )}
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 bg-white z-40 transition-all duration-300 flex flex-col",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          style={{ top: "72px" }}
        >
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-serif text-2xl text-foreground hover:text-secondary transition-colors",
                  pathname === link.href && "text-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pb-12 text-center">
            <a 
              href="https://instagram.com/rinabelle.fashion" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              @rinabelle.fashion
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
