import { Toggle } from '@components/other/Toggle'
import { BigInputRange } from '@components/other/BigInputRange'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { IconContext } from 'react-icons'
import { AiFillMail } from 'react-icons/ai'
import { BsFillTelephoneFill, BsQuestionCircleFill } from 'react-icons/bs'
import { FaShareAlt } from 'react-icons/fa'
import { IoMdNotifications } from 'react-icons/io'
import { FcPrevious, FcNext } from 'react-icons/fc'
import { GoPrimitiveDot } from 'react-icons/go'
import Image from 'next/image'

import { Bar, Doughnut } from 'react-chartjs-2'
import { candidatesData } from 'data/candidates'
import { repeaterData } from 'data/user'
import ReactPlayer from 'react-player'
import ReactStars from 'react-rating-stars-component'

import { Chart } from 'chart.js/auto'

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
export const getStaticPaths = async () =>{
  const data = candidatesData
  const paths = data.map((candidate=> {
      return {
          params: { id : candidate._id.toString()}
      }   
  }))
  
  return{
      paths,
      fallback: false
  }
 
}
export const getStaticProps = async(context) =>{

  const _id = context.params.id;
  let data = {} ;
  candidatesData.forEach(element=>{
      if (element._id==_id)
      {
          data = element
      }})

  return{
      props: { 

      
             candidate : data
         }
      
  }}
export default function Result({candidate}) {
  const [hideSide, setHideSide] = useState(false)
  const [hideDrop, setHideDrop] = useState(true)
  const [colorbe, setcolorbe] = useState(['#f0cb69', 'lightgray'])
  const [colorte, setcolorte] = useState(['#f0cb69', 'lightgray'])
  const [colorco, setcolorco] = useState(['#f0cb69', 'lightgray'])
  const [colorcv, setcolorcv] = useState(['#f0cb69', 'lightgray'])
  const [colorskill, setcolorskill] = useState([])
  const [colorhogan, setcolorhogan] = useState([])
  const [sharedStateBusiness, setSharedStateBusiness] = useState(30)
  const [sharedStateThinker, setSharedStateThinker] = useState(60)

  const [tab, setTab] = useState('Summary')
  const Certificates = [
    'Project Management Professional (PMP)',

    'Certified Associate in Project Management (CAPM)',

    'PMI Agile Certified Practitioner (PMI-ACP)',

    'Portfolio Management Professional (PfMP)',
  ]
  const technicalskills = [
    'Communications Management',
    'Cost Management',
    'Integration Management',
    'Project management tools and techniques',
    'Quality management',
    'Ressource Managmenet',
    'Risk Management',
    'Schedule Management',
    'Stakeholder Management',
  ]
  const newLocal = [88, 77, 72, 68, 62, 54, 48, 41, 33, 20]
  const technicaldata = newLocal
  const hoganskills = [
    'Learning Approach',
    'Interpersonal Sensitivity',
    'Inquisitive',
    'Sociability',
    'Adjustement',
    'Prudence',
    'Ambition',
  ]
  const newLocal_2 = [99, 78, 76, 66, 63, 54, 24]
  const hogandata = newLocal_2
  useEffect(() => {
    console.log(tab)
  }, [tab])
  useLayoutEffect(() => {
    {
      if (candidate.behaviorScore < 50) {
        setcolorbe(['#dc5356', 'lightgray'])
      } else {
        if (candidate.behaviorScore < 70) setcolorbe(['#f0cb69', 'lightgray'])
        else setcolorbe(['#01b8aa  ', 'lightgray'])
      }
      if (candidate.cvScore < 50) {
        setcolorcv(['#dc5356', 'lightgray'])
      } else {
        if (candidate.cvScore < 70) setcolorcv(['#f0cb69', 'lightgray'])
        else setcolorcv(['#01b8aa  ', 'lightgray'])
      }
      if (candidate.cognitiveScore < 50) {
        setcolorco(['#dc5356', 'lightgray'])
      } else {
        if (candidate.cognitiveScore < 70) setcolorco(['#f0cb69', 'lightgray'])
        else setcolorco(['#01b8aa  ', 'lightgray'])
      }
      if (candidate.technicalScore < 50) {
        setcolorte(['#dc5356', 'lightgray'])
      } else {
        if (candidate.technicalScore < 70) setcolorte(['#f0cb69', 'lightgray'])
        else setcolorte(['#01b8aa  ', 'lightgray'])
      }
      let colors = []
      technicaldata.map((a) => {
        if (a < 50) {
          console.log('iteration' + a)
          colors.push('#dc5356')
        } else {
          if (a < 70) {
            console.log('iteration' + a)
            colors.push('#f0cb69')
          } else {
            colors.push('#01b8aa')
            console.log('iteration' + a)
          }
        }
      })

      setcolorskill(colors)
      colors = []
      hogandata.map((a) => {
        if (a < 50) {
          console.log('iteration' + a)
          colors.push('#dc5356')
        } else {
          if (a < 70) {
            console.log('iteration' + a)
            colors.push('#f0cb69')
          } else {
            colors.push('#01b8aa')
            console.log('iteration' + a)
          }
        }
      })
      setcolorhogan(colors)
    }
  }, [])
  const dataho = {
    labels: hoganskills,
    datasets: [
      {
        // barThickness: 70,
        backgroundColor: colorhogan,
        borderColor: colorhogan,
        borderWidth: 1,

        data: hogandata,
      },
    ],
  }
  const data = {
    labels: technicalskills,
    datasets: [
      {
        backgroundColor: colorskill,
        borderColor: colorskill,
        borderWidth: 1,

        data: technicaldata,
        indexAxis: 'y',
      },
    ],
  }
  const databe = {
    labels: ['Behavioral Score'],
    datasets: [
      {
        data: [candidate.behaviorScore, 100 - candidate.behaviorScore],
        backgroundColor: colorbe,
        hoverBackgroundColor: colorbe,
      },
    ],
  }
  const dataql = {
    // labels: ["Qualitative Reasoning"],
    datasets: [
      {
        data: [30, 70],
        backgroundColor: ['#dc5356', 'lightgray'],
        hoverBackgroundColor: ['#dc5356', 'lightgray'],
      },
    ],
  }
  const dataqn = {
    //labels: ["Quantitative Reasoning"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#f0cb69', 'lightgray'],
        hoverBackgroundColor: ['#f0cb69', 'lightgray'],
      },
    ],
  }
  const databu = {
    //labels: ["Business Rating "],
    datasets: [
      {
        data: [20, 80],
        backgroundColor: ['#dc5356', 'lightgray'],
        hoverBackgroundColor: ['#dc5356', 'lightgray'],
      },
    ],
  }
  const dataSo = {
    //labels: ["Service Orientation"],
    datasets: [
      {
        data: [33, 67],
        backgroundColor: ['#dc5356', 'lightgray'],
        hoverBackgroundColor: ['#dc5356', 'lightgray'],
      },
    ],
  }
  const dataRe = {
    // labels: ["Reliability"],
    datasets: [
      {
        data: [23, 77],
        backgroundColor: ['#dc5356', 'lightgray'],
        hoverBackgroundColor: ['#dc5356', 'lightgray'],
      },
    ],
  }
  const dataSp = {
    // labels: ["Sales Potential"],
    datasets: [
      {
        data: [55, 45],
        backgroundColor: ['#f0cb69', 'lightgray'],
        hoverBackgroundColor: ['#f0cb69', 'lightgray'],
      },
    ],
  }
  const dataMp = {
    // labels: ["Managerial Potential"],
    datasets: [
      {
        data: [55, 45],
        backgroundColor: ['#f0cb69', 'lightgray'],
        hoverBackgroundColor: ['#f0cb69', 'lightgray'],
      },
    ],
  }
  const dataCp = {
    // labels: ["Clerical Potential"],
    datasets: [
      {
        data: [76, 24],
        backgroundColor: ['#01b8aa', 'lightgray'],
        hoverBackgroundColor: ['#01b8aa', 'lightgray'],
      },
    ],
  }
  const dataSt = {
    // labels: ["Stress Tolerance"],
    datasets: [
      {
        data: [93, 7],
        backgroundColor: ['#01b8aa', 'lightgray'],
        hoverBackgroundColor: ['#01b8aa', 'lightgray'],
      },
    ],
  }
  const datate = {
    labels: ['Technical Score'],
    datasets: [
      {
        data: [candidate.technicalScore, 100 - candidate.technicalScore],
        backgroundColor: colorte,
        hoverBackgroundColor: colorte,
      },
    ],
  }
  const dataco = {
    labels: ['Cognitive Score'],
    datasets: [
      {
        data: [candidate.cognitiveScore, 100 - candidate.cognitiveScore],
        backgroundColor: colorco,
        hoverBackgroundColor: colorco,
      },
    ],
  }
  const datacv = {
    labels: ['Cv Score'],
    datasets: [
      {
        data: [candidate.cvScore, 100 - candidate.cvScore],
        backgroundColor: colorcv,
        hoverBackgroundColor: colorcv,
        spacing: 0,
      },
    ],
  }
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  }
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  const online = {
    question1: 'What motivates you to work?',
    question2: 'What is special about you? ',
    question3: 'Tell us about some of the highs and the lows of your job?',
    question4: 'How do you go about to thrive in a bad work enviorement?',
    video1: 'https://www.youtube.com/watch?v=yzkXHKCy2As',
    video2: 'https://www.youtube.com/watch?v=pbHbqOJ7wos',
    video3: 'https://www.youtube.com/watch?v=VM5u-f-JX44',
    video4: 'https://www.youtube.com/watch?v=s_vDZ1aEwKM',
  }
  useEffect(() => {
    setSharedStateBusiness(32)
  }, [])
  return (
    <div className=" min-w-screen  flex min-h-screen flex-1 flex-row  overflow-auto bg-gray-50 pl-6 pt-10 pr-6">
      {/* <Sidebar setHide_side={setHideSide} hide_side={hideSide}></Sidebar> */}

      <div
        className={
          hideSide
            ? ' h-full   min-h-fit w-3/4 flex-1 bg-gray-50  sm:ml-24'
            : ' h-full   min-h-fit w-3/4 flex-1 bg-gray-50  '
        }
      >
        <div className=" flex  min-w-max flex-col">
          <div className="flex flex-row justify-between  px-6  xl:px-8">
            <div className="flex min-w-max  flex-row overflow-auto">
              <a className="cursor-pointer text-lg font-bold text-blue-900">
                Projects{' '}
              </a>
              <div className="ml-1  text-lg font-bold text-blue-900">&gt;</div>
              <a className="ml-1 cursor-pointer text-lg font-bold text-blue-900">
                {repeaterData.applied_role}
              </a>{' '}
              <div className="ml-1 text-lg font-bold text-blue-900">&gt;</div>
              <a className="ml-1 cursor-pointer text-lg font-bold text-blue-900">
                {candidate.name}
              </a>
            </div>
            <div className="flex min-w-max flex-row">
              <div className=" mx-2 -mt-1 flex h-8 w-8 cursor-pointer justify-center rounded-md bg-blue-50">
                <IoMdNotifications color="navy" className=" mt-2" size={16} />
              </div>
              <div className=" mx-2 -mt-1 flex h-8 w-8 cursor-pointer justify-center rounded-md bg-blue-50">
                <AiFillMail color="navy" className=" mt-2" size={16} />
              </div>
              <div className="ml-2 text-base  text-blue-900">Hi, </div>

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
                      {/* <span
                        role="menuitem"
                        tabIndex={-1}
                        className="flex w-full cursor-not-allowed justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 opacity-50"
                        aria-disabled="true"
                      >
                        New feature (soon)
                      </span> */}
                      {/* <a
                        href=""
                        tabIndex={2}
                        className="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700"
                        role="menuitem"
                      >
                        License
                      </a> */}
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
              <div className=" relative mx-2 -mt-2  flex h-10 w-10  rounded-md bg-white">
                <Image
                  alt="avatar"
                  className=" mt-1 ml-1 h-full  w-full rounded-xl object-cover "
                  layout="fill"
                  src={repeaterData.photo}
                />
              </div>
            </div>
          </div>
          <div className="my-2 flex flex-row  place-self-end px-6  xl:px-8">
            <div className="mx-5 flex min-w-max cursor-pointer flex-row overflow-auto text-blue-400">
              <FcPrevious className="mt-1" />
              Previous candidate
            </div>
            <div className="text-blue-400">||</div>
            <div className="mr-2 ml-5 flex min-w-max cursor-pointer  flex-row overflow-auto text-blue-400">
              Next candidate
              <FcNext className="mt-1.5" />
            </div>
          </div>
          <div className=" px-1 py-2">
            <div className=" min-h-max  min-w-max rounded-lg bg-white p-2 shadow">
              <div className="grid min-h-fit grid-flow-col grid-cols-10 grid-rows-5 gap-0 ">
                <div className="col-span-2 row-span-6   h-4/6 bg-white">
                  <div className=" mt-5 flex   flex-col justify-center">
                    <div className="relative mt-5 h-28 w-28 self-center rounded-full border-4 border-blue-400">
                      <Image
                        layout="fill"
                        alt="avatar"
                        className="h-full w-full rounded-full  object-cover"
                        src={candidate.photo}
                      />
                    </div>

                    <div id="header-text" className="  ">
                      <h4
                        id="name"
                        className=" mt-5 text-center text-lg font-bold text-blue-900"
                      >
                        {candidate.name}
                      </h4>
                      <h5 id="job" className=" mt-4 text-center text-gray-900">
                        {candidate.jobTitle}
                      </h5>
                    </div>
                  </div>
                  <div className=" mt-4 text-center">
                    <>
                      {' '}
                      {candidate.fitness === 'Fit for the Role' ? (
                        <text className="bg-#01b8aa-200 hover:bg-#01b8aa-300  m-1 rounded-full px-2 py-1 text-sm font-light leading-10 text-black">
                          {candidate.fitness}
                        </text>
                      ) : (
                        <></>
                      )}
                    </>
                    <>
                      {' '}
                      {candidate.fitness === 'Future Potential' ? (
                        <text className=" m-1 rounded-full bg-orange-200 px-2 py-1 text-sm font-light leading-10 text-black hover:bg-orange-300">
                          {candidate.fitness}
                        </text>
                      ) : (
                        <></>
                      )}
                    </>
                    <>
                      {' '}
                      {candidate.fitness === 'Over Qualified' ? (
                        <text className="m-1 rounded-full  bg-purple-200 px-2 py-1 text-sm font-light leading-10 text-black hover:bg-purple-300">
                          {candidate.fitness}
                        </text>
                      ) : (
                        <></>
                      )}
                    </>
                  </div>
                  <div className="mt-10 flex flex-row justify-center">
                    <IconContext.Provider value={{ color: '#6495ED' }}>
                      <div className=" mx-3 cursor-pointer">
                        <AiFillMail size={20}></AiFillMail>
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ color: '#6495ED' }}>
                      <div className=" mx-3 cursor-pointer">
                        <BsFillTelephoneFill size={20}></BsFillTelephoneFill>
                      </div>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: '#6495ED' }}>
                      <div className=" mx-3 cursor-pointer">
                        <FaShareAlt size={20}></FaShareAlt>
                      </div>
                    </IconContext.Provider>
                  </div>
                  <div className="mx-2 mt-5 flex flex-row justify-center p-2 text-black">
                    Select
                    <Toggle element={''} list={''}
                      className="ml-2 mt-1"
                      name="toggle"
                      icon={undefined}
                    />
                  </div>
                  <div className="mt-5 text-center">
                    <a
                      href=""
                      className="  rounded-lg bg-blue-400 px-8 py-1 text-center  text-white transition duration-300 ease-in-out hover:bg-blue-500"
                    >
                      Interview
                    </a>
                  </div>
                  <div className="mt-5 mb-10  text-center">
                    <a
                      href=""
                      className="  rounded-lg border-2 border-blue-400 px-10 py-1  text-blue-400 transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white"
                    >
                      Reject
                    </a>
                  </div>
                </div>
                {tab === 'Summary' ? (
                  <>
                    <div className=" col-span-9 row-span-5  bg-white">
                      {' '}
                      <nav className="mx-10  flex flex-1 flex-row p-2">
                        <button
                          onClick={() => {
                            setTab('Summary')
                          }}
                          className=" block h-1/2 w-1/5 min-w-fit flex-1    border-b-4 border-solid border-blue-400 py-4 px-6 text-sm font-semibold   text-gray-900 hover:text-blue-500 focus:outline-none"
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
                          className=" block h-1/2 w-1/5  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-gray-900 hover:border-b-4 hover:border-solid  hover:border-blue-900 hover:text-blue-900 focus:outline-none"
                        >
                          Cognitive Score
                        </button>
                      </nav>
                      <div className=" mb-0 -mt-2  min-h-fit overflow-y-hidden rounded-tl-3xl   bg-blue-50 shadow-inner  hover:overflow-y-auto">
                        <div className="grid grid-flow-col grid-cols-9 grid-rows-2 gap-10 p-10">
                          <div className="  col-span-5 row-span-1  flex min-h-fit min-w-fit rounded-lg   bg-white  p-6 shadow-lg ">
                            <div className="flex flex-col">
                              <span className="font-semibold text-blue-900">
                                {' '}
                                Assessment Summary :
                              </span>
                              <div
                                className={
                                  hideSide
                                    ? 'mt-2 ml-4 w-[30rem]  font-sans text-sm text-black'
                                    : 'mt-2 ml-4 w-[30rem]  text-justify font-sans text-sm text-black'
                                }
                              >
                                {candidate.name} has secured a score of{' '}
                                <b>{candidate.technicalScore}%</b> in the
                                overall technical assessment. The candidate has
                                obtained a score of <b>25%</b> in qualitative
                                reasoning, <b>25%</b> in quantitative reasoning,
                                and <b>0%</b> in business reasoning. Thereby,
                                the HBRI business reasoning level is <b>Low</b>,
                                with a cognitive style of{' '}
                                <b>Expedient Thinker</b>. {candidate.name}
                                &apos;s overall behavioral score is <b>65%</b>.
                                This culminates to <b>46%</b>as the
                                employee&apos;s overall estimated readiness
                                score for the role of <b>Project Manager</b>,
                                positioning him as a <b>Low Fitment</b> for the
                                role.
                              </div>
                            </div>
                          </div>
                          <div className="col-span-4  col-start-6 row-span-1 row-start-1 flex min-h-fit min-w-fit rounded-lg bg-white p-6  shadow-lg">
                            <div className="flex flex-col">
                              <span className="font-semibold text-blue-900">
                                {' '}
                                Certificates:
                              </span>
                              <div className="mt-5 text-left">
                                {Certificates.map((a) => {
                                  const newLocal_1 = (
                                    <div className="mt-2 ml-4 flex flex-row text-black">
                                      <GoPrimitiveDot
                                        color="#6495ED"
                                        className="mt-1 mr-1"
                                        size={16}
                                      />
                                      <div className="  w-96   font-sans text-sm ">
                                        {a}
                                      </div>
                                    </div>
                                  )
                                  return newLocal_1
                                })}
                              </div>
                            </div>
                          </div>
                          <div className="col-span-9 col-start-1      row-start-2 flex  h-64 min-h-fit min-w-fit rounded-lg bg-white p-6 shadow-lg">
                            <div className="flex flex-col">
                              <span className="font-semibold text-blue-900">
                                {' '}
                                Candidate Score:
                              </span>
                              <div className="grid-col-8 grid grid-flow-col   gap-8">
                                <div className="col-start-3">
                                  <Doughnut
                                    data={datate}
                                    className="w-50 h-24 self-center"
                                  />
                                  <div className=" ml-[5rem] -mt-[6rem] text-xl text-blue-900">
                                    {candidate.technicalScore}%
                                  </div>
                                </div>
                                <div className="col-start-4">
                                  <Doughnut
                                    data={databe}
                                    className="w-50 h-24 self-center"
                                  />
                                  <div className=" ml-[5rem] -mt-[6rem] text-xl text-blue-900">
                                    {candidate.behaviorScore}%
                                  </div>
                                </div>
                                <div className="col-start-5">
                                  <Doughnut
                                    data={dataco}
                                    className="w-50 h-24 self-center"
                                  />
                                  <div className=" ml-[5rem] -mt-[6rem] text-xl text-blue-900">
                                    {candidate.cognitiveScore}%
                                  </div>
                                </div>
                                <div className="col-start-6">
                                  <Doughnut
                                    data={datacv}
                                    className="w-50 h-24 self-center"
                                  />
                                  <div className=" ml-[5rem]  -mt-[6rem] text-xl text-blue-900">
                                    {candidate.cvScore}%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}{' '}
                {tab === 'Online Interview' ? (
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
                          className="block h-1/2 w-1/5 min-w-fit flex-1    border-b-4 border-solid border-blue-400 py-4 px-6 text-sm font-semibold   text-gray-900 hover:text-blue-500 focus:outline-none"
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
                          className=" block h-1/2 w-1/5  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-gray-900 hover:border-b-4 hover:border-solid  hover:border-blue-900 hover:text-blue-900 focus:outline-none"
                        >
                          Cognitive Score
                        </button>
                      </nav>
                      <div className=" mb-0 -mt-2  min-h-fit   overflow-y-hidden rounded-tl-3xl bg-blue-50 shadow-inner  hover:overflow-y-auto">
                        <div className="grid grid-flow-col grid-cols-7 grid-rows-2 gap-10 p-10">
                          <div
                            className="col-span-7  col-start-1 row-span-1 flex h-96 min-h-fit  min-w-fit rounded-lg
                            bg-white  p-6 shadow-lg "
                          >
                            <div className="flex flex-col">
                              <div className="flex flex-row">
                                <GoPrimitiveDot
                                  color="#6495ED
"
                                  className="mt-2 mr-2"
                                  size={16}
                                />
                                <span className="text-lg font-semibold text-blue-900">
                                  {' '}
                                  Question 1/4:
                                </span>
                                <span className="font-base mt-1 ml-7 w-[32rem] text-justify text-base text-gray-900">
                                  {online.question1}
                                </span>
                              </div>
                              <div className="flex h-64 flex-row justify-between">
                                <div className=" mt-8 ml-20 h-full w-[30rem] rounded-lg ">
                                  <ReactPlayer
                                    width="100%"
                                    height="100%"
                                    url={online.video1}
                                  />
                                </div>
                                <div className=" mt-8 ml-10 mr-20 w-[17rem]">
                                  <span className="  text-justify text-base font-thin text-gray-900">
                                    Rate this answer:
                                  </span>
                                  <div className=" mb-7 ">
                                    <ReactStars
                                      count={5}
                                      onChange={ratingChanged}
                                      size={28}
                                      isHalf={true}
                                      emptyIcon={
                                        <i className="far fa-star"></i>
                                      }
                                      halfIcon={
                                        <i className="fa fa-star-half-alt"></i>
                                      }
                                      fullIcon={<i className="fa fa-star"></i>}
                                      activeColor="#6495ED"
                                    />
                                  </div>
                                  <span className="  text-justify text-base font-thin text-gray-900">
                                    Note:
                                  </span>
                                  <textarea className="mt-2 h-[8rem] w-[17rem] rounded-lg border-4 border-blue-100 bg-white text-black hover:border-blue-200"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-7 col-start-1 row-start-2 flex      h-96     min-h-fit min-w-fit rounded-lg bg-white p-6 shadow-lg">
                            <div className="flex flex-col">
                              <div className="flex flex-row">
                                <GoPrimitiveDot
                                  color="#6495ED
"
                                  className="mt-2 mr-2"
                                  size={16}
                                />
                                <span className="text-lg font-semibold text-blue-900">
                                  {' '}
                                  Question 2/4:
                                </span>
                                <span className="font-base mt-1 ml-7 w-[32rem] text-justify text-base text-gray-900">
                                  {online.question2}
                                </span>
                              </div>
                              <div className="flex h-64 flex-row justify-between">
                                <div className=" mt-8 ml-20 h-full w-[30rem] rounded-lg ">
                                  <ReactPlayer
                                    width="100%"
                                    height="100%"
                                    url={online.video2}
                                  />
                                </div>
                                <div className=" mt-8 ml-10 mr-20 w-[17rem]">
                                  <span className="  text-justify text-base font-thin text-gray-900">
                                    Rate this answer:
                                  </span>
                                  <div className=" mb-7 ">
                                    <ReactStars
                                      count={5}
                                      onChange={ratingChanged}
                                      size={28}
                                      isHalf={true}
                                      emptyIcon={
                                        <i className="far fa-star"></i>
                                      }
                                      halfIcon={
                                        <i className="fa fa-star-half-alt"></i>
                                      }
                                      fullIcon={<i className="fa fa-star"></i>}
                                      activeColor="#6495ED"
                                    />
                                  </div>
                                  <span className=" text-justify text-base font-thin text-gray-900">
                                    Note:
                                  </span>
                                  <textarea className="mt-2 h-[8rem] w-[17rem] rounded-lg border-4 border-blue-100 bg-white text-black hover:border-blue-200"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-7 col-start-1 row-start-3 flex      h-96     min-h-fit min-w-fit rounded-lg bg-white p-6 shadow-lg">
                            <div className="flex flex-col">
                              <div className="flex flex-row">
                                <GoPrimitiveDot
                                  color="#6495ED
"
                                  className="mt-2 mr-2"
                                  size={16}
                                />
                                <span className="text-lg font-semibold text-blue-900">
                                  {' '}
                                  Question 3/4:
                                </span>
                                <span className="font-base mt-1 ml-7 w-[32rem] text-justify text-base text-gray-900">
                                  {online.question3}
                                </span>
                              </div>
                              <div className="flex h-64 flex-row justify-between">
                                <div className=" mt-8 ml-20 h-full w-[30rem] rounded-lg ">
                                  <ReactPlayer
                                    width="100%"
                                    height="100%"
                                    url={online.video3}
                                  />
                                </div>
                                <div className=" mt-8 ml-10 mr-20 w-[17rem]">
                                  <span className="  text-justify text-base font-thin text-gray-900">
                                    Rate this answer:
                                  </span>
                                  <div className="mb-7 ">
                                    <ReactStars
                                      count={5}
                                      onChange={ratingChanged}
                                      size={28}
                                      isHalf={true}
                                      emptyIcon={
                                        <i className="far fa-star"></i>
                                      }
                                      halfIcon={
                                        <i className="fa fa-star-half-alt"></i>
                                      }
                                      fullIcon={<i className="fa fa-star"></i>}
                                      activeColor="#6495ED"
                                    />
                                  </div>
                                  <span className=" text-justify text-base font-thin text-gray-900">
                                    Note:
                                  </span>
                                  <textarea className="mt-2 h-[8rem] w-[17rem] rounded-lg border-4 border-blue-100 bg-white text-black hover:border-blue-200"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-span-7 col-start-1 row-start-4 flex      h-96     min-h-fit min-w-max rounded-lg bg-white p-6 shadow-lg">
                            <div className="flex flex-col">
                              <div className="flex flex-row">
                                <GoPrimitiveDot
                                  color="#6495ED
"
                                  className="mt-2 mr-2"
                                  size={16}
                                />
                                <span className="text-lg font-semibold text-blue-900">
                                  {' '}
                                  Question 4/4:
                                </span>
                                <span className="font-base mt-1 ml-7 w-[32rem] text-justify text-base text-gray-900">
                                  {online.question4}
                                </span>
                              </div>
                              <div className="flex h-64  flex-row justify-between ">
                                <div className=" mt-8 ml-20 h-full w-[30rem] rounded-lg ">
                                  <ReactPlayer
                                    width="100%"
                                    height="100%"
                                    url={online.video4}
                                  />
                                </div>
                                <div className=" mt-8 ml-10 mr-20 w-[17rem]">
                                  <span className="  text-justify text-base font-thin text-gray-900">
                                    Rate this answer:
                                  </span>
                                  <div className=" mb-7 ">
                                    <ReactStars
                                      count={5}
                                      onChange={ratingChanged}
                                      size={28}
                                      isHalf={true}
                                      emptyIcon={
                                        <i className="far fa-star"></i>
                                      }
                                      halfIcon={
                                        <i className="fa fa-star-half-alt"></i>
                                      }
                                      fullIcon={<i className="fa fa-star"></i>}
                                      activeColor="#6495ED"
                                    />
                                  </div>
                                  <span className=" text-justify text-base font-thin text-gray-900">
                                    Note:
                                  </span>
                                  <textarea className="mt-2 h-[8rem] w-[17rem] rounded-lg border-4 border-blue-100 bg-white text-black hover:border-blue-200"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                {tab === 'Technical Score' ? (
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
                          className="block h-1/2 w-1/5 min-w-fit flex-1    border-b-4 border-solid border-blue-400 py-4 px-6 text-sm font-semibold   text-gray-900 hover:text-blue-500 focus:outline-none"
                        >
                          Technical Score
                        </button>
                        <button
                          onClick={() => {
                            setTab('Cognitive Score')
                          }}
                          className=" block h-1/2 w-1/5  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-gray-900 hover:border-b-4 hover:border-solid  hover:border-blue-900 hover:text-blue-900 focus:outline-none"
                        >
                          Cognitive Score
                        </button>
                      </nav>
                      <div className=" mb-0 -mt-2 min-h-fit overflow-y-hidden rounded-tl-3xl   bg-blue-50 shadow-inner  hover:overflow-y-auto">
                        <div className="grid grid-flow-col grid-cols-9 grid-rows-2 gap-10 p-10">
                          <div
                            className="col-span-9 row-span-2  flex h-[38rem] min-h-fit min-w-fit rounded-lg
                            bg-white  p-6 shadow-lg "
                          >
                            <div className="flex flex-col p-8">
                              <span className="font-semibold text-blue-900">
                                {' '}
                                Top Technical Strengths :
                              </span>
                              <Bar
                                data={data}
                                options={options}
                                className="mt-10 h-[28rem] w-full self-center"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
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
                      <div className=" mb-0 -mt-2  min-h-fit overflow-y-hidden  rounded-tl-3xl bg-blue-50 shadow-inner  hover:overflow-y-auto">
                        <div className="grid grid-flow-col grid-cols-9 grid-rows-2 gap-10 p-10">
                          <div
                            className="col-span-9 row-span-3 flex   min-h-fit min-w-fit overflow-x-hidden rounded-lg
                            bg-white  p-6 shadow-lg "
                          >
                            {' '}
                            <div className="flex flex-col">
                              <span className=" font-semibold text-blue-900">
                                {' '}
                                Hogan Personality Inventory: Personality Scale
                              </span>
                              <div className="  mt-5 min-h-fit items-center  self-center  ">
                                <Bar
                                  data={dataho}
                                  options={options}
                                  // height={108}
                                  // height={50}
                                  // width={120}
                                  //h-[24rem]w-[61rem] height={28}
                                  className="h-[12rem] w-[61rem]  self-center "
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-span-9 col-start-1 row-start-4 flex           min-h-fit min-w-fit rounded-lg bg-white p-6 shadow-lg">
                            <div className="flex flex-col">
                              <span className="font-semibold text-blue-900">
                                {' '}
                                Hogan Personality Inventory: Occupational Scale
                              </span>
                              <div
                                className={
                                  hideSide
                                    ? 'grid-col-6 ml-36 mt-10 grid grid-flow-col gap-5'
                                    : 'grid-col-6 ml-16 mt-10 grid grid-flow-col gap-5'
                                }
                              >
                                <div className="col-start-1 flex flex-col">
                                  <Doughnut
                                    data={dataSo}
                                    className="h-20  w-32 self-center"
                                  />
                                  <div className=" ml-[3.25rem] -mt-[4.25rem] text-sm text-blue-900">
                                    33%
                                  </div>
                                  <div className="mt-14 w-32 text-center text-sm font-thin text-black">
                                    Service Orientation
                                  </div>
                                </div>
                                <div className="col-start-2">
                                  <Doughnut
                                    data={dataSp}
                                    className="h-20  w-32 self-center"
                                  />
                                  <div className=" ml-[3.25rem] -mt-[4.25rem] text-sm text-blue-900">
                                    55%
                                  </div>
                                  <div className="mt-14 text-center text-sm font-thin text-black">
                                    Sales Potential
                                  </div>
                                </div>
                                <div className="col-start-3">
                                  <Doughnut
                                    data={dataCp}
                                    className="h-20  w-32 self-center"
                                  />
                                  <div className=" ml-[3.25rem] -mt-[4.25rem] text-sm text-blue-900">
                                    76%
                                  </div>
                                  <div className="mt-14 text-center text-sm font-thin text-black">
                                    Clerical Potential
                                  </div>
                                </div>
                                <div className="col-start-4">
                                  <Doughnut
                                    data={dataSt}
                                    className="h-20  w-32 self-center"
                                  />
                                  <div className=" ml-[3.25rem] -mt-[4.25rem] text-sm text-blue-900">
                                    93%
                                  </div>
                                  <div className=" mt-14 text-center text-sm font-thin text-black">
                                    Stress Tolerance
                                  </div>
                                </div>
                                <div className="col-start-5">
                                  <Doughnut
                                    data={dataRe}
                                    className="h-20  w-32 self-center"
                                  />
                                  <div className=" ml-[3.25rem] -mt-[4.25rem] text-sm text-blue-900">
                                    23%
                                  </div>
                                  <div className="mt-14 text-center text-sm font-thin text-black">
                                    Reliability
                                  </div>
                                </div>
                                <div className="col-start-6 ">
                                  <Doughnut
                                    data={dataMp}
                                    className="h-20  w-32 self-center"
                                  />
                                  <div className=" ml-[3.25rem] -mt-[4.25rem] text-sm text-blue-900">
                                    55%
                                  </div>
                                  <div className="mt-14 text-center text-sm font-thin text-black">
                                    Managerial Potential
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" grid grid-flow-col grid-cols-9 grid-rows-2 gap-x-10 gap-y-4 p-10">
                          <div className=" col-span-6 row-span-2 mt-2 flex  min-h-fit min-w-fit rounded-lg   bg-white  p-6 shadow-lg ">
                            <div className="flex flex-col">
                              <span className="font-semibold text-blue-900">
                                {' '}
                                Hogan Business Reasoning Inventory: Occupational
                                Scale
                              </span>
                              <div className="grid-col-8 mt-10 grid grid-flow-col gap-10">
                                <div className="col-start-3">
                                  <div className=" w-32 text-center text-sm font-thin text-black">
                                    Qualitative Reasoning{' '}
                                  </div>
                                  <Doughnut
                                    data={dataql}
                                    className="h-24 w-32 self-center"
                                  />
                                  <div className=" ml-[3rem] -mt-[4.75rem] text-xl text-blue-900">
                                    30%
                                  </div>
                                </div>
                                <div className="col-start-4">
                                  <div className="  text-center text-sm font-thin text-black">
                                    Quantitative Reasoning{' '}
                                  </div>
                                  <Doughnut
                                    data={dataqn}
                                    className="h-24 w-32 self-center"
                                  />
                                  <div className=" ml-[3rem] -mt-[4.75rem] text-xl text-blue-900">
                                    60%
                                  </div>
                                </div>
                                <div className="col-start-5">
                                  <div className=" w-32 text-center text-sm font-thin text-black">
                                    Business Rating{' '}
                                  </div>
                                  <Doughnut
                                    data={databu}
                                    className="h-24 w-32 self-center"
                                  />
                                  <div className=" ml-[3rem] -mt-[4.75rem] text-xl text-blue-900">
                                    20%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-3 col-start-7  row-span-1 row-start-1 flex  min-h-fit min-w-fit rounded-lg bg-white p-6  shadow-lg">
                            <div className="flex w-3/4 flex-col">
                              <span className="  font-semibold text-blue-900">
                                {' '}
                                Cognitive Style
                              </span>
                              <div className="mt-1 ml-4 flex flex-col justify-center">
                                <div className="mb-2 ml-1 flex flex-row text-sm font-thin text-black">
                                  Expediant Thinker%
                                </div>

                                <BigInputRange
                                  setSharedState={setSharedStateThinker}
                                  sharedState={sharedStateThinker}
                                  className="mt-2"
                                  min={0}
                                  max={100}
                                  step={1}
                                  initValue={60}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-span-3 col-start-7 row-start-2   flex   min-h-fit min-w-fit rounded-lg bg-white p-6 shadow-lg">
                            <div className="flex w-3/4 flex-col ">
                              <span className=" font-semibold text-blue-900">
                                {' '}
                                Business Reasoning Level
                              </span>
                              <div className="mt-1 ml-4 flex flex-col justify-center">
                                <div className="mb-2 ml-1 flex flex-row text-sm font-thin text-black">
                                  Low%
                                </div>

                                <BigInputRange
                                  setSharedState={setSharedStateBusiness}
                                  sharedState={sharedStateBusiness}
                                  className="mt-2"
                                  min={0}
                                  max={100}
                                  step={1}
                                  initValue={30}
                                />
                              </div>
                            </div>
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
      </div>
    </div>
  )
}
