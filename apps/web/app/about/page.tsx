import Navbar from '@repo/ui/Navbar'
import React from 'react'

export default function page() {
  return (
    <div className='h-dvh w-dvw bg-slate-50 overflow-y-auto'>
      <Navbar/>
      <div className='relative top-[60px]'>
        <div className='w-full flex justify-center pt-10'><input type="image" className='object-cover w-[80%] sm:h-[500px] sm:w-[90%] rounded-3xl transition-all duration-300 ease-in-out shadow-lg' src="https://ideogram.ai/api/images/direct/E5c8HXwVQT6qzqEE5rePhw.png" alt="" /></div>
      <div className='flex items-center justify-center pt-10 flex-col gap-3'>
        <span className="text-6xl font-semibold drop-shadow-md text-[#666]">TLRS</span>
        <span className='text-[#666] relative before:content-[""] before:absolute before:bg-[#666] before:w-[80px] before:left-[-100px] sm:before:w-[150px] before:h-[1px] before:top-1/2 sm:before:left-[-170px] after:content-[""] after:absolute after:bg-[#666] after:w-[80px] sm:after:w-[150px] after:h-[1px] after:top-1/2 after:left-[103px] transition-all duration-300 ease-in-out'>Since 2014</span>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 transition-all duration-300 ease-in-out'>
           <div className='h-56 w-56 shadow-custom rounded-3xl flex items-center flex-col flex-1 p-10'>
            <span className='text-3xl font-semibold flex-1 flex items-center'>
              <span>2500+</span>
            </span>
            <span className='text-2xl font-medium'>SHIRTS</span>
           </div>
           <div className='h-56 w-56 shadow-custom rounded-3xl flex items-center flex-col flex-1 p-10'>
            <span className='text-3xl font-semibold flex-1 flex items-center'>
              <span>3000+</span>
            </span>
            <span className='text-2xl font-medium'>PANTS</span>
           </div>
           <div className='h-56 w-56 shadow-custom rounded-3xl flex items-center flex-col flex-1 p-10'>
            <span className='text-3xl font-semibold flex-1 flex items-center'>
              <span>1500+</span>
            </span>
            <span className='text-2xl font-medium'>KURTAS</span>
           </div>
           <div className='h-56 w-56 shadow-custom rounded-3xl flex items-center flex-col flex-1 p-10'>
            <span className='text-3xl font-semibold flex-1 flex items-center'>
              <span>800+</span>
            </span>
            <span className='text-2xl font-medium'>SAFARI</span>
           </div>
        </div>
        <div className="flex items-center w-full flex-col bg-[#d7d6d6] pb-10 pt-5">
          <span className='text-[#666] text-2xl font-semibold'>Our Mission</span>
          <span className='w-[80%] lg:w-[50%] mt-5'>
            There's this notion that to grow a business, you have to be ruthless.But we know there is a better way to grow. One where what's good for the bottom line is also good for the customers. We believe businesses can grow with a conscience, and succeed with a soul.
          </span>
        </div>
      </div>
      </div>
    </div>
  )
}
