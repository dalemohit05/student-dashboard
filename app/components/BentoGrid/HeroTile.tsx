'use client'

import { motion } from 'framer-motion'
import { Flame, Trophy } from 'lucide-react'

export default function HeroTile() {
  const streakDays = 7

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
      {/* Glow blob */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #6c63ff22 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full gap-4">
        <div>
          <p style={{ color: '#6b6b8a', fontSize: '13px', marginBottom: '6px' }}>
            Good morning 👋
          </p>
          <h1
            className="font-bold"
            style={{ fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: 1.2 }}
          >
            Welcome back,{' '}
            <span style={{ color: '#6c63ff' }}>Student</span>
          </h1>
        </div>

        {/* Streak */}
        <div className="flex items-center gap-4">
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
        </div>
      </div>
    </motion.article>
  )
}