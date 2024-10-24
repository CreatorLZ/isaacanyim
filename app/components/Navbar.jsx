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
        <Link href="/" className="">
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
      <div className="gap-6 items-center px-6 md:px-3 hidden md:flex w-screen md:w-fit justify-between   ">
        <div className="flex gap-5 items-end justify-end ">
          <NavLink className="flex md:flex" href="/about">
            <span className="relative z-10 block px-1 md:px-3 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
              <span className="relative text-gray-700"> About</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </NavLink>
          <NavLink className=" md:flex" href="/#skills">
            <span className="relative z-10 block px-1 md:px-3 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
              <span className="relative text-gray-700"> Skills</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </NavLink>
          <NavLink className=" md:flex" href="/#projects">
            <span className="relative z-10 block  px-1 md:px-3 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
              <span className="relative text-gray-700"> Projects</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </NavLink>
          <NavLink className=" md:flex" href="/#contact">
            <span className="relative z-10 block  px-1 md:px-3 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
              <span className="relative text-gray-700"> Contact</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </NavLink>
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
      </div>
      <div className="gap-6 items-center px-6 md:px-3 flex  justify-between md:hidden   ">
        <div className="flex gap-5 items-end justify-end ">
          <NavLink className="flex md:flex" href="/about">
            <div className="text-gray-700 font-bold">About</div>
          </NavLink>
          <NavLink className=" md:flex" href="/#skills">
            <div className="text-gray-700 font-bold">skills</div>
          </NavLink>
          <NavLink className=" md:flex" href="/#projects">
            <div className="text-gray-700 font-bold">Projects</div>
          </NavLink>
          <NavLink className=" md:flex" href="/#contact">
            <div className="text-gray-700 font-bold">Contact</div>
          </NavLink>
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
      </div>
    </nav>
  );
}
