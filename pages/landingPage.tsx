import { SidebarCandidate } from '@components/dashboard/SidebarCandidate'
import { AiFillMail } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import React, { useState } from 'react'
import Image from 'next/image'
import {FaRegCalendarAlt} from "react-icons/fa";
import {AiOutlinePlus} from "react-icons/ai";
import { repeaterData } from 'data/user'
import { projects } from 'data/projects'
import { linkSync } from 'fs'
import Link from 'next/link'
import TableDropdown from '@components/dashboard/TableDropdown'
export default function leadingPage() {
  const [hideSide, setHideSide] = useState(false)
  const [hideDrop, setHideDrop] = useState(true)

return (
  <body className="h-screen bg-gray-100  ">
    <div className="mt-2 ">
      <div className="bg-gray-100 ">
        
        <div className="my-4 mb-2 px-9 bg-gray-100  ">
        
      <div className="my-4 min-w-fit rounded-md border-2 border-gray-300 bg-white p-4 tracking-wide shadow-lg">
        <div id="header" className="mb-2 flex items-center justify-between ">
        
        <ul className="ml-6 flex cursor-pointer">
        <li><p className="py-4 px-6 border-x-1 flex cursor-pointer font-semibold font-serif text-blue-900 text-2xl">CB</p></li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500">
            <button className="block  min-w-fit flex-1     bg-sky-100 py-4 px-6 text-sm font-semibold text-blue-900 hover:text-blue-500 " 
           >
              My Projects
              
            </button>
          </li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500 ">
            <button className=" block  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-blue-900  hover:border-solid  hover:bg-sky-100"
            >
              Manage Subscription
              
            </button>
          </li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500 ">
            <button className="block  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-blue-900  hover:border-solid  hover:bg-sky-100"
            >
              {' '}
              Add member
              
            </button>
          </li>

        </ul>
        <div className="flex min-w-max flex-row">
        <div className=" mx-2 -mt-1 flex h-6 w-6 cursor-pointer justify-center rounded-md ">
                <FaRegCalendarAlt color="navy" className="mt-2" size={16} />
              </div>
               <div className=" mx-2 -mt-1 flex h-6 w-6 cursor-pointer justify-center rounded-md ">
                <AiFillMail color="navy" className="mt-2" size={16} />
              </div>
              <div className=" mx-2 -mt-1 flex h-6 w-6 cursor-pointer justify-center rounded-md ">
                <IoMdNotifications color="navy" className="mt-2" size={16} />
              </div>
              <div className="flex">
                <div className="relative mx-1 -mt-1 h-10 w-10 rounded-md">
                  <Image
                    alt="avatar"
                    layout="fill"
                    className="h-full w-full rounded-full object-cover"
                    src={repeaterData.photo}
                  />
                </div>
              </div>
              <div className=" ml-1.5 text-base  text-blue-900">
                {repeaterData.name}
              </div>
              <div className="mr-2">
                <svg
                  onClick={() => {
                    setHideDrop(!hideDrop)
                    console.log(hideDrop)
                  }}
                  className="ml-1 mt-2 h-4 w-4 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="navy"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div
                  className={
                    hideDrop
                      ? 'dropdown-menu invisible origin-top-right -translate-y-2 scale-95 transform opacity-0 transition-all duration-300'
                      : 'dropdown-menu origin-top-right -translate-y-2 scale-95 transform  transition-all duration-300'
                  }
                >
                  <div
                    className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none"
                    aria-labelledby="headlessui-menu-button-1"
                    id="headlessui-menu-items-117"
                    role="menu"
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm leading-5">Signed in as</p>
                      <p className="truncate text-sm font-medium leading-5 text-gray-900">
                        tom@example.com
                      </p>
                    </div>
                    <div className="py-1">
                      <a
                        href=""
                        tabIndex={0}
                        className="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700"
                        role="menuitem"
                      >
                        Account settings
                      </a>
                      <a
                        href=""
                        tabIndex={1}
                        className="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700"
                        role="menuitem"
                      >
                        Support
                      </a>
                    </div>
                    <div className="py-1">
                      <a
                        href=""
                        tabIndex={3}
                        className="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
            </div></div>
        
        <div className="flex min-h-full  min-w-full flex-row flex-wrap bg-gray-100 ">    
        <div className="mb-2 my-2 ml-9 h-full  w-7/12  min-w-fit ">
        <div className="   min-w-fit rounded-md border-2 border-gray-300 bg-white p-8 tracking-wide shadow-lg">
            <div>
            <text className="  font-bold text-2xl text-blue-900 ">Role-based Assessment Project</text>
            <span className=" mx-12">
            <Link href={'/recruiterLandingPage'} ><a
                      href=""
                      className="  rounded-lg border-2  px-10 py-2 bg-blue-400 text-white font-semibold transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white"
                    >
                      Switch to Smart Recruitement 
                    </a></Link></span>
        </div></div></div>
            <div></div>
            <div className=" mb-1   my-1 w-4/12 ">
              
        <div className=" divide-x-[3px] mx:divide-x-10 divide-blue-500 mx-8 flex min-w-fit  flex-col  my-1  rounded-md border-2 border-gray-300 bg-white p-12 tracking-wide shadow-lg   ">
        <a className=" text-blue-400 font-semibold -mt-8 "> 13 
        <span className=" text-blue-400 font-semibold mt-12 px-28"> 13</span> </a>
        <h1 className=" text-blue-900 font-semibold -mt-2  "> Ongoing Projects</h1>
          </div> </div> 
        
            </div></div>
            <div className=' mx-2 flex min-w-max flex-row overflow-auto  h-6 w-6 cursor-pointer xl:px-8  '></div>
            
            <div className="my-4 mb-2 px-9 bg-gray-100  ">
            <div
        className={
          "relative flex flex-col mt-12 my-4 min-w-fit rounded-md border-2 px-9 p-4 break-words w-full mb-6 shadow-lg rounded bg-white"
        }
      >
        <div className="rounded-t mb-2 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            
          <ul className="ml-6 lg:-mx-6 flex cursor-pointer">
        
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500">
            <button className="block  min-w-fit flex-1     bg-sky-100 py-4 px-6 text-sm font-semibold text-blue-900 hover:text-blue-500 " 
           >
              Ongoing Projects
              
            </button>
          </li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500 ">
            <button className=" block  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-blue-900  hover:border-solid  hover:bg-sky-100"
            >
              Projects Draft
              
            </button>
          </li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500 ">
            <button className="block  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-blue-900  hover:border-solid  hover:bg-sky-100"
            >
              {' '}
              Closed Projects
              
            </button>
          </li>

        
        <li  className="block mb-2 mx-12  border-x-blue-900 ">
        <input
          className=" border-2 border-blue-900 mt-6"
          defaultValue=" Search "
          placeholder="Search any term"
          style={{ height:'40px',width:'280px',borderRadius:"10px",  }}
          title='Search bar'></input>
        </li> 
        <button  className=" my-2 mb-2 py-2   mx-28 flex h-10 mt-6  min-w-fit  rounded-lg border-2 border-blue-900   text-blue-900 hover:bg-blue-900 hover:text-white font-bold  rounded " 
           >
             
             <AiOutlinePlus className="mt-1 mx-1  "/><span  className="mx-4  ">New Project 
              </span>
              
            </button>
            </ul>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3  border-l-0 border-r-0 whitespace-nowrap  text-left bg-blueGray-50 text-sm   text-blue-900  border-blueGray-100"}
                >
                  Status 
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3  border-l-0 border-r-0 whitespace-nowrap text-left bg-blueGray-50 text-sm  text-blue-900  border-blueGray-100"
   
                  }
                >
                  Projects Name 
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 border-l-0 border-r-0 whitespace-nowrap text-left bg-blueGray-50 text-sm  text-blue-900  border-blueGray-100"
                  }
                >
                  Start Date 
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 border-l-0 border-r-0 whitespace-nowrap text-left bg-blueGray-50 text-sm  text-blue-900  border-blueGray-100"
                  }
                >
                  End Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 border-l-0 border-r-0 whitespace-nowrap text-left bg-blueGray-50 text-sm text-blue-900  border-blueGray-100"
                  }
                >
                  Employee Completed
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 border-l-0 border-r-0 whitespace-nowrap text-left bg-blueGray-50 text-sm text-blue-900  border-blueGray-100"
                  }
                >
                  Menu
                </th>
                
              </tr>
            </thead>
          
            {projects.map((element) => {
              return <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
            
                  <span
                    className={
                      "ml-3  text-blue-900 bg-emerald-200 py-1 px-3 rounded-lg"
                    }
                  >
                    {element.Status}
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-bold text-blue-900 whitespace-nowrap p-4">
                {element.name}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-bold text-blue-900 whitespace-nowrap p-4">
                {element.startDate}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  font-bold text-blue-900 whitespace-nowrap p-4">
                  <div className="flex">
                  {element.EndDate}
                    
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  font-bold text-blue-900 whitespace-nowrap p-4">
                  <div className="flex">
                  {element.EmployeeCompleted}
                    
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-bold whitespace-nowrap p-4">
                  
                  <TableDropdown />  
                  
                </td>
    
              </tr>
             
            </tbody>
            })}
         </table> </div>
        </div></div>
      </div>
            </body>
)
}