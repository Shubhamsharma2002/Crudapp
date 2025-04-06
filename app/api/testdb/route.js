import connectDB from "@/libs/mongodb";

export async function GET() {
    try {
      await connectDB();
      return Response.json({ message: "✅ MongoDB connected successfully!" });
    } catch (error) {
      return Response.json(
        { message: "❌ Failed to connect MongoDB", error: error.message },
        { status: 500 }
      );
    }
  }