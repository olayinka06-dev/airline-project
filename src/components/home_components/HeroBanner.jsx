"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);
SwiperCore.use([Autoplay, Pagination, Navigation]);

const HeroBanner = () => {
  return (
    <div className="container-fluid z-[50] swipper_container">
      <div className="bg-[url(/images/4.jpg)] bg-center h-[90vh] bg-no-repeat">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div className="flex justify-center text-white items-center w-full bg-[url(/images/4.jpg)] bg-center z-[-100] h-[90vh] bg-no-repeat">
              <div className="container mb-4">
                <h1 className="md:text-[50px] text-[30px] text-text-orange font-bold">
                Reliable and Efficient Transportation Services
                </h1>
                <p className="text-[24px] leading-relaxed">
                Count on us for dependable and streamlined transportation solutions that cater to your needs, ensuring your goods are delivered promptly and with utmost efficiency.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center text-white  items-center w-full bg-[url(/images/5.jpg)] bg-center h-[90vh] bg-no-repeat">
              <div className="container mb-4">
                <h1 className="md:text-[50px] text-[30px] text-text-orange font-bold">
                Timely and Secure Cargo Delivery
                </h1>
                <p className="text-[24px] leading-relaxed">
                Enjoy peace of mind with our secure cargo delivery services, providing timely arrivals and safeguarding your valuable shipments with advanced tracking and security measures.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center text-white  items-center w-full bg-[url(/images/6.jpg)] bg-center h-[90vh] bg-no-repeat">
              <div className="container mb-4">
                <h1 className="md:text-[50px] text-[30px] text-text-orange font-bold">
                Fast and Convenient Air Transport
                </h1>
                <p className="text-[24px] leading-relaxed">
                Experience swift and hassle-free air transport that prioritizes your time, offering seamless travel and efficient connections for your convenience.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center text-white  items-center w-full bg-[url(/images/4.jpg)] bg-center h-[90vh] bg-no-repeat">
              <div className="container mb-4">
                <h1 className="md:text-[50px] text-[30px] text-text-orange font-bold">
                Nationwide Ground Delivery
                </h1>
                <p className="text-[24px] leading-relaxed">
                Connect nationwide with our reliable ground delivery network, linking communities and delivering packages across the country with efficiency and precision.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default HeroBanner;
