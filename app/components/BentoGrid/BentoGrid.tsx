'use client'

import { motion, MotionProps } from 'framer-motion'
import { Course } from '@/app/lib/types'
import HeroTile from './HeroTile'
import CourseTile from './CourseTile'
import ActivityTile from './ActivityTile'

interface BentoGridProps {
  courses: Course[]
}

const tileProps: MotionProps = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { type: 'spring' as const, stiffness: 260, damping: 22 },
}

export default function BentoGrid({ courses }: BentoGridProps) {
  return (
    <section className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full">

      <motion.div {...tileProps} className="col-span-1 md:col-span-2">
        <HeroTile />
      </motion.div>

      {courses.map((course, i) => (
        <motion.div
          key={course.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring' as const, stiffness: 260, damping: 22, delay: i * 0.1 }}
        >
          <CourseTile course={course} />
        </motion.div>
      ))}

      <motion.div {...tileProps} className="col-span-1 md:col-span-2">
        <ActivityTile />
      </motion.div>

    </section>
  )
}