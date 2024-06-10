"use client"
import { NavOpen } from "@repo/store/navopen"
import { HiMenuAlt3 } from "react-icons/hi"
import { useSetRecoilState } from "recoil"

export default function NavMenu() {
  const setOpen = useSetRecoilState(NavOpen);
  return (
    <>
      <button className="bg-transparent" onClick={() => 
        {setOpen(true)}}><HiMenuAlt3 className="flex vlg:hidden h-7 w-7"/></button>
    </>
  )
}
