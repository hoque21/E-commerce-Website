import logo from "../../assets/logo.png";

import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaWhatsapp,
} from "react-icons/fa";



const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

const Footer = () => {
  return (
    <div data-aos="zoom-in" className="mt-2 bg-yellow-200 text-black  ">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-3">
          <div className="py-8 px-4 p-3">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left test-justify mb-3 flex items-center gap-3">
              <img src={FooterLogo} alt="" className="rounded-full h-10 w-10" />
              ShopNow
            </h1>
            <p>Welcome</p>
          </div>

          <div>
            <div className="flex gap-3 flex-cols-3">
              <div className="grid sm:grid-cols-3 col-span-2 md:pl-10">
                <div>
                  <div className="py-8 px-4 ">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                      Important
                    </h1>
                    <ul className="flex-cols gap-3">
                      {FooterLinks.map((link) => (
                        <li className="cursor-pointer" key={link.title}>
                          <a href={link.link}>{link.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid  sm:grid-cols-3 col-span-2 md:pl-10">
                <div>
                  <div className="py-8 px-4 ">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                      Links
                    </h1>
                    <ul className="flex-cols gap-3">
                      {FooterLinks.map((link) => (
                        <li className="cursor-pointer" key={link.title}>
                          <a href={link.link}>{link.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-black mt-10">
            <div className="flex">
              <a href="https://www.facebook.com">
                <FaFacebook className=" mx-2" />
              </a>
              <a href="https://www.instagram.com">
                <FaInstagram className=" mx-2" />
              </a>
              <a href="https://twitter.com">
                <FaTwitter className=" mx-2" />
              </a>
              <a href="https://mail.google.com">
                <FaGoogle className="mx-2" />
              </a>
              <a href="https://web.whatsapp.com">
                <FaWhatsapp className=" mx-2" />
              </a>
            </div>
            <div className=" text-xl font-bold mt-4 ">
            <h1>
                Contracts
            </h1>
            <h1>
            <a href="https://web.whatsapp.com" className="cursor-pointer">
                <p>
                    +8801711111111
                </p>
              </a>
            </h1>
          </div>
           
          </div>
          
        </div>
      </div>
      <div className="text-center font-bold text-black bg-white">
        <h1>Developed By Rafiul Hoque</h1>
      </div>
    </div>
  );
};

export default Footer;
