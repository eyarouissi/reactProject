import React, { useState } from 'react'
import { Toggle } from '@components/other/Toggle'

import { AiOutlineMail } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { IoLocationSharp } from 'react-icons/io5'
import { FaDollarSign, FaSuitcase, FaGraduationCap } from 'react-icons/fa'

export default function Candidate(props,state) {
  return (
    <div className="my-8 mb-20 h-60 w-full px-1 ">
      <div className="w-full rounded-md border-2 border-gray-300 bg-white p-6 tracking-wide shadow-lg">
        <div id="header" className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              width={110}
              alt="avatar"
              className=" h-28 object-cover rounded-full border-4 border-blue-400"
              src={props.props.photo}
            />
            <div id="header-text" className="sm ml-8 leading-5">
              <h4 id="name" className="-mt-5  text-gray-700 underline font-semibold">
                {props.props.name}
              </h4>
              <h5
                id="job"
                className=" mt-2 text-sm  text-gray-600"
              >
                {props.props.jobTitle}
              </h5>
              <div className="mt-2 flex flex-row">
                <IconContext.Provider value={{ color: 'gray' }}>
                  <IoLocationSharp className="mt-1"></IoLocationSharp>
                </IconContext.Provider>
                <h5
                  id="address"
                  className="text-sm font-semibold text-gray-600"
                >
                  {props.props.address}
                </h5>
              </div>
            </div>
          </div>
          <div className=" -mt-1 -ml-20 self-start">
            <>
              {' '}
              {props.props.fitness === 'Fit for the Role' ? (
                <text className="m-1 rounded-full bg-green-200 px-2 py-1 text-sm font-light leading-10 hover:bg-green-300">
                  {props.props.fitness}
                </text>
              ) : (
                <></>
              )}
            </>
            <>
              {' '}
              {props.props.fitness === 'Future Potential' ? (
                <text className=" m-1 rounded-full bg-orange-200 px-2 py-1 text-sm font-light leading-10 hover:bg-orange-300">
                  {props.props.fitness}
                </text>
              ) : (
                <></>
              )}
            </>
            <>
              {' '}
              {props.props.fitness === 'Over Qualified' ? (
                <text className="m-1 rounded-full bg-purple-200 px-2 py-1 text-sm font-light leading-10 hover:bg-purple-300">
                  {props.props.fitness}
                </text>
              ) : (
                <></>
              )}
            </>
          </div>
          <div className="-mt-20 flex flex-row items-start ">
            
            <IconContext.Provider value={{ color: 'dodgerblue' }}>
              <div className=" mx-1 cursor-pointer">
                <AiOutlineMail size={28}></AiOutlineMail>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: 'dodgerblue' }}>
              <div className=" mx-1 cursor-pointer">
                <BsThreeDotsVertical size={28}></BsThreeDotsVertical>
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div className="mt-5 w-full" id="quote">
            <div>
              <text className=" m-1 flex w-48  flex-row rounded-lg bg-blue-100 py-1 pl-1 pr-2 text-xs  text-gray-600 hover:bg-blue-200">
                <IconContext.Provider value={{ color: 'gray' }}>
                  <FaSuitcase className="m-1  "></FaSuitcase>
                </IconContext.Provider>
                {props.props.experience1}
              </text>
            </div>
            <div className="my-3">
              <text className="m-1 flex  w-80 flex-row rounded-lg bg-blue-100 py-1 pl-1 pr-2 text-xs text-gray-600  hover:bg-blue-200">
                <IconContext.Provider value={{ color: 'gray' }}>
                  <FaGraduationCap className="m-1"></FaGraduationCap>
                </IconContext.Provider>
                {props.props.experience2}
              </text>
            </div>
            <text className="m-1  flex  w-48 flex-row rounded-lg bg-blue-100 pl-1 pr-2 text-xs text-gray-600 placeholder:py-1 hover:bg-blue-200">
              <IconContext.Provider value={{ color: 'gray' }}>
                <FaDollarSign className="m-1"></FaDollarSign>
              </IconContext.Provider>
              {props.props.experience3}
            </text>
          </div>
          <div className="-mb-16 flex flex-row items-end">
            <div className="mx-5 ">
              <div className="text-2xl font-semibold text-blue-400">
                {props.props.technicalScore}%
              </div>
              <text className="text-xs text-gray-600">Technical Score</text>
            </div>
            <div className=" mx-5 ">
              <div className="text-2xl font-semibold text-blue-400">
                {props.props.behaviorScore}%
              </div>
              <text className="text-xs text-gray-600">Behavioral Score</text>
            </div>
            <div className="mx-5">
              <div className="text-2xl font-semibold text-blue-400">
                {props.props.cognitiveScore}%
              </div>

              <text className="text-xs text-gray-600">Cognitive Score</text>
            </div>
            <div className="mx-5">
              <div className="text-2xl font-semibold  text-blue-400">
                {props.props.cvScore}%
              </div>
              <text className="text-xs text-gray-600"> CV Score</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
