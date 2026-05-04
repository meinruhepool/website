import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import ButterflyLogo from "./praxis/ButterflyLogo"

const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Datenschutz", href: "/privacy-policy" },
  { label: "Impressum", href: "/impressum" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    if (!scrolled && window.scrollY > 40) {
      setScrolled(true)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-ring"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={"/"} className="relative z-10 flex items-center gap-2">
          <ButterflyLogo
            size={32}
            className={`absolute -top-1 left-3 duration-500 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          />
          <span
            className={`pt-3.5 pl-8 text-lg font-semibold transition-colors duration-500 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            mein Ruhepol
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm font-light tracking-wide transition-all duration-200 ${
                  pathname === link.href
                    ? scrolled
                      ? "bg-primary/10 font-normal text-primary"
                      : "bg-white/20 font-normal text-white"
                    : scrolled
                      ? "text-foreground hover:bg-primary/10 hover:text-primary"
                      : "text-white/90 hover:bg-white/15 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
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
