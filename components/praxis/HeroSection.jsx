import { useRef } from "react"
import { motion } from "framer-motion"

import { PRACTICE } from "@/lib/constants"

import ButterflyLogo from "./ButterflyLogo"
import FlyingButterfly from "./FlyingButterfly"

export default function HeroSection() {
  const headlineRef = useRef(null)

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(165deg, hsl(153, 41%, 25%) 0%, hsl(153, 41%, 35%) 40%, hsl(140, 30%, 50%) 70%, hsl(140, 25%, 92%) 100%)",
      }}
    >
      {/* Flying butterfly animation — lands on "R" in Ruhepol */}
      <FlyingButterfly headlineRef={headlineRef} />

      {/* Subtle floating circles for depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute h-96 w-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, white 0%, transparent 70%)",
            top: "10%",
            right: "-5%",
          }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-72 w-72 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, white 0%, transparent 70%)",
            bottom: "15%",
            left: "-3%",
          }}
          animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <ButterflyLogo size={140} className="text-white" />
        </motion.div>

        {/* Headline — ref used to locate the "R" in Ruhepol for landing */}
        <motion.h1
          ref={headlineRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4 font-serif text-5xl font-normal tracking-wide text-white italic sm:text-6xl md:text-7xl"
        >
          {PRACTICE.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "4rem" }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mb-6 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-3 text-lg font-light tracking-wider text-white/80 sm:text-xl"
        >
          {PRACTICE.fullName}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mx-auto max-w-xl text-base font-light text-white/65 italic sm:text-lg"
        >
          „Entfalten Sie sich. Werden Sie, wer Sie wirklich sind."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-12"
        >
          <button
            onClick={() =>
              document
                .querySelector("#kontakt")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold tracking-widest text-primary uppercase shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
            aria-label="Kontakt aufnehmen"
          >
            Termin vereinbaren
          </button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2">
          <div className="h-2 w-1 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  )
}
