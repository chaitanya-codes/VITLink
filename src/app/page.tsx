import Image from "next/image";
import "@/app/styles/styles.css";
import img from "@/app/images/logo_dark.png";

const Logo = () => (
	<Image
	  src={img}// Corrected path, relative to the public folder
	  height={58} // Desired height
	  width={58} // Desired width
	  alt="Your Name"
	/>
);

export default function Home() {
	return (
		<div>
			<header>
				<nav className="flex ml-5 justify-between gap-2 p-6 mx-0 first-of-type:">
					<Logo />
					<div className="mr-auto text-white text-xl">
						<button className="font-redhat mt-3">VITLINK</button>
					</div>
					<ul className="flex gap-10">
						{/* <Image src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLn04toNQgLsOGrDNiUifCdidbC8unY2BZV8mrXe5qCN0EZ2N2"></Image> */}
						<button className="text-blue-600">Login</button>
						<svg xmlns="http://www.w3.org/2000/svg" width="1" height="48" viewBox="0 0 1 48" fill="none">
							<line x1="0.5" y1="1.93721e-08" x2="0.499998" y2="48" stroke="#D6DDEB"/>
						</svg>
						<button className="text-white mr-10 px-5 bg-blue-600">Sign Up</button>
					</ul>
				</nav>
			</header>
			<main className="m-28">
				<div className="slogan mb-4">
					Discover more than
					<p className="slogan-blue">500+ Internships ,Research opportunities & Connect to aluminiiiiiii</p>
				</div>
				<p className="grey-text">Great platform for the job seeker</p>
				<p className="grey-text"> that searching for new career heights and passionate about startups.</p>

				<div className="bg-white p-10 flex">
					<div className="flex">
						<svg className="sc-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
							<path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
						</svg>
							<div className="drop-shadow">
								<input type="search" className="p-2 input-s" placeholder="Professors, Internships, Projects"/>
							</div>
					</div>
					
				</div>
				<div className="m-32 flex justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="1192" height="414" viewBox="0 0 1192 414" fill="none">
						<path d="M0 63.5V414H999.712L1192 319.5V0H128.706L0 63.5Z" fill="#4640DE"/>
					</svg>
				</div>
				
			</main>
		</div>
	);
}
