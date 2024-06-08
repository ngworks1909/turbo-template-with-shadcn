"use client"
import {useState, useEffect} from 'react'
type Card = {
    image: string,
    id: string,
    dress: string

}
const useCardData = () => {
    const [carditems, setCardItems] = useState<Card[]>([]);
const [loading, setLoading] = useState(true);
const items = [
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/shirt.jpeg?alt=media&token=81829c94-9579-4ba6-a723-b06209bf3f76",
      dress: "SHIRT",
      id: "67t330GY1ZF1D43Nn2c4"
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/pant.jpeg?alt=media&token=cc3bf7b0-772d-45f2-acb3-3cb878b08041",
      dress: "PANT",
      id: "1poY3ws9OrtpKTDw8y3X"
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/dress.jpeg?alt=media&token=f8f3c368-f106-4e52-86f4-a3cc13276911",
      dress: "DRESS",
      id: "3w7JtJpbeZ4xEb3HZPua"
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/kurti.jpeg?alt=media&token=630aaa36-548e-4a52-b595-37c2ce593e98",
      dress: "KURTA",
      id: "v3jo2wYEEN0DEf4RqDKS"
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tlrs-893dc.appspot.com/o/safari.jpeg?alt=media&token=191c131d-0e29-42b7-aef2-6084a188c599",
      dress: "SAFARI",
      id: "3UXBG6xiioIFiEYq3Ke4"
    }
  ];
    useEffect(() => {
        setCardItems(items);
        setLoading(false);

    }, []);
    return {carditems, loading};
}

export default useCardData