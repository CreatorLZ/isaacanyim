'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TwitterIcon, LinkedInIcon, GitHubIcon } from './SocialIcons'
import { ArrowRight, Mail } from 'lucide-react'
import { SOCIAL_LINKS } from '../lib/social-links'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Hero() {
  return (
    <div className="relative min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-center pl-8 sm:pl-16 lg:pl-44 pr-4 sm:pr-6 lg:pr-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl leading-loose"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm uppercase tracking-[0.2em] text-text-muted mb-4 font-medium"
        >
          HEY, I'M ISAAC.
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-normal text-text-primary mb-6 leading-tight"
        >
          Software Engineer
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-text-secondary mb-8 max-w-xl leading-relaxed"
        >
          I build functional, user-friendly stuff
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href="/about"
            className="inline-flex items-center text-xs uppercase tracking-[0.15em] text-text-secondary hover:text-text-primary font-medium group pb-3 border-b border-border hover:border-text-primary transition-colors"
            data-cuelume-hover="tick"
          >
            LEARN MORE
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex items-center gap-4 pt-20"
      >
        <Link
          href={SOCIAL_LINKS.twitter}
          target="_blank"
          aria-label="Twitter / X"
          className="text-text-secondary hover:text-text-primary transition-colors"
          data-cuelume-hover="tick"
        >
          <TwitterIcon className="w-5 h-5" />
        </Link>
        <Link
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          aria-label="LinkedIn"
          className="text-text-secondary hover:text-text-primary transition-colors"
          data-cuelume-hover="tick"
        >
          <LinkedInIcon className="w-5 h-5" />
        </Link>
        <Link
          href={SOCIAL_LINKS.github}
          target="_blank"
          aria-label="GitHub"
          className="text-text-secondary hover:text-text-primary transition-colors"
          data-cuelume-hover="tick"
        >
          <GitHubIcon className="w-5 h-5" />
        </Link>
        <Link
          href="mailto:isaacchimarokeanyim@gmail.com"
          aria-label="Email"
          className="text-text-secondary hover:text-text-primary transition-colors"
          data-cuelume-hover="tick"
        >
          <Mail className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  )
}
