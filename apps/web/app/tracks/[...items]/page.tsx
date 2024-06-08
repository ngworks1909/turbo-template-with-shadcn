"use client"
import React from 'react'
import Navbar from '@repo/ui/Navbar';
import {useParams} from 'next/navigation'
import useFetchData from '@repo/store/useFetchData';
import PriceSkeleton from '@repo/ui/priceskeleton';
import PriceItem from '@repo/ui/priceitem';
import NavSkeleton from '@repo/ui/navskeleton';


export default function page() {
  const params = useParams()
  const id = params.items && params.items[0] || ""
  const {items, loading} = useFetchData(id);

  return (
    <> 
     <div className="h-dvh w-dvw bg-slate-50 overflow-y-auto">
      {loading ? <NavSkeleton/>: <Navbar/>}
      <div className="relative top-[60px]">
      <div className="text-[#000000b0] pl-10 mt-5 text-3xl font-semibold shadow-black drop-shadow-xl">Plans</div>
      <div className="grid gap-5 px-10 pb-10 pt-5 mlg:grid-cols-1 lg:grid-cols-2">
        {loading ? <>
         <PriceSkeleton/>
         <PriceSkeleton/>
         <PriceSkeleton/>
         <PriceSkeleton/>
        </>:
        <>
        {items && items.map((element: {id: string, duration: string, price: string, remaining: number, service: string}) => {
          return <PriceItem key={element.id} duration = {element.duration} price = {element.price} remaining = {element.remaining} service = {element.service} />
          })}
        </>}
      </div>
      </div>
     </div>
    </>
  )
}
