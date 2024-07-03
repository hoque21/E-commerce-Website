import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa";
import AOS from 'aos'; // Correct import statement

const Products = () => {
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Women Ethnic",
      rating: 5.0,
      author: "White",
      asoDelay: 0,
      color: "red",
    },
    {
      id: 2,
      img: Img2,
      title: "Men's Casual",
      rating: 4.5,
      author: "Black",
      asoDelay: 0,
      color: "red",
    },
    {
      id: 3,
      img: Img3,
      title: "Kids Wear",
      rating: 4.8,
      author: "Blue",
      asoDelay: 0,
      color: "red",
    },
    {
      id: 4,
      img: Img4,
      title: "Accessories",
      rating: 4.2,
      author: "Red",
      asoDelay: 0,
      color: "red",
    }
  ];

  // Initialize AOS
  AOS.init();

  return (
    <div className="mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <p data-aos="fade-up" className="text-sm">Top Selling Products for You</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-500">
            Understanding which browsers Tailwind supports and how to manage
            vendor prefixes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.asoDelay}
              key={data.id}
              className="space-y-3"
            >
              <img
                src={data.img}
                alt=""
                className="h-72 w-full object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold text-center p-1">{data.title}</h3>
                <p className="text-center uppercase text-sm font-semibold">
                  {data.color}
                </p>
                <div className="flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer  bg-orange-500 rounded-full p-3 font-semibold ">
            View All Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
