import { motion, useMotionValue, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useResizedWidth } from './useResizedWidth'
const calculateValueFromWidth = (
  value,
  step,
  minValue,
  maxValue,
  truckWidth
) => {
  return Math.floor((minValue + (value / truckWidth) * maxValue) / step) * step
}

const calculateWidthFromValue = (
  value,
  step,
  minValue,
  maxValue,
  truckWidth
) => {
  const val = value < minValue ? minValue : value
  const result = ((Math.floor(val / step) * step) / maxValue) * truckWidth
  return result > truckWidth ? truckWidth : result
}

export const InputRange = (props) => {
  const { initValue = 0, min, max, step, onChange, setSharedState } = props
  const [value, setVatue] = useState(initValue)
  const [truckRef, truckWidth] = useResizedWidth()
  const [thumbRef, thumbWidth] = useResizedWidth()

  const containerRef = useRef(null)

  const x = useMotionValue(0)
  const widthX = useTransform(x, (value) => {
    //console.log(`truck:${truckWidth}, thumb:${thumbWidth}`);
    return value + thumbWidth
  })

  useEffect(() => {
    const width = calculateWidthFromValue(value, step, min, max, truckWidth)
    x.set(width)
    console.log(
      `value:${value}, step:${step}, min:${min}, max:${max}, truck:${truckWidth}, thumb:${thumbWidth}`
    )
  }, [value, step, min, max, truckWidth, x, thumbWidth])

  const handleDrag = (event, info) => {
    const val = calculateValueFromWidth(x.get(), step, min, max, truckWidth)
    setVatue(val)
    setSharedState(val)
    onChange && onChange(val)
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative h-1 w-full rounded-full bg-gray-300 px-2"
    >
      <motion.div ref={truckRef} className="relative w-full">
        <motion.span
          ref={thumbRef}
          tabIndex={0}
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0}
          dragMomentum={false}
          onDrag={handleDrag}
          className="absolute top-0 z-10 -mt-1 -ml-2 h-3 w-3 cursor-pointer rounded-full bg-blue-400 shadow"
          style={{ x }}
        />
      </motion.div>
      <motion.span
        className="absolute top-0 left-0 h-1 rounded-full bg-blue-400"
        style={{ width: widthX }}
      />
    </motion.div>
  )
}
