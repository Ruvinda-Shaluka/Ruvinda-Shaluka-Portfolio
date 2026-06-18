'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen
} from 'lucide-react'
import Image from 'next/image'

const articles = [
  {
    id: 'solid-principles',
    title: 'SOLID Principles: Why Most Explanations Get It Wrong',
    description: 'A deep dive into SOLID principles with real-world examples that actually make sense.',
    link: 'https://medium.com/@dilshanthilina1010/solid-principles-why-most-explanations-get-it-wrong-20443aa575e5',
    image: '/article/solid.png',
  },
  {
    id: 'jvm-internals',
    title: 'What Actually Happens Inside the JVM When You Run a Java Program',
    description: 'Understanding the JVM internals, classloaders, memory areas, and execution engine.',
    link: 'https://medium.com/@dilshanthilina1010/what-actually-happens-inside-the-jvm-when-you-run-a-java-program-c874be5b7e72',
    image: '/article/jvm.png',
  },
  {
    id: 'java-25',
    title: 'Java 25: Everything You Need to Know About the Latest LTS Release',
    description: 'Exploring the new features, performance improvements, and APIs in Java 25.',
    link: 'https://medium.com/@dilshanthilina1010/java-25-everything-you-need-to-know-about-the-latest-lts-release-d3e8850bf3b5',
    image: '/article/java 25.png',
  },
  {
    id: 'spring-data-jpa',
    title: 'Spring Data JPA: The Right Way to Talk to Your Database',
    description: 'Best practices for using Spring Data JPA to avoid common performance pitfalls.',
    link: 'https://medium.com/@dilshanthilina1010/spring-data-jpa-the-right-way-to-talk-to-your-database-4a000e079f23',
    image: '/article/Spring JPA.png',
  },
  {
    id: 'spring-security',
    title: 'Spring Security From Scratch: How to Secure Your Spring Boot App',
    description: 'A comprehensive guide to implementing authentication and authorization in Spring Boot.',
    link: 'https://medium.com/@dilshanthilina1010/spring-security-from-scratch-how-to-secure-your-spring-boot-application-7a3596ee7fb9',
    image: '/article/security.png',
  },
  {
    id: 'spring-context',
    title: 'What is Spring Context? The Missing Piece Most Developers Overlook',
    description: 'Understanding the core container that powers every Spring application.',
    link: 'https://medium.com/@dilshanthilina1010/what-is-spring-context-the-missing-piece-most-developers-overlook-2f59c9c76099',
    image: '/article/context.png',
  },
  {
    id: 'spring-core',
    title: 'I Used Spring Boot for Months Without Understanding Spring Core',
    description: 'Why mastering Spring Core fundamentals is essential for any serious Java developer.',
    link: 'https://medium.com/@dilshanthilina1010/i-used-spring-boot-for-months-without-understanding-spring-core-6308fdc2944d',
    image: '/article/core.png',
  }
]

export default function Writing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="writing" className="py-24 lg:py-32 relative bg-[#050507]">
      {/* ── Left Side Indicator (04 / ARTICLES) ── */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center hidden 2xl:flex z-20">
        <span className="text-6xl font-black text-white/5 tracking-tighter">04</span>
        <div className="w-px h-24 bg-white/10 my-6" />
        <span className="text-white/20 text-[10px] font-bold tracking-[0.4em] -rotate-90 origin-center whitespace-nowrap mt-20">
          ARTICLES
        </span>
      </div>

      <div ref={ref} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 2xl:pl-32 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#e2e8f0]" />
            <span className="text-[#93c5fd] text-sm font-semibold tracking-widest uppercase">
              Articles
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Writing</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl">
            I write practical Java & Spring articles on Medium, breaking down complex engineering concepts into clear, actionable guides.
          </p>
        </motion.div>

        {/* Interactive Hover Reveal Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Article List */}
          <div className="flex-1 flex flex-col">
            {articles.map((article, idx) => {
              const isActive = activeIndex === idx;
              return (
                <motion.a
                  key={article.id}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActiveIndex(idx)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-8 border-b border-[#0f1829] cursor-pointer hover:border-white/20 transition-colors"
                >
                  {/* Active Indicator Line (Mobile) */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-white transition-opacity lg:hidden ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                  <div className="flex items-start gap-6 sm:gap-10 pl-4 sm:pl-0">
                    <span className={`text-lg sm:text-xl font-medium tracking-tighter transition-colors duration-300 mt-1 sm:mt-0 ${isActive ? 'text-white' : 'text-[#404040]'}`}>
                      0{idx + 1}
                    </span>
                    <div className="flex flex-col max-w-xl">
                      <h3 className={`text-xl sm:text-2xl font-bold leading-tight mb-2 transition-all duration-300 group-hover:translate-x-2 ${isActive ? 'text-white' : 'text-[#94a3b8] group-hover:text-[#93c5fd]'}`}>
                        {article.title}
                      </h3>
                      <p className={`text-sm sm:text-base leading-relaxed transition-all duration-300 lg:hidden ${isActive ? 'text-[#94a3b8] opacity-100 max-h-40 mt-2' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                        {article.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full border border-[#0f1829] items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:text-black text-[#475569]">
                    <ArrowUpRight size={20} className="transition-transform group-hover:rotate-45" />
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Right Column: Sticky Image Reveal (Desktop Only) */}
          <div className="hidden lg:block w-[400px] xl:w-[500px] shrink-0">
            <div className="sticky top-32">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#080d1a] border border-[#0f1829] shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={articles[activeIndex].image}
                      alt={articles[activeIndex].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 400px, 500px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-80" />
                    
                    {/* Badge */}
                    <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#e2e8f0] animate-pulse" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Medium</span>
                    </div>

                    {/* Floating Description */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-[#93c5fd] text-sm leading-relaxed backdrop-blur-md bg-black/40 p-4 rounded-2xl border border-white/10">
                        {articles[activeIndex].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* View All CTA */}
              <motion.a
                href="https://medium.com/@dilshanthilina1010"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 flex items-center justify-between w-full p-6 rounded-[2rem] bg-[#080d1a] hover:bg-[#081020] border border-[#0f1829] hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Medium Profile</h4>
                    <span className="text-sm text-[#94a3b8]">View all articles</span>
                  </div>
                </div>
                <ArrowRight className="text-[#94a3b8] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
