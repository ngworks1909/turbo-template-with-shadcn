import React from 'react'
import construction from '../../public/construction.svg'
import Image from 'next/image'
import Navbar from '@repo/ui/Navbar'


export default function page() {
  return (
    <>
    <div className="h-dvh w-dvw bg-slate-50 overflow-y-auto">
     <Navbar/>
      <div className="relative top-[60px] h-calc">
      <div className='flex items-center justify-center h-full flex-col gap-10'>
        <Image src={construction} className='h-[200px] sm:h-[300px] transition-all ease-linear' alt="Under Development" />
        <span className='text-xl font-medium text-center'>We're sorry! App is under development</span>
      </div>
      </div>
    </div>
    </>
  )
}
