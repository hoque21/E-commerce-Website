import React from "react";
import Slider from 'react-slick'

const testimonialData = [
    {
        id: 1,
        name: 'Victor',
        text: "Clothing has been made from a wide variety of materials,",
        img: "https://picsum.photos/101/101"
    },
    {
        id: 2,
        name: 'Alice',
        text: "Clothing has been made from a wide variety of materials, ",
        img: "https://picsum.photos/102/102"
    },
    {
        id: 3,
        name: 'Emily',
        text: "Clothing has been made from a wide variety of materials, ",
        img: "https://picsum.photos/103/103"
    },
    {
        id: 4,
        name: 'Michael',
        text: "Clothing has been made from a wide variety of materials, ",
        img: "https://picsum.photos/104/104"
    }
];

const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
};

const Testimonials = () => {
    return (
        <div data-aos="zoom-in" className='py-10 mb-10 rounded p-3  mt-4 text-center flex items-center justify-center'> {/* Centered vertically and horizontally */}
            <div className='container'>
                <div className="mb-10 max-w-3xl mx-auto">
                    <p data-aos="fade-up" className="text-sm">What our customers are saying</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-500">
                        Understanding which browsers Tailwind supports and how to manage
                        vendor prefixes.
                    </p>
                </div>

                <div className="" data-aos="zoom-inh
                ">
                <Slider {...settings} className="bg-gray-300 gap-2 rounded cursor-pointer">
                    {testimonialData.map((data) => (
                        <div key={data.id} className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl">
                            <div>
                                <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                            </div>
                            <div>
                                <p className="text-xs">
                                    {data.text}
                                </p>
                                <h1 className="text-xl font-bold text-black dark:text-light">
                                    {data.name}
                                </h1>
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
