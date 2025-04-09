
import React from "react";

import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import Deletebtn from "./Removebtn";


const Topics = ({id,title ,description,val}) =>{
  
    return (
          <div className=" min-h-10  mt-7 ml-2 rounded-lg  w-64 border-2 border-amber-800">
            <div className=" text-center  bg-amber-800">
                  Task :{val}
                  </div>
                  <div>
                    <p>Title:{title}</p>
                    <p>description :{description}</p>
                  </div>
                  <div className="flex justify-around mt-7 mb-0 ">
                
                  <p><Deletebtn id={id} /></p>
                
                  
                  <Link href={`/editTopics/${id}`}>
                  <p><FaEdit  className="text-blue-500 h-5 w-10 cursor-pointer"/></p>  
                  </Link>
                  
                  </div>
            </div>
            
    )
}

export default Topics;