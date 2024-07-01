"use client"
import { useState } from 'react';
import { PiUser, PiPaintBrushBroad, PiLockOpen  } from "react-icons/pi";



export default function ProfileLinks() {
  const [active, setActive] = useState("account");
  const scrolledToSection = async(sectionId: string) => {
    const element = document.getElementById(sectionId);
    if(element) {
        const scrollToY = sectionId === 'account' ? 0 : sectionId === 'appeareance' ? 646.7999877929688 : 1177.5999755859375
        const scroller = document.getElementById('profilescroll');
        scroller?.scrollTo({top: scrollToY, behavior: "smooth"});
    }
  };
  // useEffect(() => {
  //   const scroller = document.getElementById('profilescroll');
  //   scroller?.addEventListener('scroll', () => {
  //       const top = scroller.scrollTop ;
  //       if(top >= 0 && top < 646.7999877929688){
  //           setActive('account');
  //       }
  //       else if( top >= 646.7999877929688 && top < 857.5999755859375){
  //           setActive('appeareance')
  //       }
  //       else{
  //           setActive('updatepassword');
  //       }
  //   })
  // })
  return (
    <div className='flex flex-col mt-10'>
        <div onClick={async() => {await scrolledToSection('account'); setActive('account')}} className={`flex px-3 py-2 rounded-md cursor-pointer items-center gap-2 ${active === 'account' && 'bg-gray-200'}`}>
        <PiUser className='h-6 w-6'/>
        <span className='font-bold'>Account</span>
        </div>
        <div onClick={async() => {await scrolledToSection('appeareance'); setActive('appeareance')}} className={`flex px-3 py-2 rounded-md cursor-pointer items-center gap-2 ${active === 'appeareance' && 'bg-gray-200'}`}>
        <PiPaintBrushBroad className='h-6 w-6'/>
        <span className='font-bold'>Appeareance</span>
        </div>
        <div onClick={async() => {await scrolledToSection('updatepassword'); setActive('updatepassword')}} className={`flex px-3 py-2 rounded-md cursor-pointer items-center gap-2 ${active === 'updatepassword' && 'bg-gray-200'}`}>
        <PiLockOpen className='h-6 w-6'/>
        <span className='font-bold'>Password</span>
        </div>
    </div>
  )
}
