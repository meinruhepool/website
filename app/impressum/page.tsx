"use client"

import { PRACTICE } from "../../lib/constants"

import Navbar from "../../components/NavBar"
import Footer from "../../components/Footer"

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6">
        <h1 className="mb-2 font-serif text-4xl text-foreground">Impressum</h1>
        <div className="mb-10 h-px w-12 bg-primary/40" />

        <div className="space-y-8 leading-relaxed font-light text-muted-foreground">
          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">
              Angaben gemäß §5 TMG
            </h2>
            <p>
              <strong className="font-medium text-foreground">
                {PRACTICE.seo.title}
              </strong>
              <br />
              {PRACTICE.doctorName}
              <br />
              {PRACTICE.address.street}
              <br />
              {PRACTICE.address.zip} {PRACTICE.address.city}
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">Kontakt</h2>
            <p>
              Telefon: {PRACTICE.phone.preview}
              <br />
              E-Mail: {PRACTICE.email}
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p>
              Berufsbezeichnung: Psychologische Psychotherapeutin
              <br />
              Zuständige Kammer: Psychotherapeutenkammer Westfalen-Lippe
              <br />
              Zulassung durch: Kassenärztliche Vereinigung Westfalen-Lippe
              <br />
              Es gelten folgende berufsrechtliche Regelungen:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Psychotherapeutengesetz (PsychThG)</li>
              <li>Berufsordnung der Psychotherapeutenkammer NRW</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">
              Aufsichtsbehörde
            </h2>
            <p>
              Psychotherapeutenkammer Nordrhein-Westfalen
              <br />
              Willstätterstraße 10
              <br />
              40549 Düsseldorf
              <br />
              <a
                href="https://www.ptk-nrw.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.ptk-nrw.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">
              Haftungsausschluss
            </h2>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
              erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte kann jedoch keine Gewähr übernommen werden. Als
              Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
              nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
              dieser Website unterliegen dem deutschen Urheberrecht. Beiträge
              Dritter sind als solche gekennzeichnet. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung
              der jeweiligen Autorin.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
