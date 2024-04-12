import React from 'react';


const AdditionalBanner = ({title}) => {
    return (
        <div className='bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200' >
            <div className='my-container lg:py-14 flex justify-center items-center'>
           <h1 className='text-4xl py-12 font-bold'>{title}</h1>
    </div>
        </div>
    );
};

export default AdditionalBanner;