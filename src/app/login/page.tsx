"use client";
import Navbar from "../components/Navbar";
import "@/app/styles/login.css";
import Image from "next/image";
import img from "@/app/images/logo.png";
import img2 from "@/app/images/jobby.png";
const Logo = () => (
	<Image
	  src={img}// Corrected path, relative to the public folder
	  height={10} // Desired height
	  width={58} // Desired width
	  alt="LOGO"
	/>
);

const Jobby = () => (
	<Image
	  src={img2}// Corrected path, relative to the public folder
	  height={700} // Desired height
	  width={500} // Desired width
	  alt="Man"
	/>
);

const changeColor = (target) => {
  target.style.backgroundColor = "#FFF"
}

export default function NextPage() {
    return (
      <div>
        <Navbar showLogin ={false}/>
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