'use client'

import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { LucideProps } from 'lucide-react'
import { Course } from '@/app/lib/types'
import ProgressBar from '../ui/ProgressBar'

interface CourseTileProps {
  course: Course
}

export default function CourseTile({ course }: CourseTileProps) {
  const IconComponent = (
    LucideIcons[course.icon_name as keyof typeof LucideIcons] as React.ComponentType<LucideProps>
  ) ?? LucideIcons.BookOpen

  return (
    <motion.article
 whileHover={{
  scale: 1.02,
  boxShadow: '0 0 20px #6c63ff33, 0 0 0 1px #6c63ff44',
}}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  className="relative rounded-2xl p-5 overflow-hidden flex flex-col justify-between gap-4"
  style={{
    background: '#16161f',
    border: '1px solid #ffffff0f',
    minHeight: '160px',
  }}
>
      {/* Subtle gradient mesh background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top left, #6c63ff11 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 flex flex-col gap-3">
        {/* Icon */}
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: '#6c63ff20', border: '1px solid #6c63ff33' }}
        >
          <IconComponent size={18} style={{ color: '#6c63ff' }} />
        </div>

        {/* Title */}
        <h3
          className="font-semibold leading-snug"
          style={{ fontSize: '14px', color: '#f0f0ff' }}
        >
          {course.title}
        </h3>
      </div>

      {/* Progress Bar */}
      <div className="relative z-10">
        <ProgressBar value={course.progress} />
      </div>
    </motion.article>
  )
}