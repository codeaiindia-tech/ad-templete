import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const Page2 = () => {
  return (
    <div className="w-full md:h-screen  flex flex-col">
      
      {/* ---------------- TOP SECTION ---------------- */}
      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center  p-6 md:p-10 lg:p-16 gap-10">

        {/* LEFT SIDE TEXT BLOCK */}
        <div className="w-full md:w-1/2 flex justify-center items-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                         text-gray-800 font-sans text-center font-bold leading-tight">
            Luxury Beyond the Ordinary – THE MONARQUE
          </h1>
        </div>

        {/* RIGHT SIDE PARAGRAPH + BUTTON */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start gap-6 px-3">
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-full text-center md:text-left">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet itaque aperiam possimus eligendi velit minima, debitis facere at laboriosam quis atque commodi. Ex nemo cumque eum pariatur explicabo porro atque unde officia rem dolorem maxime assumenda nisi aliquam quo, eius voluptates laborum, repudiandae consectetur tempore dolore fugiat esse! Maxime illum tenetur error libero voluptatibus dolorem atque, placeat reiciendis. Facere ullam ut numquam commodi perferendis odit.
          </p>

          <a
            href="#"
            className="text-white bg-yellow-500/85 px-6 py-3 text-base sm:text-lg rounded shadow-md hover:bg-yellow-500 transition"
          >
            Know More!
          </a>
        </div>
      </div>

      {/* ---------------- BOTTOM SECTION ---------------- */}
      <div className="w-full bg-gray-100 py-10 flex flex-col">

        {/* CARD GRID */}
        <div className="w-full flex flex-wrap justify-center gap-6 px-4">
          
          {/* CARD */}
          <div className="w-[80%] sm:w-[45%] md:w-[22%] bg-white p-6 rounded-xl shadow-lg flex justify-center items-center">
            <h1 className="text-black font-sans text-xl md:text-2xl text-center">
              3.5 BHK <br /> 2458 SQ.FT.
            </h1>
          </div>

          <div className="w-[80%] sm:w-[45%] md:w-[22%] bg-white p-6 rounded-xl shadow-lg flex justify-center items-center">
            <h1 className="text-black font-sans text-xl md:text-2xl text-center">
              4.5 BHK <br /> 3632 SQ.FT.
            </h1>
          </div>

          <div className="w-[80%] sm:w-[45%] md:w-[22%] bg-white p-6 rounded-xl shadow-lg flex justify-center items-center">
            <h1 className="text-black font-sans text-xl md:text-2xl text-center">
              Golf View with 180° Clear View
            </h1>
          </div>

          <div className="w-[80%] sm:w-[45%] md:w-[22%] bg-white p-6 rounded-xl shadow-lg flex justify-center items-center">
            <h1 className="text-black font-sans text-xl md:text-2xl text-center">
              8-Feet Long Jacuzzi Balcony
            </h1>
          </div>
        </div>

        {/* LOCATION + PRICING */}
        <div className="flex flex-col justify-center items-center pt-16 text-center px-4">
          
          <span className="flex justify-center items-center text-gray-700 pb-5 gap-2">
            <IoLocationOutline size={26} />
            <h1 className="text-base sm:text-lg">
              Sector-22D, Yamuna Express
            </h1>
          </span>

          <h1 className="text-black text-4xl sm:text-5xl md:text-5xl font-sans font-semibold">
            Pricing Starts At ₹2.34 Cr*
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-3xl text-gray-700 mt-4">
            Pre-Launch Benefits: ₹1.25 Cr*
          </h2>

          <p className="text-gray-500 mt-1">(Limited for first few bookings only)</p>
        
        </div>

      </div>
    </div>
  );
};

export default Page2;
