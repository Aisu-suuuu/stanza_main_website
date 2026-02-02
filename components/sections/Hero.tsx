'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// Animated particles/stars background
const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0d0d0d]" />

      {/* Starfield effect with CSS */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, white, transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 50px 160px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 90px 40px, white, transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 160px 120px, white, transparent),
            radial-gradient(1.5px 1.5px at 200px 50px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 250px 90px, white, transparent),
            radial-gradient(1px 1px at 300px 150px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 350px 30px, white, transparent),
            radial-gradient(1px 1px at 400px 100px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1.5px 1.5px at 450px 180px, white, transparent),
            radial-gradient(1px 1px at 500px 60px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 550px 130px, white, transparent),
            radial-gradient(1px 1px at 600px 20px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 650px 170px, white, transparent),
            radial-gradient(1.5px 1.5px at 700px 80px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 750px 140px, white, transparent),
            radial-gradient(1px 1px at 800px 50px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 850px 110px, white, transparent),
            radial-gradient(1px 1px at 900px 160px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 950px 40px, white, transparent),
            radial-gradient(1.5px 1.5px at 1000px 90px, white, transparent),
            radial-gradient(1px 1px at 1050px 150px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 1100px 70px, white, transparent),
            radial-gradient(1px 1px at 1150px 120px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 1200px 30px, white, transparent),
            radial-gradient(1px 1px at 1250px 180px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1.5px 1.5px at 1300px 100px, white, transparent),
            radial-gradient(1px 1px at 1350px 60px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 1400px 140px, white, transparent)
          `,
          backgroundSize: '1440px 200px',
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  )
}

// Purple gradient orb/sphere component
const PurpleOrb = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      {/* Black void center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[410px] md:h-[410px] rounded-full bg-black" />

      {/* Gradient rings with blur */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] opacity-60 blur-[5px]"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Large ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(229deg, rgb(223, 122, 254) 13%, rgba(223, 122, 254, 0) 35%, rgba(223, 122, 254, 0) 64%, rgb(129, 74, 200) 88%)',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] opacity-60 blur-[5px]"
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Small ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(141deg, rgb(223, 122, 254) 13%, rgba(223, 122, 254, 0) 35%, rgba(223, 122, 254, 0) 64%, rgb(129, 74, 200) 88%)',
          }}
        />
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Particles/Stars Background */}
      <ParticlesBackground />

      {/* Purple Gradient Orb */}
      <PurpleOrb />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-display font-bold leading-[0.95] tracking-[-0.05em] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="block sm:inline">
            <span className="text-[#FFFFE6]">We </span>
            <span
              className="bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.5)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.3))',
                textShadow: '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
              }}
            >think</span>
            <span className="text-[#FFFFE6]">, you </span>
            <span
              className="bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.5)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.3))',
                textShadow: '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
              }}
            >grow</span>
          </span>
          <br className="hidden sm:block" />
          <span className="text-[#FFFFE6]">— that's the deal</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-[#CCCCCC] text-base sm:text-lg md:text-xl tracking-[-0.02em] mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Stanzasoft brings AI automation to your fingertips & streamlines tasks.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {/* Get in touch button - Purple */}
          <Link href="/contact">
            <button
              className={cn(
                'inline-flex items-center gap-2 px-5 py-2.5',
                'bg-[#814AC8] text-white text-[15px] font-medium',
                'rounded-md border border-white/10',
                'shadow-[0px_0.7px_0.7px_-0.6px_rgba(0,0,0,0.15),0px_1.8px_1.8px_-1.25px_rgba(0,0,0,0.14),0px_3.6px_3.6px_-1.9px_rgba(0,0,0,0.14),0px_6.9px_6.9px_-2.5px_rgba(0,0,0,0.13),0px_13.6px_13.6px_-3.1px_rgba(0,0,0,0.11),0px_30px_30px_-3.75px_rgba(0,0,0,0.05)]',
                'hover:bg-[#9659d9] transition-colors duration-200'
              )}
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </Link>

          {/* View services button - Dark/transparent */}
          <Link href="/services">
            <button
              className={cn(
                'inline-flex items-center gap-2 px-5 py-2.5',
                'bg-[#0D0D0D]/80 text-white text-[15px] font-medium',
                'rounded-md border border-white/10',
                'shadow-[0px_0.7px_0.7px_-0.6px_rgba(0,0,0,0.15),0px_1.8px_1.8px_-1.25px_rgba(0,0,0,0.14),0px_3.6px_3.6px_-1.9px_rgba(0,0,0,0.14),0px_6.9px_6.9px_-2.5px_rgba(0,0,0,0.13),0px_13.6px_13.6px_-3.1px_rgba(0,0,0,0.11),0px_30px_30px_-3.75px_rgba(0,0,0,0.05)]',
                'hover:bg-[#1a1a1a] transition-colors duration-200'
              )}
            >
              View services
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
