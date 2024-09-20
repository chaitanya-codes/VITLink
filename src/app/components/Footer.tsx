"use client";
import "@/app/styles/footerstyles.css";
import Image from "next/image";
import img from "@/app/images/logo_dark.png";
const Logo = () => (
	<Image
	  src={img}// Corrected path, relative to the public folder
	  height={10} // Desired height
	  width={58}
       // Desired width
	  alt="Your Name"
	/>
);
	
export default function Footer(){
    return <footer className="bg-slate-800">
        <div className="bg-slate-800 flex mt-10 px-20 fobb">
            <div>
                <div className="flex"><Logo ></Logo><p className="vfoot1lt ">VITLINK</p></div>
                <p className="foottexts">Great platform for the internship and research opportunities seeker. Find your dream job easier.</p>
            </div>
            
        
        <div className=" mr-30 m-10 fele">
            <p className="footheads">
                About
            </p>
            <p className="foottexts">Companies</p>
            <p className="foottexts">Privacy</p>
            <p className="foottexts">Terms </p>
            <p className="foottexts">Advice</p>
            <p className="foottexts">Privacy Policy</p>
        </div>
        <div className="m-10 fele">
            <p className="footheads">
                About
            </p>
            <p className="foottexts">Companies</p>
            <p className="foottexts">Privacy</p>
            <p className="foottexts">Terms </p>
            <p className="foottexts">Advice</p>
            <p className="foottexts">Privacy Policy</p>
        </div>
        <div className="m-10 fele">
            <p className="footheads">
                About
            </p>
            <p className="foottexts">Companies</p>
            <p className="foottexts">Privacy</p>
            <p className="foottexts">Terms </p>
            <p className="foottexts">Advice</p>
            <p className="foottexts">Privacy Policy</p>
        </div>
        <div className="m-10 fele">
            <p className="footheads">
                Get Job Notifications
            </p>
            <p className="foottexts">The latest job news, articles, sent to your inbox weekly.</p>
            <div className="flex my-5">
                <input className="footInput" defaultValue="Email Address"></input>
                <button className="footerButton mx-5">SUBMIT</button>
            </div>
        </div>
        
    </div>
    <div className="footLine fele"></div>
    <div className="pt-5 pb-10 px-20 "><p className="foottexts">2024 @ EscroWebz. All rights reserved.</p></div>    
        
    </footer>
}

