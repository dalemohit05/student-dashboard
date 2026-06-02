'use client'

import { motion } from 'framer-motion'
import { Flame, Trophy } from 'lucide-react'
import { useEffect, useState } from 'react'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

export default function HeroTile() {
  const streakDays = 7
  const studentName = 'Mohit' 

  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    setGreeting(getGreeting())
  }, [])

  return (
    <motion.article
      whileHover={{
        scale: 1.01,
        boxShadow: '0 0 24px #6c63ff22, 0 0 0 1px #6c63ff33',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-2xl p-8 overflow-hidden col-span-2"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16161f 50%, #1a1230 100%)',
        border: '1px solid #ffffff0f',
        minHeight: '200px',
      }}
    >
      {/* Glow blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #6c63ff22 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #a78bfa11 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full gap-6">
        <div>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: '#6b6b8a', fontSize: '14px', marginBottom: '8px' }}
          >
            {greeting} 👋
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-bold"
            style={{ fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: 1.2 }}
          >
            Welcome back,{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #6c63ff, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {studentName}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ color: '#6b6b8a', fontSize: '13px', marginTop: '8px' }}
          >
            You're making great progress. Keep it up! 🚀
          </motion.p>
        </div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 flex-wrap"
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-xl"
            style={{ background: '#ff6b3520', border: '1px solid #ff6b3540' }}
          >
            <Flame size={16} style={{ color: '#ff6b35' }} />
            <span style={{ color: '#ff6b35', fontWeight: 600, fontSize: '14px' }}>
              {streakDays} Day Streak
            </span>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-xl"
            style={{ background: '#ffd70020', border: '1px solid #ffd70040' }}
          >
            <Trophy size={16} style={{ color: '#ffd700' }} />
            <span style={{ color: '#ffd700', fontWeight: 600, fontSize: '14px' }}>
              Top 10%
            </span>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-xl"
            style={{ background: '#00ff8820', border: '1px solid #00ff8840' }}
          >
            <span style={{ color: '#00ff88', fontWeight: 600, fontSize: '14px' }}>
              ⚡ On a roll!
            </span>
          </div>
        </motion.div>
      </div>
    </motion.article>
  )
}