"use client";
import Booking from "@/components/entities/Booking";
import ContactInformation from "@/components/entities/ContactInformation";
import Preloader from "@/components/entities/Preloader";
import Testimonials from "@/components/entities/Testimonial";
import AboutComponent from "@/components/home_components/AboutSection";
import HeroBanner from "@/components/home_components/HeroBanner";
import Service from "@/components/home_components/Service";
import WhyChooseUs from "@/components/home_components/WhychooseUs";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <HeroBanner />
          <AboutComponent />
          <WhyChooseUs />
          <Service />
          <Booking />
          <Testimonials />
          <ContactInformation />
        </>
      )}
    </>
  );
}
