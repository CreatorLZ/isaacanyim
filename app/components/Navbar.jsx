'use client'
import Image from 'next/image'
import Link from 'next/link'
// import Link from './Link';
import home from '/public/home.png'
import dark from '/public/dark.png'
import menu from '/public/menu.png'
import close from '/public/close.png'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
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

        {/* Toggle menu modal on click */}
        <div className="md:hidden" onClick={openModal}>
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

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 bg-black bg-opacity-25"
                onClick={closeModal}
              />
            </Transition.Child>

            <div className="fixed top-0 h-1/2 w-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="flex h-full w-full  pt-16  bg-white justify-center p-4 ">
                  <div className="flex flex-col gap-10 items-center text-gray-700 font-bold">
                    <Link onClick={closeModal} href="#about">
                      ABOUT
                    </Link>
                    <Link onClick={closeModal} href="#projects">
                      PROJECTS
                    </Link>
                    <Link onClick={closeModal} href="#contact">
                      CONTACT
                    </Link>
                  </div>
                  <div
                    className="fixed top-16 right-10 cursor-pointer"
                    onClick={closeModal}
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
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
        {/* {isMenuOpen && (
          <div
            className={`transition-all duration-500 delay-200 fixed left-0 w-full h-full bg-white  ${
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
        )} */}
      </div>
    </nav>
  )
}
