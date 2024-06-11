export default function PriceItem({duration, service, price, remaining}: {duration: string, service: string, price: string, remaining: number}) {
    const images = {
        '1': "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/nitro.jpeg?alt=media&token=fcdd7b67-06fe-4cf5-b928-30665e534de5",
        '2': "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/bus.jpeg?alt=media&token=2c798494-c7c0-4c7b-99a7-1e5bb348faf0",
        '3': "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/swift.jpeg?alt=media&token=bb02c971-cdd0-496a-a31b-60e7d01c2a7e",
        '4': "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/rabbit.jpeg?alt=media&token=cb33244f-6eff-4b65-a6b3-7c754c8ec774"
    }
  return (
    <div className="shadow-xl border-[1px] bg-white border-[#e5e7eb] h-64 p-5 rounded-xl flex hover:border-[#b5c5ea] vsm:flex-col vsm:h-[380px] vvsm:h-[440px] vvsm:flex-col">
       <div className="flex items-center vsm:justify-center vvsm:justify-center">
        <input type="image" className="h-40 w-40 rounded-xl shadow-custom mr-8 vsm:mr-0 vvsm:mr-0" src={
            duration==='1'? images[1]: duration==='2'? images[2]:
            duration==='4'?images[3]: images[4]
        } alt="" />
       </div>
       <div className="flex flex-col flex-1">
     <div className="flex flex-col justify-center flex-1">
         <span className="text-2xl font-semibold">{service}</span>
         <span className="mt-3 line-clamp-3 text-[#666] text-ellipsis text-md">Get your item stitched in {duration} {Number(duration) > 1 ? "days": "day"}</span>
      </div>
      <div className="mt-3 flex flex-row justify-between vvsm:flex-col vvsm:gap-4">
      <span className="text-sm font-medium no-underline px-5 py-4 flex items-center bg-transparent border-[#e5e7eb] border-[1px] shadow-sm h-8 rounded-md bg-[#F4F5F6] transition-all duration-150 ease-in-out vvsm:justify-center text-[#666]">Available Slots: {remaining}</span>
           <button className="bg-[#111827] group text-sm flex items-center px-8 py-2 rounded-md gap-1 shadow-sm hover:bg-[#111827]/90 vvsm:justify-center">
            <span className="text-white">INR: {price}</span>
           </button>
      </div>
     </div>
    </div>
  )
}
