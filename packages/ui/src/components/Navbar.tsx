import Link from "next/link";
import { getServerSession } from "next-auth";
import NavLinks from "./NavLinks";
import NavToggle from "./NavToggle";
import NavDropdown from "./NavDropdown";
import { NEXT_AUTH_CONFIG } from "../lib/auth";


export default async function Navbar() {
    const session = await getServerSession(NEXT_AUTH_CONFIG);
  return (
    <div>
      <nav className="bg-white bg-opacity-80 z-10 h-16 fixed border-gray-200 w-full border-b-[1px] shadow-sm px-8 flex items-center flex-1 backdrop-saturate-[180%] backdrop-blur-[5px]">
        <div className="flex items-center gap-6 w-full">
        <Link href="/" className="text-3xl font-semibold drop-shadow-md text-[#666]">TLRS</Link>
         <NavLinks/>
        </div>
        {(session && session.user) ? 
        <div className="flex items-center">
         <NavDropdown email={session.user.email}/>
      </div> : 
      <div className="flex items-center gap-5 vlg:gap-3">
      <Link href="/login" className="text-sm font-medium no-underline px-5 py-4 items-center bg-transparent flex border-[#e5e7eb] border-[1px] shadow-sm h-8 rounded-md hover:bg-[#F4F5F6] transition-all duration-150 ease-in-out">Login</Link>
      <Link href="/signup" className="text-sm font-medium no-underline px-5 py-4 items-center text-white bg-black h-8 rounded-md shadow-sm hover:bg-[#2f2f2f] transition-all duration-150 ease-in-out hidden vlg:flex">Signup</Link>
      <NavToggle/>
      </div>
      }
      </nav>
    </div>
  )
}
