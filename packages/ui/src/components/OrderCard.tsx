import { FaRegClock } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineRight } from "react-icons/ai"
import { MdDoneAll } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

type Order = {
  orderDate: Date,
  itemname: string,
  service: string,
  status: string,
}
export default function OrderCard({orderDate, itemname, service, status}: Order) {
    const images = {
        '1': "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/shirt.jpeg?alt=media&token=81829c94-9579-4ba6-a723-b06209bf3f76",
        '2': "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/pant.jpeg?alt=media&token=cc3bf7b0-772d-45f2-acb3-3cb878b08041",
        '3': "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/dress.jpeg?alt=media&token=f8f3c368-f106-4e52-86f4-a3cc13276911",
        '4': "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/kurti.jpeg?alt=media&token=630aaa36-548e-4a52-b595-37c2ce593e98",
        '5': "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/safari.jpeg?alt=media&token=191c131d-0e29-42b7-aef2-6084a188c599"
    }
  return (
    <div className="shadow-xl border-[1px] bg-white border-[#e5e7eb] h-64 p-5 rounded-xl flex hover:border-[#b5c5ea] vsm:flex-col vsm:h-[380px] vvsm:h-[440px] vvsm:flex-col">
       <div className="flex items-center vsm:justify-center vvsm:justify-center">
        <input type="image" className="h-40 w-40 rounded-xl shadow-custom mr-8 vsm:mr-0 vvsm:mr-0" src={itemname === "SHIRT"? images[1]: itemname === 'PANT' ? images[2] : itemname === 'DRESS'? images[3]: itemname === 'KURTI'? images[4]: images[5]} alt="" />
       </div>
       <div className="flex flex-col flex-1">
     <div className="flex flex-col justify-center flex-1">
         <div className="flex gap-2 items-center">
         <div className="text-2xl font-semibold">{itemname}</div>
         <div className="text-3xl font-thin text-gray-400">/</div>
         <div className="text-md font-semibold text-gray-600">{service}</div>
         </div>
         <span className="mt-3 line-clamp-2 text-ellipsis text-md">Ordered on {orderDate.toString()}</span>
      </div>
      <div className="mt-3 flex flex-row justify-between vvsm:flex-col vvsm:gap-4">
           <div className={`flex items-center gap-1 ${(status==='Queued'|| status==='Started' || status ==='Stitched') ? 'text-orange-400' : (status==='Collected')? 'text-[#419453]': 'text-red-400'} transition-all ease-in-out bg-gray-200 px-5 gap-1 rounded-3xl shadow-lg`}>
            {(status==='Queued'|| status==='Started' || status === 'Stitched') ? <FaRegClock/> : (status==='Collected')? <MdDoneAll/> : <RxCrossCircled/>}
            <span className="text-md font-medium">{status}</span>
           </div>
           <button className="bg-[#111827] group text-sm flex items-center px-8 py-2 rounded-md gap-1 shadow-sm hover:bg-[#111827]/90 vvsm:justify-center">
            <span className="text-white">Details</span>
            <AiOutlineRight className="h-3 w-3 text-[#ffffffc9] group-hover:hidden duration-300 ease-in-out"/>
            <AiOutlineArrowRight className="h-3 w-3 text-[#ffffffc9] hidden group-hover:block duration-300 ease-in-out"/>
           </button>
      </div>
     </div>
    </div>
  )
}
