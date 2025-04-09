import connectDB from "@/libs/mongodb"
import  Topic  from "@/models/addtask";




export async function POST(request) {
  try {
    const { title, description } = await request.json();

    await connectDB();

    const newTopic=    await Topic.create({title,description})

    return Response.json(
      { message: "Topic created successfully", topic: newTopic },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error creating topic:", error);
    return Response.json(
      { message: "Failed to create topic", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request){
    try {
    await connectDB();
    const data = await Topic.find();
    return Response.json(
        { message: "Topic fetched successfully", data },
        { status: 200 }
      );
    } catch (error) {
    console.error("❌ Error fetching topic:", error);
    return Response.json(
      { message: "Failed to fetchig topic", error: error.message },
      { status: 500 }
    );
    }
} 






export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Topic.findByIdAndDelete(id);
    return Response.json(
        { message:"Topics deleted succefully" },
        {status:200})
}