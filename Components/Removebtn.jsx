"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";

const Deletebtn = ({ id }) => {
  const router = useRouter();
  const handledlete = async () => {
    const confremed = confirm("are you sure to delete this");

    if (confremed) {
      const res = await fetch(`/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  // console.log(id);

  return (
    <MdDelete
      onClick={() => handledlete(id)}
      className="text-red-500 h-5 w-10 cursor-pointer"
    />
  );
};

export default Deletebtn;
