import { SidebarCandidate } from '@components/dashboard/SidebarCandidate'
import { AiFillMail } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import React, { useState } from 'react'

export default function Result() {
  const [hideside, setHideside] = useState(false)
  const [hidedrop, setHidedrop] = useState(true)

  const repeaterData = {
    applied_role: 'Full Stack Developer',
    name: 'Mohamed',
    applied: 'All Applicants',
    photo:
      'https://media.istockphoto.com/photos/professional-man-in-an-office-picture-id1266359678?k=20&m=1266359678&s=612x612&w=0&h=qMYnnZ2Slqn4mHHSBb1A6bwnwVrRkG1SQRCi6AOzH7I=',
  }
  const candidate = {
    _id: '3',
    name: 'Nacer Ben Mohammed',
    jobTitle: 'Software engineer at Futira',
    address: 'Abu Dhabi, UAE',
    experience1: '4 years of experience',
    experience2: 'Graduated from University of Sharjah - 2016',
    experience3: 'Monthly Salary: 9k-15k',
    education: '',
    technicalScore: 55,
    behaviorScore: 65,
    cognitiveScore: 70,
    cvScore: 62,
    fitness: 'Future Potential',
    select: '',
    photo:
      'https://media.istockphoto.com/photos/positive-businessman-picture-id514366990?k=20&m=514366990&s=612x612&w=0&h=oUD_Ih9y3PdIG4C7DWVvjWYrEXdidQCtDh0u_9isBpk=',
  }
  return (
    <div className=" min-w-screen  flex min-h-screen flex-1 flex-row  overflow-auto bg-gray-50 pl-6 pt-10">
      <SidebarCandidate
        setHide_side={setHideside}
        hide_side={hideside}
      ></SidebarCandidate>

      <div
        className={
          hideside
            ? ' h-full   min-h-fit w-3/4 flex-1 bg-gray-50  sm:ml-24'
            : '  h-full  min-h-fit w-3/4 flex-1 bg-gray-50  sm:ml-64'
        }
      >
        <div className=" flex  min-w-max flex-col">
          <div className="flex flex-row justify-between  sm:px-6  xl:px-8">
            <div className="flex min-w-max  flex-row overflow-auto">
              <div className="text-xl font-bold text-blue-900">
                Job offer :{' '}
              </div>
              <div className="ml-2 text-xl font-semibold text-blue-900">
                {repeaterData.applied_role}
              </div>
            </div>
            <div className="flex min-w-max flex-row">
              <div className=" mx-2 -mt-2 flex h-10 w-10 justify-center rounded-md bg-blue-50">
                <IoMdNotifications
                  color="navy"
                  className=" mt-2.5"
                  size={20}
                ></IoMdNotifications>
              </div>
              <div className=" mx-2 -mt-2 flex h-10 w-10 justify-center rounded-md bg-blue-50">
                <AiFillMail
                  color="navy"
                  className=" mt-2.5"
                  size={20}
                ></AiFillMail>
              </div>
              <div className="ml-2 text-xl  text-blue-900">Hi, </div>

              <div className=" ml-1.5 text-xl  text-blue-900">
                {repeaterData.name}
              </div>
              <div className="mr-2">
                <svg
                  onClick={() => {
                    setHidedrop(!hidedrop)
                    console.log(hidedrop)
                  }}
                  className="ml-1 mt-2 h-5 w-5 cursor-pointer"
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
                    hidedrop
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
                      <span
                        role="menuitem"
                        tabIndex={-1}
                        className="flex w-full cursor-not-allowed justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 opacity-50"
                        aria-disabled="true"
                      >
                        New feature (soon)
                      </span>
                      <a
                        href=""
                        tabIndex={2}
                        className="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700"
                        role="menuitem"
                      >
                        License
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
              <div className="mx-2 -mt-5  flex h-16 w-16  rounded-md bg-white">
                <img
                  alt="avatar"
                  className=" mt-1 ml-1 h-14   w-14 rounded-xl  "
                  src={repeaterData.photo}
                />
              </div>
            </div>
          </div>
          <div className=" px-1 py-2">
            <div className=" min-h-screen  min-w-max rounded-lg bg-white p-2 shadow"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
