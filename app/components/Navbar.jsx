"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AlignRight, ArrowRight, Menu, X } from "lucide-react";
import NavLink from "./NavLink";
import Image from "next/image";
import home from "/public/home.png";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Close the menu when changing routes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          isScrolled ? "bg-transparent backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src={home}
                  alt="Home logo"
                  width={50}
                  height={50}
                  quality={100}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </motion.div>

            {/* Navigation Links - Desktop */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center space-x-8 border border-gray-300 px-4 py-4 rounded-full ml-24"
            >
              <motion.div variants={navItemVariants}>
                <NavLink
                  href="/"
                  className="text-gray-700 hover:text-primary text-sm uppercase font-bold tracking-wider"
                >
                  HOME
                </NavLink>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <NavLink
                  href="/about"
                  className="text-gray-700 hover:text-primary text-sm uppercase font-bold tracking-wider"
                >
                  ABOUT
                </NavLink>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <NavLink
                  href="/#skills"
                  className="text-gray-700 hover:text-primary text-sm uppercase font-bold tracking-wider"
                >
                  SKILLS
                </NavLink>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <NavLink
                  href="/#projects"
                  className="text-gray-700 hover:text-primary text-sm uppercase font-bold tracking-wider"
                >
                  PROJECTS
                </NavLink>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <NavLink
                  href="/#contact"
                  className="text-gray-700 hover:text-primary text-sm uppercase font-bold tracking-wider"
                >
                  CONTACT
                </NavLink>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/meetup"
                className="ml-4 bg-[#7856ff] hover:bg-[#6645e0] text-white rounded-full px-6 py-3 hidden lg:flex items-center text-sm uppercase font-bold tracking-wider transition-colors group"
              >
                HIRE ME
                <ArrowRight className="ml-2 w-3 h-3 -rotate-45 transition-transform group-hover:rotate-0" />
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <AlignRight className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-6 p-8">
          <NavLink
            href="/"
            className="text-gray-700 hover:text-primary text-xl py-2 font-medium"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            href="/about"
            className="text-gray-700 hover:text-primary text-xl py-2 font-medium"
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            href="/#skills"
            className="text-gray-700 hover:text-primary text-xl py-2 font-medium"
            onClick={closeMenu}
          >
            Skills
          </NavLink>
          <NavLink
            href="/#projects"
            className="text-gray-700 hover:text-primary text-xl py-2 font-medium"
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink
            href="/#contact"
            className="text-gray-700 hover:text-primary text-xl py-2 font-medium"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <Link
            href="/meetup"
            className="mt-4 bg-[#7856ff] hover:bg-[#6645e0] text-white rounded-full px-6 py-3 flex items-center justify-between text-lg font-medium w-full transition-colors"
            onClick={closeMenu}
          >
            <span>HIRE ME</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
