import React from 'react'

const Header = () => {
  return (
    <div className=' w-full h-[5vw] bg-white px-24 flex justify-between items-center shadow-xl ' >
        <div className='logo' >
            <img src="https://res.cloudinary.com/dpdwmxgd4/image/upload/v1761993695/Untitled_design_3_rxedn9.png" alt="" className='w-[13vw]' />
        </div>
        <div className='px-3 py-1 flex flex-row font-sans gap-7 justify-center items-center' >
            <li className='list-none flex flex-row gap-8  text-lg font-sans'>
                <ul className='hover:cursor-pointer' >Home</ul>
                <ul className='hover:cursor-pointer' >About Us</ul>
                <ul className='hover:cursor-pointer' >Location</ul>
                <ul className='hover:cursor-pointer' >Contact Us</ul>
            </li>
            <div className='px-4 py-3 bg-blue-500  text-white rounded hover:cursor-pointer hover:bg-blue-600 transition'>+91-9990905440</div>

        </div>
    </div>
  )
}

export default Header
