"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
SwiperCore.use([Autoplay, Pagination]);
SwiperCore.use([Autoplay, Pagination]);
import { FaQuoteLeft } from "react-icons/fa";

const Card = ({quote, image, author, position}) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-blue-50"
    >
      <div className="flex items-start mb-4">
        <FaQuoteLeft className="text-blue-500 text-2xl mr-2" />
        <p className="text-gray-700 text-sm leading-relaxed">
          {quote}
        </p>
      </div>
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt="Testimonial"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-gray-600">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  };
  const testimonials = [
    {
      quote: "TransportCompany has been an outstanding partner for our logistics needs. Their dedication to providing reliable and efficient transportation solutions has greatly benefited our business. We have complete trust in their team.",
      author: "Sarah Johnson",
      position: "Supply Chain Manager",
      image: "/images/testimonial-1.jpg",
    },
    {
      quote: "I've had the pleasure of working with TransportCompany for several years, and I'm continually impressed by their commitment to excellence. Their timely deliveries and secure handling of our cargo have made them an essential part of our operations.",
      author: "Michael Smith",
      position: "Business Owner",
      image: "/images/testimonial-3.jpg",
    },
    {
      quote: "The professionalism and efficiency of TransportCompany's services have had a significant positive impact on our company's logistics. Their attention to detail and customer satisfaction sets them apart from the competition.",
      author: "Emily White",
      position: "Operations Director",
      image: "/images/testimonial-4.jpg",
    },
    {
      quote: "TransportCompany consistently meets and exceeds our expectations. Their dedication to quality service and on-time deliveries makes them our preferred transportation partner. We value their expertise and reliability.",
      author: "John Doe",
      position: "Marketing Manager",
      image: "/images/testimonial-1.jpg",
    },
    {
      quote: "We rely on TransportCompany to handle our shipping needs, and they consistently deliver exceptional results. Their team's dedication to ensuring our cargo arrives safely and on schedule is unmatched.",
      author: "Jessica Brown",
      position: "Warehouse Supervisor",
      image: "/images/testimonial-3.jpg",
    },
    {
      quote: "TransportCompany's team has demonstrated a strong commitment to meeting our specific requirements. Their personalized approach and attention to detail have contributed to streamlining our logistics processes.",
      author: "David Williams",
      position: "Logistics Coordinator",
      image: "/images/testimonial-4.jpg",
    },
  ];
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h3 className='text-text-orange mb-5'>Testimonial</h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800 text-center">
          What Our Clients Say
        </h2>
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={breakpoints}
          >
            {
              testimonials.map((testimonial, i)=>(
                <SwiperSlide key={i}>
              <Card
               image={testimonial.image}
               author={testimonial.author}
               quote={testimonial.quote}
               position={testimonial.position}
              />
            </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
