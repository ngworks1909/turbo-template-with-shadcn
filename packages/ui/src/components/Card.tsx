"use client"
import { AiOutlineRight, AiOutlineArrowRight } from "react-icons/ai";
import {useRouter} from 'next/navigation';
export default function Card({image, dress, id}: {image:string, dress: string, id:string}) {
  const router = useRouter();
  return (
    <div className="shadow-xl border-[1px] bg-white border-[#e5e7eb] h-64 p-5 cursor-pointer rounded-xl flex hover:border-[#b5c5ea] vsm:flex-col vsm:h-96 vvsm:flex-col vvsm:h-96"
    onClick={(e) => {
      e.preventDefault();
      router.push(`/tracks/${id}`)
    }} >
      <div className="flex items-center vsm:justify-center vvsm:justify-center">
      <input type="image" src={image} className="h-40 w-40 rounded-xl shadow-custom mr-8 vsm:mr-0 vvsm:mr-0" alt="" />
      </div>
      <div className="flex flex-col flex-1">
     <div className="flex flex-col justify-center flex-1">
         <span className="text-2xl font-semibold">{dress}</span>
         <span className="mt-3 line-clamp-3 text-ellipsis text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem excepturi quas soluta et. Mollitia iure reiciendis nostrum eligendi incidunt corporis facere cumque consequatur! Quidem?</span>
      </div>
      <div className="mt-3 flex justify-end">
           <button className="bg-[#111827] group text-sm flex items-center px-8 py-2 rounded-md gap-1 shadow-sm hover:bg-[#111827]/90" onClick={(e) => {
      e.preventDefault();
      router.push(`/tracks/${id}`)
      }}>
            <span className="text-white">Explore</span>
            <AiOutlineRight className="h-3 w-3 text-[#ffffffc9] group-hover:hidden duration-300 ease-in-out"/>
            <AiOutlineArrowRight className="h-3 w-3 text-[#ffffffc9] hidden group-hover:block duration-300 ease-in-out"/>
           </button>
      </div>
     </div>
    </div>
  )
}
