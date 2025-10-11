import React from "react";

const Footer  = () =>{
    return(
      <div className="bg-amber-500 text-white font-bold p-5 mt-5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>All rights reserved © Shubha Sharma</div>
        
        <div className="flex space-x-6">
          <p className="cursor-pointer hover:underline">Instagram</p>
          <p className="cursor-pointer hover:underline">Gmail </p>
        </div>
      </div>
    </div>
    
    )
}

export default Footer