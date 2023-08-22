import HeroBanner from "@/components/entities/HeroBanner";
import InteractiveFeatures from "@/components/about_components/InteractiveFeatures";
import StatisticsNumbers from "@/components/about_components/StatisticsNumbers";
import Testimonials from "@/components/entities/Testimonial";
import AboutComponent from "@/components/home_components/AboutSection";
import WhyChooseUs from "@/components/home_components/WhychooseUs";
import React from "react";

const page = () => {
  return (
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
  );
};

export default page;
