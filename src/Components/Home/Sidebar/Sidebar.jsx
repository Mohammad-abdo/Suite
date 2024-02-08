import React from 'react'
import { MdOutlineSwitchAccount } from "react-icons/md";
const Sidebar = () => {
  return (
    <div>
         <div className="sm:col-span-3 text-start">
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
      
    </div>
  )
}

export default Sidebar
