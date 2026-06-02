'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const levelColors: Record<number, string> = {
  0: '#ffffff08',
  1: '#6c63ff33',
  2: '#6c63ff66',
  3: '#6c63ff99',
  4: '#6c63ff',
}

type Cell = { week: number; day: number; level: number }

export default function ActivityTile() {
  const [activityData, setActivityData] = useState<Cell[][]>([])

  useEffect(() => {
    // Only runs on client — no hydration mismatch
    const data = Array.from({ length: 52 }, (_, week) =>
      Array.from({ length: 7 }, (_, day) => ({
        week,
        day,
        level: Math.random() > 0.4 ? Math.floor(Math.random() * 4) + 1 : 0,
      }))
    )
    setActivityData(data)
  }, [])

  return (
    <motion.article
 whileHover={{
  scale: 1.01,
  boxShadow: '0 0 24px #6c63ff22, 0 0 0 1px #6c63ff33',
}}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  className="relative rounded-2xl p-5 overflow-hidden flex flex-col justify-between gap-4"
  style={{
    background: '#16161f',
    border: '1px solid #ffffff0f',
    minHeight: '160px',
  }}
>
      <h2 className="font-semibold mb-4" style={{ fontSize: '14px', color: '#f0f0ff' }}>
        Learning Activity
      </h2>

      <div className="overflow-x-auto">
        <div className="flex gap-1">
          {activityData.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map((day) => (
                <motion.div
                  key={`${wi}-${day.day}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: wi * 0.01, duration: 0.2 }}
                  className="rounded-sm"
                  style={{
                    width: '8px',
                    height: '8px',
                    background: levelColors[day.level],
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3">
        <span style={{ color: '#6b6b8a', fontSize: '11px' }}>Less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <div
            key={l}
            className="rounded-sm"
            style={{ width: '10px', height: '10px', background: levelColors[l] }}
          />
        ))}
        <span style={{ color: '#6b6b8a', fontSize: '11px' }}>More</span>
      </div>
    </motion.article>
  )
}