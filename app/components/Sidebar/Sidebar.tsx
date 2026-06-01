'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  ChevronLeft,
  GraduationCap,
} from 'lucide-react'
import SidebarNavItem from './SidebarNavItem'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: BookOpen, label: 'Courses' },
  { icon: BarChart2, label: 'Progress' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('Dashboard')
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkTablet = () => {
      const tablet = window.innerWidth >= 768 && window.innerWidth < 1024
      setIsTablet(tablet)
      setIsCollapsed(tablet)
    }
    checkTablet()
    window.addEventListener('resize', checkTablet)
    return () => window.removeEventListener('resize', checkTablet)
  }, [])

  return (
    <motion.nav
      animate={{ width: isCollapsed ? 72 : 220 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="relative hidden md:flex flex-col h-screen sticky top-0 shrink-0 overflow-hidden"
      style={{
        background: '#111118',
        borderRight: '1px solid #ffffff0f',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-6">
        <GraduationCap
          size={24}
          style={{ color: '#6c63ff' }}
          className="shrink-0"
        />
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-bold text-base tracking-tight whitespace-nowrap"
          >
            LearnOS
          </motion.span>
        )}
      </div>

      {/* Nav Items */}
      <div className="flex flex-col gap-1 px-2 flex-1">
        {navItems.map((item) => (
          <SidebarNavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.label}
            isCollapsed={isCollapsed}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </div>

      {/* Collapse Button — hidden on tablet (auto-collapsed) */}
      {!isTablet && (
        <div className="px-2 pb-6">
          <motion.button
            onClick={() => setIsCollapsed(!isCollapsed)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center p-2.5 rounded-xl"
            style={{ background: '#ffffff08', color: '#6b6b8a' }}
          >
            <motion.div
              animate={{ rotate: isCollapsed ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <ChevronLeft size={16} />
            </motion.div>
          </motion.button>
        </div>
      )}
    </motion.nav>
  )
}