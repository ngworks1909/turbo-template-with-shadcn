"use client"
import Link from "next/link";
import { FaRegQuestionCircle, FaRegUser } from 'react-icons/fa';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";
import Logout from "./Logout";
import NavMenu from "./NavMenu";

export default function NavDropdown({email}: {email: string}) {
  return (
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
                      <span className="font-medium text-[#dbd9d9] line-clamp-1 leading-normal text-sm">{email}</span>
                   </div>
                </DropdownItem>
                <DropdownItem className="hover:bg-grayimp mt-1">
                <Link href="/profile" className="flex items-center px-2 py-1 rounded-lg">
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
          <NavMenu/>
        </div>
  )
}
