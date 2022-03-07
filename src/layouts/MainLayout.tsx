import React, { useEffect, useState } from 'react'
import { useAuthContext, useAuthUpdateContext } from '@context/AuthContext'
import Head from 'next/head'
import Image from 'next/image'

const MainLayout: React.FC = ({ children }) => {
  const auth = useAuthContext()
  const authupdate = useAuthUpdateContext()

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <p className="mt-3 border-b-8  border-red-400 text-2xl hover:border-blue-400">
          Context values are{' '}
          <code className="md rounded-md p-3 font-mono text-lg">
            {auth ? 'You are authenticated' : 'You are not authenticated'}
          </code>
        </p>
        <p className="mt-3 bg-blue-100 text-2xl hover:bg-red-500 md:bg-amber-200 xl:bg-green-500">
          <button className="btn" onClick={authupdate}>
            You can Authenticate here!
          </button>
        </p>
        <div className="bg-blue-300">{children}</div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="pa flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={50}
            height={50}
            className="ml-2 h-4"
          />
        </a>
      </footer>
    </div>
  )
}
export default MainLayout
