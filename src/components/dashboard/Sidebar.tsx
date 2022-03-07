import React, { useState, useEffect } from 'react'
import { RiSettings2Fill } from 'react-icons/ri'

import { FaUserAlt } from 'react-icons/fa'
import { AiFillAppstore, AiFillFolder } from 'react-icons/ai'
import { IoArrowBack, IoCalendar } from 'react-icons/io5'
export function Sidebar(props) {
  const [hideside, setHideside] = useState(false)

  useEffect(() => {
    props.setHide_side(hideside)
  }, [hideside, props])
  return (
    <aside
      id="sidebar"
      className={
        hideside
          ? 'transition-width fixed top-0  left-0 z-20 hidden  h-full  w-24 flex-shrink-0 flex-col duration-75  sm:flex '
          : ' transition-width fixed top-0  left-0 z-20 hidden h-full   w-64 flex-shrink-0  flex-col duration-75  sm:flex    first-letter:lg:flex'
      }
    >
      <div
        className={
          hideside
            ? ' relative  flex min-h-max min-w-fit flex-1 flex-col border-r border-gray-200 bg-white pt-5'
            : ' relative  flex min-h-max min-w-fit flex-1 flex-col border-r border-gray-200 bg-white pt-5 '
        }
      >
        <div className="flex  flex-initial flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex-1 space-y-1 bg-white px-3">
            <ul className="space-y-2 pb-2">
              <li>
                <a
                  onClick={() => {
                    setHideside(!hideside)
                    console.log(hideside)
                  }}
                  className="group flex   rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  {hideside ? (
                    <span className=" ml-4  h-8 text-center font-bold text-blue-900">
                      {' '}
                      CB
                    </span>
                  ) : (
                    <div className="flex h-8 flex-row ">
                      <span className=" ml-4 text-center font-bold text-blue-900">
                        CareerBoosts
                      </span>
                      <div className="ml-16 flex h-8 w-8  justify-center rounded-md bg-blue-50">
                        <IoArrowBack
                          color="gray"
                          className="mt-1 "
                          size={20}
                        ></IoArrowBack>
                      </div>
                    </div>
                  )}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 space-y-1  bg-white px-3">
            <ul className="mt-16 space-y-2 pb-2">
              <li>
                <a className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100">
                  {hideside ? (
                    <div className=" flex h-10 w-10 content-center justify-center rounded-md bg-blue-50">
                      <AiFillAppstore
                        color="navy"
                        className=" mt-2.5"
                        size={20}
                      ></AiFillAppstore>
                    </div>
                  ) : (
                    <div className="flex flex-row">
                      <div className=" flex h-10 w-10 content-center justify-center rounded-md bg-blue-50">
                        <AiFillAppstore
                          color="navy"
                          className=" mt-2.5"
                          size={20}
                        ></AiFillAppstore>
                      </div>
                      <span className=" ml-3 mt-2  text-center ">
                        Dashboard
                      </span>
                    </div>
                  )}
                </a>
              </li>
              <li>
                <a className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100">
                  {hideside ? (
                    <div className=" flex h-10 w-10 justify-center rounded-md bg-blue-50">
                      <FaUserAlt
                        color="navy"
                        className=" mt-2.5"
                        size={20}
                      ></FaUserAlt>
                    </div>
                  ) : (
                    <div className="flex flex-row">
                      <div className=" flex h-10 w-10 justify-center rounded-md bg-blue-50">
                        <FaUserAlt
                          color="navy"
                          className=" mt-2.5"
                          size={20}
                        ></FaUserAlt>
                      </div>
                      <span className=" ml-3  mt-2 text-center">Profile</span>
                    </div>
                  )}
                </a>
              </li>{' '}
              <li>
                <a className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100">
                  {hideside ? (
                    <div className=" flex h-10 w-10 justify-center rounded-md bg-blue-50">
                      <AiFillFolder
                        color="navy"
                        className=" mt-2.5"
                        size={20}
                      ></AiFillFolder>
                    </div>
                  ) : (
                    <div className="flex flex-row">
                      <div className=" flex h-10 w-10 justify-center rounded-md bg-blue-50">
                        <AiFillFolder
                          color="navy"
                          className=" mt-2.5"
                          size={20}
                        ></AiFillFolder>
                      </div>
                      <span className=" ml-3 mt-2  text-center ">Projects</span>
                    </div>
                  )}
                </a>
              </li>{' '}
              <li>
                <a className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100">
                  {hideside ? (
                    <div className=" flex h-10 w-10 justify-center rounded-md bg-blue-50">
                      <RiSettings2Fill
                        color="navy"
                        className=" mt-2.5"
                        size={20}
                      ></RiSettings2Fill>
                    </div>
                  ) : (
                    <div className="flex flex-row">
                      <div className=" flex h-10 w-10 justify-center rounded-md bg-blue-50">
                        <RiSettings2Fill
                          color="navy"
                          className=" mt-2.5"
                          size={20}
                        ></RiSettings2Fill>
                      </div>
                      <span className=" ml-3 mt-2  text-center">Support</span>
                    </div>
                  )}
                </a>
              </li>{' '}
              <li>
                <a className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100">
                  {hideside ? (
                    <div className=" flex h-10 w-10 justify-center rounded-md bg-blue-50">
                      <IoCalendar
                        color="navy"
                        className=" mt-2.5"
                        size={20}
                      ></IoCalendar>
                    </div>
                  ) : (
                    <div className="flex flex-row">
                      <div className=" flex h-10 w-10 justify-center rounded-md bg-blue-50">
                        <IoCalendar
                          color="navy"
                          className=" mt-2.5"
                          size={20}
                        ></IoCalendar>
                      </div>
                      <span className=" ml-3 mt-2 text-center ">Calendar</span>
                    </div>
                  )}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  )
}
