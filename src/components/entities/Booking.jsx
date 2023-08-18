"use client";
import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import { FaRegCalendarAlt, FaMapMarkerAlt, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800 text-center">
          Request a Quote or Booking
        </h2>
        {isSubmitted ? (
          <p className="text-green-600 text-center">
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
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">
                  <FaUser />
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full border rounded p-2 pl-10 focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full border rounded p-2 pl-10 focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">
                  <FaPhone />
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="123-456-7890"
                  className="w-full border rounded p-2 pl-10 focus:outline-none focus:ring focus:border-blue-300"
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
                className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
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
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">
                  <FaMapMarkerAlt />
                </span>
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder="Enter pickup location"
                  className="w-full border rounded p-2 pl-10 focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Drop-off Location
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">
                  <FaMapMarkerAlt />
                </span>
                <input
                  type="text"
                  name="dropoffLocation"
                  placeholder="Enter drop-off location"
                  className="w-full border rounded p-2 pl-10 focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Date of Service
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">
                  <FaRegCalendarAlt />
                </span>
                <input
                  type="date"
                  name="date"
                  className="w-full border rounded p-2 pl-10 focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className={`${
                isSubmitting ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'
              } text-white py-2 px-4 rounded-full transition-colors duration-300 ease-in-out`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Booking;
