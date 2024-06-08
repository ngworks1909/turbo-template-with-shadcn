export default function CardSkeleton() {
  return (
    <div className="shadow-xl border-[1px] bg-white border-[#e5e7eb] h-64 p-5 cursor-pointer rounded-xl flex hover:border-[#b5c5ea] vsm:flex-col vsm:h-96 vvsm:flex-col vvsm:h-96" >
      <div className="flex items-center vsm:justify-center vvsm:justify-center">
      <div className="h-40 w-40 rounded-xl mr-8 bg-slate-200 animate-pulse vsm:mr-0 vvsm:mr-0"></div>
      </div>
      <div className="flex flex-col flex-1">
     <div className="flex flex-col justify-center flex-1">
         <span className="h-8 w-24 font-semibold bg-slate-200 rounded-3xl animate-pulse"></span>
         <span className="mt-3 flex flex-col gap-1">
            <div className="w-full h-4 bg-slate-200 rounded-3xl animate-pulse"></div>
            <div className="w-full h-4 bg-slate-200 rounded-3xl animate-pulse"></div>
            <div className="w-1/2 h-4 bg-slate-200 rounded-3xl animate-pulse"></div>
         </span>
      </div>
      <div className="mt-3 flex justify-end">
           <div className="bg-slate-200 rounded-3xl h-8 w-32 animate-pulse"></div>
      </div>
     </div>
    </div>
  )
}
