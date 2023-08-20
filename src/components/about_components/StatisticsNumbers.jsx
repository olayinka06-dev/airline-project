"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import "aos/dist/aos.css";

const StatisticsNumbers = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: "ease"
        })
    }, []);
  return (
    <div className="container">
      <h2 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold mb-8 text-text-gray">
        Statistics
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-6 mb-8">
        <div data-aos="fade-up" data-aos-delay="300" className="flex bg-blue-50 p-16 rounded-2xl items-center space-x-2 flex-col">
          <div className="text-3xl text-yellow-500">
            <CountUp end={1500} duration={3} />
          </div>
          <p className="text-gray-600 text-lg">Skilled Experts</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="500" className="flex bg-blue-50 p-16 rounded-2xl items-center space-x-2 flex-col">
          <div className="text-3xl text-green-500">
            <CountUp end={2500} duration={3} />
          </div>
          <p className="text-gray-600 text-lg">Completed Projects</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="700" className="flex bg-blue-50 p-16 rounded-2xl items-center space-x-2 flex-col">
          <div className="text-3xl text-blue-500">
            <CountUp end={1050} duration={3} />
          </div>
          <p className="text-gray-600 text-lg">Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsNumbers;
