"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavBar = () => {
  const pathname = usePathname();

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
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
              href={"/"}
            >
              Home
            </Link>
            <Link
              className={`nav-link ${pathname === "/about" ? "active" : ""}`}
              href={"/about"}
            >
              About Us
            </Link>
            <Link
              className={`nav-link ${
                pathname === "/service" ? "active" : ""
              }`}
              href={"/service"}
            >
              Services
            </Link>
            <Link
              className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
              href={"/contact"}
            >
              Contact
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link
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
              className={`hover:text-text-orange ${
                pathname === "/" ? "text-text-orange" : ""
              }`}
              href={"/"}
            >
              Home
            </Link>
            <Link
              className={`hover:text-text-orange ${
                pathname === "/about" ? "text-text-orange" : ""
              }`}
              href={"/about"}
            >
              About Us
            </Link>
            <Link
              className={`hover:text-text-orange ${
                pathname === "/service" ? "text-text-orange" : ""
              }`}
              href={"/service"}
            >
              Services
            </Link>
            <Link
              className={`hover:text-text-orange ${
                pathname === "/contact" ? "text-text-orange" : ""
              }`}
              href={"/contact"}
            >
              Contact
            </Link>
            <Link
              className={`bg-text-orange py-[10px] px-5 text-white rounded-2xl border-none`}
              href={"/booking"}
            >
              Get A Qoute
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
