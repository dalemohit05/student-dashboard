'use client'

import { motion } from 'framer-motion'
import {
  BookOpen,
  Layout,
  Code2,
  Database,
  LucideIcon,
} from 'lucide-react'
import { Course } from '@/app/lib/types'
import ProgressBar from '../ui/ProgressBar'

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Layout,
  Code2,
  Database,
}

interface CourseTileProps {
  course: Course
}

export default function CourseTile({ course }: CourseTileProps) {
  const Icon = iconMap[course.icon_name] ?? BookOpen

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        boxShadow: '0 0 24px #6c63ff33, 0 0 0 1px #6c63ff55',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-2xl p-5 overflow-hidden flex flex-col justify-between"
      style={{
        background: 'linear-gradient(145deg, #1a1a2e 0%, #16161f 100%)',
        border: '1px solid #ffffff0f',
        minHeight: '180px',
      }}
    >
      {/* Gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top left, #6c63ff15 0%, transparent 60%)',
        }}
      />

      {/* Top section */}
      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: '#6c63ff20', border: '1px solid #6c63ff44' }}
          >
            <Icon size={20} style={{ color: '#6c63ff' }} />
          </div>
          <span
            className="text-xs font-semibold px-2 py-1 rounded-lg"
            style={{ background: '#6c63ff15', color: '#a78bfa' }}
          >
            In Progress
          </span>
        </div>

        <h3
          className="font-semibold leading-snug"
          style={{ fontSize: '15px', color: '#f0f0ff' }}
        >
          {course.title}
        </h3>
      </div>

      {/* Bottom section */}
      <div className="relative z-10 mt-4">
        <ProgressBar value={course.progress} />
      </div>
    </motion.article>
  )
}