import React from 'react'
import Contact from '../components/Contact'
import Link from 'next/link'
import Socials from '../components/Socials'

export default function About() {
  return (
    <main>
      <div className="w-full flex flex-col">
        <h2 className="text-4xl font-black">About Me.</h2>
        <p className=" leading-loose sm:leading-relaxed text-left text-xs md:text-base ">
          Hi, nice to meet you{'!'}.I {''}m Isaac C Anyim, Frontend developer
          with <strong> 2 years{'+'}</strong> of experience working with various
          frontend technologies to bulid assesible, engaging and user-centric
          websites and webapps, as displayed in the{' '}
          <strong>
            <Link href="/#projects">projects</Link>
          </strong>{' '}
          section. <br />
          <br />
          Websites that shine go beyond just looking good. They also work
          flawlessly and are a breeze to navigate. That{"'"}s where I come in.
          Through my experience as a freelancer and from personal projects, I
          {"'"}ve honed my ability to tackle complex technical challenges while
          designing websites that are both beautiful and user-friendly. I stay
          on top of the latest web development trends to ensure every aspect of
          your website is optimized for a smooth user experience.
        </p>
      </div>
      <Socials />
      <Contact />
    </main>
  )
}
