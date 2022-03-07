import React from "react";
import PropTypes from "prop-types";
import {MdAccessTimeFilled} from 'react-icons/md'
import {BsFillPencilFill} from 'react-icons/bs'
export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
  statbutton
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white border-2 rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
        
          
          <p className="text-sm text-blueGray-400 mt-2">
            <span className={statPercentColor + " mr-2 "}>
            <div
                className={
                  "text-white p-4  text-center inline-flex  items-center justify-center w-8 h-8 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i></div>
            </span>
            <span className="whitespace-nowrap text-cyan-900 mb-6 font-normal text-xm">{statSubtitle}</span>
          </p>
          <div className="relative w-full pr-4 mx-6 mt-2 max-w-full flex-grow flex-1">
              
              <span className="font-semibold text-xl text-cyan-900">
                {statTitle}
              </span>
            
            </div>
            
        <div className="flex min-w-max flex-row mx-6 mt-4">
            <div className=" mx-2 mt-1 flex h-6 w-6 cursor-pointer justify-center rounded-md ">
               <MdAccessTimeFilled className="mt-2 text-purple-600" />
              </div>
               <div className=" -mx-2 mt-2 flex  cursor-pointer text-slate-700 justify-center">
               {statPercent}
              </div>
              <div className=" mx-8 mt-1 flex h-6 w-6 cursor-pointer justify-center rounded-md ">
              <BsFillPencilFill className="mt-2 text-purple-600" />
              </div>
              <div className="  -mx-8 mt-2 flex  cursor-pointer text-slate-700 justify-center  ">
              {statDescripiron}
              </div>
              </div>
              <div className="mb-6 flex min-w-max cursor-pointer flex-row overflow-auto">
          <button className="border-2  border-purple-600 hover:bg-purple-600 hover:text-white text-purple-600 font-semibold py-2 px-12 rounded-full focus:outline-none focus:shadow-outline text-sm  mx-16 mt-6">
            {statbutton}
          </button>
          </div>
        </div>
        
      </div>
     
    </>
    
  );
}

CardStats.defaultProps = {
  statSubtitle: "CareerBoosts",
  statTitle: "Role-based Technical Assessments",
  statArrow: "up",
  statDuration: "45 min",
  statPercentColor: "text-emerald-500",
  statQuestions: "40 questions",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statDuration: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
