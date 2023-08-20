import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "aos/dist/aos.css";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

const RoadFreightDetail = () => {
  return (
    <div className="container py-5">
      <div className="py-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-text-gray text-center">
          Road Freight
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-up" data-aos-delay="300">
            <img
              src="/images/service-3.jpg" 
              alt="Road Freight"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-text-gray">
              Reliable Road Freight Solutions
            </h2>
            <p className="text-gray-600 mb-4">
              Our Road Freight services offer a seamless and efficient way to
              transport your goods across various destinations. With a focus on
              safety and timely delivery, we ensure your cargo reaches its
              destination without hassle.
            </p>
            <div className="flex items-start mb-2">
              <FiCheckCircle className="text-text-orange mb-2 text-xl mt-1 mr-2" />
              <p className="text-gray-600">Dedicated fleet of vehicles</p>
            </div>
            <div className="flex items-start mb-2">
              <FiCheckCircle className="text-text-orange mb-2 text-xl mt-1 mr-2" />
              <p className="text-gray-600">Experienced drivers</p>
            </div>
            <div className="flex items-start mb-2">
              <FiCheckCircle className="text-text-orange mb-2 text-xl mt-1 mr-2" />
              <p className="text-gray-600">Real-time tracking and updates</p>
            </div>
            <div className="flex items-start mb-2">
              <FiCheckCircle className="text-text-orange mb-2 text-xl mt-1 mr-2" />
              <p className="text-gray-600">
                Customized transportation solutions
              </p>
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

export default RoadFreightDetail;
