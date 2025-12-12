import React from "react";
import MenuSheet from "./MenuSheet";

const Header = () => {
  return (
    <header className="w-full h-[85px] bg-white  px-4 sm:px-8 md:px-16 flex justify-between items-center shadow-xl">

      {/* Logo */}
      <div className="logo">
        <img
          src="https://res.cloudinary.com/dpdwmxgd4/image/upload/v1761993695/Untitled_design_3_rxedn9.png"
          alt="Logo"
          className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]"
        />
      </div>

      {/* Navigation */}
      <div className="flex flex-row items-center gap-6 md:gap-10">
        <ul className="hidden sm:flex flex-row gap-6 md:gap-10 text-[15px] md:text-lg font-semibold">
          <li className="hover:cursor-pointer">About Us</li>
          <li className="hover:cursor-pointer">Home</li>
          <li className="hover:cursor-pointer">Location</li>
          <li className="hover:cursor-pointer">Contact Us</li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex">
          <MenuSheet size={26} />
        </div>

        {/* Call Button */}
        <div className="hidden sm:flex px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          +91-9990905440
        </div>
      </div>

    </header>
  );
};

export default Header;
