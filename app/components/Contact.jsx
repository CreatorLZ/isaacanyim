'use client'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { play } from 'cuelume'
import { toast } from 'sonner'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
}

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    user_name: '',
    message: '',
  })
  const form = useRef()

  const validateForm = () => {
    const newErrors = {}

    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Name is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const sendEmail = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      play('error')
      return
    }

    setIsLoading(true)
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setIsLoading(false)
          setFormData({ user_name: '', message: '' })
          e.target.reset()
          play('success')
          toast.success('Message sent!', {
            description: "I'll get back to you soon.",
          })
        },
        () => {
          setIsLoading(false)
          play('error')
          toast.error('Something went wrong.', {
            description: 'Please try again or email me directly.',
          })
        },
      )
  }

  return (
    <motion.div
      className="isolate bg-transparent px-6 py-24 sm:py-32 lg:px-8"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        {' '}
      </div>

      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={itemVariants}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary break-words">
          Say{' '}
          <span className="text-accent inline-block relative">
            {Array.from('Hello.').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h2>

        <motion.p
          className="mt-6 text-xs leading-relaxed text-text-muted md:text-sm md:leading-8"
          variants={itemVariants}
        >
          A project idea or just a hello,{' '}
          <motion.a
            href="mailto:isaacchimarokeanyim@gmail.com"
            className="text-accent font-semibold hover:underline inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            my inbox is always open.
          </motion.a>
        </motion.p>
      </motion.div>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto mt-16 md:max-w-xl sm:mt-20"
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <motion.div className="sm:col-span-2" variants={itemVariants}>
            <label
              htmlFor="name"
              className="block text-xs lg:text-sm font-semibold leading-6 text-text-primary"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="What's your name?"
                value={formData.user_name}
                onChange={handleInputChange}
                className={`block w-full rounded-md border-0 px-3.5 py-3 text-text-primary bg-surface shadow-sm ring-1 ring-inset ${
                  errors.user_name ? 'ring-red-500' : 'ring-border'
                } placeholder:text-text-muted focus:ring-2 focus:ring-inset focus:ring-accent text-xs lg:text-sm sm:leading-6`}
              />
              {errors.user_name && (
                <p className="mt-1 text-xs lg:text-sm text-red-500">
                  {errors.user_name}
                </p>
              )}
            </div>
          </motion.div>

          {/* Email input commented out — visitors can reach out via the mailto link or social icons */}
          {/* <motion.div className="sm:col-span-2" variants={itemVariants}>
            <label
              htmlFor="email"
              className="block text-xs lg:text-sm font-semibold leading-6 text-text-primary"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="your.email@example.com"
                value={formData.user_email}
                onChange={handleInputChange}
                className={`block w-full rounded-md border-0 px-3.5 py-3 text-text-primary bg-surface shadow-sm ring-1 ring-inset ${
                  errors.user_email ? 'ring-red-500' : 'ring-border'
                } placeholder:text-text-muted focus:ring-2 focus:ring-inset focus:ring-accent text-xs lg:text-sm sm:leading-6`}
              />
              {errors.user_email && (
                <p className="mt-1 text-xs lg:text-sm text-red-500">
                  {errors.user_email}
                </p>
              )}
            </div>
          </motion.div> */}

          <motion.div className="sm:col-span-2" variants={itemVariants}>
            <label
              htmlFor="message"
              className="block text-xs lg:text-sm font-semibold leading-6 text-text-primary"
            >
              Message
            </label>
            <div className="mt-2.5">
              {/* Hidden email field — keeps EmailJS template happy without requiring user input */}
              <input
                type="hidden"
                name="user_email"
                value="(no email provided)"
              />
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Your message here.."
                value={formData.message}
                onChange={handleInputChange}
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-text-primary bg-surface shadow-sm ring-1 ring-inset ${
                  errors.message ? 'ring-red-500' : 'ring-border'
                } placeholder:text-text-muted focus:ring-2 focus:ring-inset focus:ring-accent text-xs lg:text-sm sm:leading-6`}
              />
              {errors.message && (
                <p className="mt-1 text-xs lg:text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-10"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            type="submit"
            value="Send"
            className="block w-full rounded-md bg-accent px-3.5 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            disabled={isLoading}
            data-cuelume-press
            data-cuelume-release
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </motion.div>
      </motion.form>
    </motion.div>
  )
}
