"use client";
import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const InteractiveFeatures = () => {
  const [accordionActive, setAccordionActive] = useState(null);

  const toggleAccordion = (index) => {
    if (accordionActive === index) {
      setAccordionActive(null);
    } else {
      setAccordionActive(index);
    }
  };

  const accordionData = [
    {
      title: "Reliable and Efficient Transportation Services",
      content:
        "Our transportation services are designed to be reliable and efficient, ensuring that your goods reach their destination on time and in excellent condition. We use advanced tracking systems and efficient logistics to provide top-notch service.",
    },
    {
      title: "Timely and Secure Cargo Delivery",
      content:
        "With our secure cargo delivery solutions, you can trust us to handle your valuable items with care. We prioritize timely deliveries while ensuring the security of your cargo throughout the journey.",
    },
    {
      title: "Fast and Convenient Air Transport",
      content:
        "Experience fast and convenient air transport services that cater to your urgent needs. Our extensive network and efficient processes enable us to provide swift transportation solutions without compromising on safety.",
    },
    {
      title: "Nationwide Ground Delivery",
      content:
        "Our nationwide ground delivery services cover every corner of the country. Whether it’s a metropolitan area or a remote location, our ground transportation solutions are designed to meet your specific requirements.",
    },
  ];
  return (
    <div className="container">
      <h3 className="text-2xl font-semibold mt-6 mb-4 text-text-gray">
        Interactive Features
      </h3>
      <div className="space-y-4">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <div
              className={`flex items-center justify-between cursor-pointer py-3 ${
                accordionActive === index ? "bg-gray-200" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <p className="text-gray-700 text-lg">{item.title}</p>
              <span>
                {accordionActive === index ? (
                  <AiOutlineCheckCircle className="text-green-500" />
                ) : (
                  <AiOutlineCheckCircle className="text-gray-500" />
                )}
              </span>
            </div>
            {accordionActive === index && (
              <p className="text-gray-600 text-lg py-2 pl-8">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveFeatures;
