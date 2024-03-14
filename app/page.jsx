import Image from 'next/image'
import Webinar from '/public/coding.png'
import forward from '/public/forward.gif'

export default function Home() {
  return (
    <main className="text-center flex-col pb-0">
      <h1 className="text-gray-700 text-2xl md:text-4xl tracking-normal  pb-0  font-black">
        Hi👋🏾, I{"'"}M ISAAC
        <br />A FRONTEND DEVELOPER
      </h1>
      <br />

      <p className="leading-loose text-sm md:text-base">
        As a <strong>results-driven web developer</strong> , I specialize in
        creating <strong>accessible</strong> and <strong>user-centric </strong>
        experiences that seamlessly combine aesthetics with engagement. My
        enthusiasm lies in the art of designing captivating,{' '}
        <strong> user-friendly</strong>, and immersive digital journeys.
      </p>
      <div className="w-full flex items-center justify-center">
        <div>
          <Image
            src={Webinar}
            alt="person"
            quality={100}
            placeholder="blur"
            style={{ cursor: 'pointer' }}
            className="h-72 md:h-80 w-full  rounded-lg"
          />
        </div>
      </div>
      {/* <div
        className="flex gap-3 items-center pt-12 justify-center cursor-pointer "
     
      >
        <p>See more about me </p>
        <Image src={forward} alt="forward" width={30} height={30} />
      </div>  */}
    </main>
  )
}
