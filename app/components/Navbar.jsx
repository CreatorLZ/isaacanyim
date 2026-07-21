'use client'

import { useState, useEffect } from 'react'
import NavLink from './NavLink'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg bg-bg/80 border-border'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center py-2 gap-6 sm:gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-6 sm:gap-10"
          >
                <motion.div variants={navItemVariants}>
                  <NavLink
                    href="/"
                    className="text-text-secondary hover:text-accent text-xs sm:text-sm uppercase font-semibold tracking-wide"
                    data-cuelume-hover="tick"
                  >
                    HOME
                  </NavLink>
                </motion.div>
                <motion.div variants={navItemVariants}>
                  <NavLink
                    href="/about"
                    className="text-text-secondary hover:text-accent text-xs sm:text-sm uppercase font-semibold tracking-wide"
                    data-cuelume-hover="tick"
                  >
                    ABOUT
                  </NavLink>
                </motion.div>
                <motion.div variants={navItemVariants}>
                  <NavLink
                    href="/#projects"
                    className="text-text-secondary hover:text-accent text-xs sm:text-sm uppercase font-semibold tracking-wide"
                    data-cuelume-hover="tick"
                  >
                    PROJECTS
                  </NavLink>
                </motion.div>
                <motion.div variants={navItemVariants}>
                  <NavLink
                    href="/#contact"
                    className="text-text-secondary hover:text-accent text-xs sm:text-sm uppercase font-semibold tracking-wide"
                    data-cuelume-hover="tick"
                  >
                    CONTACT
                  </NavLink>
                </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </div>
    </nav>
  )
}
