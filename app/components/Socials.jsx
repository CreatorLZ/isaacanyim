import React from 'react'
import facebook from '/public/facebook.png'
import twitter from '/public/x.png'
import linkedin from '/public/linkedin.png'
import github from '/public/github.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Socials() {
  return (
    <div className="fixed bottom-0 sm:hidden flex gap-7 items-center p-3 w-full justify-between sm:justify-normal backdrop-blur-sm md:backdrop-blur-none">
      <Link href="https://x.com/isaaccanyim?s=08">
        <Image
          src={twitter}
          alt="twitter"
          width={30}
          height={30}
          style={{ cursor: 'pointer' }}
        />
      </Link>
      <Link href="https://www.facebook.com/anyim.isaac.5?mibextid=ZbWKwL">
        <Image
          src={facebook}
          alt="facebook"
          width={30}
          height={30}
          style={{ cursor: 'pointer' }}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/isaac-anyim-76221b269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <Image
          src={linkedin}
          alt="linkedin"
          width={30}
          height={30}
          style={{ cursor: 'pointer' }}
        />
      </Link>
      <Link href="https://github.com/CreatorLZ">
        <Image
          src={github}
          alt="github"
          width={30}
          height={30}
          style={{ cursor: 'pointer' }}
        />
      </Link>
    </div>
  )
}
