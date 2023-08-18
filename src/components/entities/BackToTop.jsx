"use client";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const BackToTop = () => {
  const [backUp, setBackUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop >= 100 ||
        document.documentElement.scrollTop >= 100
      ) {
        setBackUp(true);
      } else {
        setBackUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollUp}
      style={{ visibility: `${backUp ? "visible" : "hidden"}` }}
      className={`fixed bottom-2 transition-transform duration-1000 ease-linear ${
        backUp
          ? "translate-y-[0%] opacity-[100%]"
          : "translate-y-[-1000%]  opacity-0"
      } right-10 py-[0.8rem] px-[.8rem] text-[1.25rem] bg-text-orange text-white text-center align-middle`}
    >
      <span>
        <FaAngleDoubleUp className="back-to-top" />
      </span>
    </button>
  );
};

export default BackToTop;

