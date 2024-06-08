export default function PriceSkeleton() {
  return (
    <div className="shadow-xl border-[1px] bg-white border-[#e5e7eb] h-64 p-5 rounded-xl flex vsm:flex-col vsm:h-[350px] vvsm:h-[440px] vvsm:flex-col">
       <div className="flex items-center vsm:justify-center vvsm:justify-center">
         <div className="h-40 w-40 rounded-xl bg-slate-200 animate-pulse mr-8 vsm:mr-0 vvsm:mr-0"></div>
       </div>
       <div className="flex flex-col flex-1">
     <div className="flex flex-col justify-center flex-1">
         <span className="h-8 w-24 bg-slate-200 rounded-3xl animate-pulse"></span>
         <span className="mt-3 flex flex-col gap-1">
         <div className="w-full h-4 bg-slate-200 rounded-3xl animate-pulse"></div>
            <div className="w-1/2 h-4 bg-slate-200 rounded-3xl animate-pulse"></div>
         </span>
      </div>
      <div className="mt-3 flex flex-row justify-between vvsm:flex-col vvsm:gap-4">
      <span className="h-8 w-40 bg-slate-200 rounded-3xl animate-pulse vvsm:w-full"></span>
      <div className="bg-slate-200 rounded-3xl h-8 w-32 animate-pulse vvsm:w-full"></div>
      </div>
     </div>
    </div>
  )
}
