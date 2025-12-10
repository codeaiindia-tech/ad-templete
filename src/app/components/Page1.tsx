"use client"
import React from 'react'
import Header from './Header'
import Swiper from '../utils/Swiper'
import { FaArrowRightLong } from "react-icons/fa6";

const Page1 = () => {
  return (
    <div className="w-full h-screen text-black bg-white text-center " >
      <Header/>
      <div className='relative'>
        <Swiper/>
        <div className='absolute top-0 left-0 z-10 bg-black/55 w-full h-full flex flex-col justify-center items-center gap-y-5'>
            <h1 className='text-8xl text-white font-bold font-serif border-y-2 border-white' >THE MONARQUE</h1>
            <p className='text-lg text-gray-200 w-[40%]'>Innovation thrives when curious minds explore bold ideas, turning challenges into opportunities while embracing constant learning, creative thinking, and meaningful collaboration that inspires progress and lasting impact.</p>
            <button className='px-6 py-3 text-white bg-green-600 rounded flex justify-center items-center hover:cursor-pointer hover:bg-green-500 transition mt-5' >CONTACT US</button>
        </div>
      </div>
    </div>
  )
}

export default Page1
