import React from 'react'

import {  Menu } from '@headlessui/react'
import {  BellIcon } from '@heroicons/react/24/outline'

import { IoIosArrowDropdown } from "react-icons/io";


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

const  Navbar =() =>{
  return (
    <div  className=" ">

        <>
          <div className="mx-auto  px-5 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex  w-[19%]">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className=" h-72 w-70"
                    src="/public/logo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">

                  </div>
                </div>
              </div>
              {/* nofication and personal img */}
              <div className="absolute inset-y-0 right-0 flex px-10 items-center justify-between pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 rounded-2xl
       w-[80%] bg-[#181818] ">
        {/* Serach input */}
        <div className='w-96'>
        <div className="flex items-center justify-between  ">

    <div className="relative w-96">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd"></path>
            </svg>
        </div>
        <input id="search" name="search" className="block w-full pl-10  pr-3 py-2 border border-gray-300 rounded-2xl leading-5 bg-[#D5D5D5] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm" placeholder="Search" type="search" />
    </div>
</div>

        </div>
        <div className='inset-y-0 right-0 flex items-center  pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 '>
        <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3  ">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  
                  </div>
               
                  {/* <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition> */}
                </Menu>
                <div className='mx-8'>
                  <span className='text-[#ededed] text-[12px]'>Mohamed 
                  <br />
                  abdo
                  </span>
                  </div>
                  <div className='mr-3 '>
                    <IoIosArrowDropdown className='text-2xl text-[#4e4e4e] cursor-pointer'/>
                  </div>
        </div>
              </div>
            </div>
          </div>

        </>
   
    </div>
  )
}
export default  Navbar 