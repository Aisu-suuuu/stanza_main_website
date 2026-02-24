'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StatItemProps {
  value: number
  suffix: string
  label: string
  delay: number
  isInView: boolean
}

function AnimatedCounter({ value, suffix, label, delay, isInView }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timeout = setTimeout(() => {
        setHasAnimated(true)

        // Animation duration in ms
        const duration = 2000
        const startTime = Date.now()
        const startValue = 0
        const endValue = value

        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)

          // Easing function (ease-out)
          const easeOut = 1 - Math.pow(1 - progress, 3)

          const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut)
          setDisplayValue(currentValue)

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setDisplayValue(endValue)
          }
        }

        requestAnimationFrame(animate)
      }, delay * 1000)

      return () => clearTimeout(timeout)
    }
  }, [isInView, value, delay, hasAnimated])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
      className="flex flex-col items-center text-center"
    >
      <div className="flex items-baseline">
        <span className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {displayValue}
        </span>
        <span className="ml-1 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
          {suffix}
        </span>
      </div>
      <p className="mt-3 text-base text-muted sm:text-lg">
        {label}
      </p>
    </motion.div>
  )
}

const defaultStats = [
  { value: 5, suffix: '+', label: 'Years of Experience' },
  { value: 5, suffix: '+', label: 'Clients Served' },
  { value: 100, suffix: '%', label: 'Success Rate' },
  { value: 5, suffix: '+', label: 'Industries Served' },
]

interface StatsProps {
  stats?: { value: number; suffix: string; label: string }[]
}

export function Stats({ stats }: StatsProps) {
  const statItems = stats && stats.length > 0 ? stats : defaultStats
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Scroll-driven blur + parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const blurProgress = useTransform(scrollYProgress, [0, 0.3], [6, 0])
  const filterBlur = useTransform(blurProgress, (v) => `blur(${v}px)`)
  const decorY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section
      ref={ref}
      className="relative bg-background py-24 lg:py-32 overflow-hidden"
    >
      <motion.div className="mx-auto max-w-7xl px-6 lg:px-8" style={{ filter: filterBlur }}>
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-12">
          {statItems.map((stat, index) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.15}
              isInView={isInView}
            />
          ))}
        </div>
      </motion.div>

      {/* Decorative elements with parallax */}
      <motion.div className="absolute inset-0 -z-10 overflow-hidden" style={{ y: decorY }}>
        <div className="absolute -left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
        <div className="absolute -right-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Top and bottom border lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}

export default Stats
