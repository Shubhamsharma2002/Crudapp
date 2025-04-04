

import React from "react";


const Topics = ({id,title ,description}) =>{
    return (
          <div className=" mt-7 ml-2 rounded-lg  w-64 border-2 border-amber-800">
            <div className=" text-center  bg-amber-800">
                  Task :{id}
                  </div>
                  <div>
                    <p>Title:{title}</p>
                    <p>description :{description}</p>
                  </div>
                  <div className="flex justify-around">
                     <p>edit</p>
                     <p>delete</p>
                  </div>
            </div>
            
    )
}

export default Topics;