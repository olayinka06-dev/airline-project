// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// const ContactInformation = () => {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800 text-center">
//           Contact Us
//         </h2>
//         <div className="flex flex-col items-center">
//           <p className="text-gray-600 text-lg mb-4">
//             Have questions or need assistance? Feel free to reach out to us.
//           </p>
//           <div className="flex items-center mb-4">
//             <FaPhone className="text-blue-500 text-xl mr-2" />
//             <p className="text-lg font-semibold text-gray-800">
//               Phone: (123) 456-7890
//             </p>
//           </div>
//           <div className="flex items-center mb-4">
//             <FaEnvelope className="text-blue-500 text-xl mr-2" />
//             <p className="text-lg font-semibold text-gray-800">
//               Email: info@transportcompany.com
//             </p>
//           </div>
//           <div className="flex items-center mb-4">
//             <FaMapMarkerAlt className="text-blue-500 text-xl mr-2" />
//             <p className="text-lg font-semibold text-gray-800">
//               Visit us at: 123 Main Street, City, Country
//             </p>
//           </div>
//           {/* Map component can be added here */}
//           <div className="mt-6">
//             <a
//               href="mailto:info@transportcompany.com"
//               className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition-colors duration-300 ease-in-out"
//             >
//               Send Email
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactInformation;

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInformation = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800 text-center">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Have questions or need assistance? Feel free to reach out to us.
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 py-3 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 border px-2 rounded-md"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 py-3 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 border px-2 rounded-md"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 py-3 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 border px-2 rounded-md"
                  placeholder="Enter your message..."
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition-colors duration-300 ease-in-out w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Location</h3>
            <div className="relative h-60">
              <iframe
                title="Company Location"
                className="absolute inset-0 w-full h-full border-0 rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2369657796225!2d-73.98509768531884!3d40.74881797932707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40uMTQ4LTQ4LjAiTiA3M8KwNTgnMTIuMSJX!5e0!3m2!1sen!2sus!4v1628794887199!5m2!1sen!2sus"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;


