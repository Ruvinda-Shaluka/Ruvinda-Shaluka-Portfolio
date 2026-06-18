'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, Link as LinkIcon, GitFork, User, AtSign } from 'lucide-react'
import Image from 'next/image'

const contactInfo = [
  {
    id: 'contact-email',
    icon: Mail,
    label: 'Email',
    value: 'dilshanthilina1010@gmail.com',
    href: 'mailto:dilshanthilina1010@gmail.com',
  },
  {
    id: 'contact-phone',
    icon: Phone,
    label: 'Phone',
    value: '+94 766 497 071',
    href: 'tel:+94766497071',
  },
  {
    id: 'contact-linkedin',
    icon: LinkIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/thilina-dilshan-fernando-2a0539390',
    href: 'https://www.linkedin.com/in/thilina-dilshan-fernando-2a0539390/?trk=public-profile-badge-profile-badge-view-profile-cta',
  },
  {
    id: 'contact-github',
    icon: GitFork,
    label: 'GitHub',
    value: 'github.com/thilina-fer',
    href: 'https://github.com/thilina-fer',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-[#050507]">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(29,78,216,0.12) 0%, transparent 55%)',
        }}
      />

      {/* ── Left Side Indicator (05 / CONTACT) ── */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center hidden 2xl:flex z-20">
        <span className="text-6xl font-black text-white/5 tracking-tighter">05</span>
        <div className="w-px h-24 bg-white/10 my-6" />
        <span className="text-white/20 text-[10px] font-bold tracking-[0.4em] -rotate-90 origin-center whitespace-nowrap mt-16">
          CONTACT
        </span>
      </div>

      <div ref={ref} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 2xl:pl-32 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-[#e2e8f0]" />
          <span className="text-[#3b82f6] text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#94a3b8] text-lg mb-12 max-w-xl"
        >
          Open to freelance projects, collaborations, and full-time opportunities. Let&apos;s build
          something great together.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full flex flex-col md:flex-row rounded-[2rem] border border-[#27272a] bg-[#121214] overflow-hidden shadow-2xl items-center mt-12 relative min-h-[160px]"
        >
          {/* Content: Icons */}
          <div className="w-full md:w-2/3 p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between z-10 gap-6">
            
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Let&apos;s Connect</h3>
              <p className="text-[#a1a1aa] text-sm">Reach out via email or social media.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {contactInfo.map(({ id, icon: Icon, label, href }) => (
                <motion.a
                  key={id}
                  id={id}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-white/10 bg-[#1a1a1d] flex items-center justify-center hover:bg-[#3b82f6]/10 hover:border-[#3b82f6]/30 transition-all duration-300 group cursor-pointer"
                  title={label}
                >
                  <Icon size={22} className="text-[#a1a1aa] group-hover:text-[#60a5fa] transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Transparent Image Area (Absolute) */}
          <div className="absolute right-0 bottom-0 w-1/3 h-full pointer-events-none opacity-40 sm:opacity-80 flex items-end justify-end">
             <Image 
               src="/article/profile.png" 
               alt="Thilina Dilshan" 
               fill 
               className="object-contain object-right-bottom mix-blend-lighten filter grayscale"
             />
             {/* Gradient to blend image smoothly into the background */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#121214] via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
