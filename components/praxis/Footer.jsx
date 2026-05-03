import Link from "next/link"

import ButterflyLogo from "./ButterflyLogo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-12 grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <ButterflyLogo size={28} color="rgba(255,255,255,0.7)" />
              <span className="font-serif text-lg text-primary-foreground/90">
                Ihr Ruhepol
              </span>
            </div>
            <p className="text-sm leading-relaxed font-light text-primary-foreground/50">
              Psychotherapie in Westerkappeln.
              <br />
              Ein sicherer Raum für Ihre persönliche Entfaltung.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wide text-primary-foreground/70 uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Über mich", href: "#ueber-mich" },
                { label: "Leistungen", href: "#leistungen" },
                { label: "Ansatz", href: "#ansatz" },
                { label: "Praxis", href: "#praxis" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() =>
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-sm font-light text-primary-foreground/50 transition-colors hover:text-primary-foreground/80"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wide text-primary-foreground/70 uppercase">
              Rechtliches
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm font-light text-primary-foreground/50 transition-colors hover:text-primary-foreground/80"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm font-light text-primary-foreground/50 transition-colors hover:text-primary-foreground/80"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs font-light text-primary-foreground/35">
            © {currentYear} Ihr Ruhepol — Psychotherapie in Westerkappeln. Alle
            Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
