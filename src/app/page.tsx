import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import {Categories, Internships} from "./components/Categories"
import Footer from "@/app/components/Footer";
import ResearchProjects from "@/app/components/ResearchProjects"
import Blueshape from "./components/Blueshape";
import "@/app/styles/styles.css";

export default function Home() {
	return (
		<div>
			<header>
				<Navbar></Navbar>
			</header>
			<main className="m-28">
				<Hero></Hero>
				<Blueshape/>
				{/* <div className="m-32 flex justify-center">

				<Categories></Categories>
				<div className="m-32 flex justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="1192" height="414" viewBox="0 0 1192 414" fill="none">
						<path d="M0 63.5V414H999.712L1192 319.5V0H128.706L0 63.5Z" fill="#4640DE"/>
						
					</svg>
				</div> */}
				<Internships></Internships>
				<ResearchProjects></ResearchProjects>

				<Categories></Categories>
				<Internships></Internships>
			</main>
			<Footer></Footer>
		</div>
	);
}