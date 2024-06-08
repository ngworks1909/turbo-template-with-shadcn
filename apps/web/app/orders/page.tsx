
import Navbar from '@repo/ui/Navbar'
import OrderCard from '@repo/ui/OrderCard'
import React from 'react'
import { fetchOrders } from '@repo/actions/fetchOrders'

type Order = {
  orderDate: Date,
  itemname: string,
  service: string,
  status: string,
}

export default async function page() {
  const orders = await fetchOrders();
  return (
    <div className='h-dvh w-dvw overflow-y-auto bg-slate-50'>
      <Navbar/>
      <div className='relative top-[60px] h-calc flex flex-1 flex-col'>
        <div className="text-[#000000b0] pl-10 mt-5 text-3xl font-semibold shadow-black drop-shadow-xl">Order History</div>

        {orders.length === 0 ? <div className='flex items-center justify-center w-full flex-col opacity-60 flex-1'>
            <input type="image" className='h-[300px] sm:h-[500px] ease-in-out transition-all vsm:h-[400px]' src="https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/no%20orders.png?alt=media&token=1d407d5b-fc70-4eba-8a10-e50520347e73" alt="" />
            <span className='text-2xl font-semibold line-clamp-2'>Sorry You don't have</span>
            <span className='text-2xl font-semibold'>any order</span>
        </div>:
        <div className='grid grid-cols-1 gap-5 px-10 pb-10 pt-5 mlg:grid-cols-1 lg:grid-cols-2'>
           {orders.map((order: Order, index: number) => {
             return <OrderCard key={index} orderDate={order.orderDate} itemname={order.itemname} service={order.service} status={order.status} />
           })}
        </div>}
         
      </div>
    </div>
  )
}
