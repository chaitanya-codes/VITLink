import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const project = () => {
    return (
        <div>
            <Navbar showLogin={false}></Navbar>
            <div className='h-[30vh] flex justify-center items-center bg-gray-300'>
                <div className='w-[80vw] h-[20vh] bg-white'>
                    <div className='flex mt-10 relative'>
                        <div className='w-20 h-20 ml-6 bg-gray-800'></div>
                        <div>
                            <div className='text-slate-700 ml-3 text-3xl font-redhat'>Chemistry Research Professor</div>
                            <div className='text-slate-700 ml-4 mt-2 text-xl font-redhat'>Dr. Sumit Rajdev • VIT Vellore • Part-Time</div>
                        </div>
                        <svg className="absolute right-44 top-2" xmlns="http://www.w3.org/2000/svg" width="33" height="34" viewBox="0 0 33 34" fill="none">
                            <g clip-path="url(#clip0_187_12011)">
                                <path d="M8.66797 20.7646C10.8771 20.7646 12.668 18.9079 12.668 16.6175C12.668 14.3272 10.8771 12.4705 8.66797 12.4705C6.45883 12.4705 4.66797 14.3272 4.66797 16.6175C4.66797 18.9079 6.45883 20.7646 8.66797 20.7646Z" stroke="#7C8493" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M24.668 12.4704C26.8771 12.4704 28.668 10.6137 28.668 8.32333C28.668 6.03297 26.8771 4.17627 24.668 4.17627C22.4588 4.17627 20.668 6.03297 20.668 8.32333C20.668 10.6137 22.4588 12.4704 24.668 12.4704Z" stroke="#7C8493" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M24.668 29.0588C26.8771 29.0588 28.668 27.2021 28.668 24.9117C28.668 22.6213 26.8771 20.7646 24.668 20.7646C22.4588 20.7646 20.668 22.6213 20.668 24.9117C20.668 27.2021 22.4588 29.0588 24.668 29.0588Z" stroke="#7C8493" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.2681 14.8204L21.0681 10.1204" stroke="#7C8493" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.2681 18.4146L21.0681 23.1146" stroke="#7C8493" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_187_12011">
                                    <rect width="32" height="33.1765" fill="white" transform="translate(0.667969 0.0292969)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <button className='absolute right-4 w-[9vw] h-[7vh] bg-blue-900'>Apply</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default project