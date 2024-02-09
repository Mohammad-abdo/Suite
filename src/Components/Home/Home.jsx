import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import RightSection from './RightSection/RightSection'

const Home = () => {
  return (
    <div className='w-[97%]  rounded-xl bg-[#181818] py-5 mx-auto mt-5'>
      <div className="flex gap-10 h-auto  w-[97%] mx-auto ">
      {/* Sidebar */} 
      <div className="w-64 bg-[#212121] text-white rounded-2xl">
        {/* Sidebar Content */}
        <div className="p-4 text-center">
          <h1 className="text-[32px] text-[#FFFFFF] font-bold font-Inter">filter</h1>
          {/* Add more sidebar content here */}
          <Sidebar/>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 items-center bg-[#212121] text-white rounded-xl">
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
