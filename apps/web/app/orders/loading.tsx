import React from 'react'
import NavSkeleton from '@repo/ui/navskeleton'
import PriceSkeleton from '@repo/ui/priceskeleton'

export default function Loading() {
  return (
    <div className='h-dvh w-dvw overflow-y-auto bg-slate-50'>
      <NavSkeleton/>
      <div className='relative top-[60px] h-calc flex flex-1 flex-col'>
        <div className="text-[#000000b0] pl-10 mt-5 text-3xl font-semibold shadow-black drop-shadow-xl">Order History</div>
        <div className='grid grid-cols-1 gap-5 px-10 pb-10 pt-5 mlg:grid-cols-1 lg:grid-cols-2'>
          <PriceSkeleton/>
          <PriceSkeleton/>
          <PriceSkeleton/>
          <PriceSkeleton/>
        </div>
      </div>
    </div>
  )
}
