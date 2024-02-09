import React from 'react'
import CustomSelect from './CustomSelect'
import CustomSearchSelect from './CustomSearchSelect';
import { FaRegCheckCircle } from "react-icons/fa";

const Sidebar = () => {

  return (
    <div>
         {/* <div className="sm:col-span-3 text-start">
              <label htmlFor="country" className="block text-[10px] font-medium leading-6 ">
                 Industry
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 bg-transparent
                   text-white
                   border-[#181818] shadow-sm ring-1 ring-inset
                    "
                >
               
                  <option className='bg-[#212121] py-2'>United States</option>
                  <option className='bg-[#212121]'>Canada</option>
                  <option className='bg-[#212121]'>Mexico</option>
                </select>
              </div>
 
            </div>
            <div className="sm:col-span-3 text-start mt-5">
        <label htmlFor="country" className="block text-[10px] font-medium leading-6 ">
          Market Cap
        </label>
        <div className="mt-2 flex ">
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-1.5 bg-transparent 
             text-[#797979] 
             border-[#181818] shadow-sm ring-1 ring-inset ring-[#999999] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
             min-h-12 "  style={{ transition: "padding 0.3s ease-in-out" }}
          >
            <option className='bg-[#212121] py-2  ' >
              Insert text here
            </option>
            <option className='bg-[#212121] '>Low Risk</option>
            <option className='bg-[#212121] '>Mid-risk</option>
            <option className='bg-[#212121]'>High risk</option>
            <option className='bg-[#212121] '>Option text here</option>
          </select>

        </div>
        <label htmlFor="country" className="block text-[10px] text-[#797979]  font-medium leading-6 ">
          Press Apply to see changes.
        </label>
      </div> */}
   <div className="my-4 sm:col-span-3">
              <CustomSelect option={ ['Low Health','Mid Health','High Health'] } icon={ <FaRegCheckCircle /> } label={ 'Industry' } text={ 'Choose Something' } placeholder={ 'Health care' }/>
            </div>
            <div className="my-4 sm:col-span-3">
              <CustomSelect option={ ['Big Cap', 'Small Cap ', 'Mid Cap'] } icon={ <FaRegCheckCircle /> } label={ 'Market Cap' } text={ ' Press Apply to see changes' } placeholder={ 'Larg-cap' }/>
            </div>
            <div className="my-4 sm:col-span-3">
              <CustomSearchSelect option={ ['Low risk','Mid risk','High risk','Option text here'] } icon={ <FaRegCheckCircle/> } label={ 'Risc' } text={ undefined }/>
            </div>

      <button className='btn border border-none bg-purple-600 font-bold mt-5 py-2 rounded-xl w-full'>Apply Filter</button>

      
    </div>
  )
}

export default Sidebar
