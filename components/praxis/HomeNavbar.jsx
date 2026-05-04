import { useState, useEffect } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import Logo from "@/components/Logo"

export default function HomeNavbar({ navLinks, onNavLinkClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    if (!scrolled && window.scrollY > 40) {
      setScrolled(true)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1))
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      )
      observer.observe(el)
      return observer
    })
    return () =>
      observers.forEach((o, i) => {
        const el = document.getElementById(sectionIds[i])
        if (o && el) o.unobserve(el)
      })
  }, [])

  const handleClick = (href) => {
    setMobileOpen(false)

    setTimeout(() => {
      onNavLinkClick(href)
    }, 100)
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo size={32} scrolled={scrolled} />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className={`cursor-pointer rounded-full px-3 py-1.5 text-sm font-light tracking-wide transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? scrolled
                      ? "bg-primary/10 font-normal text-primary"
                      : "bg-white/20 font-normal text-white"
                    : scrolled
                      ? "text-foreground hover:bg-primary/10 hover:text-primary"
                      : "text-white/90 hover:bg-white/15 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
        >
          {mobileOpen ? (
            <X
              className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`}
            />
          ) : (
            <Menu
              className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`}
            />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-white/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="w-full border-b border-border/50 py-3 text-left text-sm font-light tracking-wide text-foreground last:border-0"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
