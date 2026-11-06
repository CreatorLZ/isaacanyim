'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Contact from '../components/Contact'
import { SOCIAL_LINKS } from '../lib/social-links'

import react from '/public/react.png'
import nextjs from '/public/nextjs.png'
import html from '/public/html.png'
import css from '/public/css.png'
import javascript from '/public/javascript.png'
import mongodb from '/public/mongodb.png'
import sql from '/public/sql.png'
import express from '/public/express.png'
import node2 from '/public/node.png'
import typescript from '/public/typescript.png'
import styledcomponents from '/public/styledcomponents.png'
import tailwind from '/public/tailwind.png'

export default function About() {
  const [greeting, setGreeting] = useState('Hi 😃')

  useEffect(() => {
    // Computed after mount so the greeting matches the visitor's local time
    // instead of the server time (which would cause a hydration mismatch).
    /* eslint-disable react-hooks/set-state-in-effect */
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good morning 🌞')
    else if (hour < 18) setGreeting('Good afternoon 🌤️')
    else setGreeting('Good evening 🌚')
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [])

  const skills = [
    { name: 'TypeScript', image: typescript },
    { name: 'JavaScript', image: javascript },
    { name: 'React', image: react },
    { name: 'Next.js', image: nextjs },
    { name: 'Node.js', image: node2 },
    { name: 'Express', image: express },
    { name: 'MongoDB', image: mongodb },
    { name: 'SQL', image: sql },
    { name: 'Tailwind CSS', image: tailwind },
    { name: 'Styled Components', image: styledcomponents },
    { name: 'HTML', image: html },
    { name: 'CSS', image: css },
  ]

  return (
    <main className="w-full px-6 sm:px-8 pt-8 sm:pt-12 pb-12">
      <div className="max-w-[1024px] mx-auto md:pl-[21.4%]">
        <div className="max-w-[480px]">
          {/* Back to Home Link */}
          <div className="pb-5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-text-secondary hover:text-text-primary transition-colors"
              data-cuelume-hover="tick"
            >
              <ArrowLeft className="w-3 h-3" />
              BACK TO HOME
            </Link>
          </div>

          {/* Page Headline */}
          <section className="pb-6 border-b border-border/70">
            <h1 className="font-sans font-black text-[38px] sm:text-[44px] tracking-tight leading-[0.92] text-text-primary">
              About
            </h1>
          </section>

          {/* Bio Content */}
          <motion.section
            className="pt-6 pb-8 space-y-4 font-sans text-[14px] sm:text-[14.5px] font-normal leading-[1.65] text-text-secondary"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>
              {greeting}. I'm Isaac, a software engineer and builder based in
              Nigeria. I work across the stack, crafting reliable systems and
              interactive, fast user interfaces.
            </p>
            <p>
              I find immense joy in shipping tools, contributing to open-source,
              and seeing software go from the first rough sketch to production.
            </p>
            <p>
              When I'm away from the keyboard, I explore advances in artificial
              intelligence, play drums, or get lost in a good book.
            </p>
          </motion.section>

          {/* Technologies & Stack */}
          <section className="pb-8 border-t border-border/70 pt-6">
            <h2 className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-text-secondary mb-3 pb-0 font-normal">
              STACK & TOOLS
            </h2>

            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-surface border border-border text-text-primary hover:border-accent transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>

          {/* Connect / Links */}
          <section className="pb-8 border-t border-border/70 pt-6 font-mono text-[10.5px] tracking-[0.16em] uppercase text-text-secondary flex flex-wrap items-center gap-x-2.5">
            <Link
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              data-cuelume-hover="tick"
            >
              GITHUB
            </Link>
            <span className="select-none text-text-muted">·</span>
            <Link
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              data-cuelume-hover="tick"
            >
              X
            </Link>
            <span className="select-none text-text-muted">·</span>
            <Link
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              data-cuelume-hover="tick"
            >
              LINKEDIN
            </Link>
            <span className="select-none text-text-muted">·</span>
            <a
              href="mailto:isaacchimarokeanyim@gmail.com"
              className="hover:text-accent transition-colors"
              data-cuelume-hover="tick"
            >
              EMAIL
            </a>
          </section>

          {/* Contact Component */}
          <div className="pt-2 border-t border-border/70">
            <Contact />
          </div>
        </div>
      </div>
    </main>
  )
}
