"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import "aos/dist/aos.css"
import { HiMiniArrowRight } from "react-icons/hi";

const Card = ({image, title, paragraph, aos}) => {
  return (
    <div className="" data-aos="fade-up" data-aos-delay={aos}>
      <div className="service-item p-4">
        <div className="overflow-hidden mb-4">
          <img className="img-fluid" src={image} alt="" />
        </div>
        <h4 className="mb-3">{title}</h4>
        <p>
         {paragraph}
        </p>
        <a className="btn-slide mt-2" href="/">
          <i className="fa fa-arrow-right"><FaArrowRight/></i>
          <span>Read More</span>
        </a>
      </div>
    </div>
  );
};

// const MyComponent = () => {
//   useEffect(() => {
//     const aos = new aos.aos({
//       boxClass: 'aos', // The CSS className for the elements to apply animations to
//       animateClass: 'animated', // The CSS className for animation CSS classes (default is "animated")
//       offset: 0, // Scroll offset to trigger the animation (in pixels)
//       mobile: false, // Whether to enable animations on mobile devices
//       live: true // Whether to update animations as elements are added or removed from the DOM
//     });
// import 'wowjs/css/libs/animate.css';

//     aos.init();
//   }, []);
const Service = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in",
    })
  }, []);
  return (
    <div className="container py-5">
      <div className="py-5">
      <h3 className="text-text-orange text-uppercase">Our Services</h3>
        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-text-gray text-center">Explore Our Services</h1>
        </div>
        <div className="grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 gap-4">
            <Card image={"/images/service-1.jpg"} paragraph={"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."} title={"Air Freight"} aos={300}/>
            <Card image={"/images/service-2.jpg"} paragraph={"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."} title={"Ocean Freight"} aos={500}/>
            <Card image={"/images/service-3.jpg"} paragraph={"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."} title={"Road Freight"} aos={700}/>
            <Card image={"/images/service-4.jpg"} paragraph={"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."} title={"Train Freight"} aos={900}/>
            <Card image={"/images/service-5.jpg"} paragraph={"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."} title={"Customs Clearance"} aos={1100}/>
            <Card image={"/images/service-6.jpg"} paragraph={"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."} title={"Warehouse Solutions"} aos={1300}/>
        </div>
      </div>
    </div>
  );
};

export default Service;
