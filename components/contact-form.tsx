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
      <div className="bg-white p-8 lg:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-accent" />
        </div>
        <h3 className="font-serif text-2xl text-foreground mb-3">
          Danke für deine Nachricht
        </h3>
        <p className="text-muted-foreground mb-6">
          Ich melde mich so schnell wie möglich bei dir.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-sm text-secondary hover:text-foreground transition-colors"
        >
          Neue Nachricht schreiben
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-10 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 border border-border bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
            placeholder="Dein Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border border-border bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
            placeholder="deine@email.de"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">
          Betreff
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full px-4 py-3 border border-border bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
          placeholder="Worum geht es?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-border bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
          placeholder="Was möchtest du mir sagen?"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-[#2a2a2a] text-white font-medium hover:bg-[#1a1a1a] disabled:opacity-50 transition-colors"
      >
        {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
      </button>
    </form>
  )
}
