import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import ButterflyLogo from "./ButterflyLogo";

export default function PhilosophySection() {
  return (
    <section id="ansatz" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <ButterflyLogo size={384} color="hsl(153, 41%, 30%)" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal>
          <p className="text-center text-sm font-light tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Mein Ansatz
          </p>
          <h2 className="text-center font-serif text-3xl sm:text-4xl text-foreground mb-16">
            Vom Kokon zum Schmetterling
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal delay={0.1}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full border-2 border-primary/20 flex items-center justify-center">
                <span className="font-serif text-primary text-xl">1</span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-3">Ankommen</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                Einen sicheren Raum finden. Zur Ruhe kommen. Sich verstanden fühlen — der erste Schritt zur Veränderung.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full border-2 border-primary/20 flex items-center justify-center">
                <span className="font-serif text-primary text-xl">2</span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-3">Verstehen</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                Gemeinsam Muster erkennen, Zusammenhänge verstehen und die eigenen Stärken wiederentdecken.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full border-2 border-primary/20 flex items-center justify-center">
                <span className="font-serif text-primary text-xl">3</span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-3">Entfalten</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                Neue Wege gehen, sich entfalten und die eigene Transformation erleben — wie ein Schmetterling.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="relative bg-primary/5 rounded-3xl p-10 sm:p-14 text-center">
            <div className="absolute top-6 left-8 text-primary/15 font-serif text-6xl leading-none">„</div>
            <blockquote className="font-serif italic text-xl sm:text-2xl text-foreground/85 leading-relaxed max-w-2xl mx-auto">
              Veränderung geschieht nicht über Nacht. Sie entsteht in dem Moment, in dem Sie sich erlauben, 
              hinzuschauen — mit Mut, mit Geduld und mit Mitgefühl für sich selbst.
            </blockquote>
            <div className="mt-6 w-12 h-px bg-primary/30 mx-auto" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}