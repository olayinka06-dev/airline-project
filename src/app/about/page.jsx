"use client";
import HeroBanner from "@/components/entities/HeroBanner";
import InteractiveFeatures from "@/components/about_components/InteractiveFeatures";
import StatisticsNumbers from "@/components/about_components/StatisticsNumbers";
import Testimonials from "@/components/entities/Testimonial";
import AboutComponent from "@/components/home_components/AboutSection";
import WhyChooseUs from "@/components/home_components/WhychooseUs";
import React, { useEffect, useState } from "react";
import Preloader from "@/components/entities/Preloader";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <HeroBanner
            head={"Discover Our Story"}
            paragraph={"Delivering Excellence in Transportation Services"}
          />
          <AboutComponent />
          <StatisticsNumbers />
          <WhyChooseUs />
          <InteractiveFeatures />
          <Testimonials />
        </>
      )}
    </>
  );
};

export default page;
