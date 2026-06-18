'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { GitFork, ExternalLink, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 'tableflow',
    number: '01',
    title: 'TableFlow',
    tag: 'QR-Based Multi-Tenant Restaurant SaaS',
    description:
      'Production-grade SaaS platform with 18-phase backend architecture featuring multi-tenant data isolation, QR-code table ordering, real-time order tracking via Socket.io, and RBAC with dual JWT auth flows.',
    stack: ['Node.js', 'React 18', 'MongoDB', 'Socket.io', 'TailwindCSS'],
    githubFrontendUrl: 'https://github.com/thilina-fer/TableFlow-frontend.git',
    githubBackendUrl: 'https://github.com/thilina-fer/TableFlow-backed.git',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop',
    theme: 'text-orange-500',
    btnTheme: 'bg-orange-500 hover:bg-orange-600 text-white',
  },
  {
    id: 'colloq',
    number: '02',
    title: 'ColloQ',
    tag: 'AI-Powered Mock Interview Platform',
    description:
      'AI mock interview platform with a chat-style real-time Q&A interface. Built on a scalable Spring Boot REST API using constructor injection, AOP, and a responsive React dashboard with Ollama AI integration.',
    stack: ['Spring Boot', 'Java', 'React.js', 'Framer Motion', 'Ollama API'],
    githubFrontendUrl: 'https://github.com/thilina-fer/colloq-mock-interview-frontend-4.git',
    githubBackendUrl: 'https://github.com/thilina-fer/colloq-mock-interview-backend.git',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    theme: 'text-violet-500',
    btnTheme: 'bg-violet-500 hover:bg-violet-600 text-white',
  },
  {
    id: 'hrm',
    number: '03',
    title: 'Enterprise HRM',
    tag: 'Human Resource Management System',
    description:
      'Comprehensive HR management solution featuring employee tracking, attendance monitoring, payroll processing, and role-based access control. Built for scalability and enterprise security.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
    githubUrl: '#',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
    theme: 'text-emerald-500',
    btnTheme: 'bg-emerald-500 hover:bg-emerald-600 text-white',
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeIndex, setActiveIndex] = useState(0)

  const activeProject = projects[activeIndex]

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden bg-[#050507]">
      {/* ── Left Side Indicator (03 / PORTFOLIO) ── */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center hidden 2xl:flex z-20">
        <span className="text-6xl font-black text-white/5 tracking-tighter">03</span>
        <div className="w-px h-24 bg-white/10 my-6" />
        <span className="text-white/20 text-[10px] font-bold tracking-[0.4em] -rotate-90 origin-center whitespace-nowrap mt-20">
          PORTFOLIO
        </span>
      </div>

      <div ref={ref} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 2xl:pl-32 relative z-10">
        
        {/* Header section outside the main box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#e2e8f0]" />
            <span className="text-[#93c5fd] text-sm font-semibold tracking-widest uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Main UI Container (Matching the design image) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full flex flex-col lg:flex-row lg:h-[650px] rounded-[2rem] overflow-hidden border border-[#0f1829] bg-[#060b18] shadow-2xl shadow-black/50"
        >
          {/* Dynamic Background Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id + '-bg'}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-0"
            >
              <Image 
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              {/* Gradient Overlay so text is readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-[#0a0a0a]/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent lg:hidden" />
            </motion.div>
          </AnimatePresence>

          {/* Left Side: Active Project Details */}
          <div className="relative z-10 flex-1 p-6 sm:p-12 pt-32 lg:pt-12 flex flex-col justify-end lg:justify-center min-h-[500px] lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="max-w-2xl"
              >
                <div className={`text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4 ${activeProject.theme}`}>
                  Project {activeProject.number}
                </div>
                
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
                  {activeProject.title}
                </h3>
                
                <p className="text-base sm:text-xl text-[#93c5fd] font-medium mb-3 sm:mb-4">
                  {activeProject.tag}
                </p>
                
                <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed mb-6 sm:mb-8 max-w-xl">
                  {activeProject.description}
                </p>
                
                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
                  {activeProject.stack.map(tech => (
                    <span key={tech} className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold bg-white/5 border border-white/10 rounded-lg text-[#93c5fd] backdrop-blur-md">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <a 
                    href={activeProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold transition-all hover:scale-105 active:scale-95 ${activeProject.btnTheme}`}
                  >
                    <ExternalLink size={16} />
                    Explore Project
                  </a>

                  {activeProject.githubFrontendUrl && (
                    <a 
                      href={activeProject.githubFrontendUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
                    >
                      <GitFork size={16} />
                      Frontend Code
                    </a>
                  )}

                  {activeProject.githubBackendUrl && (
                    <a 
                      href={activeProject.githubBackendUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
                    >
                      <GitFork size={16} />
                      Backend Code
                    </a>
                  )}

                  {/* Fallback generic Source Code link */}
                  {activeProject.githubUrl && !activeProject.githubFrontendUrl && !activeProject.githubBackendUrl && (
                    <a 
                      href={activeProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
                    >
                      <GitFork size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Glassmorphism Project List */}
          <div className="relative z-20 w-full lg:w-[420px] bg-[#050507]/80 backdrop-blur-2xl border-t lg:border-t-0 lg:border-l border-white/5 p-6 sm:p-8 flex flex-col h-[400px] lg:h-full">
            <h4 className="text-xl font-bold text-white mb-6">All Projects</h4>
            
            <div className="flex flex-col gap-4 overflow-y-auto custom-scrollbar pr-2 pb-4">
              {projects.map((project, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`group w-full text-left flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/10 border-white/20 shadow-lg' 
                        : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <div className={`relative w-14 h-14 shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
                      isActive ? 'ring-2 ring-white/50 shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'opacity-70 group-hover:opacity-100'
                    }`}>
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    
                    {/* Text Details */}
                    <div className="flex-1 min-w-0">
                      <h5 className={`font-bold truncate transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#93c5fd] group-hover:text-white'}`}>
                        {project.title}
                      </h5>
                      <p className="text-xs text-[#94a3b8] truncate mt-1">
                        {project.tag}
                      </p>
                      
                      <div className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider mt-2 transition-colors duration-300 ${
                        isActive ? project.theme : 'text-[#475569] group-hover:text-[#94a3b8]'
                      }`}>
                        More Info <ArrowRight size={10} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
