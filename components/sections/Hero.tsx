'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

// Canvas-based particles: small white dots that drift toward/away from center
const FlowingParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let w = 0
    let h = 0

    interface Particle {
      x: number
      y: number
      size: number
      opacity: number
      speed: number
      direction: number
    }

    const particles: Particle[] = []
    const getCx = () => w / 2
    const getCy = () => h * 0.44

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const spawn = (forceDir?: number): Particle => {
      const angle = Math.random() * Math.PI * 2
      const dir = forceDir ?? (Math.random() > 0.5 ? 1 : -1)
      const dist =
        dir === 1
          ? 150 + Math.random() * Math.max(w, h) * 0.45
          : 50 + Math.random() * 120
      return {
        x: getCx() + Math.cos(angle) * dist,
        y: getCy() + Math.sin(angle) * dist,
        size: 0.5 + Math.random() * 1.5,
        opacity: 0.1 + Math.random() * 0.5,
        speed: 0.08 + Math.random() * 0.25,
        direction: dir,
      }
    }

    const init = () => {
      particles.length = 0
      for (let i = 0; i < 80; i++) particles.push(spawn())
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const cxv = getCx()
      const cyv = getCy()
      const maxDist = Math.max(w, h) * 0.5

      for (const p of particles) {
        const dx = cxv - p.x
        const dy = cyv - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const ang = Math.atan2(dy, dx)

        p.x += Math.cos(ang) * p.speed * p.direction
        p.y += Math.sin(ang) * p.speed * p.direction

        if (p.direction === 1 && dist < 35) {
          Object.assign(p, spawn(1))
        } else if (p.direction === -1 && dist > maxDist * 1.1) {
          Object.assign(p, spawn(-1))
        }

        const fade = Math.max(0, Math.min(1, 1 - dist / maxDist))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.opacity * fade})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    init()
    draw()

    const onResize = () => {
      resize()
      init()
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}

// Background gradients + flowing particles
const ParticlesBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Light mode */}
    <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F3FF] to-[#EDE9FE] dark:hidden" />
    {/* Dark mode */}
    <div className="absolute inset-0 hidden dark:block">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-[#0d0d0d]" />
      <FlowingParticles />
    </div>
  </div>
)

// Subtle purple orbit ring behind text
const PurpleOrb = () => {
  const { resolvedTheme } = useTheme()
  const isLight = resolvedTheme === 'light'

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[480px] md:h-[480px]">
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(
                from 180deg,
                transparent 0%,
                rgba(168,85,247,${isLight ? 0.06 : 0.15}) 10%,
                rgba(160,100,240,${isLight ? 0.12 : 0.3}) 22%,
                rgba(180,120,255,${isLight ? 0.18 : 0.4}) 34%,
                rgba(168,85,247,${isLight ? 0.12 : 0.3}) 46%,
                rgba(129,74,200,${isLight ? 0.04 : 0.1}) 56%,
                transparent 64%,
                transparent 100%
              )`,
              filter: 'blur(25px)',
            }}
          />
        </motion.div>
      </div>
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
        {/* Headline — no glow effects */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-display font-bold leading-[0.95] tracking-[-0.05em] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="block sm:inline">
            <span className="text-cream">We </span>
            <span className="text-[#DF7AFE]">
              think
            </span>
            <span className="text-cream">, you </span>
            <span className="text-[#DF7AFE]">
              grow
            </span>
          </span>
          <br className="hidden sm:block" />
          <span className="text-cream">— that&apos;s the deal</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-muted text-base sm:text-lg md:text-xl tracking-[-0.02em] mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Stanzasoft brings AI automation to your fingertips & streamlines
          tasks.
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
                'bg-foreground/10 text-foreground dark:bg-background/80 dark:text-white text-[15px] font-medium',
                'rounded-md border border-foreground/10',
                'shadow-[0px_0.7px_0.7px_-0.6px_rgba(0,0,0,0.15),0px_1.8px_1.8px_-1.25px_rgba(0,0,0,0.14),0px_3.6px_3.6px_-1.9px_rgba(0,0,0,0.14),0px_6.9px_6.9px_-2.5px_rgba(0,0,0,0.13),0px_13.6px_13.6px_-3.1px_rgba(0,0,0,0.11),0px_30px_30px_-3.75px_rgba(0,0,0,0.05)]',
                'hover:bg-foreground/15 dark:hover:bg-surface-card transition-colors duration-200'
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
