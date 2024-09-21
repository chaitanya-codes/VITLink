"use client";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

export default function NextPage() {
    return (
      <div>
        <Navbar showLogin ={false}/>
        <div className="mx-28">
          <h1 className="text-4xl font-bold slogan-blue mb-4">Find Your Alumni</h1>
        </div>
        <SearchBar text1="Find by field" text2="Find by company"></SearchBar>
        <ResearchProjects></ResearchProjects>
      </div>
    );
  }
function selectProject(project: string) {
    if (typeof window !== "undefined") {
        alert("YOU CLICKED " + project + " !")
    }
}

function Capsule(text) {
    return (
        <div className="inline rounded-[80px] p-2 bg-[rgba(86,_205,_173,_0.10)]">{text}</div>
    )
}

function getProjects() {
    const projects = ["Anand Prakash", "John Wick ", "Super Man", "Bat Man", "Spider Man",
        "Varun", "Vishnu", "Gaurav Tas", "Reick static"];

    return projects.map((project, index) => (
        <div key={index} className='py-10 px-16 bg-white m-5'>
            <svg className="inline mr-4" xmlns="http://www.w3.org/2000/svg" width="49" height="58" viewBox="0 0 49 58" fill="none">
                <g clipPath="url(#clip0_69_21370)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 14.4938V42.9387L24.4321 57.6283L24.9992 56.7151L24.4321 29.1084L0.840059 14.5107L0 14.4938Z" fill="#449B82" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M48.5995 14.3602V43.2058L24.4316 57.6285V29.1085L47.7143 14.3819L48.5995 14.3602Z" fill="#9BDB9C" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.3 0.20401L48.6 14.3597L24.4321 29.5839L0 14.4933L24.3 0.20401Z" fill="#56CDAD" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M36.5063 11.5483L28.2876 16.413V26.2319L20.053 21.2873L12.1348 25.9742V46.497L20.3535 41.4004V30.3534L29.1317 35.957L36.5063 31.3839V11.5483Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_69_21370">
                        <rect width="48.6" height="57.6" fill="white" transform="translate(0 0.200012)" />
                    </clipPath>
                </defs>
            </svg>
            <button className="inline" onClick={() => selectProject(project)}>
                <p className='font-russo text-lg mb-2'>{project}</p>
            </button>
            <div className='mt-3'>
            
            {Capsule('Full-Time')}
            
            </div>
        </div>
    ))
}

const ResearchProjects = () => {
    return (
        <div>
            <div className='grid grid-cols-2 grid-rows-4'>
                {getProjects()}
            </div>
        </div>
    )
}

