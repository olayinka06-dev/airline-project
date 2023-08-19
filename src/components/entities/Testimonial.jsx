import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "TransportCompany has been an excellent partner for our logistics needs. Their timely and reliable services have helped our business run smoothly.",
      author: "Sarah Johnson",
      position: "Supply Chain Manager",
      image: "/images/testimonial-1.jpg",
    },
    {
      quote:
        "I've been using TransportCompany's services for years, and they never disappoint. Their dedicated team ensures that our goods are delivered safely and on time.",
      author: "Michael Smith",
      position: "Business Owner",
      image: "/images/testimonial-3.jpg",
    },
    {
      quote:
        "The professionalism and efficiency of TransportCompany are unparalleled. They handle our shipping and transportation needs with precision and care.",
      author: "Emily White",
      position: "Operations Director",
      image: "/images/testimonial-4.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h3 className='text-text-orange'>Testimonial</h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-blue-50"
            >
              <div className="flex items-start mb-4">
                <FaQuoteLeft className="text-blue-500 text-2xl mr-2" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`Testimonial from ${testimonial.author}`}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
