
import Topics from "@/Components/Todicslist";


const getdata = async()=>{
  try {
       const res = await fetch('http://localhost:3000/api/topics',{
         cache:"no-store"
       })
       if(!res.ok){
         throw new Error("Failed to fetch the data")
       }
       const data = await res.json();
       console.log(data);
       
       return data;
  } catch (error) {
    console.log(error);
    
  }
}
const  Home = async() =>{
  const result = await getdata();
  const val = result?.data || [];
  return (
        
         <div className="flex justify-evenly flex-wrap">
          {val.map((p,index) =>(
            <Topics 
              key={p._id}
              id={index + 1}
               title={p.title}
               description={p.description}
            />
         ))}
         </div>
  );
}

export default Home;