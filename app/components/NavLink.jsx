"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, className = "", children, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className} ${
        isActive ? "text-primary bg-gray-200 rounded-xl px-3 py-3" : ""
      } transition-all duration-200`}
    >
      {children}
    </Link>
  );
}
