import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GiDoubleDiaphragm } from "react-icons/gi";

const CustomSearchSelect = ({ option, icon, label, text }) => {
  const [top, setTop] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const ref = useRef(null);

  const handleArrow = () => {
    setTop(!top);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setTop(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (selectedValue) => {
    if (selectedOption === selectedValue) {
      setSelectedOption(null); // Deselect the option if it's already selected
    } else {
      setSelectedOption(selectedValue);
    }
    setTop(true); 
  };

  return (
    <div ref={ref}>
      <div className="text-start">
        <label
          htmlFor="country"
          className="block text-[10px] font-medium leading-6 "
        >
          {label}
        </label>
      </div>
      <div>
        <div
          className="border-[1px] py-2  rounded-[5px] cursor-pointer transition-all duration-500 ease-in-out border-[#d3d2d2] bg-transparent"
          onClick={handleArrow}
        >
          <div className="flex justify-between items-center">
            {" "}
            <div className="mx-2 flex items-center">
              <span className="mx-2">
                {" "}
                <GiDoubleDiaphragm />
              </span>{" "}
              <input
  type="text"
  className="l focus:outline-none appearance-none blur-none focus:blur-none text-[12px] bg-transparent border-none p-[0] shadow-none  focus:shadow-none outline-none  focus:border-none "
  placeholder="Insert text here"
  value={searchInput}
  onChange={(e) => setSearchInput(e.target.value)}
/>

              {/* <span className="text-[12px]"> Health Care</span> */}
            </div>{" "}
            {top ? (
              <IoIosArrowDown className="mx-2 text-[#040F0F] font-bold" />
            ) : (
              <IoIosArrowUp className="mx-2 text-[#040F0F] font-bold" />
            )}
          </div>
        </div>
        {option && !top && (
          <div className="border mt-2 rounded-[5px] text-start border-[#ddd]">
            {option
              .filter((item) =>
                item.toLowerCase().includes(searchInput.toLowerCase())
              )
              .map((item, index) => (
                <div
                  className={`cursor-pointer p-2 flex items-center hover:text-[#887EFF] hover:bg-[#F1F3F5] ${
                    selectedOption === item ? ' text-[#887EFF]' : ''
                  }`}
                  key={index}
                  onClick={() => handleOptionClick(item)}
                >
             <span className={`cursor-pointer p-2 flex  text-[14px] items-center text-[#6B6B6B] hover:text-[#887EFF] hover:bg-[#F1F3F5] ${
                    selectedOption === item ? ' text-[#887EFF]' : ''
                  }`}
                  >{icon}</span>
                  <span className={`text-[14px] font-semibold font-Poppins line-[14px] text-[#6B6B6B] ${
                    selectedOption === item ? ' text-[#887EFF]' : ''
                  }`} >
                    {" "}
                    {item}{" "}
                  </span>{" "}
                </div>
              ))}
          </div>
        )}
      </div>

      <div className="text-start ">
        <label
          htmlFor="country"
          className="block text-[10px] text-[#797979]  font-medium leading-6 "
        >
          {text}
        </label>
      </div>
    </div>
  );
};

export default CustomSearchSelect
