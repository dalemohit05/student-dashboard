'use client'

import { motion } from 'framer-motion'
import { Course } from '@/app/lib/types'
import HeroTile from './HeroTile'
import CourseTile from './CourseTile'
import ActivityTile from './ActivityTile'

interface BentoGridProps {
  courses: Course[]
}

export default function BentoGrid({ courses }: BentoGridProps) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring' as const, stiffness: 260, damping: 22 },
          },
        }}
        className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full"
      >
        <HeroTile />
      </motion.div>

      {courses.map((course) => (
        <motion.div
          key={course.id}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: 'spring' as const, stiffness: 260, damping: 22 },
            },
          }}
        >
          <CourseTile course={course} />
        </motion.div>
      ))}

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring' as const, stiffness: 260, damping: 22 },
          },
        }}
       className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full"
      >
        <ActivityTile />
      </motion.div>
    </motion.section>
  )
}