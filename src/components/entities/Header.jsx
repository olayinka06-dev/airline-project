import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div class="container-fluid bg-text-blue">
      <div class="flex py-1 lg:px-5">
        <div class="w-1/2 text-center lg:text-left mb-2 lg:mb-0">
          <div class="inline-flex items-center text-white">
            <small className="flex items-center">
              <i class="fa fa-phone-alt mr-2"><FaPhoneAlt/></i>+012 345 6789
            </small>
            <small class="px-3">|</small>
            <small className="flex items-center">
              <i class="fa fa-envelope mr-2"><FaEnvelope/></i>info@example.com
            </small>
          </div>
        </div>
        <div class="w-1/2 text-center lg:text-right">
          <div class="inline-flex items-center">
            <a class="text-white hover:text-text-orange transition duration-300 ease-linear px-2" href="">
              <FaFacebook/>
            </a>
            <a class="text-white hover:text-text-orange transition duration-300 ease-linear px-2" href="">
              <i class="fab fa-twitter"><FaTwitter/></i>
            </a>
            <a class="text-white hover:text-text-orange transition duration-300 ease-linear px-2" href="">
              <i class="fab fa-linkedin-in"><FaLinkedinIn/></i>
            </a>
            <a class="text-white hover:text-text-orange transition duration-300 ease-linear px-2" href="">
              <i class="fab fa-instagram"><FaInstagram/></i>
            </a>
            <a class="text-white hover:text-text-orange transition duration-300 ease-linear pl-2" href="">
              <i class="fab fa-youtube"><FaYoutube/></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
