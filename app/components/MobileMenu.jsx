"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import NavLink from "./NavLink";
import { cn } from "../lib/utils";

export default function MobileMenu({ isOpen, setIsOpen }) {
  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black transform transition-transform duration-300 ease-in-out md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-300 focus:outline-none"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="flex flex-col space-y-6 p-8">
        <NavLink
          href="/"
          className="text-white hover:text-blue-400 text-xl py-2 uppercase font-medium tracking-wider"
          onClick={() => setIsOpen(false)}
        >
          HOME
        </NavLink>
        <NavLink
          href="/resources"
          className="text-white hover:text-blue-400 text-xl py-2 uppercase font-medium tracking-wider"
          onClick={() => setIsOpen(false)}
        >
          RESOURCES
        </NavLink>
        <NavLink
          href="/blog"
          className="text-white hover:text-blue-400 text-xl py-2 uppercase font-medium tracking-wider"
          onClick={() => setIsOpen(false)}
        >
          BLOG
        </NavLink>
        <NavLink
          href="/contact"
          className="text-white hover:text-blue-400 text-xl py-2 uppercase font-medium tracking-wider"
          onClick={() => setIsOpen(false)}
        >
          CONTACT
        </NavLink>
        <div className="pt-6">
          <Link
            href="/meetup"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3 flex items-center justify-between text-lg uppercase font-medium tracking-wider w-full transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span>ATTEND A MEETUP</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
