'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const allSkills = [
  // Languages
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  // Backend
  { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invertDark: true },
  { name: 'Socket.io', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg', invertDark: true },
  // Frontend
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invertDark: true },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
  // Mobile
  { name: 'RN', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  // Databases
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Postgres', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  // Tools
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invertDark: true },
  { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isLoaded = useRef(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || isLoaded.current) return

    const initCloud = async () => {
      try {
        // @ts-ignore
        const TagCloud = (await import('TagCloud')).default
        const container = document.getElementById('skill-sphere')
        
        if (!container) return
        
        // Clear previous content to prevent duplicates in React Strict Mode
        container.innerHTML = ''

        const texts = allSkills.map(s => {
          return `<div class="flex flex-col items-center justify-center p-3 sm:p-4 bg-[#080d1a]/80 backdrop-blur-md border border-[#0f1e36] rounded-[1.5rem] shadow-xl hover:border-[#3b82f6]/40 hover:bg-[#081020] transition-all duration-300 group" style="width: 80px; height: 80px; sm:width: 100px; sm:height: 100px; gap: 8px;">
            <img src="${s.logo}" style="width: 32px; height: 32px; object-fit: contain; transition: transform 0.3s; ${s.invertDark ? 'filter: invert(1);' : ''}" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" />
            <span style="font-size: 11px; font-weight: 700; color: #a1a1aa; text-align: center; transition: color 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a1a1aa'">${s.name}</span>
          </div>`
        })

        // Responsive radius
        const width = window.innerWidth
        const radius = width < 640 ? 160 : width < 1024 ? 260 : 320

        // @ts-expect-error - TagCloud types are overly strict
        TagCloud(container, texts, {
          radius: radius,
          maxSpeed: 'normal',
          initSpeed: 'normal',
          direction: 135,
          keep: true,
          useHTML: true,
          useContainerInlineStyles: true,
          useItemInlineStyles: true
        })

        isLoaded.current = true
      } catch (e) {
        console.error('Failed to load TagCloud', e)
      }
    }

    initCloud()

    // Handle resize
    const handleResize = () => {
      const container = document.getElementById('skill-sphere')
      if (container) {
        container.innerHTML = ''
        isLoaded.current = false
        initCloud()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)

  }, [mounted])

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-[#050507] overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(226,232,240,0.03) 0%, transparent 60%)',
        }}
      />

      {/* ── Left Side Indicator (02 / SKILLS) ── */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center hidden 2xl:flex z-20">
        <span className="text-6xl font-black text-white/5 tracking-tighter">02</span>
        <div className="w-px h-24 bg-white/10 my-6" />
        <span className="text-white/20 text-[10px] font-bold tracking-[0.4em] -rotate-90 origin-center whitespace-nowrap mt-16">
          SKILLS
        </span>
      </div>

      <div ref={ref} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 2xl:pl-32 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Content */}
        <div className="flex-1 w-full text-center lg:text-left pt-12 lg:pt-0">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-6"
          >
            <div className="w-8 h-px bg-[#e2e8f0]" />
            <span className="text-[#93c5fd] text-sm font-semibold tracking-widest uppercase">
              Skills Arsenal
            </span>
            <div className="w-8 h-px bg-[#e2e8f0] lg:hidden" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            A 360° View of My <br className="hidden lg:block"/>
            <span className="gradient-text">Tech Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#94a3b8] text-lg sm:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Drag and interact with the sphere to explore the languages, frameworks, and tools I use to build robust, scalable, and visually stunning applications.
          </motion.p>
        </div>

        {/* Right Side: 3D Sphere */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
          className="flex-1 w-full flex justify-center items-center h-[400px] lg:h-[700px]"
        >
          <div 
            id="skill-sphere" 
            className="relative font-sans flex items-center justify-center text-[#93c5fd] cursor-grab active:cursor-grabbing"
            style={{
              // Global fixes for the tag cloud items
              ['--tagcloud-transition' as any]: 'all 0.3s ease',
            }}
          >
            {/* TagCloud injects content here */}
          </div>
        </motion.div>
        
      </div>

      {/* Global CSS for TagCloud specific overrides to make it smooth */}
      <style dangerouslySetInnerHTML={{__html: `
        .tagcloud {
          font-family: inherit;
        }
        .tagcloud--item {
          transition: transform 0.1s linear, filter 0.3s ease, opacity 0.3s ease !important;
        }
        .tagcloud--item:hover {
          z-index: 100 !important;
          opacity: 1 !important;
        }
      `}} />
    </section>
  )
}
