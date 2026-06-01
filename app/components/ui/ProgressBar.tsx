'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

interface ProgressBarProps {
  value: number
}

export default function ProgressBar({ value }: ProgressBarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between items-center mb-1.5">
        <span style={{ color: '#6b6b8a', fontSize: '11px' }}>Progress</span>
        <span style={{ color: '#6c63ff', fontSize: '11px', fontWeight: 600 }}>
          {value}%
        </span>
      </div>
      <div
        className="w-full rounded-full overflow-hidden"
        style={{ height: '4px', background: '#ffffff0f' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #6c63ff, #a78bfa)',
          }}
          initial={{ width: '0%' }}
          animate={isInView ? { width: `${value}%` } : { width: '0%' }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
      </div>
    </div>
  )
}