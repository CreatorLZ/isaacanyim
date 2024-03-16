import { Anybody, Inter } from 'next/font/google'
import './globals.css'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Anybody({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Isaac Chimaroke Anyim',
  description: 'isaac Chimaroke Anyim|Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
