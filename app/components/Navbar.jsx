"use client";
import Image from "next/image";
import Link from "next/link";
import home from "/public/home.png";
import dark from "/public/dark.png";
import menu from "/public/menu.png";
import close from "/public/close.png";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import NavLink from "./NavLink";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <nav>
      <div>
        <Link href="/">
          <Image
            src={home}
            alt="Home logo"
            width={60}
            height={60}
            quality={100}
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
      <div className="gap-6 items-center px-6 md:px-3 flex   ">
        <div className="flex gap-5 items-end justify-end ">
          <NavLink className="flex md:flex" href="/about">
            <span className="relative z-10 block px-3 py-3 overflow-hidden font-medium leading-tight text-gray-700 transition-colors duration-300 ease-out border-2 border-gray-700 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
              <span className="relative text-gray-700"> About</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-700 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </NavLink>
          <NavLink className=" md:flex" href="/#skills">
            <span className="relative z-10 block px-3 py-3 overflow-hidden font-medium leading-tight text-gray-700 transition-colors duration-300 ease-out border-2 border-gray-700 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
              <span className="relative text-gray-700"> Skills</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-700 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </NavLink>
          <NavLink className=" md:flex" href="/#projects">
            <span className="relative z-10 block px-3 py-3 overflow-hidden font-medium leading-tight text-gray-700 transition-colors duration-300 ease-out border-2 border-gray-700 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
              <span className="relative text-gray-700"> Projects</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-700 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </NavLink>
          <NavLink className=" md:flex" href="/#contact">
            <span className="relative z-10 block px-3 py-3 overflow-hidden font-medium leading-tight text-gray-700 transition-colors duration-300 ease-out border-2 border-gray-700 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
              <span className="relative text-gray-700"> Contact</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-700 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </NavLink>
        </div>

        {/* Toggle menu modal on click */}
        <div className="md:hidden hidden" onClick={openModal}>
          <Image
            src={menu}
            alt="menu"
            width={30}
            height={30}
            quality={100}
            style={{ cursor: "pointer" }}
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

            <div className="fixed top-0 h-full w-full">
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
                  <div className="flex flex-col gap-11 items-center text-gray-500 font-black">
                    <div onClick={closeModal}>
                      <NavLink onClick={closeModal} href="/">
                        HOME
                      </NavLink>
                    </div>
                    <div onClick={closeModal}>
                      <NavLink onClick={closeModal} href="/about">
                        ABOUT
                      </NavLink>
                    </div>
                    <div onClick={closeModal}>
                      <NavLink onClick={closeModal} href="/#skills">
                        SKILLS
                      </NavLink>
                    </div>
                    <div onClick={closeModal}>
                      <NavLink onClick={closeModal} href="/#projects">
                        PROJECTS
                      </NavLink>
                    </div>
                    <div onClick={closeModal}>
                      <NavLink onClick={closeModal} href="/#contact">
                        CONTACT
                      </NavLink>
                    </div>
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
                      style={{ cursor: "pointer" }}
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
  );
}
