import { Documentation } from '@components/dashboard/Dashboard'
import MainLayout from 'layouts/MainLayout'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <MainLayout>
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Documentation header={'Documentation body'} body={'qdssq'} />
          <Documentation header={'Learn body'} body={'qdssq'} />
          <Documentation header={'Learn body'} body={'qdssq'} />
          <Documentation header={'Learn body'} body={'qdssq'} />
        </div>
      </MainLayout>
    </div>
  )
}
