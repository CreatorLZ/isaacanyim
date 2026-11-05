'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

export default function Footer() {
  const [lagosTime, setLagosTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date())
        setLagosTime(timeString)
      } catch (e) {
        setLagosTime('13:08')
      }
    }

    updateTime()
    const timer = setInterval(updateTime, 30000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
      className="w-full pt-12 pb-8 px-6 sm:px-8"
    >
      <div className="max-w-[1024px] mx-auto md:pl-[21.4%]">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between max-w-[540px] gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-text-secondary">
          {/* Left: Time and Copyright */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-text-secondary shrink-0" strokeWidth={1.8} />
              <span>
                LAGOS · <span suppressHydrationWarning>{lagosTime || '13:08'}</span>
              </span>
            </div>
            <div>© {new Date().getFullYear()} ISAAC ANYIM</div>
          </div>

          {/* Right: Current Focus / Building Status */}
          <div className="flex items-center gap-2 pt-0.5">
            <svg
              className="w-3 h-3 text-text-secondary shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2 C12 7, 7 12, 2 12 C7 12, 12 17, 12 22 C12 17, 17 12, 22 12 C17 12, 12 7, 12 2 Z" />
            </svg>
            <span>BUILDING BAGXTRA + QEWORDLY 2.0</span>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
