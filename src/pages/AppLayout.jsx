import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import BottomNav from "../Components/Navbar/BottomNav";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <BottomNav/>
      <div className='w-full sm:w-[97%] gap-10  rounded-xl bg-[#181818] py-5 mx-auto mt-5 '>
      <div className=" gap-10 h-auto  w-[97%] mx-auto flex flex-col sm:flex-row ">
    {/* Sidebar */} 
    <div className="bg-[#212121] text-white rounded-2xl h-[70%] sm:w-[20%] md:w-[25%] lg:w-[20%] xl:w-[20%]">
      {/* Sidebar Content */}
      <div className="p-4 text-center">
        <h1 className="text-[25px] md:text[24px] xl:text-[32px] lg:tex-[32px] text-[#FFFFFF] font-bold font-Inter my-3 Filter">Filter</h1>
        {/* Add more sidebar content here */}
        <Sidebar/>
      </div>
    </div>
  
    {/* Main Content */}
    <div className="bg-[#212121] text-white rounded-xl flex-1 h-[80%] overflow-x-auto">
      {/* Main Content Area */}
      <div className="p-2">
      <Outlet />
      </div>
    </div>
    </div>
    </div>
   
    </>
  );
};

export default AppLayout;
