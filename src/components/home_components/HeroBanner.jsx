"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);
SwiperCore.use([Autoplay, Pagination, Navigation]);

const HeroBanner = () => {
  return (
    <div className="container-fluid z-[50] swipper_container">
      <div className="bg-[url(/images/4.jpg)] bg-center h-screen bg-no-repeat">
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
            <div className="flex justify-center text-white items-center w-full bg-[url(/images/4.jpg)] bg-center z-[-100] h-screen bg-no-repeat">
              <div className="container">
                <h1 className="md:text-[50px] text-[30px] text-[#FAFAFA] font-bold">
                  Your Gateway to Financial Possibilities
                </h1>
                <p className="text-[24px] leading-loose">
                  Dive into a world where payments, remittances, trades,
                  investments, and capital raising are all at your fingertips.
                </p>
                <div className="mt-3">
                  <button className="register py-3 px-5">Register Now</button>
                </div>
                <div className="flex flex-row gap-3 justify-start items-start">
                  <div className="flex flex-col gap-1 text-center">
                    <h3 className="text-[24px] text-white font-[600]">
                      13% APY
                    </h3>
                    <span className="text-[14px] font-[500]">
                      paid out weekly
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-center">
                    <h3 className="text-[24px] text-white font-[600]">50+</h3>
                    <span className="text-[14px] font-[500]">
                      trade currency
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-center">
                    <h3 className="text-[24px] text-white font-[600]">40+</h3>
                    <span className="text-[14px] font-[500]">countries</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center text-white  items-center w-full bg-[url(/images/5.jpg)] bg-center h-screen bg-no-repeat">
              <div className="container">
                <h1 className="md:text-[50px] text-[30px] text-[#FAFAFA] font-bold">
                  Swift Payments Redefined by Empowering Global Transactions
                </h1>
                <p className="text-[24px] leading-loose">
                  Experience the future of payments with TuluPay's revolutionary
                  approach.
                </p>
                <div className="mt-3">
                  <button className="register py-3 px-5">Learn More</button>
                </div>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center text-white  items-center w-full bg-[url(/images/6.jpg)] bg-center h-screen bg-no-repeat">
              <div className="container">
                <h1 className="md:text-[50px] text-[30px] text-[#FAFAFA] font-bold">
                  Remittance Evolved through Connecting Hearts, Bridging
                  Distances
                </h1>
                <p className="text-[24px] leading-loose">
                  Break down geographical barriers with TuluPay's streamlined
                  remittance solutions.
                </p>
                <div className="mt-3">
                  <button className="register py-3 px-5">Learn More</button>
                </div>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center text-white  items-center w-full bg-[url(/images/4.jpg)] bg-center h-screen bg-no-repeat">
              <div className="container">
                <h1 className="md:text-[50px] text-[30px] text-[#FAFAFA] font-bold">
                  Crafting Your Trading Expedition
                </h1>
                <p className="text-[24px] leading-loose">
                  Discover a realm of trading possibilities through TuluPay's
                  comprehensive exchange and trading features.
                </p>
                <div className="mt-3">
                  <button className="register py-3 px-5">Learn More</button>
                </div>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center text-white  items-center w-full bg-[url(/images/5.jpg)] bg-center h-screen bg-no-repeat">
              <div className="container">
                <h1 className="md:text-[50px] text-[30px] text-[#FAFAFA] font-bold">
                  Navigating Pathways to Financial Flourishing
                </h1>
                <p className="text-[24px] leading-loose">
                  Embark on an intelligent investment journey with TuluPay's
                  innovative solutions.
                </p>
                <div className="mt-3">
                  <button className="register py-3 px-5">learnmore</button>
                </div>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex  items-center w-full bg-[url(/images/6.jpg)] bg-center h-screen bg-no-repeat">
              <div className="">
                <h1 className="md:text-[50px] text-[30px] text-[#FAFAFA] font-bold">
                  Redefining Capital Raising by Fostering Dreams, Fueling
                  Progress
                </h1>
                <p className="text-[24px] leading-loose">
                  Embark on an intelligent investment journey with TuluPay's
                  innovative solutions.
                </p>
                <div className="mt-3">
                  <button className="register py-3 px-5">learnmore</button>
                </div>

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
