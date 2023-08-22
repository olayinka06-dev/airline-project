import React from 'react';

const AboutBanner = () => {
  return (
    <section
      className="relative bg-center bg-cover h-[600px] overflow-hidden"
      style={{
        backgroundImage: "url('/images/1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
            Discover Our Story
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Delivering Excellence in Transportation Services
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full text-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
