'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // next-themes can't resolve the theme during SSR, so we only render the
    // toggle after the client has mounted.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-8 h-8" />
  }

  const isDark = resolvedTheme === 'dark'

  const handleToggle = () => {
    const next = isDark ? 'light' : 'dark'
    if (!document.startViewTransition) {
      setTheme(next)
      return
    }
    document.startViewTransition(() => {
      flushSync(() => {
        setTheme(next)
      })
    })
  }

  return (
    <button
      onClick={handleToggle}
      className="relative w-7 h-7 flex items-center justify-center rounded-full hover:bg-surface-hover transition-colors"
      aria-label="Toggle theme"
      data-cuelume-toggle
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <Moon className="w-3.5 h-3.5 text-text-secondary" strokeWidth={1.8} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <Sun className="w-3.5 h-3.5 text-text-secondary" strokeWidth={1.8} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
