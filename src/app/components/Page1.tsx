"use client";
import React from "react";
import Header from "./Header";
import Swiper from "../utils/Swiper";
import { FaArrowRightLong } from "react-icons/fa6";

const Page1 = () => {
  return (
    <div className="w-full min-h-screen text-black bg-white relative">
      <Header />

      <div className="relative w-full h-[92vh]">

        {/* Swiper background */}
        <Swiper />

        {/* Overlay content */}
        <div className="absolute top-0 left-0 z-10 bg-black/55 w-full h-full 
                        flex flex-col justify-center items-center gap-y-5 px-4">

          {/* Responsive title */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl 
                       text-white font-bold font-serif border-y-2 border-white px-3 text-center"
          >
            THE MONARQUE
          </h1>

          {/* Responsive paragraph */}
          <p
            className="text-sm sm:text-base md:text-lg text-gray-200 
                       w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] text-center"
          >
            Innovation thrives when curious minds explore bold ideas, turning
            challenges into opportunities while embracing constant learning,
            creative thinking, and meaningful collaboration that inspires
            progress and lasting impact.
          </p>

          {/* Responsive button */}
          <button
            className="px-5 py-2 sm:px-6 sm:py-3 text-white bg-green-600 rounded 
                       flex justify-center items-center 
                       hover:cursor-pointer hover:bg-green-500 transition 
                       text-sm sm:text-base md:text-lg mt-3"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
