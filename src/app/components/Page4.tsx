import React from "react";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const Page4 = () => {
  return (
    <div className="w-full md:h-screen bg-red-500 flex flex-col">

      {/* TOP HERO SECTION */}
      <div className="w-full h-[30vh] sm:h-[40vh] bg-black relative flex justify-center items-center">
        <img
          className="w-full h-full object-cover opacity-25"
          src="https://media.istockphoto.com/id/1215791152/photo/moonrise-over-south-central-mumbai-the-financial-capital-of-india-showing-a-glittering.jpg?s=2048x2048&w=is&k=20&c=IgrBOjwPpWSIQ5MPNfYBh1fgQpBFMYSGBE1342eKjPI="
          alt=""
        />

        <div className="absolute px-4 sm:px-10 text-center flex justify-center items-center">
          <h1 className="md:w-3/4 text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight">
            Are you ready for Luxurious Homes on Yamuna Expressway?
          </h1>
        </div>
      </div>

      {/* BOTTOM CONTACT + FORM SECTION */}
      <div className="w-full h-full sm:h-[65vh] flex flex-col lg:flex-row bg-gray-100 px-6 py-12 gap-12 lg:gap-0 justify-center items-center md:justify-between">

        {/* LEFT — CONTACT INFO */}
        <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-start text-left md:pl-48">
          <h1 className="text-black text-4xl sm:text-6xl lg:text-7xl font-sans font-semibold">
            Get in Touch!
          </h1>

          <p className="text-gray-600 font-sans mt-3 text-base sm:text-lg w-full sm:w-4/5">
            We are available 24x7, feel free to enquire about the site.
          </p>

          <ul className="mt-8 space-y-5">
            <li>
              <span className="flex items-center text-gray-700 gap-3">
                <IoLocationOutline size={24} />
                <h1 className="text-lg">Sector-22D, Yamuna Express</h1>
              </span>
            </li>

            <li>
              <span className="flex items-center text-gray-700 gap-3">
                <IoMdCall size={24} />
                <h1 className="text-lg">+91-9990905440</h1>
              </span>
            </li>

            <li>
              <span className="flex items-center text-gray-700 gap-3">
                <IoMdMail size={24} />
                <a  href="mailto:sales@monarquegreenbay.in" className="text-lg">sales@monarquegreenbay.in</a>
              </span>
            </li>
          </ul>
        </div>

        {/* RIGHT — FORM */}
        <div className="w-full lg:w-1/2 flex justify-center items-center md:pr-20">
          <form
            className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-5"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <h2 className="text-2xl font-semibold text-gray-800">Enquire Now</h2>

            <input
              type="hidden"
              name="access_key"
              value="5834a222-c34a-496f-9aaf-5e243f3e6f15"
            />

            {/* Name */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none text-black"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none text-black"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                required
                name="phone"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none text-black"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page4;
