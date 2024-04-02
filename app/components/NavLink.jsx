'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLink = ({ href, children }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={`nav-link ${isActive ? 'active' : ''}`}>
      {children}
    </Link>
  )
}

export default NavLink
