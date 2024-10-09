import React from "react";
import Contact from "../components/Contact";
import Link from "next/link";
import Socials from "../components/Socials";

export default function About() {
  return (
    <main>
      <div className="w-full flex flex-col">
        <h2 className="text-4xl font-black">About Me.</h2>
        <p className=" leading-loose sm:leading-relaxed text-center text-base md:text-base pb-5 ">
          Hello{"!"} i{"'"}m Isaac, A Frontend developer. I work with various
          frontend technologies to bulid accessible, engaging and user-centric
          websites and webapps.
          {/* as displayed in the{" "}
          <strong>
            <Link href="/#projects">projects</Link>
          </strong>{" "}
          section. */}
          <br />
          <br />
        </p>
      </div>
      <div className="w-full min-h-screen flex flex-col bg-transparent gap-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div
            className="relative bg-cover rounded-xl bg-center h-52 w-full flex  justify-start items-end  md:items-center p-5 md:h-96 md:w-3/5 "
            style={{ backgroundImage: "url('/customer1.jpg')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
            <div className="flex flex-col text-left md:items-center  gap-1 ">
              <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold md:w-2/3 md:text-3xl ">
                I prioritize client collaboration, fostering open communication
              </h3>
            </div>
          </div>
          <div className="flex flex-col md:w-2/5 md:h-96 gap-4">
            <div
              className="relative bg-cover rounded-xl bg-center h-52 w-full flex  justify-start items-end p-5 "
              style={{ backgroundImage: "url('/world3.jpg')" }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
              <div className="flex flex-col text-left gap-1">
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold md:text-3xl ">
                  I am flexible across timezones
                </h3>
              </div>
            </div>

            <div
              className="relative bg-cover rounded-xl bg-center h-52 w-full flex  justify-start items-end p-5 "
              style={{ backgroundImage: "url('/code.jpg')" }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
              <div className="flex flex-col text-left gap-1 md:gap-3">
                <p className="text-gray-400 absolute bottom-20 left-4 text-lg font-semibold">
                  I stay on top of
                </p>
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold md:text-3xl">
                  Best and modern web development practices
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative bg-cover rounded-xl bg-center h-52 w-full flex  justify-start items-end p-5 md:h-screen "
          style={{ backgroundImage: "url('/hacker2.jpg')" }}
        >
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black opacity-25 rounded-xl"></div> */}
          <div className="flex flex-col text-left gap-1">
            <p className="text-gray-400  left-4 text-lg font-semibold">
              The inside scoop
            </p>
            <h3 className=" left-4 text-white text-2xl w-full font-bold md:w-2/3 md:text-3xl ">
              I'm always building new stuff to improve my skill and be among the
              top 1%.
            </h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:w-full md:h-96 gap-4">
          <div
            className="relative bg-cover rounded-xl bg-center p-5 h-52 w-full flex justify-start md:h-96 md:flex md: items-center md:justify-center"
            style={{ backgroundImage: "url('/tech.jpg')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>

            <h3 className=" left-4 text-white text-2xl w-full font-bold md:w-2/3 md:text-3xl z-50 ">
              Tech ethuthiast with a passion to build
            </h3>
          </div>

          <div
            className="relative bg-cover rounded-xl bg-center p-5 h-52 w-full flex justify-start md:h-96 md:flex md: items-center md:justify-center"
            style={{ backgroundImage: "url('/calm2.jpg')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
            {/* <p className="text-gray-400 absolute bottom-20 left-4 text-lg font-semibold">
            I stay on top of
          </p> */}
            <h3 className=" left-4 text-white text-2xl w-full font-bold md:w-2/3 md:text-3xl z-50 ">
              Want us to start a project together?
            </h3>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <p>
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
  );
}
