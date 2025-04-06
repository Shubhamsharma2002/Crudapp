import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
    {
        title:String,
        required:true
    },
    {
        description:String,
        required:true
    },
    {Timestamp:true}
);
export const Topic = mongoose.model("Topic",topicSchema);