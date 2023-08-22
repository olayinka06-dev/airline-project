"use client";
import React, { useEffect } from "react";

const HeroBanner = ({ head, paragraph }) => {
  const handleScroll = () => {
    const scrollValue = window.scrollY;
    const background = document.querySelector(".parallax-background");
    background.style.transform = `translateY(-${scrollValue * 0.5}px)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-[400px] overflow-hidden">
      <div
        className="parallax-background bg-center bg-cover h-[800px] w-full absolute top-0 left-0"
        style={{
          backgroundImage: "url('/images/1.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
            {head}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">{paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
