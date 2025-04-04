import Link from "next/link";
import React from "react";

const Navabar = () => {
    return(
        <div className="flex justify-around  bg-amber-600 p-5 text-white font-bold">
           <Link href={'/'}>Logo</Link>
           <Link href={'/add-topics'}>add Topics</Link>
        </div>
    )
}

export default Navabar;