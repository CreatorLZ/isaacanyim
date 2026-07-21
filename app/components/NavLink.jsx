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
      className={`${className} relative transition-all duration-200`}
      {...props}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent" />
      )}
    </Link>
  );
}
