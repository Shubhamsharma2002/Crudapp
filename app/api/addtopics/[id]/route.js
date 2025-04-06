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