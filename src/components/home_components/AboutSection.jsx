import React from 'react';
import { FaBus, FaShippingFast, FaPlane, FaTruck, FaUsers } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const AboutComponent = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h4 className='text-text-orange mb-5'>KNOW ABOUT US</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-text-gray">
              About Our Transportation Services
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We are dedicated to providing{' '}
              <span className="text-yellow-300">safe</span>,
              <span className="text-green-300">efficient</span>, and{' '}
              <span className="text-blue-300">reliable</span> transportation
              solutions for individuals and businesses. Our team of experienced
              professionals ensures your journey is{' '}
              <span className="text-pink-300">comfortable</span> and{' '}
              <span className="text-purple-300">stress-free</span>.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <FaBus className="text-4xl text-blue-200" />
                </div>
                <p className="text-gray-600 text-lg">
                  Reliable and Efficient <br /> Transportation Services
                </p>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <FaShippingFast className="text-4xl text-green-200" />
                </div>
                <p className="text-gray-600 text-lg">
                  Timely and Secure <br /> Cargo Delivery
                </p>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <FaPlane className="text-4xl text-red-200" />
                </div>
                <p className="text-gray-600 text-lg">
                  Fast and Convenient <br /> Air Transport
                </p>
              </div>
              <div className="flex card items-center">
                <div className="mr-4">
                  <FaTruck className="text-4xl text-yellow-200" />
                </div>
                <p className="text-gray-600 text-lg">
                  Nationwide <br /> Ground Delivery
                </p>
              </div>
            </div>
          </div>
          <div
            className="md:w-1/2 transform hover:scale-105 transition duration-300 ease-in-out relative overflow-hidden"
            data-wow-delay="0.1s"
          >
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
