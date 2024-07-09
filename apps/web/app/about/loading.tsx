import NavSkeleton from '@repo/ui/navskeleton'
import React from 'react'

export default function Loading() {
  return (
    <div className='h-dvh w-dvw bg-slate-50 overflow-y-auto'>
      <NavSkeleton/>
      <div className='relative top-[60px]'>
        <div className='w-full flex justify-center pt-10'>
          <div className='object-cover w-[80%] animate-pulse bg-gray-200 sm:h-[500px] sm:w-[90%] rounded-3xl shadow-lg'></div>
        </div>
      </div>
    </div>
    
  )
}

