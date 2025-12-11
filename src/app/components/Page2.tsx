import React from 'react'
import { IoLocationOutline } from "react-icons/io5";

const Page2 = () => {
    return (
        <div className='h-screen w-full bg-white flex flex-col' >
            <div className='w-full h-1/2 flex justify-center items-center'>
                <div className='w-[45%] h-full flex justify-center items-center px-10' >
                    <h1 className='text-6xl text-gray-800 font-sans text-center font-bold leading-tight'>Luxury Beyond the Ordinary - THE MONARQUE</h1>
                </div>
                <div className='w-[55%] h-full flex justify-center items-start flex-col gap-y-5' >
                    <p className='text-gray-600 w-[80%] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed recusandae eveniet id perspiciatis pariatur voluptatem impedit deserunt temporibus quis, et numquam nesciunt nisi? Dolorum asperiores mollitia officia error, aperiam rerum nostrum. Quia aspernatur beatae quidem aliquam eveniet ex odio quaerat asperiores nam velit error laboriosam exercitationem omnis accusamus porro illum culpa, nisi officia nemo! Sed officia dolorum minima quod voluptatem nisi eveniet commodi doloremque harum quo soluta accusamus tempore saepe aliquam non accusantium temporibus quasi ipsum tenetur, explicabo labore vel eos. Soluta, fuga numquam.</p>
                    <button className='text-white bg-yellow-500/85 px-6 py-3 text-lg rounded' >Know More!</button>
                </div>
            </div>
            <div className='w-full h-1/2 bg-gray-100 pt-10 flex flex-col '>
                <div className='w-full flex justify-center items-center gap-x-40 pt-3'>
                    <div className=' w-[16vw] h-[7vw]  p-5 bg-white drop-shadow-xl rounded-md  flex justify-center items-center'>
                        <h1 className='text-black  font-sans text-2xl text-center'>3.5 BHK - <br /> 2458 SQ.FT. </h1>
                    </div>
                    <div className=' w-[16vw] h-[7vw] p-5 bg-white drop-shadow-xl rounded-md  flex justify-center items-center'>
                        <h1 className='text-black  font-sans text-2xl text-center'>4.5 BHK - <br /> 3632 SQ.FT. </h1>
                    </div>
                    <div className=' w-[16vw] h-[7vw] p-5 bg-white drop-shadow-xl rounded-md  flex justify-center items-center'>
                        <h1 className='text-black  font-sans text-2xl text-center'>Golf View with 180° clear view</h1>
                    </div>
                    <div className=' w-[16vw] h-[7vw] p-5 bg-white drop-shadow-xl rounded-md  flex justify-center items-center'>
                        <h1 className='text-black  font-sans text-2xl text-center'>8-Feet long Jacuzzi Balcony</h1>
                    </div>
                </div>
                <div className='flex justify-center items-center pt-16 flex-col '>
                    <span className='flex justify-center items-center text-gray-700 pb-5'>
                        <IoLocationOutline size={26} />
                        <h1 className='text-left text-lg'>Sector-22D, Yamuna Express</h1>
                    </span>
                    <h1 className='text-black text-5xl font-sans font-semibold'> Pricing Starts At ₹2.34 Cr* </h1>
                    <h2 className='text-3xl text-gray-700 mt-5'>Pre-Lanch Benefits: ₹1.25 Cr*</h2>
                    <p className='text-gray-500'>(Limited for first few bookings only)</p>
                </div>

            </div>
        </div>
    )
}

export default Page2
