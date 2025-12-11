import React from 'react'
import { IoMdCall, IoMdMail } from 'react-icons/io'
import { IoLocationOutline } from 'react-icons/io5'

const Page4 = () => {
    return (
        <div className='w-full h-screen bg-white'>
            <div className='w-full h-[35%] bg-black relative flex justify-center items-center' >
                <img className='w-full h-full object-cover opacity-25' src="https://media.istockphoto.com/id/1215791152/photo/moonrise-over-south-central-mumbai-the-financial-capital-of-india-showing-a-glittering.jpg?s=2048x2048&w=is&k=20&c=IgrBOjwPpWSIQ5MPNfYBh1fgQpBFMYSGBE1342eKjPI=" alt="" />
                <div className='absolute z-1'>
                    <h1 className='w-5xl text-center text-white text-6xl font-sans font-bold leading-tight'>Are you ready for Luxurious Homes on Yamuna Expressway?</h1>
                </div>
            </div>
            <div className='w-full h-[65%] bg-gray-100 flex justify-center items-center p-18'>
                <div className='w-[40%] h-full  p-3 flex flex-col items-start justify-normal pt-24' >
                    <h1 className='text-black text-7xl font-sans font-semibold '>Get in Touch!</h1>
                    <p className='text-gray-600 font-sans mt-3 text-lg'> We are available 24x7, feel free to enquire about the site.</p>
                    <ul className='mt-15 list-none  flex flex-col justify-center items-start gap-y-5 pl-2'>
                        <li>
                            <span className='flex justify-center items-center text-gray-700 gap-3'>
                                <IoLocationOutline size={24} />
                                <h1 className='text-left text-lg'>Sector-22D, Yamuna Express</h1>
                            </span>
                        </li>
                        <li>
                            <span className='flex justify-center items-center text-gray-700 gap-3'>
                                <IoMdCall size={24} />
                                <h1 className='text-left text-lg'>+91-9990905440</h1>
                            </span>
                        </li>
                        <li>
                            <span className='flex justify-center items-center text-gray-700 gap-3'>
                                <IoMdMail size={24} />
                                <h1 className='text-left text-lg'>investordelights@gmail.com</h1>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className='w-[40%] h-full flex justify-center items-center'>
                    <form
                        className="w-[25vw] h-[22vw] mx-auto bg-white shadow-lg rounded-xl p-6 space-y-5"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800">Enquire Now</h2>

                        {/* Name */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
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
                                name="phone"

                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        {/* Submit Button */}
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
    )
}

export default Page4
