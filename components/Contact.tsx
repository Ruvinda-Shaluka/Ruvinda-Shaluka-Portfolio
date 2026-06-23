'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, Link as LinkIcon, GitFork, Send, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const contactInfo = [
  {
    id: 'contact-email',
    icon: Mail,
    label: 'Email',
    value: 'ruvinda.dev@gmail.com',
    href: 'mailto:ruvinda.dev@gmail.com',
  },
  {
    id: 'contact-phone',
    icon: Phone,
    label: 'Phone',
    value: '+94 76 906 3040',
    href: 'tel:+94769063040',
  },
  {
    id: 'contact-linkedin',
    icon: LinkIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ruvinda-shaluka-perera-564207325',
    href: 'https://www.linkedin.com/in/ruvinda-shaluka-perera-564207325',
  },
  {
    id: 'contact-github',
    icon: GitFork,
    label: 'GitHub',
    value: 'github.com/Ruvinda-Shaluka',
    href: 'https://github.com/Ruvinda-Shaluka',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) return

    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
      
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }, 1500)
  }

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
          <span className="text-[#93c5fd] text-sm font-semibold tracking-widest uppercase">
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
          className="text-[#cbd5e1] text-lg mb-12 max-w-xl"
        >
          Open to freelance projects, collaborations, and full-time opportunities. Let&apos;s build
          something great together.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12 w-full">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 p-6 sm:p-10 rounded-[2rem] border border-[#27272a] bg-[#0c1020]/50 backdrop-blur-md shadow-2xl flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Send a Message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 hover:border-white/20 focus:border-[#3b82f6]/50 focus:bg-white/[0.07] rounded-xl text-white text-sm placeholder-zinc-600 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 hover:border-white/20 focus:border-[#3b82f6]/50 focus:bg-white/[0.07] rounded-xl text-white text-sm placeholder-zinc-600 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 hover:border-white/20 focus:border-[#3b82f6]/50 focus:bg-white/[0.07] rounded-xl text-white text-sm placeholder-zinc-600 focus:outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="w-full py-3.5 px-6 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] border border-[#3b82f6]/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:outline-none"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={18} className="text-emerald-400 animate-bounce" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 rounded-[2rem] border border-[#27272a] bg-[#121214] overflow-hidden shadow-2xl flex flex-col justify-between p-6 sm:p-10 relative min-h-[350px] lg:min-h-0"
          >
            <div className="space-y-6 z-10 w-full">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Let&apos;s Connect</h3>
                <p className="text-zinc-400 text-sm">Reach out via email, phone, or check my socials.</p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ id, icon: Icon, label, value, href }) => (
                  <a
                    key={id}
                    id={id}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl transition-all group focus:outline-none"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1a1a1d] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#3b82f6]/10 group-hover:border-[#3b82f6]/30 transition-colors">
                      <Icon size={18} className="text-zinc-400 group-hover:text-[#60a5fa] transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">{label}</p>
                      <p className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors truncate">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Transparent Image Area (Absolute inside right block) */}
            <div className="absolute right-0 bottom-0 w-1/2 h-[60%] pointer-events-none opacity-20 sm:opacity-30 flex items-end justify-end">
               <Image 
                 src="/article/ruvinda-profile.jpg" 
                 alt="Ruvinda Shaluka" 
                 fill 
                 className="object-contain object-right-bottom mix-blend-lighten filter grayscale"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-[#121214] via-[#121214]/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
