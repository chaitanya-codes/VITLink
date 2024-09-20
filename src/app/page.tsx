// import Image from "next/image";

export default function Home() {
	return (
		<div>
			<header>
				<nav className="flex justify-end bg-slate-200 p-8">
					<div>
						<button className="justify-self-start">VITLINK</button>
					</div>
					<ul className="flex gap-10">
						{/* <Image src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLn04toNQgLsOGrDNiUifCdidbC8unY2BZV8mrXe5qCN0EZ2N2"></Image> */}
						<button>Sign Up</button>
						<button>Login</button>
						<button>Contact Us</button>
						
					</ul>
				</nav>
			</header>
			<main>
				<div className="slogan">
					Discover more than 
					500+ Internships & Research opportunities
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
