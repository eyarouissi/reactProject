/* eslint-disable jsx-a11y/alt-text */
import { InputRange } from '@components/other/InputRange'
import React, { useEffect, useState } from 'react'
import { HiOutlineAdjustments } from 'react-icons/hi'
import Image from 'next/image'

export default function Filter(props) {
  const [sharedStatecv, setSharedStatecv] = useState(50)
  const [sharedStatebe, setSharedStatebe] = useState(50)
  const [sharedStateco, setSharedStateco] = useState(50)
  const [sharedStatete, setSharedStatete] = useState(50)
  useEffect(() => {
    props.setSharedStatecv(sharedStatecv)
  }, [props, sharedStatecv])

  useEffect(() => {
    props.setSharedStatebe(sharedStatebe)
  }, [props, sharedStatebe])

  useEffect(() => {
    props.setSharedStateco(sharedStateco)
  }, [props, sharedStateco])

  useEffect(() => {
    props.setSharedStatete(sharedStatete)
  }, [props, sharedStatete])

  return (
    <div>
      <div className="my-5 flex flex-col">
        <div className="flex-raw flex ">
          <HiOutlineAdjustments
            className="mx-1"
            size={20}
          ></HiOutlineAdjustments>
          <text className="text-gray-700  font-semibold">Filter by Minimum Score:</text>
        </div>
        <div className="mr-2 ml-5 flex flex-col py-5">
          <div className="my-2 flex flex-row justify-between">
            <text className=" mt-2 text-sm  text-gray-600">Technical Score</text>
            <text className=" mt-2 text-sm  text-gray-700">{sharedStatete}%</text>
          </div>
          <InputRange
            setSharedState={setSharedStatete}
            sharedState={sharedStatete}
            className="my-3"
            min={0}
            max={100}
            step={1}
            initValue={50}
          />
          <div className="my-2 flex flex-row justify-between">
            <text className=" mt-2 text-sm  text-gray-600">Behavioral Score</text>
            <text className=" mt-2 text-sm  text-gray-700">{sharedStatebe}%</text>
          </div>
          <InputRange
            setSharedState={setSharedStatebe}
            sharedState={sharedStatebe}
            className="my-3"
            min={0}
            max={100}
            step={1}
            initValue={50}
          />
          <div className="my-2 flex flex-row justify-between">
            <text className=" mt-2 text-sm  text-gray-600">Cognitive Score</text>
            <text className=" mt-2 text-sm  text-gray-700">{sharedStateco}%</text>
          </div>
          <InputRange
            setSharedState={setSharedStateco}
            sharedState={sharedStateco}
            className="my-3"
            min={0}
            max={100}
            step={1}
            initValue={50}
          />

          <div className="my-2 flex flex-row justify-between">
            <text className=" mt-2 text-sm  text-gray-600">Cv Score</text>
            <text className=" mt-2 text-sm  text-gray-700">{sharedStatecv}%</text>
          </div>
          <InputRange
            setSharedState={setSharedStatecv}
            sharedState={sharedStatecv}
            className="my-3"
            min={0}
            max={100}
            step={1}
            initValue={50}
          />
        </div>
        <div className="flex-raw mt-6 flex justify-between">
          <div className="flex-raw flex ">
            <HiOutlineAdjustments
              className="mx-1"
              size={20}
            ></HiOutlineAdjustments>
            <text className="text-gray-700 font-semibold">Filter by Fitness:</text>
          </div>
          <Image
            className="cursor-pointer"
            width={20}
            height={15}
            src={'/item.png'}
          ></Image>
        </div>
        <div className="my-2 flex min-w-fit flex-row ">
          {props.sharedStatefilter === 'Fit for the Role' ? (
            <text
              className="m-1 mx-4 min-w-fit cursor-pointer rounded-full bg-green-300 px-2 py-2 text-sm  text-gray-600  font-light hover:bg-gray-200"
              onClick={() =>
                props.sharedStatefilter === 'Fit for the Role'
                  ? props.setSharedStatefilter('')
                  : props.setSharedStatefilter('Fit for the Role')
              }
            >
              Fit for the Role
            </text>
          ) : (
            <text
              className="m-1 mx-4 min-w-fit cursor-pointer rounded-full bg-gray-200 px-2 py-2 text-sm  font-light hover:bg-green-300"
              onClick={() =>
                props.sharedStatefilter === 'Fit for the Role'
                  ? props.setSharedStatefilter('')
                  : props.setSharedStatefilter('Fit for the Role')
              }
            >
              Fit for the Role
            </text>
          )}
          {props.sharedStatefilter === 'Future Potential' ? (
            <text
              className="m-1 min-w-fit cursor-pointer rounded-full bg-orange-300 px-2 py-2 text-sm text-gray-600  font-light hover:bg-gray-200"
              onClick={() =>
                props.sharedStatefilter === 'Future Potential'
                  ? props.setSharedStatefilter('')
                  : props.setSharedStatefilter('Future Potential')
              }
            >
              Future Potential
            </text>
          ) : (
            <text
              className="m-1 min-w-fit cursor-pointer rounded-full bg-gray-200 px-2 py-2 text-sm  font-light hover:bg-orange-300"
              onClick={() =>
                props.sharedStatefilter === 'Future Potential'
                  ? props.setSharedStatefilter('')
                  : props.setSharedStatefilter('Future Potential')
              }
            >
              Future Potential
            </text>
          )}
        </div>
        <div className="my-2">
          {props.sharedStatefilter === 'Over Qualified' ? (
            <text
              className="m-1 mx-4 min-w-fit cursor-pointer  rounded-full bg-purple-300 px-2 py-2 text-sm  font-light hover:bg-gray-200"
              onClick={() =>
                props.sharedStatefilter === 'Over Qualified'
                  ? props.setSharedStatefilter('')
                  : props.setSharedStatefilter('Over Qualified')
              }
            >
              Over Qualified
            </text>
          ) : (
            <text
              className="m-1 mx-4 min-w-fit  cursor-pointer rounded-full bg-gray-200 px-2 py-2 text-sm  font-light hover:bg-purple-300"
              onClick={() =>
                props.sharedStatefilter === 'Over Qualified'
                  ? props.setSharedStatefilter('')
                  : props.setSharedStatefilter('Over Qualified')
              }
            >
              Over Qualified
            </text>
          )}
        </div>
      </div>
    </div>
  )
}
