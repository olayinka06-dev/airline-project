import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "aos/dist/aos.css";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

const CustomsClearanceDetail = () => {
  return (
    <div className="container py-5">
      <div className="py-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-text-gray text-center">
          Customs Clearance
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-up" data-aos-delay="300">
            <img
              src="/images/service-5.jpg" 
              alt="Customs Clearance"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-text-gray">
              Hassle-Free Customs Clearance Services
            </h2>
            <p className="text-gray-600 mb-4">
              Our Customs Clearance services ensure a smooth and hassle-free
              process for your international shipments. We navigate complex
              regulations, documentation, and compliance requirements to
              facilitate the swift movement of your goods across borders.
            </p>
            <div className="flex items-start mt-5 mb-2">
              <FiCheckCircle className="text-text-orange text-xl mt-1 mb-2 mr-2" />
              <p className="text-gray-600">Expertise in customs procedures</p>
            </div>
            <div className="flex items-start mb-2">
              <FiCheckCircle className="text-text-orange text-xl mt-1 mb-2 mr-2" />
              <p className="text-gray-600">Efficient documentation handling</p>
            </div>
            <div className="flex items-start mb-2">
              <FiCheckCircle className="text-text-orange text-xl mt-1 mb-2 mr-2" />
              <p className="text-gray-600">Risk assessment and compliance</p>
            </div>
            <div className="flex items-start mb-2">
              <FiCheckCircle className="text-text-orange text-xl mt-1 mb-2 mr-2" />
              <p className="text-gray-600">Streamlined customs procedures</p>
            </div>
            <Link
              href={"/booking"}
              className="bg-text-orange hover:opacity[80%] text-white py-2 px-6 rounded-full text-lg mt-5"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomsClearanceDetail;
