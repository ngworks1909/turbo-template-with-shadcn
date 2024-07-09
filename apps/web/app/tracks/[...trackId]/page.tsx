import React from 'react'
import Navbar from '@repo/ui/Navbar';
import Footer from '@repo/ui/footer';
import PriceItem from '@repo/ui/priceitem';
import {fetchTracks} from '@repo/actions/fetchTracks'

type Params = {
  trackId: string
}

export default async function page({params}: {params: Params}) {
  const id = params.trackId[0] || "";
  const tracks = await fetchTracks(id)
  return (
    <> 
     <div className="h-dvh w-dvw bg-slate-50 overflow-y-auto">
      <Navbar/>
      <div className="relative top-[60px]">
      <div className="text-[#000000b0] pl-10 mt-5 text-3xl font-semibold shadow-black drop-shadow-xl">Plans</div>
      <div className="grid gap-5 px-10 pb-10 pt-5 mlg:grid-cols-1 lg:grid-cols-2">
        <>
        {tracks && tracks.map((element : { id: number, premiumId: string, service: string, duration: string, price: string, priority: string, remaining: number }) => {
          return <PriceItem key={element.id} duration = {element.duration} price = {element.price} remaining = {element.remaining} service = {element.service} />
          })}
        </>
      </div>
       <Footer/>
      </div>
     </div>
    </>
  )
}
