"use client";
import React from 'react'

function selectProject(project: string) {
    if (typeof window !== "undefined") {
        alert("YOU CLICKED " + project + " !")
    }
}

function getProjects() {
    const projects = ["Quantum Dot-Assisted Photonic Signal ", "AI-Driven Traffic Flow Optimization", "Biosensor-Enhanced Disease Detection", "Graphene-Based Flexible Electronics",
        "Data-Driven Predictive Healthcare", "Cognitive Load Assessment Virtual Reality", "CRISPR-Cas9 Mediated Gene Editing", "Smart City Development Through IoT"];

    return projects.map((project, index) => (
        <div key={index} className='py-10 px-16 bg-white m-5'>
            <svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g clip-path="url(#clip0_69_18258)">
                    <path d="M6 42.0001H14L40 16.0001C41.0609 14.9393 41.6569 13.5004 41.6569 12.0001C41.6569 10.4998 41.0609 9.06098 40 8.00012C38.9391 6.93925 37.5003 6.34326 36 6.34326C34.4997 6.34326 33.0609 6.93925 32 8.00012L6 34.0001V42.0001Z" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M29 11L37 19" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M24 16L14 6L6 14L16 24" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14 16L11 19" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 24L42 34L34 42L24 32" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 34L29 37" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_69_18258">
                        <rect width="48" height="48" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <button onClick={() => selectProject(project)}>
                <p className='font-russo text-lg mb-2'>{project}</p>
            </button>
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

export default ResearchProjects;