import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container-fluid bg-text-blue">
      <div className="flex flex-col md:flex-row py-1 lg:px-5">
        <div className="w-full md:w-1/2 text-center lg:text-left mb-2 lg:mb-0">
          <div className="inline-flex items-center text-white">
            <small className="flex items-center">
              <i className="fa fa-phone-alt mr-2"><FaPhoneAlt/></i>+012 345 6789
            </small>
            <small className="px-3">|</small>
            <small className="flex items-center">
              <i className="fa fa-envelope mr-2"><FaEnvelope/></i>info@example.com
            </small>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center lg:text-right">
          <div className="inline-flex items-center">
            <a className="text-white hover:text-text-orange transition duration-300 ease-linear px-2" href="">
              <FaFacebook/>
            </a>
            <a className="text-white hover:text-text-orange transition duration-300 ease-linear px-2" href="">
              <i className="fab fa-twitter"><FaTwitter/></i>
            </a>
            <a className="text-white hover:text-text-orange transition duration-300 ease-linear px-2" href="">
              <i className="fab fa-linkedin-in"><FaLinkedinIn/></i>
            </a>
            <a className="text-white hover:text-text-orange transition duration-300 ease-linear px-2" href="">
              <i className="fab fa-instagram"><FaInstagram/></i>
            </a>
            <a className="text-white hover:text-text-orange transition duration-300 ease-linear pl-2" href="">
              <i className="fab fa-youtube"><FaYoutube/></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
