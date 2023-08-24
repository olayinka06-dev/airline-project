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
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
          <div className="absolute inset-0 bg-[rgb(41,108,161)] opacity-60"></div>
            <div className="z-[-10]  flex justify-center text-white items-center w-full bg-[url(/images/4.jpg)] bg-center  h-[90vh] bg-no-repeat">
              <div className="absolute top-48 inset-0 container mb-4">
                <h1 className=" md:text-[50px] z-[300] text-[30px] text-text-orange font-bold">
                Reliable and Efficient Transportation Services
                </h1>
                <p className="text-[24px] z-[300] leading-relaxed">
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
        <style jsx>{`
          .swiper-slide-next,
          .swiper-slide-prev {
            opacity: 0;
            pointer-events: none;
          }
          
          .swiper-button-next,
          .swiper-button-prev {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgb(250, 70, 18);
            color: white !important;
            font-size: 14px !important;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            padding: 15px 20px;
            border-radius: 10px;
            animation: buttonnext 3s linear infinite;
            opacity: 1;
          }
          @media screen and (max-width: 950px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none !important;
            }
          }
          .swiper-button-next {
            right: 20px;
          }
          @keyframes buttonnext {
            0% {
              transform: translateX(10px);
              opacity: 0.8;
            }
            50% {
              transform: translateX(0px);
              opacity: 1;
            }
            100% {
              transform: translateX(10px);
              opacity: 0.8;
            }
          }
          
          .swiper-button-prev {
            left: 20px;
          }
          
          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 10px !important;
          }
          .swiper-pagination-bullet-active {
            background-color: rgb(250, 70, 18) !important;
            padding: 5px 20px;
            border-radius: 5px !important;
          }
          
          .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
            padding: 5px 5px;
            background-color: #242424 !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default HeroBanner;
