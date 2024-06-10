"use client"
import { RxCross2 } from 'react-icons/rx';
import { NavOpen } from '@repo/store/navopen';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Link } from '@nextui-org/react';


export default function NavLinks() {
  const setOpen = useSetRecoilState(NavOpen);
  const open = useRecoilValue(NavOpen);
  return (
    <>
      <div className={`z-[2] items-center gap-6 py-6 h-dvh w-[75%] vlg:h-fit vlg:py-0 bg-[#f0f0f0] vlg:bg-transparent vlg:w-full absolute vlg:relative flex  ${open ? 'right-0': 'right-[-75%]'} vlg:left-0 flex-col vlg:flex-row top-0 transition-right duration-150 ease-linear z-10`}>
      <button className="vlg:hidden flex items-start w-full pl-6 bg-transparent"><RxCross2 size={25} onClick={() => {setOpen(false)}} /></button>
        <Link href="/" className="no-underline rounded-sm text-md vlg:text-sm text-[#666] transition-colors duration-150 ease-in-out ml-5 hover:text-black" onClick={() => {setOpen(false)}}>Home</Link>
        <Link href="/orders" className="no-underline rounded-sm text-md vlg:text-sm text-[#666] transition-colors duration-150 ease-in-out hover:text-black" onClick={() => {setOpen(false)}}>Your Orders</Link>
        <Link href="/about" className="no-underline rounded-sm text-md vlg:text-sm text-[#666] transition-colors duration-150 ease-in-out hover:text-black" onClick={() => {setOpen(false)}}>About</Link>
        <Link href="/contact" className="no-underline rounded-sm text-md vlg:text-sm text-[#666] transition-colors duration-150 ease-in-out hover:text-black" onClick={() => {setOpen(false)}}>Contact</Link>
        <Link href="https://www.google.com/maps/place/Q236%2B3R4,+PR+Colony,+Mahbubnagar,+Telangana+509001/@16.7526888,78.0120699,21z/data=!4m14!1m7!3m6!1s0x3bca2961051592e5:0x5e52598e4200778!2sSri+Laxmi+Venkateshwara+Electrical+Works!8m2!3d16.7524833!4d78.0120994!16s%2Fg%2F11q26m4k8y!3m5!1s0x3bca28a90c1d32e7:0x30416577710595bb!8m2!3d16.7526573!4d78.0120579!16s%2Fg%2F11sh63fbw7?entry=ttu" target="_blank" className="no-underline rounded-sm text-md vlg:text-sm text-[#666] transition-colors duration-150 ease-in-out hover:text-black" onClick={() => {setOpen(false)}}>Directions</Link>
         </div>
      
    </>
  )
}
