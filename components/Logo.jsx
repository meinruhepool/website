import Link from "next/link"

import { PRACTICE } from "@/lib/constants"

import ButterflyLogo from "@/components/praxis/ButterflyLogo"

export default function Logo({ size, scrolled = false }) {
  return (
    <Link href={"/"} className="relative z-10 flex items-center gap-2">
      <ButterflyLogo
        size={size}
        className={`absolute -top-1 left-0 duration-500 ${
          scrolled ? "text-primary" : "text-white"
        }`}
      />
      <span
        className={`pt-3.5 pl-5 text-lg font-semibold transition-colors duration-500 ${
          scrolled ? "text-primary" : "text-white"
        }`}
      >
        {PRACTICE.name[0].toLowerCase() + PRACTICE.name.slice(1)}
      </span>
    </Link>
  )
}
