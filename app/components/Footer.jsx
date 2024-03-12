import facebook from '/public/facebook.png'
import twitter from '/public/x.png'
import linkedin from '/public/linkedin.png'
import github from '/public/github.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex flex-col text-center pt-20 w-full items-center justify-center ">
      <small>Copyright © 2024. Isaac C. Anyim. All rights reserved.</small>
      <small>Bulit with ❤️ by, Isaac C Anyim</small>
      <div className="hidden sm:flex gap-10 items-center pt-1 md:pt-6 lg:pt-10 p-2.5 md:px-10 lg:px-36 justify-between sm:justify-normal backdrop-blur-sm md:backdrop-blur-none">
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
    </footer>
  )
}
