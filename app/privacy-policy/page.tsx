"use client"

import { PRACTICE } from "../../lib/constants"

import MainNavbar from "../../components/NavBar"
import Footer from "../../components/Footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <MainNavbar />
      <main className="mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6">
        <h2 className="mb-2 font-serif text-3xl text-foreground sm:text-4xl">
          Datenschutzerklärung
        </h2>
        <div className="mb-10 h-px w-12 bg-primary/40" />

        <div className="prose prose-sm max-w-none space-y-8 leading-relaxed font-light text-foreground/80">
          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">
              1. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              <br />
              <strong className="font-medium text-foreground">
                {PRACTICE.seo.title}
              </strong>
              <br />
              {PRACTICE.doctorName}
              <br />
              {PRACTICE.address.street}
              <br />
              {PRACTICE.address.zip} {PRACTICE.address.city}
              <br />
              E-Mail: {PRACTICE.email}
              <br />
              Telefon: {PRACTICE.phone.preview}
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p>
              Beim Besuch dieser Website werden durch den Webserver automatisch
              folgende Daten gespeichert (Server-Logfiles):
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>IP-Adresse (anonymisiert)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Aufgerufene Seite / Datei</li>
              <li>Verwendeter Browser und Betriebssystem</li>
              <li>Verweisende Website (Referrer)</li>
            </ul>
            <p className="mt-3">
              Diese Daten werden ausschließlich zur Sicherstellung eines
              störungsfreien Betriebs der Website verarbeitet und nicht mit
              anderen Daten zusammengeführt.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">
              3. Kontaktformular
            </h2>
            <p>
              Wenn Sie über das Kontaktformular Anfragen stellen, werden Ihre
              Angaben (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung der
              Anfrage und für eventuelle Anschlussfragen gespeichert. Die Daten
              werden nicht ohne Ihre Einwilligung weitergegeben. Die
              Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
              (Vertragserfüllung / vorvertragliche Maßnahmen).
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">
              4. Keine Weitergabe an Dritte
            </h2>
            <p>
              Personenbezogene Daten werden nicht an Dritte weitergegeben, es
              sei denn, es besteht eine gesetzliche Verpflichtung oder Sie haben
              ausdrücklich eingewilligt.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">
              5. Ihre Rechte
            </h2>
            <p>Sie haben das Recht auf:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail an die
              oben genannte verantwortliche Stelle. Sie haben zudem das Recht,
              sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">
              6. Cookies
            </h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies oder Analyse-Tools
              von Drittanbietern. Es werden lediglich technisch notwendige
              Einstellungen (z. B. Designpräferenz) lokal in Ihrem Browser
              gespeichert.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">
              7. Aktualität
            </h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
              April 2026. Durch die Weiterentwicklung der Website oder aufgrund
              geänderter gesetzlicher Vorgaben kann es notwendig werden, diese
              Erklärung zu aktualisieren.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
