"use client";
import React, { useRef, useState } from "react";
import { FaPhone, FaEnvelope, FaCheckCircle, FaUser } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { BsWhatsapp } from "react-icons/bs";

const ContactInformation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    emailjs
      .sendForm(
        "service_xhod3gt",
        "template_ay3g3p9",
        form.current,
        "u2nfu0FS3Hq8iz7Hh"
      )
      .then(
        (response) => {
          // setSuccess("Your message has been sent. Thank you!");
          console.log("Email sent:", response);
          setIsSubmitting(false);
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
          console.log(response.text);
          e.target.reset();
          setError(false);
        },
        (error) => {
          setError(true);
          console.error("Error sending email:", error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-text-gray text-center">
          {/* Contact Us */}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            {isSubmitted ? (
              <div className="text-center flex justify-center flex-col">
                <div className="text-white mx-auto rounded-full p-4 bg-green-500 text-3xl">
                  <FaCheckCircle />
                </div>
                <p className="text-green-500 text-center">
                  Thank you for your submission! We&apos;ll get in touch with
                  you soon.
                </p>
              </div>
            ) : (
              <div className="">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Get in Touch
                </h3>
                <p className="text-gray-600 mb-6">
                  Have questions or need assistance? Feel free to reach out to
                  us.
                </p>
                <form onSubmit={handleSubmit} ref={form}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Full Name
                    </label>
                    <div className="relative flex flex-row items-center">
                      <span className="absolute left-3  text-gray-500">
                        <FaUser />
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full border rounded p-2 pl-10 focus:ring-opacity-60 focus:ring-text-orange focus:outline-none focus:ring focus:border-[rgb(250,70,18)]"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Email
                    </label>
                    <div className="relative flex flex-row items-center">
                      <span className="absolute left-3 text-gray-500">
                        <FaEnvelope />
                      </span>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full border rounded p-2 pl-10 focus:ring-opacity-60 focus:ring-text-orange focus:outline-none focus:ring focus:border-[rgb(250,70,18)]"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 border py-3 focus:ring-opacity-60 focus:ring-text-orange focus:outline-none focus:ring focus:border-[rgb(250,70,18)] block w-full shadow-sm sm:text-sm  px-2 rounded-md"
                      placeholder="Enter your message..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${
                      isSubmitting ? "opacity-[50%]" : " hover:opacity-[90%]"
                    } bg-text-orange text-white py-2 px-4 rounded-full transition-colors duration-300 ease-in-out w-full`} 
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </button>
                  {error && <p className="text-red-500">Network Error, Message Not Sent</p>}
                </form>
              </div>
            )}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="grid grid-cols-1 md:grid-rows-2 gap-3">
                <div className="flex flex-col items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <FaPhone className="text-blue-500 text-3xl" />
                  <p>Phone: </p>
                  <p className="text-sm font-semibold text-gray-800">
                    (123) 456-7890
                  </p>
                </div>
                <div className="flex flex-col items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <BsWhatsapp className="text-green-500 text-3xl" />
                  <p>WhatsApp:</p>
                  <p className="text-sm font-semibold text-gray-800">
                    +012 345 6789
                  </p>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <FaEnvelope className="text-blue-500 text-3xl" />
                  <p>Email: </p>
                  <p className="text-sm font-semibold text-gray-800">
                    info@transportcompany.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Location
            </h3>
            <div className="relative h-[35rem]">
              <iframe
                title="Company Location"
                className="absolute inset-0 w-full h-full border-0 rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2369657796225!2d-73.98509768531884!3d40.74881797932707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40uMTQ4LTQ4LjAiTiA3M8KwNTgnMTIuMSJX!5e0!3m2!1sen!2sus!4v1628794887199!5m2!1sen!2sus"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
