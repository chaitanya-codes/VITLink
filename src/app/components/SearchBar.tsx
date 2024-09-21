import React from "react";

export default function SearchBar({ text1, text2 }) {
    return (
        <div>
            <div className="flex rounded-sm bg-[#eff1f2] p-6 items-center justify-around mt-[20px] mb-[20px] flex-1 ml-2">
                <div className='flex'>
                    <svg className="sc-icon scale-[0.35] mt-4 mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                    </svg>
                    <input type="search" className="p-2 w-[23vw] drop-shadow" placeholder={text1} />
                </div>
            </div>
            <div className="inline flex rounded-sm bg-[#eff1f2] p-6 items-center justify-around mt-[20px] mb-[20px] flex-1 ml-2">
                <div className='flex'>
                    <svg className="sc-icon scale-[0.35] mt-4 mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                    </svg>
                    <input type="search" className="p-2 w-[23vw] drop-shadow" placeholder={text2} />
                </div>
            </div>
        </div>
    );
}

