'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

// Animated number counter
function CountUp({ target, suffix, trigger }: { target: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = 0
    const duration = 1800
    const totalSteps = Math.ceil(duration / 16)
    const increment = target / totalSteps
    let frame = 0
    const timer = setInterval(() => {
      frame++
      start += increment
      if (frame >= totalSteps || start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [trigger, target])

  return <>{count}{suffix}</>
}



const stats = [
  { value: 5, suffix: '+', label: 'Projects' },
  { value: 6, suffix: '+', label: 'Tech Stack' },
]

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={sectionRef} className="relative py-32 bg-[#050507] overflow-hidden min-h-screen flex items-center">
      
      {/* ── Background Elements ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3b82f6]/5 blur-[150px] rounded-full pointer-events-none" />

      {/* ── Left Side Indicator (01 / INTRODUCE) ── */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center hidden 2xl:flex z-20">
        <span className="text-6xl font-black text-white/5 tracking-tighter">01</span>
        <div className="w-px h-24 bg-white/10 my-6" />
        <span className="text-white/20 text-[10px] font-bold tracking-[0.4em] -rotate-90 origin-center whitespace-nowrap mt-16">
          INTRODUCE
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 2xl:pl-32 relative z-10 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* ── Left Column: Text & Stats ── */}
        <div className="flex-1 w-full max-w-xl relative z-20">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#e2e8f0]" />
            <span className="text-[#93c5fd] text-sm font-semibold tracking-widest uppercase">
              About Me
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-8"
          >
            My <span className="gradient-text">Story</span>
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#cbd5e1] text-sm sm:text-base leading-relaxed mb-16"
          >
            <p className="mb-4">
              My name is Ruvinda Shaluka. I am a Full-Stack Engineer undergrad with a passion for building scalable, high-performance software. I specialize in shipping production-grade backends with <span className="text-white font-semibold">Java & Spring Boot</span>, and crafting clean, dynamic <span className="text-white font-semibold">React</span> frontends.
            </p>
            <p>
              My greatest strength is architectural awareness, which enables me to permanently streamline infrastructure and applications. I am enthusiastic, always trying to learn, and I love creating products that are truly high-quality and unique.
            </p>
          </motion.div>

          {/* Minimal Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-12"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="relative">
                {/* Accent line above stat */}
                <div className="w-4 h-px bg-[#3b82f6]/50 mb-3" />
                <div className="text-4xl font-light text-white mb-1 flex items-baseline">
                  <CountUp target={s.value} suffix="" trigger={isInView} />
                  <span className="text-[#3b82f6] text-2xl font-bold ml-1">{s.suffix}</span>
                </div>
                <div className="text-[#475569] text-[10px] font-bold tracking-[0.2em] uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right Column: Portrait Image ── */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex-1 w-full relative h-[350px] sm:h-[450px] lg:h-[800px] lg:-my-32 flex justify-end"
        >
          {/* Using next/image for portrait */}
          <div className="relative w-full h-full max-w-2xl">
            <Image
              src="/article/ruvinda-profile.jpg"
              alt="Ruvinda Shaluka"
              fill
              className="object-contain lg:object-cover object-center lg:object-right opacity-80 mix-blend-lighten filter grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Fade masks to blend into background smoothly */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-transparent to-transparent w-full lg:w-1/2" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent h-1/3 top-auto" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-transparent to-transparent h-1/4" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
