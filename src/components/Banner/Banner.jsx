import React from 'react';
import BannerImg from '../../assets/women/women2.jpg';

import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
    return (
        <div className='min-h-[550px] bg-gray-300 flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-7 items-center'>

                    <div className='' data-aos="zoom-in">
                        <img src={BannerImg} alt="" className='rounded-full max-w-[400px] h-[350px] mx-auto object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] ' />
                    </div>

                    <div data-aos="zoom-in" className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 data-aos="zoom-in" className='text-3xl sm:text-4xl font-bold'>
                            Winter Sale
                        </h1>
                        <p data-aos="zoom-in" className='text-sm text-gray-500 tracking-wide leading-5'>
                            gdhsg
                        </p>

                        <div className='flex flex-col gap-4'>

                            <div className='flex items-center gap-4'>
                                <GrSecure data-aos="zoom-in" className='text-4xl h-16 w-16 shadow-sm p-2 rounded-full' />
                                <p data-aos="zoom-in" className="text-base">Quality Product</p>
                            </div>

                            <div className='flex items-center gap-4'>
                                <IoFastFood data-aos="zoom-in" className='text-4xl h-16 w-16 shadow-sm p-2 rounded-full' />
                                <p data-aos="zoom-in" className="text-base">Quality Product</p>
                            </div>

                            <div className='flex items-center gap-4'>
                                <GiFoodTruck data-aos="zoom-in" className='text-4xl h-16 w-16  shadow-sm p-2 rounded-full' />
                                <p data-aos="zoom-in" className="text-base">Quality Product</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
