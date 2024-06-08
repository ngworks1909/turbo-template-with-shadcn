"use client"
import { useEffect, useState } from 'react';

const useFetchData = (id: string) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/api/tracks', {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({id})
      }).then(async(response) => {
          const json = await response.json();
          if(json.success){
            const data = json.data;
            setItems(data);
          }
          setLoading(false)
        });
      },[id]);
    return {items, loading};
}

export default useFetchData
