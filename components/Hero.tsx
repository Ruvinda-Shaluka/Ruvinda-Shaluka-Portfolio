'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

const roles = [
  "Full-Stack Developer",
  "Mobile Developer",
  "Software Engineer"
]

function Typewriter() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 30 : 70

    const timer = setTimeout(() => {
      setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)))

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, roleIndex])

  return (
    <span className="text-sm sm:text-base md:text-lg text-[#93c5fd] font-medium tracking-[0.15em] uppercase drop-shadow-md inline-block min-h-[28px]">
      {text}
      <span className="animate-pulse border-r-2 border-[#93c5fd] ml-1" />
    </span>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const bgY      = useTransform(scrollY, [0, 700], [0, 200])   // parallax bg
  const fadeOut  = useTransform(scrollY, [0, 500], [1, 0])
  const scaleOut = useTransform(scrollY, [0, 500], [1, 0.96])

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">

      {/* ── Full-screen background image (parallax) ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=85&w=2400&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* ── Layered overlays ── */}
      {/* Dark base */}
      <div className="absolute inset-0 bg-[#050507]/60" />
      {/* Blue tinted vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/50 via-transparent to-[#050507]/90" />
      {/* Blue ambient top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(29,78,216,0.18),transparent)]" />
      {/* Bottom hard fade so sections below feel seamless */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050507] to-transparent" />

      {/* ── Subtle grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.05) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />



      {/* ── Hero Content ── */}
      <motion.div
        style={{ opacity: fadeOut, scale: scaleOut }}
        className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-8 max-w-7xl mx-auto w-full"
      >
        {/* Content - Left Aligned */}
        <div className="flex flex-col items-start max-w-2xl text-left mt-20 relative z-20">
          
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#93c5fd] text-xs font-medium mb-6 tracking-wide shadow-inner"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Available for new opportunities
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden mb-2 w-full">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none uppercase drop-shadow-lg"
            >
              Ruvinda Shaluka
            </motion.h1>
          </div>

          {/* Sub-role line (Typing Animation) */}
          <div className="overflow-hidden mb-6 w-full">
            <motion.div
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Typewriter />
            </motion.div>
          </div>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#cbd5e1] text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl"
          >
            I build high-performance, secure full-stack applications and SaaS platforms that drive business value. Specializing in Java, Spring Boot, React, and Next.js, I turn complex engineering requirements into clean, scalable software.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl text-sm sm:text-base tracking-wide transition-all shadow-[0_0_30px_rgba(59,130,246,0.5)] border border-[#3b82f6]/50 cursor-pointer focus:outline-none"
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 border border-white/10 hover:border-white/30 bg-transparent hover:bg-white/5 text-[#cbd5e1] hover:text-white font-medium rounded-xl text-sm sm:text-base tracking-wide transition-all cursor-pointer focus:outline-none"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ArrowDown size={18} className="text-white/30" />
        </motion.div>
      </motion.div>

    </section>
  )
}
