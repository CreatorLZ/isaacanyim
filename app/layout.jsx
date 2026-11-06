import localFont from 'next/font/local'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MouseTracker from './components/MouseTracker'
import CuelumeInit from './components/CuelumeInit'
import { Toaster } from 'sonner'

const nunito = localFont({
  src: './fonts/nunito-latin.woff2',
  weight: '200 1000',
  style: 'normal',
  variable: '--font-nunito',
  display: 'swap',
})

const spaceMono = localFont({
  src: [
    { path: './fonts/space-mono-400-latin.woff2', weight: '400', style: 'normal' },
    { path: './fonts/space-mono-700-latin.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-space-mono',
  display: 'swap',
})

// Metadata configuration
export const metadata = {
  title: {
    default: 'Isaac Anyim',
    template: '%s — Isaac Anyim',
  },
  description: 'Isaac Anyim | Software engineer and builder',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://isaacanyim-iota.vercel.app',
  ),
  keywords:
    'Isaac Chimaroke Anyim, Frontend Developer, Software Developer React, Next.js, Web Development, Portfolio, Developer , Isaac, Isaac Anyim, node',
  author: 'Isaac Chimaroke Anyim',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://isaacanyim-iota.vercel.app/',
    title: 'Isaac Chimaroke Anyim Portfolio Website',
    description: 'Isaac Anyim | Fullstack Developer',
    images: [
      {
        url: '/seo.png',
        width: 1200,
        height: 630,
        alt: 'Isaac Chimaroke Anyim Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CreatorLZ',
    title: 'Isaac Chimaroke Anyim | Portfolio',
    description: 'Isaac Chimaroke Anyim | Fullstack Developer',
    image: '/seo.png',
  },
}

// Export viewport separately
export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${spaceMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className={`${nunito.className} ${spaceMono.variable} font-sans relative min-h-screen bg-bg text-text-primary`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative z-10 flex min-h-screen flex-col justify-between">
            <Navbar />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
          <MouseTracker />
          <CuelumeInit />
          <Analytics />
          <Toaster
            position="bottom-right"
            theme="system"
            toastOptions={{
              style: {
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                borderRadius: '8px',
                fontSize: '13px',
              },
              descriptionStyle: {
                color: 'var(--text-secondary)',
                opacity: 1,
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
