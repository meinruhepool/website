import { useState } from "react"
import { Mail, Phone, Send, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { PRACTICE } from "@/lib/constants"

import ScrollReveal from "./ScrollReveal"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [agreed, setAgreed] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!agreed) {
      toast.error("Bitte stimmen Sie der Datenschutzerklärung zu.")
      return
    }
    if (!form.name || !form.email || !form.message) {
      toast.error("Bitte füllen Sie alle Felder aus.")
      return
    }
    setSending(true)
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1200))
    toast.success("Vielen Dank! Ihre Nachricht wurde gesendet.")
    setForm({ name: "", email: "", message: "" })
    setAgreed(false)
    setSending(false)
  }

  return (
    <section id="kontakt" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <p className="mb-3 text-center text-sm font-light tracking-[0.3em] text-muted-foreground uppercase">
            Kontakt
          </p>
          <h2 className="mb-4 text-center font-serif text-3xl text-foreground sm:text-4xl">
            Nehmen Sie Kontakt auf
          </h2>
          <p className="mx-auto mb-16 max-w-lg text-center font-light text-muted-foreground">
            Der erste Schritt ist oft der mutigste. Ich freue mich auf Ihre
            Nachricht.
          </p>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          <ScrollReveal className="md:col-span-3" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-sm font-light">
                    Name *
                  </Label>
                  <Input
                    id="contact-name"
                    placeholder="Ihr Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border-border/80 bg-card focus:border-primary/50"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-sm font-light">
                    E-Mail *
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="ihre@email.de"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="border-border/80 bg-card focus:border-primary/50"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-sm font-light">
                  Nachricht *
                </Label>
                <Textarea
                  id="contact-message"
                  placeholder="Ihre Nachricht an mich…"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={5}
                  className="resize-none border-border/80 bg-card focus:border-primary/50"
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
                <Label
                  htmlFor="datenschutz"
                  className="cursor-pointer text-sm leading-relaxed font-light text-muted-foreground block"
                >
                  Ich habe die{" "}
                  <a
                    href="#datenschutz-page"
                    className="text-primary underline underline-offset-2 hover:opacity-80"
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und stimme der Verarbeitung meiner Daten zur
                  Kontaktaufnahme zu. *
                </Label>
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="rounded-full bg-primary px-8 py-3 text-sm font-light tracking-wide text-primary-foreground hover:bg-primary/90"
              >
                {sending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Wird gesendet…
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Nachricht senden
                  </>
                )}
              </Button>
            </form>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-2" delay={0.2}>
            <div className="space-y-8 rounded-2xl bg-primary/5 p-8">
              <div>
                <h3 className="mb-4 font-serif text-lg text-foreground">
                  Direkt erreichen
                </h3>
                <div className="space-y-4">
                  <a
                    href={"tel:" + PRACTICE.phone.value}
                    className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8 transition-colors group-hover:bg-primary/15">
                      <Phone
                        className="h-4 w-4 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-sm font-light">
                      {PRACTICE.phone.preview}
                    </span>
                  </a>
                  <a
                    href={"mailto:" + PRACTICE.email}
                    className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8 transition-colors group-hover:bg-primary/15">
                      <Mail
                        className="h-4 w-4 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-sm font-light">
                      {PRACTICE.email}
                    </span>
                  </a>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="mb-3 font-serif text-lg text-foreground">
                  Erstgespräch
                </h3>
                <p className="text-sm leading-relaxed font-light text-muted-foreground">
                  Das unverbindliche Erstgespräch dauert ca. 20 Minuten und
                  dient dem gegenseitigen Kennenlernen. Gemeinsam besprechen wir
                  Ihr Anliegen und den möglichen Therapieweg.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
