import Image from "next/image";
import "@/app/styles/styles.css";
import img from "@/app/images/logo_dark.png";
import Hero from "./components/Hero.jsx";

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
				<nav className="flex ml-5 justify-between gap-2 p-6 mx-0">
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
				<Hero></Hero>
				<div className="m-32 flex justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="1192" height="414" viewBox="0 0 1192 414" fill="none">
						<path d="M0 63.5V414H999.712L1192 319.5V0H128.706L0 63.5Z" fill="#4640DE"/>
					</svg>
				</div>
				Explore by category
			</main>
		</div>
	);
}
