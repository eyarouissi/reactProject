import React from 'react'
export default function Pipeline(props) {
  return (
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
            >
              All Applied 
              <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
              3</span>
            </button>
          </li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500 ">
            <button className=" block  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-gray-700 hover:border-b-4 hover:border-solid  hover:border-blue-900  focus:outline-none">
              Selected
              <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                0
              </span>
            </button>
          </li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500 ">
            <button className="block  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-gray-700 hover:border-b-4 hover:border-solid  hover:border-blue-900  focus:outline-none">
              {' '}
              Interviewed
              <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                0
              </span>
            </button>
          </li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500 ">
            <button className="block  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-gray-700 hover:border-b-4 hover:border-solid  hover:border-blue-900  focus:outline-none ">
              Offer
              <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                0
              </span>
            </button>
          </li>
          <li className="border-x-1 border-x-gray-200 bg-white py-2 px-2 text-gray-500 ">
            <button className="block  min-w-fit flex-1 py-4 px-6 text-sm font-semibold  text-gray-700 hover:border-b-4 hover:border-solid  hover:border-blue-900  focus:outline-none ">
              Hired
              <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                0
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
