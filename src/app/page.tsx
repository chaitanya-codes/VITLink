import Image from "next/image";
import "@/app/styles/styles.css";
import img from "@/app/images/logo.png";
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
				<nav className="flex p-6 mx-0">
					<div>
						<button className="justify-self-start self-start">VITLINK</button>
					</div>
					<Logo />
					<ul className="flex gap-10">
						{/* <Image src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLn04toNQgLsOGrDNiUifCdidbC8unY2BZV8mrXe5qCN0EZ2N2"></Image> */}
						<button>Login</button>
						<button className="mr-8">Sign Up</button>
					</ul>
				</nav>
			</header>
			<main>
				<div className="slogan m-28">
					Discover more than
					<p className="slogan-blue">500+ Internships & Research opportunities</p>
				</div>
				<p className="grey-text">Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
				<div className="m-32 flex justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="1192" height="414" viewBox="0 0 1192 414" fill="none">
						<path d="M0 63.5V414H999.712L1192 319.5V0H128.706L0 63.5Z" fill="#4640DE"/>
					</svg>
				</div>
			</main>
		</div>
	);
}
