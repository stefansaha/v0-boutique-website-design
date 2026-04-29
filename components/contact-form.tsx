"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#f8f6f3] p-10 lg:p-16 text-center">
        <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-secondary" />
        </div>
        <h3 className="font-serif text-2xl text-foreground mb-3">
          Danke für deine Nachricht
        </h3>
        <p className="text-muted-foreground mb-8">
          Ich melde mich so schnell wie möglich bei dir.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-sm text-secondary hover:text-foreground transition-colors underline underline-offset-4"
        >
          Neue Nachricht schreiben
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm text-foreground mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-0 py-3 border-0 border-b border-foreground/20 bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
            placeholder="Dein Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-foreground mb-2">
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-0 py-3 border-0 border-b border-foreground/20 bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
            placeholder="deine@email.de"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-foreground mb-2">
          Betreff
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full px-0 py-3 border-0 border-b border-foreground/20 bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
          placeholder="Optional"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-foreground mb-2">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-0 py-3 border-0 border-b border-foreground/20 bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
          placeholder="Was möchtest du mir sagen?"
        />
      </div>

      <div className="pt-4 flex flex-col items-start">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#d4c4b0] text-[#3d3632] font-serif tracking-wide rounded-full shadow-sm hover:shadow-md hover:bg-[#e0d3c3] hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-sm transition-all duration-300 ease-out"
        >
          <span>{isSubmitting ? "Wird gesendet..." : "Nachricht senden"}</span>
          {!isSubmitting && (
            <svg className="w-4 h-4 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          )}
        </button>
        <span className="text-muted-foreground/60 text-xs sm:text-sm mt-3 tracking-wide italic">
          Antwort meist innerhalb von 24h
        </span>
      </div>
    </form>
  )
}
