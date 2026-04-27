import React, { useRef } from "react";
import { motion } from "framer-motion";
import ButterflyLogo from "./ButterflyLogo";
import FlyingButterfly from "./FlyingButterfly";

export default function HeroSection() {
  const headlineRef = useRef(null);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(165deg, hsl(153, 41%, 25%) 0%, hsl(153, 41%, 35%) 40%, hsl(140, 30%, 50%) 70%, hsl(140, 25%, 92%) 100%)"
      }}
    >
      {/* Flying butterfly animation — lands on "R" in Ruhepol */}
      <FlyingButterfly headlineRef={headlineRef} />

      {/* Subtle floating circles for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", top: "10%", right: "-5%" }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", bottom: "15%", left: "-3%" }}
          animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <ButterflyLogo size={140} className="text-white" />
        </motion.div>

        {/* Headline — ref used to locate the "R" in Ruhepol for landing */}
        <motion.h1
          ref={headlineRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif italic text-5xl sm:text-6xl md:text-7xl text-white font-normal tracking-wide mb-4"
        >
          Mein Ruhepol
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "4rem" }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="h-px mx-auto mb-6"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/80 text-lg sm:text-xl font-light tracking-wider mb-3"
        >
          Heilpraktikerin für Psychotherapie in Westerkappeln
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-white/65 text-base sm:text-lg font-light italic max-w-xl mx-auto"
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
            onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-primary font-semibold text-sm tracking-widest uppercase shadow-lg hover:bg-white/90 hover:shadow-xl transition-all duration-300"
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
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}