"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Addtopics = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("title and description are requried");
      return;
    }
    console.log("working fine");
    try {
      const data = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (data.ok) {
        const result = await data.json(); // parse the response body
        console.log("Topic added:", result);

        router.push("/");
      } else {
        throw new Error("Failed to add data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5 font-extrabold text-blue-600">
        Add topics here ...
      </h1>

      <div className="w-[400px] mx-auto items-center mt-15 border-2 border-blue-500 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label htmlFor="title" className="font-semibold">
            Title:
          </label>
          <input
            type="text"
            id="title"
            onChange={(e) => settitle(e.target.value)}
            placeholder="Enter the title..."
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label htmlFor="description" className="font-semibold">
            Description:
          </label>
          <input
            type="text"
            id="description"
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Enter the description..."
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
  
};

export default Addtopics;
