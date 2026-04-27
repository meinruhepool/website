import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Bitte stimmen Sie der Datenschutzerklärung zu.");
      return;
    }
    if (!form.name || !form.email || !form.message) {
      toast.error("Bitte füllen Sie alle Felder aus.");
      return;
    }
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1200));
    toast.success("Vielen Dank! Ihre Nachricht wurde gesendet.");
    setForm({ name: "", email: "", message: "" });
    setAgreed(false);
    setSending(false);
  };

  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-sm font-light tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Kontakt
          </p>
          <h2 className="text-center font-serif text-3xl sm:text-4xl text-foreground mb-4">
            Nehmen Sie Kontakt auf
          </h2>
          <p className="text-center text-muted-foreground font-light max-w-lg mx-auto mb-16">
            Der erste Schritt ist oft der mutigste. Ich freue mich auf Ihre Nachricht.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <ScrollReveal className="md:col-span-3" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-sm font-light">Name *</Label>
                  <Input
                    id="contact-name"
                    placeholder="Ihr Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border-border/80 focus:border-primary/50 bg-card"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-sm font-light">E-Mail *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="ihre@email.de"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border-border/80 focus:border-primary/50 bg-card"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-sm font-light">Nachricht *</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Ihre Nachricht an mich…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="border-border/80 focus:border-primary/50 bg-card resize-none"
                  required
                  aria-required="true"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="datenschutz"
                  checked={agreed}
                  onCheckedChange={setAgreed}
                  className="mt-0.5"
                  aria-label="Datenschutzerklärung zustimmen"
                />
                <Label htmlFor="datenschutz" className="text-sm font-light text-muted-foreground leading-relaxed cursor-pointer">
                  Ich habe die{" "}
                  <a href="#datenschutz-page" className="text-primary underline underline-offset-2 hover:opacity-80">
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und stimme der Verarbeitung meiner Daten zur Kontaktaufnahme zu. *
                </Label>
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-sm tracking-wide font-light"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Wird gesendet…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Nachricht senden
                  </>
                )}
              </Button>
            </form>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-2" delay={0.2}>
            <div className="bg-primary/5 rounded-2xl p-8 space-y-8">
              <div>
                <h3 className="font-serif text-lg text-foreground mb-4">Direkt erreichen</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+4954041234567"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <Phone className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-light">+49 (0) 5404 123 4567</span>
                  </a>
                  <a
                    href="mailto:praxis@ihrruhepol.de"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <Mail className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-light">praxis@ihrruhepol.de</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-serif text-lg text-foreground mb-3">Erstgespräch</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  Das unverbindliche Erstgespräch dauert ca. 20 Minuten und dient dem gegenseitigen 
                  Kennenlernen. Gemeinsam besprechen wir Ihr Anliegen und den möglichen Therapieweg.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}