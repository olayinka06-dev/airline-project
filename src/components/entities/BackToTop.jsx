"use client";
import React, { useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const BackToTop = () => {
  const [backUp, setBackUp] = useState(false);
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop >= 100 ||
      document.documentElement.scrollTop >= 100
    ) {
      setBackUp(true);
    } else {
      setBackUp(false);
    }
  });
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
