'use client'
import React from "react";
import {auth} from "@/firebase/config";
import { useRouter } from 'next/navigation'

import Navbar from "../components/Navbar";
import Image from "next/image";
import img from "@/app/images/logo.png";
import { motion } from "framer-motion";
import img2 from "@/app/images/jobby.png";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

};

// Initialize Firebase
  const router = useRouter(); // Initialize the Next.js router


const handleGoogleLogin = async (auth) => {
  const provider = new GoogleAuthProvider();
  
  try {
    const result = await signInWithPopup(auth, provider);
    const userEmail = result.user.email;
    
    // Store the user's email in localStorage
    localStorage.setItem("userEmail", userEmail);
    
    // Redirect to your desired page after login
    router.push("/your-redirect-page");
    
  } catch (error) {
    console.error("Error during Google login:", error);
  }
};


const Logo = () => (
  <Image
    src={img}// Corrected path, relative to the public folder
    height={10} // Desired height
    width={58} // Desired width
    alt="LOGO"
  />
);

const Jobby = () => (
  <div>
    <Image
      src={img2}// Corrected path, relative to the public folder
      height={700} // Desired height
      width={500} // Desired width
      alt="Man"
    />
    <div className="w-[20vw] h-[30vh] bg-white relative bottom-40 left-44">
      <div className="bg-blue-600 size-20 rounded-full inline-block absolute right-5 -top-7  border-gray-300 border-8"></div>
      <p className="font-bold text-gray-500 ml-4 pt-4">Adam Sandler</p>
      <p className="text-gray-500 ml-4">Lead Engineer at Canva</p>
      <blockquote className="pl-20 pt-8 font-bold">“Great platform for the opportunity seeker that searching for new career heights.”</blockquote>
    </div>
  </div>

);

const changeColor = (target) => {
  target.style.backgroundColor = "var(--Lights-Blue, #E9EBFD)";
  (Array.from(document.getElementsByClassName("but")) as HTMLElement[])
  .filter(e => e != target)[0]
  .style.backgroundColor = "#FFF";
}

export default function NextPage() {
  return (
    <div>
      <Navbar showLogin={false} />
      <div className="flex">
        <div className="pbox">
          <div className="photu  mb-0">
            <Jobby></Jobby>
          </div>
        </div>
        <div className="lbox container px-20">
          <div className="2buts flex justify-center gap-2 mt-1 ml-20">
            <button onClick={(e) => changeColor(e.target)} className="but bg-[var(--Lights-Blue,_#E9EBFD)]">STUDENT</button>
            <button onClick={(e) => changeColor(e.target)} className="but bg-[var(--Neutrals-0,_#FFF)]">COMPANY</button>
          </div>
          <p className="bigText py-10">Get, Create More Opportunities</p>
          <button className="Vbut flex">
            <div><Logo></Logo></div>
            <div className="vitText"><p>Log in with VIT Mail</p></div>
          </button>
          <div className="thinL flex">
            <div className="l1 mt-5"></div>
            <p className="sstt mt-2">Or Sign Up</p>
            <div className="l2 mt-5"></div>
          </div>
          <div>
            <p className="inlab" >Full Name</p>
            <input placeholder="Name" className="form"></input>
            <p className="inlab">VIT Mail</p>
            <input placeholder="Vit Email" className="form"></input>
            <p className="inlab">Password</p>
            <input placeholder="" type="password" className="form"></input>
          </div>
          <button className="botbut my-5">SUBMIT</button>
          <h6 className="">By clicking &aposContinue&apos, you acknowledge that you have read and accept the Terms of Service and Privacy Policy.</h6>
          <h1>This is the Next Page</h1>
        </div>
      </div>
    </div>
  );
}
