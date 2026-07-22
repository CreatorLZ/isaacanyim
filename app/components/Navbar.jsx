'use client'

import { useState, useEffect } from 'react'
import { AlignRight, X } from 'lucide-react'
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

const menuContainerVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
}

const menuItemVariants = {
  closed: { opacity: 0, y: 20 },
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 28 },
  },
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? 'backdrop-blur-lg bg-bg/80 border-border'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center py-2 gap-6 sm:gap-10 w-full">
            {/* Desktop Nav Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center gap-10"
            >
              <motion.div variants={navItemVariants}>
                <NavLink
                  href="/"
                  className="text-text-secondary hover:text-accent text-sm uppercase font-semibold tracking-wide"
                  data-cuelume-hover="tick"
                >
                  HOME
                </NavLink>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <NavLink
                  href="/about"
                  className="text-text-secondary hover:text-accent text-sm uppercase font-semibold tracking-wide"
                  data-cuelume-hover="tick"
                >
                  ABOUT
                </NavLink>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <NavLink
                  href="/#projects"
                  className="text-text-secondary hover:text-accent text-sm uppercase font-semibold tracking-wide"
                  data-cuelume-hover="tick"
                >
                  PROJECTS
                </NavLink>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <NavLink
                  href="/#contact"
                  className="text-text-secondary hover:text-accent text-sm uppercase font-semibold tracking-wide"
                  data-cuelume-hover="tick"
                >
                  CONTACT
                </NavLink>
              </motion.div>
            </motion.div>

            {/* Right side: Theme Toggle + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <ThemeToggle />
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden text-text-secondary hover:text-text-primary focus:outline-none"
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <AlignRight className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-bg z-40 md:hidden flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <motion.div
          className="flex flex-col items-center justify-center space-y-8 w-full"
          variants={menuContainerVariants}
          initial="closed"
          animate={isMenuOpen ? 'open' : 'closed'}
        >
          <motion.div variants={menuItemVariants}>
            <NavLink
              href="/"
              className="text-text-secondary hover:text-accent text-4xl font-bold tracking-tight block transition-colors"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </motion.div>
          <motion.div variants={menuItemVariants}>
            <NavLink
              href="/about"
              className="text-text-secondary hover:text-accent text-4xl font-bold tracking-tight block transition-colors"
              onClick={closeMenu}
            >
              About
            </NavLink>
          </motion.div>
          <motion.div variants={menuItemVariants}>
            <NavLink
              href="/#projects"
              className="text-text-secondary hover:text-accent text-4xl font-bold tracking-tight block transition-colors"
              onClick={closeMenu}
            >
              Projects
            </NavLink>
          </motion.div>
          <motion.div variants={menuItemVariants}>
            <NavLink
              href="/#contact"
              className="text-text-secondary hover:text-accent text-4xl font-bold tracking-tight block transition-colors"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
