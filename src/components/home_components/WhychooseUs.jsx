"use client";
import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaCheckCircle, FaShieldAlt, FaClock, FaHeart } from 'react-icons/fa';
import 'aos/dist/aos.css'

const WhyChooseUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in",
    })
  }, []);
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-text-gray text-center">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div data-aos="slide-up" data-aos-delay="300" className="flex flex-col items-center p-6 cursor-auto rounded-lg shadow-lg bg-white hover:scale-105 transform transition duration-300 ease-in-out">
            <div className="bg-blue-500 rounded-full p-4 text-white text-3xl">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-text-gray">
              Reliable Services
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Our transportation services are known for their reliability and
              timely delivery.
            </p>
          </div>
          <div data-aos="slide-up" data-aos-delay="500" className="flex flex-col items-center p-6 cursor-auto rounded-lg shadow-lg bg-white hover:scale-105 transform transition duration-300 ease-in-out">
            <div className="bg-green-500 rounded-full p-4 text-white text-3xl">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-text-gray">
              Secure Transport
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Your cargo and belongings are handled with the utmost care and
              security.
            </p>
          </div>
          <div data-aos="slide-up" data-aos-delay="700" className="flex flex-col items-center p-6 cursor-auto rounded-lg shadow-lg bg-white hover:scale-105 transform transition duration-300 ease-in-out">
            <div className="bg-yellow-500 rounded-full p-4 text-white text-3xl">
              <FaClock />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-text-gray">
              On-Time Delivery
            </h3>
            <p className="text-gray-600 text-center mt-2">
              We prioritize punctuality and ensure your goods reach their
              destination on time.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Choose us with confidence because we{' '}
            <span className="text-red-500">
              <FaHeart className="inline text-xl" />
            </span>{' '}
            what we do!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
