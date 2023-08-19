// "use client"
// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/css"; // Import Swiper CSS
// // import "swiper/css/navigation"; // Import Swiper navigation CSS

// // import "swiper/css/pagination"; // Import Swiper pagination CSS

// // SwiperCore.use([Navigation, Pagination, Autoplay]);
// // import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";

// // const HeroSection = () => {
// //   const items = [
// //     {
// //       image: "/images/4.jpg",
// //       text: "Hello World 1",
// //     },
// //     {
// //       image: "/images/5.jpg",
// //       text: "Hello World 2",
// //     },
// //     {
// //       image: "/images/6.jpg",
// //       text: "Hello World 3",
// //     },
// //   ];
// //   return (
// //     <div>
// //       <Swiper
// //         spaceBetween={30}
// //         centeredSlides={true}
// //         autoplay={{ delay: 2500, disableOnInteraction: false }}
// //         effect="fade"
// //         navigation={true} // Show navigation buttons
// //         pagination={{
// //           clickable: true, // Enable clickable pagination bullets
// //         }}
// //       >
// //         {items.map((item, index) => (
// //           <SwiperSlide key={index}>
// //             <div
// //               className="flex justify-center items-center"
// //               style={{ backgroundImage: `url(${item.image})` }}
// //             >
// //               <div className="text-white text-3xl font-bold">
// //                 {item.text}
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </div>
// //   );
// // };

// // export default HeroSection;


// // // import React, { useEffect } from "react";
// // // import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import "swiper/css/swiper.min.css"; // Import Swiper CSS
// // // import "swiper/css/navigation.min.css";
// // // import "swiper/css/pagination.min.css";


// // // SwiperCore.use([Navigation, Pagination, Autoplay]); // Add necessary Swiper components

// // // const HeroSection = () => {
// // //   const items = [
// // //     {
// // //       image: "/images/4.jpg",
// // //       text: "Hello World 1",
// // //     },
// // //     {
// // //       image: "/images/5.jpg",
// // //       text: "Hello World 2",
// // //     },
// // //     {
// // //       image: "/images/6.jpg",
// // //       text: "Hello World 3",
// // //     },
// // //   ];

// // //   useEffect(() => {
// // //     const swiper = new Swiper(".swiper-container", {
// // //       spaceBetween: 30,
// // //       centeredSlides: true,
// // //       autoplay: {
// // //         delay: 2500,
// // //         disableOnInteraction: false,
// // //       },
// // //       effect: "fade",
// // //       navigation: true, // Show navigation buttons
// // //       pagination: {
// // //         clickable: true, // Enable clickable pagination bullets
// // //       },
// // //     });
// // //   }, []);

// // //   return (
// // //     <div className="swiper-container">
// // //       <div className="swiper-wrapper">
// // //         {items.map((item, index) => (
// // //           <SwiperSlide key={index} className="swiper-slide">
// // //             <div
// // //               className="flex justify-center items-center"
// // //               style={{ backgroundImage: `url(${item.image})` }}
// // //             >
// // //               <div className="text-white text-3xl font-bold">
// // //                 {item.text}
// // //               </div>
// // //             </div>
// // //           </SwiperSlide>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default HeroSection;



// import React from 'react';
// // import 'swiper/swiper-bundle.min.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';

// // Import Swiper styles
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';

// // Install Swiper modules
// SwiperCore.use([Autoplay, Navigation, Pagination]);

// const DynamicSwiper = () => {
//   const items = [
//     {
//       image: "/images/4.jpg",
//       text: "Hello World 1",
//     },
//     {
//       image: "/images/5.jpg",
//       text: "Hello World 2",
//     },
//     {
//       image: "/images/6.jpg",
//       text: "Hello World 3",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-4xl font-bold mb-4">Dynamic Swiper with Next.js and Tailwind CSS</h1>
//       <div className="w-full max-w-lg">
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={1}
//           navigation
//           grabCursor={true}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//         >
//           {items.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <img src={slide.image} alt={`Slide ${index}`} />
//               <div className="swiper-slide-text">{slide.text}</div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default DynamicSwiper;


