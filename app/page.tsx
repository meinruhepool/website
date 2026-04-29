"use client"

import Navbar from "../components/praxis/Navbar"
import HeroSection from "../components/praxis/HeroSection"
import AboutSection from "../components/praxis/AboutSection"
import ServicesSection from "../components/praxis/ServicesSection"
import PhilosophySection from "../components/praxis/PhilosophySection"
import LocationSection from "../components/praxis/LocationSection"
import ContactSection from "../components/praxis/ContactSection"
import Footer from "../components/praxis/Footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
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
