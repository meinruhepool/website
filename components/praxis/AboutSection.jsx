import { PRACTICE } from "@/lib/constants"
import ScrollReveal from "./ScrollReveal"
import { User } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="ueber-mich" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <p className="mb-3 text-center text-sm font-light tracking-[0.3em] text-muted-foreground uppercase">
            Über mich
          </p>
          <h2 className="mb-16 text-center font-serif text-3xl text-foreground sm:text-4xl">
            Willkommen in meiner Praxis
          </h2>
        </ScrollReveal>

        <div className="grid items-center gap-12 md:grid-cols-5 md:gap-16">
          <ScrollReveal
            className="order-2 md:order-1 md:col-span-3"
            delay={0.1}
          >
            <div className="border-l-2 border-primary/30 pl-6 sm:pl-8">
              <p className="mb-5 leading-relaxed font-light text-foreground/80">
                {`Herzlich willkommen. Mein Name ist ${PRACTICE.doctorName}, und ich begleite
                Menschen auf ihrem Weg zu innerer Balance und persönlichem
                Wachstum. In meiner Praxis in Westerkappeln biete ich Ihnen
                einen geschützten Raum, in dem Sie sich öffnen und entfalten
                können.`}
              </p>
              <p className="mb-5 leading-relaxed font-light text-foreground/80">
                Ich glaube daran, dass jeder Mensch die Fähigkeit zur
                Veränderung in sich trägt — manchmal braucht es nur die richtige
                Begleitung, um diese Stärke wiederzufinden. Mein Ansatz ist
                geprägt von Wertschätzung, Empathie und wissenschaftlich
                fundierten Methoden.
              </p>
              <p className="text-sm leading-relaxed font-light text-foreground/70 italic">
                „Es ist mir ein Anliegen, dass Sie sich bei mir von Anfang an
                sicher und verstanden fühlen."
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="order-1 md:order-2 md:col-span-2"
            delay={0.2}
          >
            <div className="relative z-0 mx-auto max-w-xs">
              <div className="flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl bg-secondary">
                <div className="text-center text-muted-foreground/50">
                  <User className="mx-auto mb-3 h-16 w-16 opacity-40" />
                  <p className="text-xs font-light tracking-wide">
                    Foto Platzhalter
                  </p>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -right-3 -bottom-3 -z-10 h-24 w-24 rounded-2xl border-2 border-primary/20" />
              <div className="absolute -top-3 -left-3 -z-10 h-16 w-16 rounded-xl border border-accent/40" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
