import React from 'react';

const SectionTitle = ({title,pera}) => {
    return (
        <div className='max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto'>
            <h1 className='text-4xl text-center font-bold mb-5'>{title}</h1>
            <p className='text-center  text-sm text-gray-400 '>{pera}</p>
        </div>
    );
};

export default SectionTitle;