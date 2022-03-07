import { LoginForm } from '@components/authentication/Login'
import React from 'react'

export default function Auth() {
  return (
    <div className="flex min-h-screen items-center bg-white ">
      <div className="container mx-auto">
        <div className="mx-auto my-10 max-w-md">
          <div className="text-center">
            <h1 className="my-3 text-5xl font-medium  text-gray-700 ">
              Log In
            </h1>
            <p className=" text-center text-base text-gray-400 underline underline-offset-1">
              New to this site?{' '}
              <a
                href="register"
                className="text-blue-400 focus:text-indigo-500 focus:underline focus:outline-none "
              >
                Sign up
              </a>
              .
            </p>
          </div>
          <div className="m-7">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
