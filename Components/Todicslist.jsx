

import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Topics = ({id,title ,description}) =>{
    return (
          <div className=" min-h-10  mt-7 ml-2 rounded-lg  w-64 border-2 border-amber-800">
            <div className=" text-center  bg-amber-800">
                  Task :{id}
                  </div>
                  <div>
                    <p>Title:{title}</p>
                    <p>description :{description}</p>
                  </div>
                  <div className="flex justify-around mt-7 mb-0 ">
                  <p><MdDelete className="text-red-500 h-5 w-10 cursor-pointer"/></p>
                  <p><FaEdit  className="text-blue-500 h-5 w-10 cursor-pointer"/></p>  
                  </div>
            </div>
            
    )
}

export default Topics;