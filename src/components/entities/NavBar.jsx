"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <header
        className={`border-t-[3px] bg-white z-[100] border-solid border-text-orange ${
          menu ? "" : "shadow-lg"
        } `}
      >
        <nav className="container py-5 md:py-[14px] items-center w-full bg-white  flex justify-between">
          <div className="">
            <a href="/">Your logo</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link
              onClick={() => setActiveLink("home")}
              className={`nav-link ${activeLink === "home" ? "active" : ""}`}
              href={"/"}
            >
              Home
            </Link>
            <Link
              onClick={() => setActiveLink("about")}
              className={`nav-link ${activeLink === "about" ? "active" : ""}`}
              href={"/about"}
            >
              About Us
            </Link>
            <Link
              onClick={() => setActiveLink("services")}
              className={`nav-link ${
                activeLink === "services" ? "active" : ""
              }`}
              href={"/service"}
            >
              Services
            </Link>
            <Link
              onClick={() => setActiveLink("contact")}
              className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
              href={"/contact"}
            >
              Contact
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link
              onClick={() => setActiveLink("booking")}
              className={`bg-text-orange py-[10px] px-5 text-white rounded-2xl border-none`}
              href={"/booking"}
            >
              Get A Qoute
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className={`lg:hidden z-[500] ${menu ? "toggle open" : "toggle"}`}
          >
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
          </button>
        </nav>
        <div className="w-full">
          <div
            className={`flex overflow-hidden z-[150]  w-full  transition-[all,3s,ease-linear] ${
              menu ? "h-[40vh]" : "h-[0vh]"
            } flex-col px-5 bg-white md:hidden absolute items-start gap-4`}
          >
            <Link
              onClick={() => setActiveLink("home")}
              className={`hover:text-text-orange ${
                activeLink === "home" ? "text-text-orange" : ""
              }`}
              href={"/"}
            >
              Home
            </Link>
            <Link
              onClick={() => setActiveLink("about")}
              className={`hover:text-text-orange ${
                activeLink === "about" ? "text-text-orange" : ""
              }`}
              href={"/about"}
            >
              About Us
            </Link>
            <Link
              onClick={() => setActiveLink("services")}
              className={`hover:text-text-orange ${
                activeLink === "services" ? "text-text-orange" : ""
              }`}
              href={"/service"}
            >
              Services
            </Link>
            <Link
              onClick={() => setActiveLink("track")}
              className={`hover:text-text-orange ${
                activeLink === "track" ? "text-text-orange" : ""
              }`}
              href={"/"}
            >
              Track Parcel
            </Link>
            <Link
              onClick={() => setActiveLink("contact")}
              className={`hover:text-text-orange ${
                activeLink === "contact" ? "text-text-orange" : ""
              }`}
              href={"/contact"}
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
      {/* <div className="w-full">
        <div
          className={`flex overflow-hidden z-[150]  w-full  transition-[all,3s,ease-linear] ${
            menu ? "h-[40vh]" : "h-[0vh]"
          } flex-col px-5 bg-white md:hidden fixed items-start gap-4`}
        >
          <Link
            onClick={() => setActiveLink("home")}
            className={`hover:text-text-orange ${
              activeLink === "home" ? "text-text-orange" : ""
            }`}
            href={"/"}
          >
            Home
          </Link>
          <Link
            onClick={() => setActiveLink("about")}
            className={`hover:text-text-orange ${
              activeLink === "about" ? "text-text-orange" : ""
            }`}
            href={"/about"}
          >
            About Us
          </Link>
          <Link
            onClick={() => setActiveLink("services")}
            className={`hover:text-text-orange ${
              activeLink === "services" ? "text-text-orange" : ""
            }`}
            href={"/service"}
          >
            Services
          </Link>
          <Link
            onClick={() => setActiveLink("track")}
            className={`hover:text-text-orange ${
              activeLink === "track" ? "text-text-orange" : ""
            }`}
            href={"/"}
          >
            Track Parcel
          </Link>
          <Link
            onClick={() => setActiveLink("contact")}
            className={`hover:text-text-orange ${
              activeLink === "contact" ? "text-text-orange" : ""
            }`}
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default NavBar;
