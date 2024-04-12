import React from 'react';
import image from '../assets/images/afridi.png'
import afridi2 from '../assets/images/afridi2.png'
const Banner = () => {
    return (
        <div className='my-container py-9 lg:flex justify-between items-center'>
            <div className='flex flex-col w-full lg:w-1/2 space-y-8 justify-center items-center lg:items-start lg:justify-start '>
                <h1 className='text-6xl max-w-96 bg-gradient-to-r from-slate-700 via-yellow-200 to-blue-500 bg-clip-text text-transparent'>One Step Closer To Your <span className=''>Dream Job</span></h1>
                <p className='text-sm text-gray-400 max-w-96 tracking-wide leading-tight'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn-custom inline-block w-52 '>Get Started</button>
            </div>
            <div className='w-full lg:w-1/2 mt-7 lg:mt-0'>
              <img className='w-full object-cover lg:h-[450px] shadow-xl rounded-2xl' src={afridi2} alt="" />
            </div>
        </div>
    );
};

export default Banner;