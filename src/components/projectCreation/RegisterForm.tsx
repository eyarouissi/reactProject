import { Field, Form, Formik } from 'formik'
import Link from 'next/link'
import * as yup from 'yup'

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(3),
})

export const RegisterForm = () => (
<div className="w-full mx-40">
  <form className="bg-white  rounded px-18 pt-6 pb-12 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="JobTitle">
        Job Title 
      </label>
      <input className="shadow appearance-none border-2 rounded-md border-purple-600  w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="JobTitle" type="text" placeholder="Job Title"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="Seniority">
        Seniority
      </label>
      <input className="shadow appearance-none border-2 rounded-md  border-purple-600 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Seniority" type="text" placeholder="Seniority"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="Team">
        Team
      </label>
      <input className="shadow appearance-none border-2 rounded-md  border-purple-600 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Team" type="text" placeholder="Team"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="Budget">
        Budget
      </label>
      <input className="shadow appearance-none border-2 rounded-md border-purple-600 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Budget" type="text" placeholder="Budget"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="Nationality">
        Nationality
      </label>
      <input className="shadow appearance-none border-2 rounded-md border-purple-600 border-purple-600 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Nationality" type="text" placeholder="Nationality"/>
    </div>
    <div className="mb-4 flex ">
    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="Nationality">
        Work Location
      </label></div>
      <div className="mb-4 flex -mt-3 ">
    <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked></input>
    <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">On Site</label>
  </div>
  <div className="form-check form-check-inline mx-6">
    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
    <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio20">Remote</label>
  </div>
    </div>
    
    <div className="flex items-center justify-between my-28 place-self-end px-1 mx-80 xl:px-20 ">
    <div className="mx-5 flex min-w-max cursor-pointer flex-row overflow-auto text-blue-400">
    <button className=" border-2 border-purple-600 hover:bg-purple-600 hover:text-white text-purple-600 font-semibold py-2 px-12 rounded-full focus:outline-none focus:shadow-outline" type="button">
        Back
      </button></div>
     
     <div className="mr-2 ml-5 flex min-w-max cursor-pointer  flex-row overflow-auto text-blue-400">
     <Link href='/createproject2'>
     <button className="border-2 bg-purple-600 hover:text-purple-600 hover:border-purple-600 hover:bg-white  text-white font-semibold py-2 px-12 rounded-full focus:outline-none focus:shadow-outline" type="button">
        Next
      </button></Link></div>
      
      
      
    </div>
  </form>
 
</div>
)
