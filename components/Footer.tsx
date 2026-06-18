'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaMediumM, FaFacebookF, FaInstagram } from 'react-icons/fa'

const socials = [
  { label: 'GitHub', href: 'https://github.com/thilina-fer', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thilina-dilshan-fernando-2a0539390/?trk=public-profile-badge-profile-badge-view-profile-cta', icon: FaLinkedinIn },
  { label: 'Medium', href: 'https://medium.com/@dilshanthilina1010', icon: FaMediumM },
  { label: 'Facebook', href: 'https://www.facebook.com/thilina.dilshan.74172', icon: FaFacebookF },
  { label: 'Instagram', href: 'https://www.instagram.com/_thilina.dilshan__/', icon: FaInstagram },
]

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#050507] pb-4">
      {/* Container with Landscape Background */}
      <div className="mx-2 sm:mx-6 lg:mx-8 rounded-[2.5rem] overflow-hidden relative min-h-[400px] lg:min-h-[500px] flex flex-col justify-end pt-8 sm:pt-12 px-6 sm:px-12 lg:px-20 pb-0 shadow-2xl">
        
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
        />
        {/* Gradients to merge top and bottom with content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-[#050507] z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/90 to-transparent z-0" />

        {/* Content Container (Socials only) */}
        <div className="relative z-10 w-full flex justify-center mb-8 lg:mb-12">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {socials.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/70 hover:text-white transition-all duration-300 drop-shadow-md"
                title={label}
              >
                <Icon size={26} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Massive Text at Bottom */}
        <div className="relative z-10 w-full flex justify-center translate-y-6 sm:translate-y-10 lg:translate-y-16">
          <h1 
            className="text-[16vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-[#050507] tracking-tighter select-none"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)' }}
          >
            DILSHAN
          </h1>
        </div>

      </div>
    </footer>
  )
}
