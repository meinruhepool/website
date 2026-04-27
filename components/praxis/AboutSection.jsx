import React from "react";
import ScrollReveal from "./ScrollReveal";
import { User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="ueber-mich" className="py-24 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-sm font-light tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Über mich
          </p>
          <h2 className="text-center font-serif text-3xl sm:text-4xl text-foreground mb-16">
            Willkommen in meiner Praxis
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <ScrollReveal className="md:col-span-3 order-2 md:order-1" delay={0.1}>
            <div className="border-l-2 border-primary/30 pl-6 sm:pl-8">
              <p className="text-foreground/80 font-light leading-relaxed mb-5">
                Herzlich willkommen. Mein Name ist [Name], und ich begleite Menschen auf ihrem Weg zu 
                innerer Balance und persönlichem Wachstum. In meiner Praxis in Westerkappeln biete ich 
                Ihnen einen geschützten Raum, in dem Sie sich öffnen und entfalten können.
              </p>
              <p className="text-foreground/80 font-light leading-relaxed mb-5">
                Ich glaube daran, dass jeder Mensch die Fähigkeit zur Veränderung in sich trägt — 
                manchmal braucht es nur die richtige Begleitung, um diese Stärke wiederzufinden. 
                Mein Ansatz ist geprägt von Wertschätzung, Empathie und wissenschaftlich fundierten Methoden.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed text-sm italic">
                „Es ist mir ein Anliegen, dass Sie sich bei mir von Anfang an sicher und verstanden fühlen."
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-2 order-1 md:order-2" delay={0.2}>
            <div className="relative mx-auto max-w-xs">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <User className="w-16 h-16 mx-auto mb-3 opacity-40" />
                  <p className="text-xs font-light tracking-wide">Foto Platzhalter</p>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border border-accent/40 rounded-xl -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}