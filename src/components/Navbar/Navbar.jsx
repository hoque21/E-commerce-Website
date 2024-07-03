import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";
import DarkMode from "../DarkMode";
import { useState } from "react";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Means Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropDownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/products",
  }
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [caretRotation, setCaretRotation] = useState(false);

  const handleCaretClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setCaretRotation(!caretRotation);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-yellow-200 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
            >
              <img src={logo} alt="Logo" className="uppercase rounded-full w-10" />
              ShopNow
            </a>
          </div>
          <div className="flex gap-4  items-center justify-between ">
            <div className="group flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary focus:border-orange-400"
              />
              <IoMdSearch className="ml-2 text-gray-500" />
            </div>
            <button
              onClick={() => alert("Ordering Not Available yet")}
              className="bg-orange-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block flex hidden  transition-all duration-200">
                Order
              </span>
              <FaShoppingCart />
            </button>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center  p-4">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:bg-blue-300 border rounded-full duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li
            className="relative cursor-pointer"
            onClick={handleCaretClick}
          >
            <a
              href="#"
              className="inline-block flex px-4 hover:bg-blue-300 border rounded-full duration-200"
            >
              Trending Products
              <span
                style={{ transform: caretRotation ? 'rotate(360deg)' : 'rotate(0deg)' }}
              >
                <FaCaretDown className="transition-all duration-200" />
              </span>
            </a>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                <ul>
                  {DropDownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
