import React from "react";

const Addtopics = () => {
  return (
    <div className="w-[400px] mx-auto mt-10 border-2 border-blue-500 p-6 rounded-lg shadow-lg">
      <form action="/" className="flex flex-col space-y-4">
        <label htmlFor="title" className="font-semibold">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter the title..."
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label htmlFor="description" className="font-semibold">Description:</label>
        <input
          type="text"
          id="description"
          placeholder="Enter the description..."
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addtopics;
