"use client"
import { AiOutlineArrowRight, AiOutlineRight } from "react-icons/ai"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button , useDisclosure} from "@nextui-org/react";
import { Order } from "./OrderCard";

export default function DetailsButton({details}: {details: Order}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const status = details.status;

  const images = {
    '1': "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/shirt.jpeg?alt=media&token=81829c94-9579-4ba6-a723-b06209bf3f76",
    '2': "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/pant.jpeg?alt=media&token=cc3bf7b0-772d-45f2-acb3-3cb878b08041",
    '3': "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/dress.jpeg?alt=media&token=f8f3c368-f106-4e52-86f4-a3cc13276911",
    '4': "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/kurti.jpeg?alt=media&token=630aaa36-548e-4a52-b595-37c2ce593e98",
    '5': "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/safari.jpeg?alt=media&token=191c131d-0e29-42b7-aef2-6084a188c599"
  }

  const itemname = details.itemname;

  const handleDate = (date: Date) => {
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
  }
  return (
    <>
    <button onClick={async(e) => {
      e.preventDefault(); 
      onOpen()}} className="bg-[#111827] group text-sm flex items-center px-8 py-2 rounded-md gap-1 shadow-sm hover:bg-[#111827]/90 vvsm:justify-center">
            <span className="text-white">Details</span>
            <AiOutlineRight className="h-3 w-3 text-[#ffffffc9] group-hover:hidden duration-300 ease-in-out"/>
            <AiOutlineArrowRight className="h-3 w-3 text-[#ffffffc9] hidden group-hover:block duration-300 ease-in-out"/>
    </button>
    <Modal isOpen={isOpen} 
        placement={"auto"}
        onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Order Details</ModalHeader>
              <ModalBody>
                 <div className="flex flex-col gap-2">
                 <div className="flex justify-center">
                 <input type="image" className=" h-20 w-20 rounded-xl shadow-custom mr-8 vsm:mr-0 vvsm:mr-0" src={itemname === "SHIRT"? images[1]: itemname === 'PANT' ? images[2] : itemname === 'DRESS'? images[3]: itemname === 'KURTI'? images[4]: images[5]} alt="" />
                 </div>
                 <div className="flex justify-between mt-4">
                   <span>Order Id</span>
                   <span className="text-sm text-slate-800 font-bold w-24">{details.orderId}</span>
                 </div>
                 <div className="flex justify-between">
                   <span>Order Date</span>
                   <span className="text-sm text-slate-800 font-bold w-24">{handleDate(details.orderDate)}</span>
                 </div>
                 <div className="flex justify-between">
                   <span>Item</span>
                   <span className="text-sm text-slate-800 font-bold w-24">{itemname}</span>
                 </div>
                 
                 <div className="flex justify-between">
                   <span>Status</span>
                   <span className="text-sm text-slate-800 font-bold w-24">{status}</span>
                 </div>
                 <div className="flex justify-between">
                   <span>Delivered on </span>
                   <span className={`text-sm font-bold w-24 ${(status==='Queued'|| status==='Started' || status ==='Stitched') ? 'text-orange-400' : (status==='Collected')? 'text-[#419453]': 'text-red-400'}`}>{handleDate(details.deliveredOn)}</span>
                   
                 </div>
                 <div className="flex justify-between">
                   <span>Service</span>
                   <span className="text-sm text-slate-800 font-bold w-24">{details.service}</span>
                 </div>

                 <div className="flex justify-between mt-5 pt-4 border-t-1 border-dashed border-black">
                   <span>Basic Price</span>
                   <span className="text-sm text-slate-800 font-medium w-24">{"INR" + " "+ details.basic_price + '.' + Array(2 + 1).join('0')}</span>
                 </div>
                 <div className="flex justify-between">
                   <span>Tax</span>
                   <span className="text-sm text-slate-800 font-medium w-24">{"INR" + " "+ details.tax + '.' + Array(2 + 1).join('0')}</span>
                 </div>

                 <div className="flex justify-between">
                   <span>Total Price</span>
                   <span className="text-sm text-slate-800 font-medium w-24">{"INR" + " "+ details.total_price + '.' + Array(2 + 1).join('0')}</span>
                 </div>
              </div>
                 
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
