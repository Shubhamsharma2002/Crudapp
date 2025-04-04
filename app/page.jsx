"use client";
import Topics from "@/Components/Todicslist";
import { useEffect, useState } from "react";


const  Home = () =>{
  const [val,setvalues] = useState([]);
      const getData = () =>{
          fetch(`https://jsonplaceholder.typicode.com/todos`)
          .then((res) => res.json())
          .then((data)=> setvalues(data.splice(0, 20)))
          .catch((error)=>console.log(error))
          
      }
        console.log(val);
        
          
      useEffect(()=>{
          getData();
      },[])
  return (
        
         <div className="flex justify-evenly flex-wrap">
          {val.map((p) =>(
            <Topics 
              key={p.id}
               id={p.id}
               title={p.title}
            />
         ))}
         </div>
  );
}

export default Home;