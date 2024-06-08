"use client"
import Navbar from "@repo/ui/Navbar";
import Card from "@repo/ui/Card";

export default function Home() {
  const carditems = [
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/shirt.jpeg?alt=media&token=81829c94-9579-4ba6-a723-b06209bf3f76",
      dress: "SHIRT",
      id: "67t330GY1ZF1D43Nn2c4",
      content: "A formal shirt is a classic garment typically made from fine fabrics like cotton or linen, designed for formal occasions."
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/pant.jpeg?alt=media&token=cc3bf7b0-772d-45f2-acb3-3cb878b08041",
      dress: "PANT",
      id: "1poY3ws9OrtpKTDw8y3X",
      content: "A formal pant, often referred to as dress trousers, is a staple of professional and elegant attire."
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/dress.jpeg?alt=media&token=f8f3c368-f106-4e52-86f4-a3cc13276911",
      dress: "DRESS",
      id: "3w7JtJpbeZ4xEb3HZPua",
      content: "A formal dress is an elegant garment designed for special occasions and events requiring a high level of sophistication."
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/kurti.jpeg?alt=media&token=630aaa36-548e-4a52-b595-37c2ce593e98",
      dress: "KURTA",
      id: "v3jo2wYEEN0DEf4RqDKS",
      content: "A kurta is a traditional garment worn primarily in South Asia, known for its comfort and versatility."
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/safari.jpeg?alt=media&token=191c131d-0e29-42b7-aef2-6084a188c599",
      dress: "SAFARI",
      id: "3UXBG6xiioIFiEYq3Ke4",
      content: "A safari suit worn by guards is a practical and durable uniform designed for both functionality and comfort."
    }
  ];
  return (
    <div className="h-dvh w-dvw overflow-y-auto bg-slate-50">
     <Navbar/>
      <div className="relative top-[60px]">
      <div className="text-[#000000b0] pl-10 mt-5 text-3xl font-semibold shadow-black drop-shadow-xl">Services</div>
      <div className="grid grid-cols-1 gap-5 px-10 pb-10 pt-5 lg:grid-cols-2">
      <>
         {carditems.map((card,index) => {
          return <Card key={index} image={card.image} id={card.id} dress={card.dress} content={card.content} />
         })}
      </> 
    </div>
      </div>
    </div>
  );
}