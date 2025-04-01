"use client";
import Image from "next/image";
import Link from "next/link";
import home from "/public/home.png";
import dark from "/public/dark.png";
import menu from "/public/menu.png";
import close from "/public/close.png";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import NavLink from "./NavLink";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 flex justify-between items-center px-6 pb-4 md:px-3 md:pb-2 w-full pt-0 ${
        isScrolled ? "bg-white/70 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="hidden lg:block">
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

      <div className="lg:gap-6 gap-0 items-center px-0 md:px-3 py-3 flex  justify-between w-full lg:w-fit">
        <div className="flex gap-5 lg:gap-10 items-center lg:items-end justify-end ">
          <NavLink className="flex md:flex" href="/">
            <div className="text-gray-700 text-sm lg:text-base font-normal lg:font-bold">
              Home
            </div>
          </NavLink>
          <NavLink className="flex md:flex" href="/about">
            <div className="text-gray-700 text-sm lg:text-base font-normal lg:font-bold">
              About
            </div>
          </NavLink>
          <NavLink className=" md:flex" href="/#skills">
            <div className="text-gray-700 text-sm lg:text-base font-normal lg:font-bold">
              skills
            </div>
          </NavLink>
          <NavLink className=" md:flex" href="/#projects">
            <div className="text-gray-700 text-sm lg:text-base font-normal lg:font-bold">
              Projects
            </div>
          </NavLink>
          <NavLink className=" md:flex" href="/#contact">
            <div className="text-gray-700 text-sm lg:text-base font-normal lg:font-bold">
              Contact
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
