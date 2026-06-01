'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface SidebarNavItemProps {
  icon: LucideIcon
  label: string
  isActive?: boolean
  isCollapsed?: boolean
  onClick?: () => void
}

export default function SidebarNavItem({
  icon: Icon,
  label,
  isActive = false,
  isCollapsed = false,
  onClick,
}: SidebarNavItemProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-200 group"
      style={{ color: isActive ? '#f0f0ff' : '#6b6b8a' }}
    >
      {isActive && (
        <motion.div
          layoutId="activeNavBackground"
          className="absolute inset-0 rounded-xl"
          style={{ background: '#6c63ff22', border: '1px solid #6c63ff44' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      )}
      <Icon size={18} className="relative z-10 shrink-0" />
      {!isCollapsed && (
        <span className="relative z-10 text-sm font-medium">{label}</span>
      )}
    </motion.button>
  )
}