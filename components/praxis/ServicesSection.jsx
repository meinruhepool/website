import React from "react";
import ScrollReveal from "./ScrollReveal";
import { Heart, Brain, Shield, Flower2, TreePine, Leaf } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Einzeltherapie",
    desc: "Individuelle Begleitung in einem vertrauensvollen Setting — angepasst an Ihre persönlichen Bedürfnisse und Ziele."
  },
  {
    icon: Brain,
    title: "Verhaltenstherapie",
    desc: "Wissenschaftlich fundierte Methoden, um hinderliche Denk- und Verhaltensmuster zu erkennen und nachhaltig zu verändern."
  },
  {
    icon: Shield,
    title: "Traumatherapie",
    desc: "Behutsame Aufarbeitung belastender Erfahrungen in einem sicheren und stabilisierenden Rahmen."
  },
  {
    icon: TreePine,
    title: "Burnout & Stress",
    desc: "Wege aus der Erschöpfung finden und neue Strategien für ein ausgewogenes Leben entwickeln."
  },
  {
    icon: Flower2,
    title: "Angst & Depression",
    desc: "Verständnis und Linderung bei Ängsten und depressiven Verstimmungen durch einfühlsame Therapie."
  },
  {
    icon: Leaf,
    title: "Achtsamkeit",
    desc: "Integration achtsamkeitsbasierter Techniken für mehr Gelassenheit und innere Ruhe im Alltag."
  }
];

export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-24 sm:py-32 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-sm font-light tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Leistungen
          </p>
          <h2 className="text-center font-serif text-3xl sm:text-4xl text-foreground mb-4">
            Mein Therapieangebot
          </h2>
          <p className="text-center text-muted-foreground font-light max-w-xl mx-auto mb-16">
            Jeder Mensch ist einzigartig — deshalb gestalte ich die Therapie individuell und ganzheitlich.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div className="group bg-card rounded-2xl p-8 shadow-sm border border-border/60 hover:shadow-md hover:border-primary/20 transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/12 transition-colors duration-500">
                  <service.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}