import React from 'react'
import "@/app/styles/bluestyle.css";
import Image from "next/image";
import img from "@/app/images/picdssd.png";

const Logo = () => (
	<Image
	  src={img}// Corrected path, relative to the public folder
	  height={100} // Desired height
	  width={500}
       // Desired width
	  alt="Your Name"
	/>
);

export default function Blueshape() {
  return (
    <div className="mx-10 my-20">
      <div className="custom-shape flex pt-10">
        <div>
            <p className="blueFat ml-7 my-5">Find the perfect Scholars for your Projects</p>
            <p className="blueThin ml-7 ">Start posting internship advertisements and create a research network of people.</p>
            <button className='blueButton ml-7 mt-5 mb-3'>Sign Up for Free</button>
        </div>
        <div><Logo></Logo></div>
      </div>
      
    </div>
  )
}


