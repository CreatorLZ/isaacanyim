import facebook from '/public/facebook.png'
import twitter from '/public/x.png'
import linkedin from '/public/linkedin.png'
import github from '/public/github.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col text-center pt-20 w-full items-center justify-center ">
      <small>Copyright © 2024. Isaac C. Anyim. All rights reserved.</small>
      <small>Bulit with ❤️ by, Isaac C Anyim</small>
      <div className="hidden sm:flex gap-10 items-center pt-1 md:pt-6 lg:pt-10 p-2.5 md:px-10 lg:px-36 justify-between sm:justify-normal backdrop-blur-sm md:backdrop-blur-none">
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
    </footer>
  )
}
