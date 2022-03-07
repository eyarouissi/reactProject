import { useState, useLayoutEffect } from 'react'
import Candidate from '@components/dashboard/Candidate'
import Pipeline from '@components/dashboard/Pipeline'
import Filter from '@components/dashboard/Filter'
import React from 'react'
import { repeaterData } from 'data/candidates'

export default function Home() {
  const [data, setData] = useState(repeaterData)
  //const [finaldata,setFinaldata] = useState([])
  const [sharedStatefilter, setSharedStatefilter] = useState('')
  const [sharedStatecv, setSharedStatecv] = useState({})
  const [sharedStatebe, setSharedStatebe] = useState({})
  const [sharedStateco, setSharedStateco] = useState({})
  const [sharedStatete, setSharedStatete] = useState({})

  useLayoutEffect(() => {
    let data1 = []
    if (sharedStatefilter === '')
      repeaterData.map((a) => {
        if (
          a.behaviorScore >= sharedStatebe &&
          a.technicalScore >= sharedStatete &&
          a.cvScore > sharedStatecv &&
          a.cognitiveScore > sharedStateco
        )
          data1 = [...data1, a]
      })
    else {
      repeaterData.map((a) => {
        if (
          a.fitness === sharedStatefilter &&
          a.behaviorScore >= sharedStatebe &&
          a.technicalScore >= sharedStatete &&
          a.cvScore > sharedStatecv &&
          a.cognitiveScore > sharedStateco
        )
          data1 = [...data1, a]
      })
    }
    setData(data1)
  }, [
    sharedStatefilter,
    sharedStatete,
    sharedStatebe,
    sharedStateco,
    sharedStatecv,
  ])

  return (
    <div className="mt-2">
      <Pipeline></Pipeline>
      <div className="flex min-h-full min-w-full flex-row flex-wrap bg-gray-100 px-10">
        <div className="mb-4  mr-10 h-full  w-1/4  min-w-fit px-8">
          <div className="  my-8 min-w-fit rounded-md border-2 border-gray-300 bg-white p-6 tracking-wide shadow-lg">
            <Filter
              setSharedStatete={setSharedStatete}
              sharedStatete={sharedStatete}
              setSharedStateco={setSharedStateco}
              sharedStateco={sharedStateco}
              setSharedStatecv={setSharedStatecv}
              sharedStatecv={sharedStatecv}
              setSharedStatebe={setSharedStatebe}
              sharedStatebe={sharedStatebe}
              setSharedStatefilter={setSharedStatefilter}
              sharedStatefilter={sharedStatefilter}
            ></Filter>
          </div>
        </div>
        <div className=" mb-20   w-8/12 px-2">
          <div className="-mx-2 flex min-w-fit  flex-col   ">
            {data.map((element) => {
              return <Candidate key={element.name} props={element}></Candidate>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
