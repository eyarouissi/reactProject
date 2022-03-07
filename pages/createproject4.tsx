import { AiFillCheckCircle, AiFillMail } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import React, { useState } from 'react'
import Image from 'next/image'
import {FaRegCalendarAlt} from "react-icons/fa";
import { repeaterData } from 'data/user'
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { BsFillCameraVideoFill } from 'react-icons/bs';

export default function leadingPage() {
  const [hideSide, setHideSide] = useState(false)
  const [hideDrop, setHideDrop] = useState(true)

  const [Recording, setRecording] = useState('10')
  const [Question, setQuestion] = useState('')
  const [Questions, setQuestions] = useState([
      {
        interviewQuestion: "What motivates you to work in this job ",
        Recording: "2 min",
        autoStart : "No"
      },
      {
        interviewQuestion: "What motivates you to work in this job ",
        Recording: "2 min",
        autoStart : "No"
      },
      {
        interviewQuestion: "What motivates you to work in this job ",
        Recording: "2 min",
        autoStart : "No"
      },
      {
        interviewQuestion: "What motivates you to work in this job ",
        Recording: "2 min",
        autoStart : "No"
      },
      {
        interviewQuestion: "What motivates you to work in this job ",
        Recording: "2 min",
        autoStart : "No"
      },
      {
        interviewQuestion: "What motivates you to work in this job ",
        Recording: "2 min",
        autoStart : "No"
      },
      ])
    const competencies=["competency","competency","competency","competency","competency","competency","competency","competency"]  

     


      


    const handleSubmit = () => {
    
      setQuestions([{interviewQuestion : Question, Recording:Recording, autoStart:"No"}, ...Questions])
      
    
      }
return (
  <body className="h-screen bg-gray-100  ">
    <div className="mt-2 ">
      <div className="bg-gray-100 ">
        
        <div className="my-4 mb-2 px-9 bg-gray-100  ">
        
      <div className="my-4 min-w-fit rounded-md border-2 border-gray-300 bg-white p-1 tracking-wide shadow-lg">
        <div id="header" className="mb-2 flex items-center justify-between ">
        
        <ul className="ml-6 flex cursor-pointer">
        <li><p className="py-4 px-6 border-x-1 flex cursor-pointer font-semibold font-serif text-blue-900 text-2xl">CB</p></li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500">
            <button className="block  min-w-fit flex-1  rounded-lg   bg-purple-200 py-4 px-6 text-sm font-semibold text-blue-900 hover:text-blue-500 " 
           >
              My Projects
              
            </button>
          </li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500 ">
            <button className=" block  min-w-fit flex-1 py-4 px-6 rounded-lg text-sm font-semibold  text-blue-900  hover:border-solid  hover:bg-purple-200"
            >
              Manage Subscription
              
            </button>
          </li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2  text-gray-500 ">
            <button className="block  min-w-fit flex-1 py-4 px-6 text-sm rounded-lg font-semibold  text-blue-900  hover:border-solid  hover:bg-purple-200"
            >
              {' '}
              Add member
              
            </button>
          </li>

        </ul>
        <div className="flex min-w-max flex-row">
        <div className=" mx-2 mt-1 flex h-6 w-6 cursor-pointer justify-center rounded-md ">
                <FaRegCalendarAlt color="navy" className="mt-2" size={16} />
              </div>
               <div className=" mx-2 mt-1 flex h-6 w-6 cursor-pointer justify-center rounded-md ">
                <AiFillMail color="navy" className="mt-2" size={16} />
              </div>
              <div className=" mx-2 mt-1 flex h-6 w-6 cursor-pointer justify-center rounded-md ">
                <IoMdNotifications color="navy" className="mt-2" size={16} />
              </div>
              <div className="flex">
                <div className="relative mx-1 mt-1 h-10 w-10 rounded-md">
                  <Image
                    alt="avatar"
                    layout="fill"
                    className="h-full w-full rounded-full object-cover"
                    src={repeaterData.photo}
                  />
                </div>
              </div>
              <div className=" ml-1.5  mt-2.5 text-base  text-blue-900">
                {repeaterData.name}
              </div>
              <div className="mr-2 mt-2.5">
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
        
        </div>
            
            
            <div className="my-1 mb-1 h-full px-9 bg-gray-100  ">
            <div
        className={
          "relative flex flex-col mt-1 my-4 min-w-fit rounded-md border-2 px-9 p-4 break-words w-full mb-6 shadow-lg rounded bg-white"
        }
      >
        <div className="rounded-t mb-2 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            
          <div className="ml-1  text-base font-bold text-blue-900">
                
              </div>
              <a className="ml-1 cursor-pointer text-base font-semibold text-blue-900">
                Dashboard
              </a>{' '}
              <div className="ml-1 text-base font-bold text-blue-900">&gt;</div>
              <a className="ml-1 cursor-pointer text-base font-semibold text-blue-900">
                Create Recruitement Project
              </a></div>
              <div className="m-7">
    
            </div>
          
        </div>
        

          {/* Projects table */}
          <div className="relative bg-blueGray-800 md:pt-1 pb-32 ">
        <div className="px-4 md:px-10  mx-auto w-full">
          
            {/* Card stats */}
            <div className="m-6 flex flex-row justify-center">
                  <div>
                    <div className="w-40 border-2 border-blue-900 px-3 py-2 text-center text-blue-900">
                      Project Details
                    </div>
                    <AiFillCheckCircle
                      className="-mt-14 ml-[8.25rem] block bg-white"
                      size={20}
                      color="9333ea

            "
                    ></AiFillCheckCircle>
                  </div>
                  <div className="h-0.5 w-10 self-center rounded-full bg-blue-900"></div>
                  <div>
                    
                    <div className="w-40 border-2 border-blue-900 px-3 py-2 text-center text-blue-900">
                      Assessments List 
                    </div>
                    <AiFillCheckCircle
                      className="-mt-14 ml-[8.25rem] block bg-white"
                      size={20}
                      color="9333ea

            "
                    ></AiFillCheckCircle>
                  </div>
                  <div className="h-0.5 w-10 self-center rounded-full bg-blue-900"></div>
                  <div>
                    <div className="w-40  px-3 py-2 border-2 border-blue-900 text-center text-blue-900">
                      Online Interview
                    </div>
                    <AiFillCheckCircle
                      className="-mt-14 ml-[8.25rem] block bg-white"
                      size={20}
                      color="9333ea

            "
                    ></AiFillCheckCircle>
                    
                  </div>
                  <div className="h-0.5 w-10 self-center rounded-full bg-blue-900"></div>
                  <div>
                    <div className=" w-40 text-white bg-purple-600 px-3 py-2 text-center ">
                      confirmation
                    </div>
                  </div>
                  <div className="h-0.5 w-10 self-center rounded-full bg-gray-400"></div>
                  <div>
                    <div className="w-40 border-2 border-gray-400 px-3 py-2 text-center ">
                      Send Invitation
                    </div>
                  </div>
                </div>
          
        </div>
        <div className=" max-w ml-80  ">
            <h1 className="my-8 place-items-center ml-56 text-2xl mt-10 font-bold  text-blue-900 ">
              Confirmation
            </h1>
            <h1 className="my-2 ml-48 font-medium text-lg text-cyan-900 ">
              Job Title: <span className="text-purple-600">Project Manager</span>
            </h1>
            <h1 className="my-2 ml-20 font-medium text-lg text-cyan-900 ">
              The top 10 Competencies related to Project Manager
            </h1>

            </div>
            <div className="m-7  ">
             {/* Header */}
      
        <div className="px-10 md:px-10 mx-28">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap mx-42 ">
            {competencies.map((element) => {
                return(
                <div className="  mt-4  xl:w-6/12 rounded-lg border-1 px-2 color-purple-200 items-center">
                <div className="relative  flex flex-col min-w-0 break-words bg-white border-2 items-center rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-2">
               <div className="flex min-w-max flex-row  mt-2">
               <div className="  flex  font-medium text-lg text-cyan-900 ">
               {element}
              </div>
              </div>        
        </div>
        
      </div>
                </div>)})}
              
              
            </div>
            
          </div>
          </div>
        </div>
            <div className="m-7  mt-16">
             {/* Header */}
             <h1 className="my-2 ml-16 font-medium text-lg text-cyan-900 ">
              Online Interview Questions:
            </h1>
        <div className="px-12 md:px-10  w-1/4 min-w-max min-w-fit flex">
          <div>
            {/* Card stats */}
            
            
            {Questions.map((element) => {
                return(
                <div className="w-full mt-4   rounded-lg border-1 px-5 color-purple-200">
                <div className="relative flex flex-col min-w-0 break-words bg-white border-2 rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
        <div className="flex min-w-max flex-row  mt-2">
        <div className=" mt-1 flex h-6 w-9 cursor-pointer justify-center rounded-md ">
             <BsFillCameraVideoFill className="text-purple-600 -ml-6"/>
              </div>
               <div className=" -mx-4 -mt-1 flex  font-medium text-lg text-cyan-900 ">
               {element.interviewQuestion}
              </div>
              <div className="-mt-2 ml-20 flex flex-row items-start ">
                    
                     
                    
                    </div>
              </div>
          
            
        <div className="flex min-w-max flex-row mx-8 mt-2">
               <div className=" -mx-2 mt-2 flex  cursor-pointer text-slate-700 justify-center">
               Recording
              </div>
              <div className=" mt-2 mx-4 flex text-purple-600 cursor-pointer justify-center font-normal ">
               {element.Recording}
              </div>
              <div className="  mx-10 mt-2 flex  cursor-pointer text-slate-700 justify-center  ">
              Auto-Start
              </div>
              <div className="mt-2 -mx-8 flex cursor-pointer text-purple-600 font-normal ">
              {element.autoStart}
              </div>
              </div>
              
        </div>
        
      </div>
                </div>)})}
              
              
            </div>
            
         
        </div>
        
            
            </div>
            <div className="flex items-center  justify-between mt-16 my-8 place-self-end px-9 ml-80  " style={{alignItems: "end"}}>
    
     
    <div className="mx-28 flex min-w-max cursor-pointer  flex-row overflow-auto text-blue-400">
    <Link href='/createproject2'> 
    <button className="border-2 border-purple-600 hover:bg-purple-600 hover:text-white ml-60 text-purple-600 font-semibold py-2 px-12 rounded-full " >
       Back
     </button></Link>
    <Link href=''> 
    <button className="mx-8 border-2 bg-purple-600 hover:text-purple-600 hover:border-purple-600 hover:bg-white  text-white font-semibold py-2 px-12 rounded-full " type="button">
       Next
     </button></Link>
     </div>
     
   </div> 
      </div></div>
      
        </div></div>
    
            </body>
)
}

