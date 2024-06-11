import { Link } from "@nextui-org/react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";


export default function Footer() {
  return (
    <div className="bg-white py-10 flex justify-center items-center border-[#eaeaea] border-t-[1px] shadow-sm mt-20 w-full flex-col">
      <div className="flex w-full justify-evenly vvsm:flex-col vvsm:items-center">
        <div className="flex flex-col gap-20 vvsm:flex-row">
            <div className="flex items-center gap-2">
                <input className="h-8 w-8 rounded-full invert" type="image" src="https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/logo.png?alt=media&token=e32751af-93b0-44ca-b42d-0dbc0e8cfe00" alt="TL" />
                <span className="text-2xl font-semibold drop-shadow-md text-[#666]">TLRS</span>
            </div>
            <div className="flex items-center justify-center gap-5">
              <FaXTwitter size={25}/>
              <FaInstagram size={25}/>
            </div>
        </div>
        <div className="flex flex-col gap-5 vvsm: mt-10">
            <span className="text-sm font-medium leading-5">Quick Links</span>
            <div className="flex flex-col gap-2">
                <Link className="text-sm leading-5 text-[#666]" href="/">Terms & Conditions</Link>
                <Link className="text-sm leading-5 text-[#666]" href="/">Privacy Policy</Link>
            </div>
        </div>
      </div>
    </div>
  )
}
