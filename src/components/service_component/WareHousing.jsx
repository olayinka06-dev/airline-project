import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "aos/dist/aos.css";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

const WarehouseSolutionsDetail = () => {
  return (
    <div className="container py-5">
      <div className="py-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-text-gray text-center">
          Warehouse Solutions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-up" data-aos-delay="500">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-text-gray">
              Efficient and Secure Warehouse Solutions
            </h2>
            <p className="text-gray-600 mb-4">
              Our Warehouse Solutions provide a seamless and secure storage
              environment for your goods. With state-of-the-art facilities and
              advanced inventory management systems, we ensure your products are
              stored, managed, and distributed with precision and care.
            </p>
            <div className="flex items-start mb-2">
              <FiCheckCircle className="text-text-orange mb-2 text-xl mt-1 mr-2" />
              <p className="text-gray-600">Climate-controlled storage</p>
            </div>
            <div className="flex items-start mb-2">
              <FiCheckCircle className="text-text-orange mb-2 text-xl mt-1 mr-2" />
              <p className="text-gray-600">Real-time inventory tracking</p>
            </div>
            <div className="flex items-start mb-2">
              <FiCheckCircle className="text-text-orange mb-2 text-xl mt-1 mr-2" />
              <p className="text-gray-600">Order fulfillment services</p>
            </div>
            <div className="flex items-start mb-2">
              <FiCheckCircle className="text-text-orange mb-2 text-xl mt-1 mr-2" />
              <p className="text-gray-600">Efficient distribution network</p>
            </div>
            <Link
              href={"/booking"}
              className="bg-text-orange hover:opacity[80%] text-white py-2 px-6 rounded-full text-lg mt-5"
            >
              Get a Quote
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <img
              src="/images/service-6.jpg" // Replace with your image URL
              alt="Warehouse Solutions"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseSolutionsDetail;
