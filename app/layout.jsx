import { Anybody, Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Anybody({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Isaac Chimaroke Anyim|Portfolio',
  description: 'isaac Chimaroke Anyim|Frontend developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
