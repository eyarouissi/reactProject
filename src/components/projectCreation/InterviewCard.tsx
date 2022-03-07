import React from "react";
import PropTypes from "prop-types";
import {MdAccessTimeFilled} from 'react-icons/md'
import {BsFillPencilFill} from 'react-icons/bs'
import {BsFillCameraVideoFill}from 'react-icons/bs'
import { Toggle } from "@components/other/Toggle";
export default function InterviewCard({
  interviewQuestion,
  Recording,
  autoStart,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white border-2 rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
        <div className="flex min-w-max flex-row  mt-2">
        <div className=" mt-1 flex h-6 w-9 cursor-pointer justify-center rounded-md ">
             <BsFillCameraVideoFill className="text-purple-600 -ml-6"/>
              </div>
               <div className=" -mx-4 -mt-1 flex  font-medium text-lg text-cyan-900 ">
               {interviewQuestion}
              </div>
              <div className="-mt-20 flex flex-row items-start ">
                    <div className="mx-1 flex flex-row ">
                      Select
                      <Toggle backgroundcolor={" bg-purple-600"} element={''} list={''} className="mx-2" name="toggle" icon={undefined}  />
                    
                    </div></div>
              </div>
          
            
        <div className="flex min-w-max flex-row mx-8 mt-2">
               <div className=" -mx-2 mt-2 flex  cursor-pointer text-slate-700 justify-center">
               Recording
              </div>
              <div className=" mt-2 mx-4 flex text-purple-600 cursor-pointer justify-center font-normal ">
               {Recording}
              </div>
              <div className="  mx-10 mt-2 flex  cursor-pointer text-slate-700 justify-center  ">
              Auto-Start
              </div>
              <div className="mt-2 -mx-8 flex cursor-pointer text-purple-600 font-normal ">
              {autoStart}
              </div>
              </div>
              
        </div>
        
      </div>
     
    </>
    
  );
}

InterviewCard.defaultProps = {
  statSubtitle: "CareerBoosts",
  statTitle: "Role-based Technical Assessments",
  statArrow: "up",
  statDuration: "45 min",
  statPercentColor: "text-emerald-500",
  statQuestions: "40 questions",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

InterviewCard.propTypes = {
  interviewQuestion: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  Recording: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  autoStart: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
