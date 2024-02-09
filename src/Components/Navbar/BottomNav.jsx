import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";

const Links = [
  {
    title: "Trading",
    link: "/trading",
    soon: (
      <div className="absolute flex items-center justify-center top-[8px] ml-1">
        <span className="sm:text-sm xl:text-sm md:text-[12px] sm:w-[101px] xl:w-[101px] text-[7px] px-1 bg-[#9089DC] text-yellow-50 rounded-3xl">
          coming soon
        </span>
      </div>
    ),
    span: "coming soon",
    border: "border-r-[1.47px] border-[#B9B9B9]",
  },
  {
    title: "Automation",
    link: "/automation",
    soon: (
      <div className="absolute flex items-center justify-center top-[8px] ml-1">
        <span className="sm:text-sm xl:text-sm md:text-[12px] sm:w-[101px] xl:w-[101px] text-[7px] px-1 bg-[#9089DC] text-yellow-50 rounded-3xl">
          coming soon
        </span>
      </div>
    ),
    border: "border-r-[1.47px] border-[#B9B9B9]",
  },
  {
    title: "Portfolio",
    soon: (
      <div className="absolute flex items-center justify-center top-[8px] ml-1">
        <span className="sm:text-sm xl:text-sm md:text-[12px] sm:w-[101px] xl:w-[101px] text-[7px] px-1 bg-[#9089DC] text-yellow-50 rounded-3xl">
          coming soon
        </span>
      </div>
    ),
    link: "/portfolio",
    border: "border-r-[1.47px] border-[#B9B9B9]",
  },
  {
    title: "Alerts",
    link: "/alert",
    border: "border-r-[1.47px] border-[#B9B9B9]",
  },
  {
    title: "Training",
    link: "/training",
  },
];


const BottomNav = () => {
  const location = useLocation(); // Get current URL location
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // Find the index of the link whose route matches the current location pathname
    const index = Links.findIndex((link) => link.link === location.pathname);
    setActiveIndex(index);
  }, [location.pathname]);

  const handleLinkClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className="bg-black xl:h-[100px] sm:h-[100px] h-[60px] rounded-2xl mx-2 sm:mx-5 xl:mx-5 flex relative">
        <div className="grid grid-cols-5 w-full relative">
          {Links.map((link, index) => (
            <div
              key={index}
              className={`text-[10px] sm:text-[48px] md:text-[24px] lg:text-[30px]
                              xl:text-[48px] text-center flex items-center font-bold justify-center text-[#484848]
                               w-full ${
                                 activeIndex === index
                                   ? "text-white"
                                   : "text-[#484848]"
                               }`}
            >
              {link.soon}
              <Link // Use Link instead of anchor tag
                to={link.link} // Specify the link destination
                className={`link ${link.border} w-full`}
                onClick={() => handleLinkClick(index)}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BottomNav;
