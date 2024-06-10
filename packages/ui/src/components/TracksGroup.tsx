"use client"
import {useParams} from 'next/navigation'
import useFetchData from '@repo/store/useFetchData'
import PriceSkeleton from '../skeletons/PriceSkeleton'
import PriceItem from './PriceItem'

export default function TracksGroup() {
  const params = useParams()
  const id = params.items && params.items[0] || ""
  const {items, loading} = useFetchData(id);
  return (
    <>
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
    </>
  )
}
