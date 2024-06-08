"use client"
import Navbar from "@repo/ui/Navbar";
import useCardData from "@repo/store/useCardData";
import NavSkeleton from "@repo/ui/navskeleton";
import Card from "@repo/ui/Card";
import CardSkeleton from "@repo/ui/cardskeleton";

export default function Home() {
  const {carditems, loading} = useCardData();
  return (
    <div className="h-dvh w-dvw overflow-y-auto bg-slate-50">
      {loading? <NavSkeleton/> : <Navbar/>}
      <div className="relative top-[60px]">
      <div className="text-[#000000b0] pl-10 mt-5 text-3xl font-semibold shadow-black drop-shadow-xl">Services</div>
      <div className="grid grid-cols-1 gap-5 px-10 pb-10 pt-5 lg:grid-cols-2">
         {loading ? <>
         <CardSkeleton/>
         <CardSkeleton/>
         <CardSkeleton/>
         <CardSkeleton/>
         </>: <>
         {carditems.map((card,index) => {
          return <Card key={index} image={card.image} id={card.id} dress={card.dress} content={card.content} />
         })}
         </> }
    </div>
      </div>
    </div>
  );
}