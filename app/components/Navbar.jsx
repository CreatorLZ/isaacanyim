'use client'
import Image from 'next/image'
import Link from 'next/link'
// import Link from './Link';
import React, { useState } from 'react'
import home from '/public/home.png'
import dark from '/public/dark.png'
import menu from '/public/menu.png'
import close from '/public/close.png'

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <nav>
      <div>
        <Link href="/">
          <Image
            src={home}
            alt="Home logo"
            width={80}
            height={80}
            quality={100}
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </div>
      <div className="gap-6 items-center px-3 flex">
        <Link className="hidden md:flex" href="#about">
          About
        </Link>
        <Link className="hidden md:flex" href="#projects">
          Projects
        </Link>
        <Link className="hidden md:flex" href="#contact">
          Contact
        </Link>

        {/* Toggle menu on click */}
        <div className="md:hidden" onClick={toggleMenu}>
          <Image
            src={menu}
            alt="menu"
            width={30}
            height={30}
            quality={100}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* <div>
          <Image
            src={dark}
            alt="dark mode"
            width={30}
            height={30}
            quality={100}
            style={{ cursor: 'pointer' }}
          />
        </div> */}

        {/* Slide-in menu */}
        {isMenuOpen && (
          <div
            className={`fixed left-0 w-full h-full bg-white transition-all duration-500 ${
              isMenuOpen
                ? 'opacity-100 visible top-0'
                : 'opacity-0 invisible -top-full'
            }`}
          >
            <div className="flex  justify-center w-full pt-16">
              <div className="flex flex-col gap-10 items-center text-gray-700 font-black">
                <Link onClick={toggleMenu} href="#about">
                  ABOUT
                </Link>
                <Link onClick={toggleMenu} href="#projects">
                  PROJECTS
                </Link>
                <Link onClick={toggleMenu} href="#contact">
                  CONTACT
                </Link>
              </div>
              <div
                className="fixed top-16 right-10 cursor-pointer"
                onClick={toggleMenu}
              >
                <Image
                  src={close}
                  alt="close"
                  width={30}
                  height={30}
                  quality={100}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
