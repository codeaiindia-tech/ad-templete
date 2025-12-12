import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CiMenuBurger } from 'react-icons/ci'

const MenuSheet = ({ size }: { size: Number }) => {
  return (
    <Sheet>
      <SheetTrigger><CiMenuBurger size={`${size}`} /></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='pt-10'>Welcome, here we bring the best deal to you!</SheetTitle>
          <SheetDescription className='text-black mt-5 flex flex-col justify-center items-center'>
            <ul className='font-sans font-semibold uppercase flex flex-col gap-y-5 w-full'>
              <li key={1} className='text-center border-b-2 p-1'>Home</li>
              <li key={2} className='text-center border-b-2 p-1'>About Us</li>
              <li key={3} className='text-center border-b-2 p-1'>contact Us</li>
            </ul>
            <div className='flex justify-center items-center gap-x-5  mt-5 w-full'>
              <h1 className='text-black text-[17px] font-semibold font-sans'>Give us a call @</h1>
              <a  href="tel:+919990905440" className=' rounded text-[16px] px-4 py-2 bg-blue-500  text-white'>+91-9990905440</a>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default MenuSheet
