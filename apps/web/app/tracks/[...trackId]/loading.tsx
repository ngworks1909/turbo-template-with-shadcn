import NavSkeleton from "@repo/ui/navskeleton";
import PriceSkeleton from "@repo/ui/priceskeleton";
import React from "react";

export default function Loading() {
  return (
    <>
      <div className="h-dvh w-dvw bg-slate-50 overflow-y-auto">
        <NavSkeleton />
        <div className="relative top-[60px]">
          <div className="text-[#000000b0] pl-10 mt-5 text-3xl font-semibold shadow-black drop-shadow-xl">
            Plans
          </div>
          <div className="grid gap-5 px-10 pb-10 pt-5 mlg:grid-cols-1 lg:grid-cols-2">
            <>
              <PriceSkeleton />
              <PriceSkeleton />
              <PriceSkeleton />
              <PriceSkeleton />
            </>
          </div>
        </div>
      </div>
    </>
  );
}
