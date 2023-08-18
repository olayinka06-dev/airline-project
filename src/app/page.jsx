import Booking from "@/components/entities/Booking";
import AboutComponent from "@/components/home_components/AboutSection";
import Service from "@/components/home_components/Service";
import WhyChooseUs from "@/components/home_components/WhychooseUs";

export default function Home() {
  return (
    <>
      <AboutComponent/>
      <WhyChooseUs/>
      <Service/>
      <Booking/>
    </>
  );
}
