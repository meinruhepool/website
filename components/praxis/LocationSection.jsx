import { PRACTICE } from "@/lib/constants"

import ScrollReveal from "./ScrollReveal"
import { MapPin, Clock, Phone, Armchair } from "lucide-react"

export default function LocationSection() {
  return (
    <section id="praxis" className="bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <p className="mb-3 text-center text-sm font-light tracking-[0.3em] text-muted-foreground uppercase">
            Praxis
          </p>
          <h2 className="mb-16 text-center font-serif text-3xl text-foreground sm:text-4xl">
            Ihr Ort der Ruhe
          </h2>
        </ScrollReveal>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/8">
                  <MapPin className="h-4 w-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="mb-1 font-serif text-lg text-foreground">
                    Adresse
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-muted-foreground">
                    {PRACTICE.address.street}
                    <br />
                    {PRACTICE.address.zip} {PRACTICE.address.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/8">
                  <Clock className="h-4 w-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="mb-1 font-serif text-lg text-foreground">
                    Sprechzeiten
                  </h3>
                  <div className="space-y-1 text-sm font-light text-muted-foreground">
                    {PRACTICE.hours.weekdays.map((item, index) => (
                      <p key={"weekdays_" + index}>{item}</p>
                    ))}
                    <p className="mt-2 text-xs italic">
                      Termine nach Vereinbarung
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/8">
                  <Phone className="h-4 w-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="mb-1 font-serif text-lg text-foreground">
                    Telefon
                  </h3>
                  <p className="text-sm font-light text-muted-foreground">
                    <a
                      href={"tel:" + PRACTICE.phone.value}
                      className="transition-colors hover:text-primary"
                    >
                      {PRACTICE.phone.preview}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/8">
                  <Armchair
                    className="h-4 w-4 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="mb-1 font-serif text-lg text-foreground">
                    Atmosphäre
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-muted-foreground">
                    Meine Praxis ist ein warmer, heller Ort — gestaltet, um
                    Ihnen von der ersten Sekunde an ein Gefühl von Geborgenheit
                    zu geben. Barrierefreier Zugang und kostenlose Parkplätze
                    direkt vor der Tür.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Praxis Standort in Westerkappeln"
                src="https://www.openstreetmap.org/export/embed.html?bbox=7.885624766349793%2C52.311072915757435%2C7.892394661903382%2C52.3137031300162&amp;layer=mapnik&amp;marker=52.312388042423336%2C7.889009714126587"
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
  )
}
