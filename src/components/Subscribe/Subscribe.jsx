import React from 'react';
import BannerImg from '../../assets/website/orange-pattern.jpg';

const bannerStyle = {
    backgroundImage: `url(${BannerImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "30vh", // Use vh (viewport height) instead of percent for full height
    width: "100%"
};

const Subscribe = () => {
    return (
        <div
            data-aos="zoom-in"
            className='bg-gray-100 mt-4 rounded-full mb-20 dark:bg-gray-800 text-white'
            style={bannerStyle}
        >
            <div className='container backdrop-blur-sm py-10'>
                <div className='p-4 space-y-6 max-w-xl mx-auto'>
                    <h1 className='text-2xl text-center sm:text-left font-semibold sm:text-4xl'>
                        Get Notified about New Products
                    </h1>
                    <div className='flex mt-2 p-2'>
                        <input data-aos="fade-up" className='w-full p-5 rounded' type="text" placeholder="Enter Your Email.." />
                        <div className='p-1'>
                        <button className="bg-orange-500 text-xl font-bold  text-black mt-2 p-2 py-2 px-4 duration-200 rounded-full hover:scale-105">
                            Subscribe
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
