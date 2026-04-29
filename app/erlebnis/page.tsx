import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Dein Besuch | Rinabelle Fashion",
  description: "So läuft ein Besuch bei Rinabelle ab. Persönliche Beratung, entspannte Atmosphäre, keine Hektik.",
}

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-accent text-sm tracking-[0.15em] uppercase font-medium">Dein Besuch</span>
              <h1 className="font-serif text-4xl lg:text-5xl text-foreground mt-4 mb-6 leading-tight">
                Kein Stress.
                <br />
                <span className="text-secondary">Nur Mode und gute Laune.</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl">
                Hier erfährst du, wie ein typischer Besuch bei mir aussieht. 
                Spoiler: Es ist entspannter als du denkst.
              </p>
            </div>
          </div>
        </section>

        {/* Interior */}
        <section className="py-20 bg-[#f8f6f3]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src="/images/boutique-interior.jpg"
                  alt="Boutique Innenansicht"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src="/images/personal-consultation.jpg"
                  alt="Beratung in der Boutique"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground mb-16 text-center">
                So läuft es ab
              </h2>

              <div className="space-y-16">
                {/* Step 1 */}
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-2 lg:col-span-1">
                    <span className="font-serif text-secondary text-3xl">01</span>
                  </div>
                  <div className="col-span-10 lg:col-span-11">
                    <h3 className="font-serif text-xl text-foreground mb-3">Du kommst rein</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kein Termin nötig, kein Klingeln. Die Tür ist offen. 
                      Wenn ich gerade mit jemandem spreche, schau dich in Ruhe um – ich komme zu dir.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-2 lg:col-span-1">
                    <span className="font-serif text-secondary text-3xl">02</span>
                  </div>
                  <div className="col-span-10 lg:col-span-11">
                    <h3 className="font-serif text-xl text-foreground mb-3">Wir reden kurz</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Was suchst du? Für welchen Anlass? Oder stöberst du einfach? 
                      Alles okay. Ich helfe dir gern, aber ich dränge nie.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-2 lg:col-span-1">
                    <span className="font-serif text-secondary text-3xl">03</span>
                  </div>
                  <div className="col-span-10 lg:col-span-11">
                    <h3 className="font-serif text-xl text-foreground mb-3">Du probierst</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Die Umkleide ist bequem, die Spiegel sind ehrlich. 
                      Probier so viel du willst. Ich sag dir meine Meinung – aber nur wenn du fragst.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-2 lg:col-span-1">
                    <span className="font-serif text-secondary text-3xl">04</span>
                  </div>
                  <div className="col-span-10 lg:col-span-11">
                    <h3 className="font-serif text-xl text-foreground mb-3">Du entscheidest</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kauf nur, was dich wirklich überzeugt. Wenn nichts dabei ist? Auch gut. 
                      Du bist jederzeit willkommen, wieder vorbeizuschauen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-24 bg-[#f8f6f3]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="font-serif text-2xl lg:text-3xl text-foreground italic leading-relaxed">
                &ldquo;Bei Rinabelle fühlt es sich nicht an wie Einkaufen. 
                Eher wie bei einer Freundin vorbeischauen, die zufällig einen unglaublich guten Geschmack hat.&rdquo;
              </blockquote>
              <p className="text-muted-foreground mt-6">— Eine Kundin</p>
            </div>
          </div>
        </section>

        {/* FAQ-like section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground mb-12">Gut zu wissen</h2>
              
              <div className="space-y-8">
                <div className="border-b border-border pb-8">
                  <h3 className="font-medium text-foreground mb-2">Brauche ich einen Termin?</h3>
                  <p className="text-muted-foreground">
                    Nein. Komm einfach vorbei. Wenn du eine längere Beratung möchtest, 
                    melde dich vorher kurz – dann nehme ich mir extra Zeit für dich.
                  </p>
                </div>
                <div className="border-b border-border pb-8">
                  <h3 className="font-medium text-foreground mb-2">Kann ich Sachen zurückbringen?</h3>
                  <p className="text-muted-foreground">
                    Klar. Innerhalb von 14 Tagen, mit Etikett. Aber ehrlich: 
                    Wenn du unsicher bist, lass es lieber erstmal hier. Wir legen es gern zur Seite.
                  </p>
                </div>
                <div className="border-b border-border pb-8">
                  <h3 className="font-medium text-foreground mb-2">Welche Größen habt ihr?</h3>
                  <p className="text-muted-foreground">
                    Von 34 bis 44, je nach Stück. Ich versuche, für verschiedene Körper etwas zu haben. 
                    Wenn du unsicher bist, ruf kurz an.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Gibt es Parkplätze?</h3>
                  <p className="text-muted-foreground">
                    Ja, kostenlos in der Nähe. Mehr dazu auf der Standort-Seite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#2a2a2a]">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-6">
              Bereit für deinen Besuch?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10">
              Ich freu mich auf dich. Wirklich.
            </p>
            <Link
              href="/standort"
              className="inline-block px-8 py-4 bg-white text-[#2a2a2a] font-medium hover:bg-white/90 transition-colors"
            >
              Adresse & Öffnungszeiten
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
