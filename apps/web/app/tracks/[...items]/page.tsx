import React from 'react'
import Navbar from '@repo/ui/Navbar';
import TracksGroup from '@repo/ui/tracksgroup'
import Footer from '@repo/ui/footer';

export default function page() {

  return (
    <> 
     <div className="h-dvh w-dvw bg-slate-50 overflow-y-auto">
      <Navbar/>
      <div className="relative top-[60px]">
      <div className="text-[#000000b0] pl-10 mt-5 text-3xl font-semibold shadow-black drop-shadow-xl">Plans</div>
       <TracksGroup/>
       <Footer/>
      </div>
     </div>
    </>
  )
}
