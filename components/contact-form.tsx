"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Check } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-accent-foreground" />
        </div>
        <h3 className="font-serif text-2xl text-foreground mb-3">
          Vielen Dank!
        </h3>
        <p className="text-muted-foreground">
          Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns so schnell wie möglich bei Ihnen.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mt-6 rounded-full border-primary text-foreground hover:bg-primary/10"
        >
          Neue Nachricht senden
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Ihr Name"
            required
            className="rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-Mail *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="ihre@email.de"
            required
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefon (optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+49 123 456 789"
          className="rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Betreff *</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="Worum geht es?"
          required
          className="rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Ihre Nachricht *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Schreiben Sie uns Ihre Nachricht..."
          required
          className="rounded-lg min-h-[150px]"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-secondary rounded-full"
      >
        {isSubmitting ? (
          "Wird gesendet..."
        ) : (
          <>
            Nachricht senden
            <Send className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Mit * markierte Felder sind Pflichtfelder. Ihre Daten werden vertraulich behandelt.
      </p>
    </form>
  )
}
