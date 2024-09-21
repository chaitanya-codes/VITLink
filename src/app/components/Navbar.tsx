"use client";
import Image from 'next/image';
import React from 'react';
import img from "@/app/images/logo_dark.png";
import { useRouter } from 'next/navigation'; // Import useRouter

const Logo = () => (
	<Image
	  src={img}// Corrected path, relative to the public folder
	  height={65} // Desired height
	  width={65} // Desired width
	  alt="Your Name"
    />
);
		
const Navbar = ({showLogin}) => {
    const router = useRouter(); // Initialize useRouter

    // const auth = (isLogin) => {
    //     // if (isLogin) {
    //         router.push('/login'); // Redirect to login page
    //     // } else {
    //         // router.push('/signup'); // Redirect to signup page
    //     }
    // }
    const auth = () => {
        router.push('/login');
    }
    return (
        <div>
            <nav className="flex justify-between p-6 mx-0">
                <Logo />
                <div className="mr-auto text-white mt-1 text-[32px]">
                    <button className="justify-self-start self-start">VITLINK</button>
                </div>
                { showLogin ?
                <ul className="flex gap-10">
                    {/* <Image src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLn04toNQgLsOGrDNiUifCdidbC8unY2BZV8mrXe5qCN0EZ2N2"></Image> */}
                    <button onClick={() => auth()} className="text-white">Login</button>
                    <svg className="mt-3" xmlns="http://www.w3.org/2000/svg" width="1" height="48" viewBox="0 0 1 48" fill="none">
                        <line x1="0.5" y1="1.93721e-08" x2="0.499998" y2="48" stroke="#D6DDEB"/>
                    </svg>
                    <button className="text-white mr-8">Contact Us</button>
                </ul>: <span></span>
                }
            </nav>
        </div>
    )
}

export default Navbar