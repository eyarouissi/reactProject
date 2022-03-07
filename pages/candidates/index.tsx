import React, { useState, useEffect } from 'react'
import Candidate from '@components/dashboard/Candidate'
import { Bar, Doughnut } from 'react-chartjs-2'
import { candidate } from 'data/candidate'
import { candidatesData } from 'data/candidates'
import Pipeline from '@components/dashboard/Pipeline'
import Filter from '@components/dashboard/Filter'
import { Toggle } from '@components/other/Toggle'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { IoLocationSharp } from 'react-icons/io5'
import { FaDollarSign, FaSuitcase, FaGraduationCap } from 'react-icons/fa'
const selectedcandidates=[]
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { renderToHTML } from 'next/dist/server/render'
import { render } from 'react-dom'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,

  Title,
  Tooltip,
  Legend
)
export const getStaticProps = async () => {
    const data = candidatesData
    return {
        props: { candidates: data}
    }
}
export default function Result(candidates) {
  const [hideSide, setHideSide] = useState(false)
  const [hideDrop, setHideDrop] = useState(true)
  const [colorbe, setcolorbe] = useState(['yellow', 'lightgray'])
  const [colorte, setcolorte] = useState(['yellow', 'lightgray'])
  const [colorco, setcolorco] = useState(['yellow', 'lightgray'])
  const [colorcv, setcolorcv] = useState(['yellow', 'lightgray'])
  const [selectedData, setselectedData] = useState(selectedcandidates)
  const [data, setData] = useState(candidatesData)
  //const [finaldata,setFinaldata] = useState([])
  const [sharedStatefilter, setSharedStatefilter] = useState('')
  const [sharedStatecv, setSharedStatecv] = useState({})
  const [sharedStatebe, setSharedStatebe] = useState({})
  const [sharedStateco, setSharedStateco] = useState({})
  const [sharedStatete, setSharedStatete] = useState({})
  const total =  data.length
  const selected = selectedData.length
  const [tab, setTab] = useState('All Applied')
  useEffect(() => {
    console.log(tab)
  }, [tab])
  useEffect(() => {
    let data1 = []
    if (sharedStatefilter === '')
    candidatesData.map((a) => {
        if (
          a.behaviorScore >= sharedStatebe &&
          a.technicalScore >= sharedStatete &&
          a.cvScore > sharedStatecv &&
          a.cognitiveScore > sharedStateco
        )
          data1 = [...data1, a]
          
          
        
      })
    else {
      candidatesData.map((a) => {
        if (
          a.fitness === sharedStatefilter &&
          a.behaviorScore >= sharedStatebe &&
          a.technicalScore >= sharedStatete &&
          a.cvScore > sharedStatecv &&
          a.cognitiveScore > sharedStateco
        )
          data1 = [...data1, a]
        

      })
    }
    setData(data1)
  }, [
    sharedStatefilter,
    sharedStatete,
    sharedStatebe,
    sharedStateco,
    sharedStatecv,
  ])

    

  return (
    <div className="mt-2">
      <div>
        <div className='flex items-center'>
          <p className="rounded-lg border-gray-600 px-20 leading-10 text-gray-700 text-xl">Project Manager</p>
          <p className="rounded-lg border-gray-600 leading-10 text-gray-600 "> 
          <span className="rounded-lg border-gray-600 leading-10 text-gray-600 "/> Public 01.12.2022</p>
          
        </div>
      <div className="flex items-center  ">
        <ul className="ml-14 flex cursor-pointer">
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500">
            <button className="block  min-w-fit flex-1    border-b-4 border-solid border-blue-400 py-4 px-6 text-sm font-semibold text-gray-700 hover:text-blue-500 focus:outline-none" 
            onClick={() => {
              setTab('All Applied')
            }}>
              All Applied 
              <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
              {total}</span>
            </button>
          </li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500 ">
            <button className=" block  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-gray-700 hover:border-b-4 hover:border-solid  hover:border-blue-900  focus:outline-none"
            onClick={() => {
              setTab('Selected')
              
              console.log(selectedcandidates)
            }}>
              Selected
              <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                {selected}
              </span>
            </button>
          </li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500 ">
            <button className="block  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-gray-700 hover:border-b-4 hover:border-solid  hover:border-blue-900  focus:outline-none"
            onClick={() => {
              setTab('Interviewed')
            }}>
              {' '}
              Interviewed
              <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                0
              </span>
            </button>
          </li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500 ">
            <button className="block  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-gray-700 hover:border-b-4 hover:border-solid  hover:border-blue-900  focus:outline-none "
            onClick={() => {
              setTab('Offer')
              
            }}>
              Offer
              <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                0
              </span>
            </button>
          </li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500 ">
            <button className="block  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-gray-700 hover:border-b-4 hover:border-solid  hover:border-blue-900  focus:outline-none "
            onClick={() => {
              setTab('Hired')
            }}>
              Hired
              <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                0
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
      <div className="flex min-h-full min-w-full flex-row flex-wrap bg-gray-100 px-10">
        <div className="mb-4  mr-10 h-full  w-1/4  min-w-fit px-8">
          <div className="  my-8 min-w-fit rounded-md border-2 border-gray-300 bg-white p-6 tracking-wide shadow-lg">
            <Filter
              setSharedStatete={setSharedStatete}
              sharedStatete={sharedStatete}
              setSharedStateco={setSharedStateco}
              sharedStateco={sharedStateco}
              setSharedStatecv={setSharedStatecv}
              sharedStatecv={sharedStatecv}
              setSharedStatebe={setSharedStatebe}
              sharedStatebe={sharedStatebe}
              setSharedStatefilter={setSharedStatefilter}
              sharedStatefilter={sharedStatefilter}
            ></Filter>
          </div>
        </div>
        <div className=" mb-20   w-8/12 px-2">
        <div className="-mx-2 flex min-w-fit  flex-col   ">
                {tab === 'All Applied' ? (
                  <>
          <div className=" mb-20   w-8/12 px-2">
          <div className="-mx-2 flex min-w-fit  flex-col   ">
            
            {data.map((element) => {
              if (data===[] )
              {
                return( <div className="my-8 mb-20 h-60 w-full px-1 ">
                <div className="w-full rounded-md border-2 border-gray-300 bg-white p-6 tracking-wide shadow-lg">
                  <div id="header" className="mb-4 flex items-center justify-between">
                    <h1>There is no candidate that matches these criterias</h1>
                    <div className="flex items-center">
                      </div></div></div></div> )
              }
              else {
                console.log(data)
              return (<div className="my-8 mb-20 h-60 w-full px-1 ">
              <div className="w-full rounded-md border-2 border-gray-300 bg-white p-6 tracking-wide shadow-lg">
                <div id="header" className="mb-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      width={110}
                      alt="avatar"
                      className=" h-28 object-cover rounded-full border-4 border-blue-400"
                      src={element.photo}
                    />
                    <div id="header-text" className="sm ml-8 leading-5">
                      <Link href={'/candidates/'+ element._id } key ={element._id}>
                      <h4 id="name" className="-mt-5  text-gray-700 underline font-semibold">
                        {element.name}
                      </h4>
                      </Link>
                      <h5
                        id="job"
                        className=" mt-2 text-sm  text-gray-600"
                      >
                        {element.jobTitle}
                      </h5>
                      <div className="mt-2 flex flex-row">
                        <IconContext.Provider value={{ color: 'gray' }}>
                          <IoLocationSharp className="mt-1"></IoLocationSharp>
                        </IconContext.Provider>
                        <h5
                          id="address"
                          className="text-sm font-semibold text-gray-600"
                        >
                          {element.address}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className=" -mt-1 -ml-20 self-start">
                    <>
                      {' '}
                      {element.fitness === 'Fit for the Role' ? (
                        <text className="m-1 rounded-full bg-green-200 px-2 py-1 text-sm font-light leading-10 hover:bg-green-300">
                          {element.fitness}
                        </text>
                      ) : (
                        <></>
                      )}
                    </>
                    <>
                      {' '}
                      {element.fitness === 'Future Potential' ? (
                        <text className=" m-1 rounded-full bg-orange-200 px-2 py-1 text-sm font-light leading-10 hover:bg-orange-300">
                          {element.fitness}
                        </text>
                      ) : (
                        <></>
                      )}
                    </>
                    <>
                      {' '}
                      {element.fitness === 'Over Qualified' ? (
                        <text className="m-1 rounded-full bg-purple-200 px-2 py-1 text-sm font-light leading-10 hover:bg-purple-300">
                          {element.fitness}
                        </text>
                      ) : (
                        <></>
                      )}
                    </>
                  </div>
                  <div className="-mt-20 flex flex-row items-start ">
                    <div className="mx-1 flex flex-row ">
                      Select
                      <Toggle backgroundcolor={" bg-blue-500"} element={element} list={selectedcandidates} className="mx-2" name="toggle" icon={undefined}  />
                    
                    </div>
                    
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
                        {element.experience1}
                      </text>
                    </div>
                    <div className="my-3">
                      <text className="m-1 flex  w-80 flex-row rounded-lg bg-blue-100 py-1 pl-1 pr-2 text-xs text-gray-600  hover:bg-blue-200">
                        <IconContext.Provider value={{ color: 'gray' }}>
                          <FaGraduationCap className="m-1"></FaGraduationCap>
                        </IconContext.Provider>
                        {element.experience2}
                      </text>
                    </div>
                    <text className="m-1  flex  w-48 flex-row rounded-lg bg-blue-100 pl-1 pr-2 text-xs text-gray-600 placeholder:py-1 hover:bg-blue-200">
                      <IconContext.Provider value={{ color: 'gray' }}>
                        <FaDollarSign className="m-1"></FaDollarSign>
                      </IconContext.Provider>
                      {element.experience3}
                    </text>
                  </div>
                  <div className="-mb-16 flex flex-row items-end">
                    <div className="mx-5 ">
                      <div className="text-2xl font-semibold text-blue-400">
                        {element.technicalScore}%
                      </div>
                      <text className="text-xs text-gray-600">Technical Score</text>
                    </div>
                    <div className=" mx-5 ">
                      <div className="text-2xl font-semibold text-blue-400">
                        {element.behaviorScore}%
                      </div>
                      <text className="text-xs text-gray-600">Behavioral Score</text>
                    </div>
                    <div className="mx-5">
                      <div className="text-2xl font-semibold text-blue-400">
                        {element.cognitiveScore}%
                      </div>
        
                      <text className="text-xs text-gray-600">Cognitive Score</text>
                    </div>
                    <div className="mx-5">
                      <div className="text-2xl font-semibold  text-blue-400">
                        {element.cvScore}%
                      </div>
                      <text className="text-xs text-gray-600"> CV Score</text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        
 } })}
          </div>
        </div>
                  </>
                ) : (
                  <></>
                )}{' '}
                {tab === 'Selected' ? (
                  
                  <>
                  <div className=" mb-20   w-8/12 px-2">
                     <div className="-mx-2 flex min-w-fit  flex-col   ">
                     {selectedcandidates.map((element) =>{  
                       return(
                        <Candidate key={element.name} props={element}></Candidate>            ) })}
                     
                    
                    </div>
                    </div>
                    </>
                ) : (
                  <></>
                )}{' '}
                {tab === 'Cognitive Score' ? (
                  <>
                    <div className=" col-span-9 row-span-5  bg-white">
                      {' '}
                      <nav className="mx-10  flex flex-1 flex-row p-2">
                        <button
                          onClick={() => {
                            setTab('Summary')
                          }}
                          className=" block h-1/2 w-1/5  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-gray-900 hover:border-b-4 hover:border-solid  hover:border-blue-900 hover:text-blue-900 focus:outline-none"
                        >
                          Summary
                        </button>
                        <button
                          onClick={() => {
                            setTab('Online Interview')
                          }}
                          className=" block h-1/2 w-1/5  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-gray-900 hover:border-b-4 hover:border-solid  hover:border-blue-900 hover:text-blue-900 focus:outline-none"
                        >
                          Online Interview
                        </button>
                        <button
                          onClick={() => {
                            setTab('Technical Score')
                          }}
                          className=" block h-1/2 w-1/5  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-gray-900 hover:border-b-4 hover:border-solid  hover:border-blue-900 hover:text-blue-900 focus:outline-none"
                        >
                          Technical Score
                        </button>
                        <button
                          onClick={() => {
                            setTab('Cognitive Score')
                          }}
                          className="block h-1/2 w-1/5 min-w-fit flex-1    border-b-4 border-solid border-blue-400 py-4 px-6 text-sm font-semibold   text-gray-900 hover:text-blue-500 focus:outline-none"
                        >
                          Cognitive Score
                        </button>
                      </nav>
                      <div className=" mb-0 -mt-2  h-[32rem] overflow-y-hidden  rounded-tl-3xl bg-blue-50 shadow-inner  hover:overflow-y-auto">
                        <div className="grid grid-flow-col grid-cols-9 grid-rows-2 gap-10 p-10">
                          <div
                            className="col-span-9 row-span-3  flex h-96 min-h-fit min-w-fit rounded-lg
                            bg-white  p-6 shadow-lg "
                          >
                            {' '}
                            <div className="flex flex-col">
                              <span className="font-semibold text-blue-900">
                                {' '}
                                Hogan Personality Inventory: Personality Scale
                              </span>
                             
                            </div>
                          </div>
                          <div className="col-span-9 col-start-1 row-start-4 flex      h-64     min-h-fit min-w-fit rounded-lg bg-white p-6 shadow-lg">
                            <div className="flex flex-col">
                              <span className="font-semibold text-blue-900">
                                {' '}
                                Hogan Personality Inventory: Occupational Scale
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className=" grid grid-flow-col grid-cols-9 grid-rows-2 gap-x-10 gap-y-4 p-10">
                          <div className=" col-span-6 row-span-2 mt-2 flex h-64 min-h-fit min-w-fit rounded-lg   bg-white  p-6 shadow-lg ">
                            <div className="flex flex-col">
                              <span className="font-semibold text-blue-900">
                                {' '}
                                Hogan Business Reasoning Inventory: Occupational
                                Scale
                              </span>
                              <div className="grid-col-6 mt-10 grid grid-flow-col gap-10">
                                <div className="col-start-2">
                               
                                  <div className=" ml-[3rem] -mt-[4rem] text-xl text-blue-900">
                                    30%
                                  </div>
                                </div>
                                <div className="col-start-3">
                                  
                                  <div className=" ml-[3rem] -mt-[4rem] text-xl text-blue-900">
                                    60%
                                  </div>
                                </div>
                               
                                  <div className=" ml-[3rem] -mt-[4rem] text-xl text-blue-900">
                                    20%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-3 col-start-7  row-span-1 row-start-1 flex h-32 min-h-fit min-w-fit rounded-lg bg-white p-6  shadow-lg">
                            <div className="flex flex-col">
                              <span className="font-semibold text-blue-900">
                                {' '}
                                Cognitive Style
                              </span>
                            </div>
                          </div>
                          <div className="col-span-3 col-start-7 row-start-2   flex h-32  min-h-fit min-w-fit rounded-lg bg-white p-6 shadow-lg">
                            <div className="flex flex-col">
                              <span className="font-semibold text-blue-900">
                                {' '}
                                Business Reasoning Level
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                   
                      </>
                ) : (
                  <></>
                )}
              </div>
              
              </div>
              </div>
   </div>
  )
}

