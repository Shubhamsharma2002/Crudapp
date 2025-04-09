import connectDB from "@/libs/mongodb";
import Topic from "@/models/addtask";

export async function PUT(request,{params}){
    const {id} = params;
    const {
        newTitle:title,
        newDescription:description
    } = await request.json();

    await connectDB();

    await Topic.findByIdAndUpdate(id,{title,description});
    return Response.json(
        {
            message:"updated successfully"
        },
        {
            status:200
        }
    )
}


export async function GET(request,{params}){
       const { id } = params;
       await connectDB();
       try {
        const data = await Topic.findById(id); 
        if (!data) {
          return new Response(JSON.stringify({ message: "Not found" }), { status: 404 });
        }
        return new Response(JSON.stringify(data), { status: 200 });
      } catch (error) {
        return new Response(JSON.stringify({ message: "Error fetching data", error }), { status: 500 });
      }
}