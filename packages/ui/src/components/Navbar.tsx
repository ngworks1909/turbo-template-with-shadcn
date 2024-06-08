"use client"
import Link from "next/link";
import { FaRegQuestionCircle, FaRegUser } from 'react-icons/fa';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";

import { HiMenuAlt3 } from "react-icons/hi";
// import NavProfile from "./NavProfile";
// import NavOptions from "../providers/navoptions";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Logout from "./Logout";

export default function Navbar() {
    const session = useSession();
    const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white bg-opacity-80 z-10 h-16 fixed border-gray-200 w-full border-b-[1px] shadow-sm px-8 flex items-center flex-1 backdrop-saturate-[180%] backdrop-blur-[5px]">
        <div className="flex items-center gap-6 w-full">
        <Link href="/" className="text-3xl font-semibold drop-shadow-md text-[#666]">TLRS</Link>
         <div className={`z-[2] items-center gap-6 py-6 h-dvh w-[75%] vlg:h-fit vlg:py-0 bg-[#f0f0f0] vlg:bg-transparent vlg:w-full absolute vlg:relative flex  ${open ? 'right-0': 'right-[-75%]'} vlg:left-0 flex-col vlg:flex-row top-0 transition-right duration-150 ease-linear z-10`}>
          <button className="vlg:hidden flex items-start w-full pl-6 bg-transparent"><RxCross2 size={25} onClick={() => {setOpen(false)}} /></button>
        <Link href="/" className="no-underline rounded-sm text-md vlg:text-sm text-[#666] transition-colors duration-150 ease-in-out ml-5 hover:text-black" onClick={() => {setOpen(false)}}>Home</Link>
        <Link href="/orders" className="no-underline rounded-sm text-md vlg:text-sm text-[#666] transition-colors duration-150 ease-in-out hover:text-black" onClick={() => {setOpen(false)}}>Your Orders</Link>
        <Link href="/about" className="no-underline rounded-sm text-md vlg:text-sm text-[#666] transition-colors duration-150 ease-in-out hover:text-black" onClick={() => {setOpen(false)}}>About</Link>
        <Link href="/contact" className="no-underline rounded-sm text-md vlg:text-sm text-[#666] transition-colors duration-150 ease-in-out hover:text-black" onClick={() => {setOpen(false)}}>Contact</Link>
        <Link href="https://www.google.com/maps/place/Q236%2B3R4,+PR+Colony,+Mahbubnagar,+Telangana+509001/@16.7526888,78.0120699,21z/data=!4m14!1m7!3m6!1s0x3bca2961051592e5:0x5e52598e4200778!2sSri+Laxmi+Venkateshwara+Electrical+Works!8m2!3d16.7524833!4d78.0120994!16s%2Fg%2F11q26m4k8y!3m5!1s0x3bca28a90c1d32e7:0x30416577710595bb!8m2!3d16.7526573!4d78.0120579!16s%2Fg%2F11sh63fbw7?entry=ttu" target="_blank" className="no-underline rounded-sm text-md vlg:text-sm text-[#666] transition-colors duration-150 ease-in-out hover:text-black" onClick={() => {setOpen(false)}}>Directions</Link>
         </div>
        </div>
        {(session && session.data) ? 
        <div className="flex items-center">
        <div className="flex gap-5">
          <Dropdown className="bg-gray-700" backdrop="blur">
              <DropdownTrigger>
              <Avatar
                    isBordered
                    as="button"
                    className="transition-transform z-[1]"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
        
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem className="hover:bg-grayimp">
                   <div className="flex flex-col cursor-pointer px-2 py-1 gap-1 rounded-lg">
                      <h2 className="font-medium text-white text-sm">Signed in as</h2>
                      <span className="font-medium text-[#dbd9d9] line-clamp-1 leading-normal text-sm">{session.data.user?.email}</span>
                   </div>
                </DropdownItem>
                <DropdownItem className="hover:bg-grayimp mt-1">
                <Link href="/" className="flex items-center px-2 py-1 rounded-lg">
                      <FaRegUser className="mr-4 text-white" size={20}/>
                      <span className="text-white">Profile</span>
                </Link>
                </DropdownItem>
                <DropdownItem className="hover:bg-grayimp">
                <Link href="/help" className="flex items-center px-2 py-1 rounded-lg">
                      <FaRegQuestionCircle className="mr-4 text-white" size={20}/>
                      <p className="text-white">Help & Support</p>
                </Link>
                </DropdownItem>
                <DropdownItem className="hover:bg-grayimp">
                  <Logout/>
                </DropdownItem>
              </DropdownMenu>
          </Dropdown>
    <button className="bg-transparent" onClick={() => 
        {setOpen(true)}}><HiMenuAlt3 className="flex vlg:hidden h-7 w-7"/></button>
        </div>
      </div> : 
      <div className="flex items-center gap-5 vlg:gap-3">
      <Link href="/login" className="text-sm font-medium no-underline px-5 py-4 items-center bg-transparent flex border-[#e5e7eb] border-[1px] shadow-sm h-8 rounded-md hover:bg-[#F4F5F6] transition-all duration-150 ease-in-out">Login</Link>
      <Link href="/signup" className="text-sm font-medium no-underline px-5 py-4 items-center text-white bg-black h-8 rounded-md shadow-sm hover:bg-[#2f2f2f] transition-all duration-150 ease-in-out hidden vlg:flex">Signup</Link>
      <button className="bg-transparent" onClick={() => 
        {setOpen(true)}}><HiMenuAlt3 className="flex vlg:hidden h-7 w-7"/></button>
      </div>
      }
      </nav>
    </div>
  )
}
