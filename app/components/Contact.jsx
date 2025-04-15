"use client";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const form = useRef();
  const timeoutRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    emailjs
      .sendForm("service_3ac0rlk", "template_3buadfm", form.current, {
        publicKey: "Y8NL1S8n8lUf5ZZ0N",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsLoading(false);
          setSuccess(true);
          setFormData({ user_name: "", user_email: "", message: "" });
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
        }
      );
  };

  // Handle success message disappearance after timeout
  useEffect(() => {
    if (success) {
      timeoutRef.current = setTimeout(() => {
        setSuccess(false); // Set success state to false after timeout
      }, 5000);
    }

    return () => clearTimeout(timeoutRef.current); // Cleanup on unmount
  }, [success]);

  return (
    <div
      className="isolate bg-transparent px-6 py-24 sm:py-32 lg:px-8"
      id="contact"
    >
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        {" "}
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Let{"'"}s <span className="text-primary">Talk{"!"}</span>
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Get in touch or shoot me an email directly on
          <br />
          <a
            href="mailto:isaacchimarokeanyim@gmail.com"
            className="text-primary hover:underline"
          >
            <strong>isaacchimarokeanyim@gmail.com</strong>
          </a>
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto mt-16 md:max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="Name"
              className="block text-sm font-semibold leading-6 text-gray-900"
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
                className={`block w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ${
                  errors.user_name ? "ring-red-500" : "ring-gray-300"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6`}
              />
              {errors.user_name && (
                <p className="mt-1 text-sm text-red-500">{errors.user_name}</p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
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
                className={`block w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ${
                  errors.user_email ? "ring-red-500" : "ring-gray-300"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6`}
              />
              {errors.user_email && (
                <p className="mt-1 text-sm text-red-500">{errors.user_email}</p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="What would you like to discuss?"
                value={formData.message}
                onChange={handleInputChange}
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                  errors.message ? "ring-red-500" : "ring-gray-300"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm sm:text-sm sm:leading-6`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            value="Send"
            className="block w-full rounded-md bg-primary px-3.5 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      {success && (
        <div className="fixed top-3 right-3 bg-white p-5 border-l-2 border-solid border-green-500 flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>

          <span>your message has been sent </span>
        </div>
      )}
    </div>
  );
}
