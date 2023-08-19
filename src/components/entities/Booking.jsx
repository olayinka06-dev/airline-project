"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
// import emailjs from 'emailjs-com';
import {
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // try {
    //   const response = await emailjs.sendForm(
    //     'YOUR_SERVICE_ID', // Your EmailJS service ID
    //     'YOUR_TEMPLATE_ID', // Your EmailJS template ID
    //     e.target,
    //     'YOUR_USER_ID' // Your EmailJS user ID
    //   );

    //   console.log('Email sent:', response);
    //   setIsSubmitting(false);
    //   setIsSubmitted(true);
    // } catch (error) {
    //   console.error('Error sending email:', error);
    //   setIsSubmitting(false);
    // }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-text-orange mb-5">Booking</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-text-gray">
              Request a Quote or Booking
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              TransportCompany is your trusted partner for seamless
              transportation solutions. With a team of experts, we ensure
              reliability and excellence in every journey. Our commitment to
              quality sets us apart, delivering unmatched service and customer
              satisfaction.
            </p>
            <div className="mt-8 grid items-center grid-cols-3">
              <div className="flex flex-col items-center">
                <CountUp
                  start={0}
                  end={225}
                  duration={2}
                  className="md:text-4xl text-2xl font-bold text-text-orange"
                />
                <p className="md:text-lg text-sm font-semibold text-gray-800">
                  SKilled Experts
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <CountUp
                  start={0}
                  end={50}
                  duration={3}
                  className="md:text-4xl text-2xl font-bold text-text-orange"
                />
                <p className="md:text-lg text-sm font-semibold text-gray-800">
                  Happy Clients
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <CountUp
                  start={0}
                  end={500}
                  duration={4}
                  className="md:text-4xl text-2xl font-bold text-text-orange"
                />
                <p className="md:text-lg text-sm font-semibold text-gray-800">
                  Complete Projects
                </p>
              </div>
            </div>
          </div>
          <div className="">
            {isSubmitted ? (
              <p className="text-text-orange text-center">
                Thank you for your submission! We'll get in touch with you soon.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-100 rounded-lg p-8 shadow-lg"
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <div className="relative flex flex-row items-center">
                    <span className="absolute left-3 text-gray-500">
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="w-full border rounded p-2 pl-10 focus:outline-none focus:ring-opacity-60 focus:ring-text-orange focus:ring focus:border-[rgb(250,70,18)]"
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
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <div className="relative flex flex-row items-center">
                    <span className="absolute left-3 text-gray-500">
                      <FaPhone />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="123-456-7890"
                      className="w-full border rounded p-2 pl-10 focus:ring-opacity-60 focus:ring-text-orange focus:outline-none focus:ring focus:border-[rgb(250,70,18)]"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Service Type
                  </label>
                  <select
                    name="serviceType"
                    className="w-full border rounded p-2 focus:ring-opacity-60 focus:ring-text-orange focus:outline-none focus:ring focus:border-[rgb(250,70,18)]"
                    required
                  >
                    <option value="">Select Service Type</option>
                    <option value="personal">Personal Travel</option>
                    <option value="cargo">Cargo Delivery</option>
                    <option value="air">Air Transport</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Pickup Location
                  </label>
                  <div className="relative flex flex-row items-center">
                    <span className="absolute left-3 text-gray-500">
                      <FaMapMarkerAlt />
                    </span>
                    <input
                      type="text"
                      name="pickupLocation"
                      placeholder="Enter pickup location"
                      className="w-full border rounded p-2 pl-10 focus:ring-opacity-60 focus:ring-text-orange focus:outline-none focus:ring focus:border-[rgb(250,70,18)]"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Drop-off Location
                  </label>
                  <div className="relative flex flex-row items-center">
                    <span className="absolute left-3 text-gray-500">
                      <FaMapMarkerAlt />
                    </span>
                    <input
                      type="text"
                      name="dropoffLocation"
                      placeholder="Enter drop-off location"
                      className="w-full border rounded p-2 pl-10 focus:ring-opacity-60 focus:ring-text-orange focus:outline-none focus:ring focus:border-[rgb(250,70,18)]"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Date of Service
                  </label>
                  <div className="relative flex flex-row items-center">
                    <span className="absolute left-3 text-gray-500">
                      <FaRegCalendarAlt />
                    </span>
                    <input
                      type="date"
                      name="date"
                      className="w-full border rounded p-2 pl-10 focus:ring-opacity-60 focus:ring-text-orange focus:outline-none focus:ring focus:border-[rgb(250,70,18)]"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className={`${
                    isSubmitting
                      ? "opacity-[50%]"
                      : "bg-text-orange hover:opacity-[90%]"
                  } text-white py-2 px-4 rounded-full transition-colors duration-300 ease-in-out`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
