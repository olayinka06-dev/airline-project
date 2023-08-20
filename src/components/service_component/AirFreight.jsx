import Link from "next/link";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const AirFreight = () => {
  return (
    <div className="">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-text-gray text-center">
        Air Freight
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-aos="fade-up" data-aos-delay="300">
          <img
            src="/images/service-1.jpg"
            alt="Air Freight"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="500">
          <h3 className="text-xl font-semibold mb-4">
            Why Choose Air Freight?
          </h3>
          <p className="text-gray-600">
            Air freight offers the fastest and most efficient way to transport
            goods across long distances. With our reliable air cargo solutions,
            you can enjoy benefits such as:
          </p>
          <div className="flex items-start mb-2">
            <FiCheckCircle className="text-text-orange text-xl mt-1 mb-2 mr-2" />
            <p className="text-gray-600">
              Quick delivery times for time-sensitive shipments.
            </p>
          </div>
          <div className="flex items-start mb-2">
            <FiCheckCircle className="text-text-orange text-xl mt-1 mb-2 mr-2" />
            <p className="text-gray-600">
              {" "}
              Worldwide coverage and accessibility to remote locations.
            </p>
          </div>
          <div className="flex items-start mb-2">
            <FiCheckCircle className="text-text-orange text-xl mt-1 mb-2 mr-2" />
            <p className="text-gray-600">Real-time tracking and updates</p>
          </div>
          <div className="flex items-start mb-2">
            <FiCheckCircle className="text-text-orange text-xl mt-1 mb-2 mr-2" />
            <p className="text-gray-600">
              {" "}
              Secure handling and tracking of your valuable cargo.
            </p>
          </div>
          <Link
            href={"/booking"}
            className="bg-text-orange hover:opacity-[80%] mt-10 text-white py-2 px-6 rounded-full text-lg"
          >
            Get a Quote
          </Link>

          {/* <p className="text-gray-600 mt-6">
            Our experienced team ensures your goods are handled with care
            throughout the journey, and our advanced tracking systems keep you
            updated on the status of your shipment.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AirFreight;
