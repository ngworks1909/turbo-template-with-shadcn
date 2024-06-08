export default function NavSkeleton() {
  return (
    <div className="bg-white bg-opacity-80 z-10 h-16 fixed border-gray-200 shadow-sm w-full border-b-[1px] px-8 flex items-center flex-1 backdrop-saturate-[180%] backdrop-blur-[5px]">
      <div className="flex items-center gap-6 w-full">
        <div className="text-3xl font-semibold drop-shadow-md text-[#666]">TLRS</div>
        <div className="hidden items-center gap-6 vlg:flex">
        <div className="no-underline rounded-sm text-sm text-[#666] transition-colors duration-150 ease-in-out ml-5 hover:text-black">Home</div>
        <div className="no-underline rounded-sm text-sm text-[#666] transition-colors duration-150 ease-in-out hover:text-black">Your Orders</div>
        <div className="no-underline rounded-sm text-sm text-[#666] transition-colors duration-150 ease-in-out hover:text-black">About</div>
        <div className="no-underline rounded-sm text-sm text-[#666] transition-colors duration-150 ease-in-out hover:text-black">Contact</div>
        <div className="no-underline rounded-sm text-sm text-[#666] transition-colors duration-150 ease-in-out hover:text-black">Directions</div>
        </div>
      </div>
      <div className="flex items-center gap-3 animate-pulse">
         <div className="h-9 w-20 bg-slate-200 rounded-3xl"></div>
         <div className="h-9 w-10 vlg:w-24 bg-slate-200 rounded-3xl"></div>
      </div>
    </div>
  )
}
