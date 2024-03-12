import React from 'react'
import facebook from '/public/facebook.png'
import twitter from '/public/x.png'
import linkedin from '/public/linkedin.png'
import github from '/public/github.png'
import Image from 'next/image'

export default function Socials() {
  return (
    <div className="fixed bottom-0 sm:hidden flex gap-7 items-center pt-1 md:pt-6 lg:pt-10 px-1 md:px-10 lg:px-36 w-full justify-between sm:justify-normal backdrop-blur-sm md:backdrop-blur-none">
      <Image
        src={twitter}
        alt="twitter"
        width={30}
        height={30}
        style={{ cursor: 'pointer' }}
      />
      <Image
        src={facebook}
        alt="facebook"
        width={30}
        height={30}
        style={{ cursor: 'pointer' }}
      />

      <Image
        src={linkedin}
        alt="linkedin"
        width={30}
        height={30}
        style={{ cursor: 'pointer' }}
      />

      <Image
        src={github}
        alt="github"
        width={30}
        height={30}
        style={{ cursor: 'pointer' }}
      />
    </div>
  )
}
