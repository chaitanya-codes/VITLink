'use client'
import React from "react";
import {auth} from "@/firebase/config";
import { useRouter } from 'next/navigation'
import Navbar from "../components/Navbar";
import Image from "next/image";
import img from "@/app/images/logo.png";
import { motion } from "framer-motion";
import img2 from "@/app/images/jobby.png";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "../styles/login.css"

const firebaseConfig = {

};


const handleGoogleLogin = async (auth) => {
  const provider = new GoogleAuthProvider();
  
  try {
    const router = useRouter(); // Initialize the Next.js router
    const result = await signInWithPopup(auth, provider);
    const userEmail = result.user.email;
    
    localStorage.setItem("userEmail", userEmail);
    
    router.push("/login");
    
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
          <div className="photu mb-0">
            <Jobby></Jobby>
          </div>
        </div>
        <div className="lbox flex flex-col container px-20 bg-white">
          <div className="flex gap-2 ml-18">
            <button onClick={(e) => changeColor(e.target)} className="but bg-[var(--Lights-Blue,_#E9EBFD)]">STUDENT</button>
            <button onClick={(e) => changeColor(e.target)} className="but bg-[var(--Neutrals-0,_#FFF)]">COMPANY</button>
          </div>
          <p className="bigText py-10">Get, Create More Opportunities</p>
          <button className="Vbut flex bg-orange-100">
            <div><Logo></Logo></div>
            <div className="vitText"><p className="text-2xl">Log in with VIT Mail</p></div>
          </button>
          
          <div>
            </div>
          <h6 className="mt-4">By clicking &apos;Continue&apos;, you acknowledge that you have read and<br/>accept the Terms of Service and Privacy Policy.</h6>
          
          <div className="thinL flex mt-16">
            <div className="l1 mt-5"></div>
            <div className="l2 mt-5"></div>
          </div>
          <h2 className=" mt-4 text-slate-800 text-3xl">ADMIN LOGIN:</h2>
          
          <p className="inlab" >Full Name</p>
            <input placeholder="Name" className="form"></input>
            <p className="inlab">Password</p>
            <input placeholder="password" type="password" className="form"></input>
          
          <button className="botbut my-5">Login</button>
        </div>
      </div>
    </div>
  );
}