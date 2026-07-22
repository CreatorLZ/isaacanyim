import { Plus_Jakarta_Sans, Anybody, Space_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MouseTracker from './components/MouseTracker'
import CuelumeInit from './components/CuelumeInit'
// import BackgroundWrapper from "./components/background-wrapper";

const anybody = Anybody({ subsets: ['latin'], variable: '--font-anybody' })
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

// Metadata configuration
export const metadata = {
  title: 'Isaac Anyim',
  description: 'Isaac Anyim',
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
      className={`${spaceMono.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body className={spaceMono.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <BackgroundWrapper> */}
          <Navbar />
          {children}
          <MouseTracker />
          <CuelumeInit />
          <Analytics />
          <Footer />
          {/* </BackgroundWrapper> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
