
"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditTopics =() =>{
     const params = useParams();
     const id = params.id;
    //  console.log(id);
     
     const [data, setdata] = useState({
            title:'',
           
     });
     const handleInput = (e) => {
      let name = e.target.name;
      console.log("name",name)
      let value = e.target.value;
  
      setdata({
        ...data,
        [name]: value,
      });
    };
     const getData = () =>{
           fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
           .then((res)=>res.json())
           .then((data)=> setdata(data))
           .catch((error)=>console.log(error))
     }

     useEffect(()=>{
           getData();
     },[])
    return(
      <>
          <h1 className="text-center mt-5 font-extrabold text-blue-600">Edit topics here ...</h1>
        <div className="w-[400px] mx-auto mt-10 border-2 border-blue-500 p-6 rounded-lg shadow-lg">
      <form action="/" className="flex flex-col space-y-4">
        <label htmlFor="title" className="font-semibold">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={data.title}
          onChange={handleInput}
          placeholder="Enter the title..."
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label htmlFor="description" className="font-semibold">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={data.description}
          onChange={handleInput}
          placeholder="Enter the description..."
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Edit
        </button>
      </form>
    </div>

    </>
    )
}

export default EditTopics