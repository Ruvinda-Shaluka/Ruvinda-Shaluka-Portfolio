'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] origin-left h-[2px]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa, #93c5fd)',
        }}
      />
      {/* Glow behind bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[99] origin-left h-[6px] blur-sm opacity-60"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa)',
        }}
      />
    </>
  )
}
