import Image from 'next/image';
import React from 'react'
import img from "@/app/images/logo_dark.png";

const Logo = () => (
	<Image
	  src={img}// Corrected path, relative to the public folder
	  height={58} // Desired height
	  width={58} // Desired width
	  alt="Your Name"
    />
);

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between p-6 mx-0">
                <Logo />
                <div className="mr-auto text-white mt-4">
                    <button className="justify-self-start self-start">VITLINK</button>
                </div>
                <ul className="flex gap-10">
                    {/* <Image src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLn04toNQgLsOGrDNiUifCdidbC8unY2BZV8mrXe5qCN0EZ2N2"></Image> */}
                    <button className="text-white">Login</button>
                    <button className="text-white mr-8">Sign Up</button>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar