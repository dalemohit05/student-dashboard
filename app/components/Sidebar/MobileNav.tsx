'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: BookOpen, label: 'Courses' },
  { icon: BarChart2, label: 'Progress' },
  { icon: Settings, label: 'Settings' },
]

export default function MobileNav() {
  const [activeItem, setActiveItem] = useState('Dashboard')

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 flex md:hidden items-center justify-around px-4 py-3 z-50"
      style={{
        background: '#111118',
        borderTop: '1px solid #ffffff0f',
      }}
    >
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = activeItem === item.label

        return (
          <motion.button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center gap-1"
            style={{ color: isActive ? '#6c63ff' : '#6b6b8a' }}
          >
            {isActive && (
              <motion.div
                layoutId="mobileActiveIndicator"
                className="absolute -top-0.5 w-8 h-0.5 rounded-full"
                style={{ background: '#6c63ff' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            )}
            <Icon size={20} />
            <span style={{ fontSize: '10px', fontWeight: isActive ? 600 : 400 }}>
              {item.label}
            </span>
          </motion.button>
        )
      })}
    </nav>
  )
}