"use client";

import React from 'react'
import "@/app/styles/hero.css";
import { useRouter } from 'next/navigation'; // Import useRouter

// function SearchIcon() {
//     return (
//         <svg className="sc-icon scale-[2.5] mt-4 mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
//             <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
//         </svg>
//     )
// }

const Hero = () => {
    const router = useRouter(); // Initialize useRouter

    const intership_route = () =>
    {
        router.push('/internship');
    }
    const research_opportunities = () =>
        {
            router.push('/research');
        }
    const alumini_connect = () =>
        {
            router.push('/alumni');
        }
    return (
        <div>
            <div className="slogan mb-4 font-russo">
                Discover more than
                <p className="slogan-blue">500+ Internships, Research opportunities and Mentorship</p>
            </div>
            <p className="grey-text ml-2">Great platform for the job seeker</p>
            <p className="grey-text ml-2">that searching for new career heights and passionate about startups.</p>

            <div className="flex bg-[#eff1f2] p-6 items-center justify-around mt-[20px] mb-[20px] flex-1 ml-2">
                {/* <div className='flex'>
                    <SearchIcon></SearchIcon>
                    <input type="search" className="p-2 w-[23vw] drop-shadow" placeholder="Professors, Internships, Projects" />
                </div>
                <div className='flex'>
                    <SearchIcon></SearchIcon>
                    <input type="search" className="p-2 w-[23vw] drop-shadow" placeholder="Professors, Internships, Projects" />
                </div> */}
                <button  onClick={() => intership_route()} className='blue-btn w-48'>Find Internships</button>
                <button  onClick={() => research_opportunities()} className='blue-btn w-48'>Find Research Opportunities</button>

                <button onClick={() => alumini_connect()} className='blue-btn w-48'>Connect to alumni</button>
            </div>
        </div>
    )
}

export default Hero