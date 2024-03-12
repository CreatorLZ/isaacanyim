import { Anybody, Inter } from 'next/font/google'
import './globals.css'

//components
import Navbar from './components/Navbar'
import Socials from './components/Socials'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const inter = Anybody({ subsets: ['latin'] })

export const metadata = {
  title: 'Isaac Chimaroke Anyim',
  description: 'isaac Chimaroke Anyim',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Skills />
        <Projects />
        <Contact />
        <Socials />
        <Footer />
      </body>
    </html>
  )
}
