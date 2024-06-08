"use client"
import { signOut } from "next-auth/react";
import { TbLogout } from "react-icons/tb";
export default function Logout() {
  return (
    <>
      <button className="flex items-center px-2 rounded-lg w-full" onClick={async(e) => {
        e.preventDefault();
        await signOut();
        }}>
            <TbLogout className="mr-3 text-red-400" size={25}/>
            <p className="text-red-400">Logout</p>
      </button>
    </>
  )
}
