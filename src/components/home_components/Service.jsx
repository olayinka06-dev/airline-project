"use client";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
// import WOW from "wowjs";
import { HiMiniArrowRight } from "react-icons/hi";

const Card = ({image, title, paragraph, wow}) => {
  return (
    <div class="" data-wow-delay={wow}>
      <div class="service-item p-4">
        <div class="overflow-hidden mb-4">
          <img class="img-fluid" src={image} alt="" />
        </div>
        <h4 class="mb-3">{title}</h4>
        <p>
         {paragraph}
        </p>
        <a class="btn-slide mt-2" href="/">
          <i class="fa fa-arrow-right"><FaArrowRight/></i>
          <span>Read More</span>
        </a>
      </div>
    </div>
  );
};

// const MyComponent = () => {
//   useEffect(() => {
//     const wow = new WOW.WOW({
//       boxClass: 'wow', // The CSS class for the elements to apply animations to
//       animateClass: 'animated', // The CSS class for animation CSS classes (default is "animated")
//       offset: 0, // Scroll offset to trigger the animation (in pixels)
//       mobile: false, // Whether to enable animations on mobile devices
//       live: true // Whether to update animations as elements are added or removed from the DOM
//     });
// import 'wowjs/css/libs/animate.css';

//     wow.init();
//   }, []);
const Service = () => {
  return (
    <div class="container py-5">
      <div class="py-5">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="text-secondary text-uppercase">Our Services</h6>
          <h1 class="mb-5">Explore Our Services</h1>
        </div>
        <div class="grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 gap-4">
            <Card image={"/images/service-1.jpg"} paragraph={"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."} title={"Air Freight"} wow={"0.3s"}/>
            <Card image={"/images/service-2.jpg"} paragraph={"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."} title={"Ocean Freight"} wow={"0.3s"}/>
            <Card image={"/images/service-3.jpg"} paragraph={"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."} title={"Road Freight"} wow={"0.3s"}/>
            <Card image={"/images/service-4.jpg"} paragraph={"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."} title={"Train Freight"} wow={"0.3s"}/>
            <Card image={"/images/service-5.jpg"} paragraph={"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."} title={"Customs Clearance"} wow={"0.3s"}/>
            <Card image={"/images/service-6.jpg"} paragraph={"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."} title={"Warehouse Solutions"} wow={"0.3s"}/>
        </div>
      </div>
    </div>
  );
};

export default Service;
