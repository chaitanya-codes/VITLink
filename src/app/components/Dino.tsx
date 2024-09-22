import React from 'react'
import "@/app/styles/dino.css";
import Image from "next/image";
import img from "@/app/images/thugdino.png";

const Din = () => (
	<Image
	  src={img}// Corrected path, relative to the public folder
	  height={100} // Desired height
	  width={200} // Desired width
	  alt="Your Name"
	/>
);

export default function Dino() {
  return (
    <div>
        <div className='pic'><Din></Din></div>
        </div>
  )
}


