"use client";
import React from 'react';

function selectCategory(category: string) {
    if (typeof window !== "undefined") {
        alert("YOU CLICKED " + category + " !")
    }
}

function getCategories(categories) {
    return categories.map((category, index) => (
        <div key={index} className='py-14 px-16 bg-white hover:bg-[#312bea] m-5'>
            <svg className="mb-6 " xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g clipPath="url(#clip0_69_18258)">
                    <path d="M6 42.0001H14L40 16.0001C41.0609 14.9393 41.6569 13.5004 41.6569 12.0001C41.6569 10.4998 41.0609 9.06098 40 8.00012C38.9391 6.93925 37.5003 6.34326 36 6.34326C34.4997 6.34326 33.0609 6.93925 32 8.00012L6 34.0001V42.0001Z" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29 11L37 19" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 16L14 6L6 14L16 24" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 16L11 19" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32 24L42 34L34 42L24 32" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32 34L29 37" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_69_18258">
                        <rect width="48" height="48" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <p className='font-russo text-xl font-bold mb-4'>{category}</p>
            <p className='inline pr-6'>235 openings</p>
            <button onClick={() => selectCategory(category)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                    <path d="M16.75 7.22559L1.75 7.22559" stroke="#25324B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.7012 1.20124L16.7512 7.22524L10.7012 13.2502" stroke="#25324B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    ))
}

export const Categories = () => {
    return (
        <div>
            <p className="ml-4 font-russo inline text-5xl text-white">Explore by <span className='text-blue-300'>category</span></p>
            <div className='grid grid-cols-4 grid-rows-2'>
                {getCategories(["AI/ML", "NLP", "Electronics", "Automotive",
                    "Electrical", "Web Development", "Networks", "Cybersecurity"])};
           3000 </div>
        </div>
    )
}

export const Internships = () => {
    return (
        <div>
            <p className="ml-4 font-russo inline text-5xl text-white">Explore by <span className='text-blue-300'>category</span></p>
            <div className='grid grid-cols-4 grid-rows-2'>
                {getCategories(["Quantum Dot-Assisted Photonic Signal", "AI-Driven Traffic Flow Optamisation", "Biosensor-Enchanced Disease Detection", "Graphene-Based Flexible Electronics",
                    "Data-Driven Predictive Healthcase", "Cognitive Load Assessment Virtual Reality", "Networks", "Cybersecurity"])};
            </div>
        </div>
    )
}
