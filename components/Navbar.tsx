'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 80) {
      setIsScrolled(true)
      const previous = scrollY.getPrevious() ?? 0
      if (latest > previous) {
        setIsOpen(false)
      }
    } else {
      setIsScrolled(false)
    }
  })

  const handleScroll = useCallback(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact']
    const scrollPos = window.scrollY + 120

    for (const id of sections.reverse()) {
      const el = document.getElementById(id)
      if (el && el.offsetTop <= scrollPos) {
        setActiveSection(id)
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.div
      id="navbar-container"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl min-w-[300px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav
        className={`relative overflow-hidden backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 ${isOpen ? 'rounded-3xl' : 'rounded-full'}`}
        style={{ 
          backgroundColor: 'rgba(12, 12, 12, 0.85)',
          opacity: (isScrolled && !isHovered && !isOpen) ? 0.4 : 1
        }}
      >
        <div className="px-5 md:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo (Left Column) */}
            <div className="flex-1 flex justify-start">
              <motion.button
                onClick={() => scrollToSection('#hero')}
                className="flex items-center justify-center group cursor-pointer py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src="/logo/keyboard-r.png" alt="Logo" width={48} height={48} className="drop-shadow-[0_0_8px_rgba(59,130,246,0.4)] object-contain" />
              </motion.button>
            </div>

            {/* Desktop Nav (Center Column) */}
            <div className="hidden md:flex items-center justify-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`relative px-4 lg:px-5 py-5 text-[11px] md:text-xs font-bold tracking-[0.15em] transition-all duration-300 focus:outline-none cursor-pointer ${
                      isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <>
                        {/* Top glowing line */}
                        <motion.div
                          layoutId="navTopLine"
                          className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-white rounded-b-md shadow-[0_0_10px_#ffffff,0_0_20px_#ffffff]"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                        {/* Subtle radial glow */}
                        <motion.div
                          layoutId="navGlow"
                          className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-12 bg-white/10 blur-[12px] rounded-full pointer-events-none"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      </>
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Desktop Action & Mobile Menu (Right Column) */}
            <div className="flex-1 flex justify-end items-center">
              <button
                onClick={() => scrollToSection('#contact')}
                className="hidden md:block px-4 py-2 border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white text-[11px] font-bold tracking-wider rounded-xl transition-all cursor-pointer focus:outline-none"
              >
                LET&apos;S TALK
              </button>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  id="mobile-menu-btn"
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-lg text-slate-300 hover:text-white transition-colors focus:outline-none cursor-pointer"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-white/[0.06]"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-center px-4 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-colors focus:outline-none cursor-pointer ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-white bg-white/10'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </motion.div>
  )
}
