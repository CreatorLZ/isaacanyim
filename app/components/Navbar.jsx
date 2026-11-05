'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="w-full pt-6 pb-2 px-6 sm:px-8"
    >
      <div className="max-w-[1024px] mx-auto flex items-center justify-between">
        {/* Logo Mark */}
        <Link
          href="/"
          className="inline-flex items-center hover:opacity-85 hover:scale-105 active:scale-95 transition-all"
          aria-label="Isaac Anyim Home"
          data-cuelume-hover="tick"
        >
          <Logo className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
        </Link>

        {/* Right navigation: About + Theme toggle */}
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.16em]">
          <Link
            href="/about"
            className={`transition-colors ${
              pathname === '/about'
                ? 'text-text-primary font-bold'
                : 'text-text-secondary hover:text-text-primary'
            }`}
            data-cuelume-hover="tick"
          >
            ABOUT
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}
