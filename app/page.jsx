'use client'
import React, { useState, Fragment } from 'react'
import Image from 'next/image'
import Webinar from '/public/coding.png'
import forward from '/public/forward.gif'
import facebook from '/public/facebook.png'
import twitter from '/public/x.png'
import linkedin from '/public/linkedin.png'
import github from '/public/github.png'
import { Dialog, Transition } from '@headlessui/react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
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
      <div
        className="flex gap-3 items-center pt-12 justify-center cursor-pointer "
        onClick={openModal}
      >
        <p>See more about me </p>
        <Image src={forward} alt="forward" width={30} height={30} />
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Feature in the Works!😉
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Hello friend 👋. Thanks for showing interest in knowing
                      more about me. A page with all you need to know about{' '}
                      <strong>Isaac Chimaroke Anyim</strong> will be added soon.
                      In the mean time, you can know more about me from my
                      social handles below. send a message , drop a follow ....
                      lets connect!✅✅
                    </p>
                  </div>
                  <div className="flex gap-3 items-center pt-3  p-2.5justify-between">
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

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  )
}
