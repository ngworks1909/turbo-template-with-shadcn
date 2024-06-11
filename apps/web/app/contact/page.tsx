import Footer from '@repo/ui/footer';
import Navbar from '@repo/ui/Navbar'
import React from 'react'
import { FaLocationDot, FaPhone } from "react-icons/fa6";



export default function page() {
  return (
    <div className='h-dvh w-dvw bg-slate-50 overflow-y-auto overflow-x-hidden'>
        <Navbar/>
        <div className="relative h-calc top-[60px] flex flex-col">
          <div className='md:flex flex-row-reverse justify-around p-10'>
          <div className="flex justify-center md:items-center">
          <input type="image" className='h-64 md:h-[370px] rounded-full' src={"https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/hello.png?alt=media&token=f8042bcd-6779-4de0-974f-5df4ec668e86"} alt="" />
          </div>
          <div className="flex py-10 justify-center flex-col items-center">
            <span className='text-[#42d166] font-medium'>How can we help you?</span>
            <span className='mt-4 text-2xl font-semibold drop-shadow-md text-[#666]'>Contact Us</span>
            <span className='mt-3 text-[#666] max-w-96 text-center'>We are here to help answer any questions you might have. We look forward to hear from you!</span>
            <div className='inline-block'>
            <div className='flex items-center mt-7 shadow-custom p-5 rounded-3xl flex-col gap-4 max-w-[300px]'>
              <div className='flex justify-center bg-gray-300 p-5 rounded-full'><FaLocationDot size={30}/></div>
              <div className=''>L.V Tailors, Near Lumbini School, Mettugadda, Mahabubnagar.</div>
            </div>
            <div className='flex items-center mt-5 p-5 rounded-3xl shadow-custom flex-col gap-4 max-w-[300px]'>
            <div className='flex justify-center bg-gray-300 p-5 rounded-full'><FaPhone size={30}/></div>
              <div className=''>9948512104</div>
            </div>
            </div>
            
            
          </div>
          </div>
          <Footer/>
        </div>
    </div>
  )
}
