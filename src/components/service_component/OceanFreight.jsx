import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "aos/dist/aos.css";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

const OceanFreightDetail = () => {
  return (
    <div className="container py-5">
      <div className="py-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-text-gray text-center">
          Ocean Freight
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-up" data-aos-delay="500">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-text-gray">
              Seamless Ocean Freight Solutions
            </h2>
            <p className="text-gray-600 mb-4">
              Our Ocean Freight services offer cost-effective and reliable
              shipping solutions for goods of all sizes. With our extensive
              network of partners and carriers, we ensure timely delivery and
              secure handling of your cargo.
            </p>
            <div className="flex items-start mb-2">
              <FiCheckCircle className="text-text-orange text-xl mt-1 mb-2 mr-2" />
              <p className="text-gray-600">
                Comprehensive door-to-door logistics
              </p>
            </div>
            <div className="flex items-start mb-2">
              <FiCheckCircle className="text-text-orange text-xl mt-1 mb-2 mr-2" />
              <p className="text-gray-600">Secure packaging and handling</p>
            </div>
            <div className="flex items-start mb-2">
              <FiCheckCircle className="text-text-orange text-xl mt-1 mb-2 mr-2" />
              <p className="text-gray-600">Real-time tracking and updates</p>
            </div>
            <div className="flex items-start mb-2">
              <FiCheckCircle className="text-text-orange text-xl mt-1 mb-2 mr-2" />
              <p className="text-gray-600">Customs clearance assistance</p>
            </div>
            <Link
              href={"/booking"}
              className="bg-text-orange hover:opacity-[80%] mt-10 text-white py-2 px-6 rounded-full text-lg"
            >
              Get a Quote
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <img
              src="/images/service-2.jpg"
              alt="Ocean Freight"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OceanFreightDetail;
