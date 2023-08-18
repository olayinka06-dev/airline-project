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
    <header className="border-t-[3px] sticky top-0 z-[100] border-solid border-text-orange shadow-lg">
      
      <nav className="container py-5 md:py-6 items-center w-full bg-white  flex justify-between">
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
            className={`nav-link ${activeLink === "services" ? "active" : ""}`}
            href={"/service"}
          >
            Services
          </Link>
          <Link
            onClick={() => setActiveLink("track")}
            className={`nav-link ${activeLink === "track" ? "active" : ""}`}
            href={"/"}
          >
            Track Parcel
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
          <div className="search-wrap">
            <a href="https://seawaysc.com/#">
              <i className="bx bx-search"></i>
            </a>
          </div>
          <button type="button" className="sidebar-menu">
            <i className="flaticon-menu"></i>
          </button>
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
    </header>
  );
};

export default NavBar;
