import { RegisterForm } from '@components/authentication/Register'
import React from 'react'

export default function Register() {
  return (
    <div className="flex min-h-screen items-center bg-white ">
      <div className="container mx-auto">
        <div className="mx-auto my-10 max-w-md">
          <div className="text-center">
            <h1 className="my-6 text-5xl font-medium  text-blue-400 ">
              Registration
            </h1>
            <p className=" text-center text-2xl text-black ">
              Please enter your details
            </p>
          </div>
          <div className="m-7">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  )
}
