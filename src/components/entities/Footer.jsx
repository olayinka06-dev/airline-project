import React from "react";
import { FaAngleRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid bg-text-blue text-white mt-5 py-5 px-sm-3 px-md-5">
      <div className="container flex md:flex-row flex-col pt-5">
        <div className="w-full lg:w-[60%] md:w-1/2">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-1/2 mb-5">
              <h3 className="text-text-orange mb-4">Get In Touch</h3>
              <p>
                <i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York,
                USA
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2"></i>+012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope mr-2"></i>info@example.com
              </p>
              <div className="flex justify-start mt-4">
                <a className="outline p-1 outline-[1px] outline-white rounded-full mr-2" href="#">
                  <i className="fab fa-twitter"><FaTwitter/></i>
                </a>
                <a className="outline p-1 outline-[1px] outline-white rounded-full mr-2" href="#">
                  <i className="fab fa-facebook-f"><FaFacebookF/></i>
                </a>
                <a className="outline p-1 outline-[1px] outline-white rounded-full mr-2" href="#">
                  <i className="fab fa-linkedin-in"><FaLinkedinIn/></i>
                </a>
                <a className="outline p-1 outline-[1px] outline-white rounded-full" href="#">
                  <i className="fab fa-instagram"><FaInstagram/></i>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mb-5">
              <h3 className="text-text-orange mb-4">Quick Links</h3>
              <div className="flex flex-col justify-start">
                <a className="text-white mb-2 flex items-center" href="/">
                  <i className="fa fa-angle-right mr-2"><FaAngleRight/></i>Home
                </a>
                <a className="text-white mb-2 flex items-center" href="/about">
                  <i className="fa fa-angle-right mr-2"><FaAngleRight/></i>About Us
                </a>
                <a className="text-white mb-2 flex items-center" href="/service">
                  <i className="fa fa-angle-right mr-2"><FaAngleRight/></i>Our Services
                </a>
                <a className="text-white mb-2 flex items-center" href="#">
                  <i className="fa fa-angle-right mr-2"><FaAngleRight/></i>Pricing Plan
                </a>
                <a className="text-white flex items-center" href="/contact">
                  <i className="fa fa-angle-right mr-2"><FaAngleRight/></i>Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] md:w-1/2 mb-5">
          <h3 className="text-text-orange mb-4">Newsletter</h3>
          <p>
            Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum
            sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo
            eirmod sea justo no lorem est diam
          </p>
          <div className="w-100">
            <div className="flex items-center">
              <input
                type="text"
                className="w-[70%] py-3"
                placeholder="Your Email Address"
              />
              <div className="w-[30%]">
                <button className="btn w-full  py-3 bg-text-orange ">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
