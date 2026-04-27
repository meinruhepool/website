import React from "react";
import ButterflyLogo from "./ButterflyLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ButterflyLogo size={28} color="rgba(255,255,255,0.7)" />
              <span className="font-serif text-lg text-primary-foreground/90">Ihr Ruhepol</span>
            </div>
            <p className="text-sm font-light text-primary-foreground/50 leading-relaxed">
              Psychotherapie in Westerkappeln.<br />
              Ein sicherer Raum für Ihre persönliche Entfaltung.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-medium text-primary-foreground/70 mb-4 tracking-wide uppercase">
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
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm font-light text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium text-primary-foreground/70 mb-4 tracking-wide uppercase">
              Rechtliches
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#impressum" className="text-sm font-light text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#datenschutz-page" className="text-sm font-light text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs font-light text-primary-foreground/35">
            © {currentYear} Ihr Ruhepol — Psychotherapie in Westerkappeln. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}