"use client"

import HomeNavbar from "../components/praxis/HomeNavbar"
import HeroSection from "../components/praxis/HeroSection"
import AboutSection from "../components/praxis/AboutSection"
import ServicesSection from "../components/praxis/ServicesSection"
import PhilosophySection from "../components/praxis/PhilosophySection"
import LocationSection from "../components/praxis/LocationSection"
import ContactSection from "../components/praxis/ContactSection"
import Footer from "../components/praxis/Footer"

export default function Page() {
  const navLinks = [
    { label: "Über mich", href: "#ueber-mich" },
    { label: "Leistungen", href: "#leistungen" },
    { label: "Ansatz", href: "#ansatz" },
    { label: "Praxis", href: "#praxis" },
    { label: "Kontakt", href: "#kontakt" },
  ]

  const onNavLinkClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <HomeNavbar navLinks={navLinks} onNavLinkClick={onNavLinkClick} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PhilosophySection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
