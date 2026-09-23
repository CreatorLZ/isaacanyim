"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, className = "", children, onClick, ...props }) {
  const pathname = usePathname();

  const isActive = (() => {
    const [hrefPath, hrefHash] = href.split("#");
    const pathMatch = pathname === hrefPath || pathname === hrefPath + "/";

    if (hrefHash) {
      return pathMatch && typeof window !== "undefined" && window.location.hash === `#${hrefHash}`;
    }

    return pathMatch;
  })();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className} nav-link ${isActive ? "active" : ""} relative transition-colors duration-200`}
      aria-current={isActive ? "page" : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
