'use client'

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [scrollPct, setScrollPct] = useState(0)
  const { scrollY, scrollYProgress } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 500)
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollPct(Math.round(latest * 100))
  })

  const radius = 18
  const circumference = 2 * Math.PI * radius
  const strokeDash = (scrollPct / 100) * circumference

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          id="scroll-to-top"
          initial={{ opacity: 0, scale: 0.4, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.4, y: 20 }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.88 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center"
          aria-label="Back to top"
          title={`${scrollPct}% scrolled`}
        >
          {/* Circular progress ring */}
          <svg
            className="absolute inset-0 w-12 h-12 -rotate-90"
            viewBox="0 0 48 48"
          >
            {/* Track */}
            <circle
              cx="24" cy="24" r={radius}
              fill="rgba(17,17,17,0.9)"
              stroke="rgba(59,130,246,0.1)"
              strokeWidth="2"
            />
            {/* Progress arc */}
            <circle
              cx="24" cy="24" r={radius}
              fill="transparent"
              stroke="url(#progressGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${strokeDash} ${circumference}`}
            />
            <defs>
              <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
            </defs>
          </svg>
          {/* Arrow icon */}
          <ArrowUp size={16} className="relative z-10 text-[#93c5fd]" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
