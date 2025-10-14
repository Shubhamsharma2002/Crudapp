import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// ✅ Prevents "Cannot overwrite model" error during dev/hot reload
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);


export default Topic;
