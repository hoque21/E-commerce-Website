import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Up TO 50% off",
    description:
      "It was popular in the 1960s with the release of Latest sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    img: Image2,
    title: "New Arrivals",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    img: Image3,
    title: "Free Shipping",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-900 dark:text-white duration-200">
      <div className="h-[700px] w-[700px] sm:w-[800px] bg-green-400 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      <div className="container mx-auto px-4 sm:px-8 pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 p-3">
                <div className="flex flex-col sm:text-left order-2 sm:order-1 relative z-10 justify-center">
                  <h1
                  data-aos="zoom-out"
                  data-aos-once="true"
                  data-aso-duration="500"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    {data.title}
                  </h1>
                  <p
                  data-aos="zoom-out"
                  data-aso-duration="500"
                  data-aso-delay="100"
                  
                  className="text-sm sm:text-base mt-2 sm:mt-3">
                    {data.description}
                  </p>
                  <div 
                   data-aos="zoom-out"
                   data-aso-duration="500"
                   data-aso-delay="100"
                   
                   className="mt-4 sm:mt-6">
                    <button className="bg-orange-300 border-rounded text-white py-2 px-4 duration-200 rounded-full hover:scale-105">
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center order-1 sm-order-2">
                  <div
                  
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="relative z-10">
                    <img
                      className="w-full max-w-[300px] sm:max-w-none sm:scale-125 mx-auto"
                      src={data.img}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
