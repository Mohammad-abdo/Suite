import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import RightSection from './RightSection/RightSection'

const Home = () => {
  return (
    <div className='w-full sm:w-[97%] gap-10  rounded-xl bg-[#181818] py-5 mx-auto mt-5 '>
      <div className=" gap-10 h-auto  w-[97%] mx-auto flex flex-col sm:flex-row ">
    {/* Sidebar */} 
    <div className="bg-[#212121] text-white rounded-2xl h-[70%] sm:w-[20%] xl:w-[20%]">
      {/* Sidebar Content */}
      <div className="p-4 text-center">
        <h1 className="text-[32px] text-[#FFFFFF] font-bold font-Inter">filter</h1>
        {/* Add more sidebar content here */}
        <Sidebar/>
      </div>
    </div>
  
    {/* Main Content */}
    <div className="bg-[#212121] text-white rounded-xl flex-1">
      {/* Main Content Area */}
      <div className="p-2">
        <RightSection/>
      </div>
    </div>
    </div>
    </div>



  )
}

export default Home
