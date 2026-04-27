import React from "react";
import ScrollReveal from "./ScrollReveal";
import { MapPin, Clock, Phone, Armchair } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="praxis" className="py-24 sm:py-32 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-sm font-light tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Praxis
          </p>
          <h2 className="text-center font-serif text-3xl sm:text-4xl text-foreground mb-16">
            Ihr Ort der Ruhe
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">Adresse</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    Musterstraße 12<br />
                    49492 Westerkappeln<br />
                    Nordrhein-Westfalen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">Sprechzeiten</h3>
                  <div className="text-muted-foreground font-light text-sm space-y-1">
                    <p>Montag – Donnerstag: 9:00 – 18:00 Uhr</p>
                    <p>Freitag: 9:00 – 14:00 Uhr</p>
                    <p className="italic text-xs mt-2">Termine nach Vereinbarung</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">Telefon</h3>
                  <p className="text-muted-foreground font-light text-sm">
                    <a href="tel:+4954041234567" className="hover:text-primary transition-colors">
                      +49 (0) 5404 123 4567
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Armchair className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">Atmosphäre</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    Meine Praxis ist ein warmer, heller Ort — gestaltet, um Ihnen 
                    von der ersten Sekunde an ein Gefühl von Geborgenheit zu geben. 
                    Barrierefreier Zugang und kostenlose Parkplätze direkt vor der Tür.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                title="Praxis Standort in Westerkappeln"
                src="https://www.openstreetmap.org/export/embed.html?bbox=7.85%2C52.30%2C7.90%2C52.33&layer=mapnik&marker=52.315%2C7.875"
                width="100%"
                height="380"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}