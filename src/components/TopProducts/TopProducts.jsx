import Img1 from '../../assets/shirt/shirt.png';
import Img2 from '../../assets/shirt/shirt2.png';
import Img3 from '../../assets/shirt/shirt3.png';
import Img4 from '../../assets/shirt/shirt.png';
import { FaStar } from 'react-icons/fa';

const TopProducts = () => {
    const ProductsData = [
        {
            id: 1,
            img: Img1,
            title: "Women Ethnic",
            rating: 5.0,
            author: "White",
            asoDelay: 0,
            color: "red",
            description: "Description for Women Ethnic"
        },
        {
            id: 2,
            img: Img2,
            title: "Men's Casual",
            rating: 4.5,
            author: "Black",
            asoDelay: 0,
            color: "red",
            description: "Description for Men's Casual"
        },
        {
            id: 3,
            img: Img3,
            title: "Kids Wear",
            rating: 4.8,
            author: "Blue",
            asoDelay: 0,
            color: "red",
            description: "Description for Kids Wear"
        },
        {
            id: 4,
            img: Img4,
            title: "Accessories",
            rating: 4.2,
            author: "Red",
            asoDelay: 0,
            color: "red",
            description: "Description for Accessories"
        }
    ];

    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <div className="text-left mb-24 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm">Top Selling Products for You</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold ">Best Products</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-500 ">
                        Understanding which browsers Tailwind supports and how to manage
                        vendor prefixes.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 container p-4 lg:grid-cols-5 md:gap-5 place-items-center gap-2'>
                    {ProductsData.map((data) => (
                        <div
                        data-aos="zoom-in" key={data.id} className='rounded-2xl bg-white dark:bg-gray-800 relative shadow-xl duration-high group max-w-[300px]'>
                            <img className='max-w-[140px] block mx-auto transform hover:scale-105 duration-300 drop-shadow-md'
                                src={data.img} alt="" />
                            <div className='p-4 text-center'>
                                <div className='flex items-center justify-center gap-1'>
                                    {[...Array(5)].map((star, index) => (
                                        <FaStar key={index} className="text-yellow-500" />
                                    ))}
                                </div>
                                <p className='text-gray-400 font-semibold text-sm line-clamp-2'>{data.description}</p>
                                <button className='bg-orange-400 duration-300 py-1 px-4 rounded-full mt-4'>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopProducts;
