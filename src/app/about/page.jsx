import AboutBanner from "@/components/about_components/AboutBanner";
import InteractiveFeatures from "@/components/about_components/InteractiveFeatures";
import StatisticsNumbers from "@/components/about_components/StatisticsNumbers";
import Testimonials from "@/components/entities/Testimonial";
import AboutComponent from "@/components/home_components/AboutSection";
import WhyChooseUs from "@/components/home_components/WhychooseUs";
import React from "react";

const page = () => {
  return (
    <>
      <AboutBanner />
      <AboutComponent />
      <StatisticsNumbers />
      <WhyChooseUs />
      <InteractiveFeatures />
      <Testimonials />
    </>
  );
};

export default page;
