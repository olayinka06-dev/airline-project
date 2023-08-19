"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import "swiper/components/navigation/navigation.min.css"; // Import Swiper navigation styles
import SwiperCore, { Autoplay, Navigation } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

const HeroSection = () => {
  const swiperParams = {
    effect: "fade",
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <section className="text-white">
      <Swiper {...swiperParams}>
        <SwiperSlide>
          <div className="swiper-slide-container">
            <div className="w-full bg-[url(/images/4.jpg)] bg-no-repeat bg-center h-screen mx-auto text-center bg-opacity-50 flex flex-col justify-center items-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                Welcome to Transport
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white">
                Your Trusted Partner for Transportation Services
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-lg">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-container">
            <div className="w-full bg-[url(/images/4.jpg)] bg-no-repeat bg-center h-screen mx-auto text-center bg-opacity-50 flex flex-col justify-center items-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                Welcome to TransportCompany
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white">
                Providing Reliable Transportation Solutions
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-lg">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-container">
            <div className="w-full bg-[url(/images/4.jpg)] bg-no-repeat bg-center h-screen mx-auto text-center bg-opacity-50 flex flex-col justify-center items-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                Welcome to TransportCompany
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white">
                Delivering Excellence in Transportation
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-lg">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </section>
  );
};

export default HeroSection;
