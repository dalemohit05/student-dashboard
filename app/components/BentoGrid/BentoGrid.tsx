'use client'

import { motion } from 'framer-motion'
import { Course } from '@/app/lib/types'
import HeroTile from './HeroTile'
import CourseTile from './CourseTile'
import ActivityTile from './ActivityTile'

interface BentoGridProps {
  courses: Course[]
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const tileVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 22,
    },
  },
}

export default function BentoGrid({ courses }: BentoGridProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-4
        grid-cols-1
        md:grid-cols-2"
    >
      {/* Hero Tile */}
      <motion.div variants={tileVariants} className="col-span-1 md:col-span-2">
        <HeroTile />
      </motion.div>

      {/* Course Tiles */}
      {courses.map((course) => (
        <motion.div key={course.id} variants={tileVariants}>
          <CourseTile course={course} />
        </motion.div>
      ))}

      {/* Activity Tile */}
      <motion.div variants={tileVariants} className="col-span-1 md:col-span-2">
        <ActivityTile />
      </motion.div>
    </motion.section>
  )
}