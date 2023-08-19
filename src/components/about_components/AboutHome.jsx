import React from 'react';
import { FaBus, FaShippingFast, FaPlane, FaTruck } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const AboutComponent = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-0 gap-5 md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h4 className="text-text-orange mb-5">KNOW ABOUT US</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-text-gray">
              About Our Transportation Services
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We are dedicated to providing{' '}
              <span className="text-yellow-500">safe</span>,
              <span className="text-green-500">efficient</span>, and{' '}
              <span className="text-blue-500">reliable</span> transportation
              solutions for individuals and businesses. Our team of experienced
              professionals ensures your journey is{' '}
              <span className="text-pink-500">comfortable</span> and{' '}
              <span className="text-purple-500">stress-free</span>.
            </p>
            {/* Add "Why Choose Us" Section */}
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="flex flex-col md:flex-row items-center md:text-left text-center">
                <div className="md:mr-4">
                  <AiOutlineCheckCircle className="text-4xl text-green-500" />
                </div>
                <p className="text-gray-600 text-lg">
                  Exceptional Customer Service
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:text-left text-center">
                <div className="md:mr-4">
                  <AiOutlineCheckCircle className="text-4xl text-green-500" />
                </div>
                <p className="text-gray-600 text-lg">
                  Secure and Efficient Deliveries
                </p>
              </div>
              {/* Add more points as needed */}
            </div>
            {/* Add Testimonial Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-text-gray">
                What Our Customers Say
              </h3>
              <div className="flex items-center space-x-4">
                {/* Add testimonial cards */}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 transform hover:scale-105 transition duration-300 ease-in-out relative overflow-hidden">
            <img
              src="/images/about.jpg" // Replace with your image URL
              alt="About Us"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 flex items-center justify-center">
              <button className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
