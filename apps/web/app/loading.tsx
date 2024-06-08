import NavSkeleton from '@repo/ui/navskeleton'
import React from 'react'
import CardSkeleton from '@repo/ui/cardskeleton'

export default function Loading() {
  return (
    <div className="h-dvh w-dvw overflow-y-auto bg-slate-50">
     <NavSkeleton/>
      <div className="relative top-[60px]">
      <div className="text-[#000000b0] pl-10 mt-5 text-3xl font-semibold shadow-black drop-shadow-xl">Services</div>
      <div className="grid grid-cols-1 gap-5 px-10 pb-10 pt-5 lg:grid-cols-2">
      <>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
      </> 
    </div>
      </div>
    </div>
  )
}
