'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

export function AISolutions() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start center'],
  })
  const blurValue = useTransform(scrollYProgress, [0, 1], [6, 0])
  const filterBlur = useTransform(blurValue, (v) => `blur(${v}px)`)

  return (
    <section ref={sectionRef} className={cn('bg-background py-24 md:py-32')}>
      <motion.div style={{ filter: filterBlur }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Label */}
          <motion.span
            className={cn(
              'inline-block px-4 py-1.5 mb-6',
              'text-sm font-medium text-foreground',
              'bg-primary/10 rounded-full',
              'border border-primary/20'
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Services
          </motion.span>

          {/* Headline */}
          <motion.h2
            className={cn(
              'text-4xl md:text-5xl lg:text-6xl font-bold',
              'text-foreground leading-tight mb-6'
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            AI Solutions That Take Your Business to the{' '}
            <span className="text-foreground">
              Next Level
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className={cn(
              'text-lg md:text-xl text-muted',
              'max-w-2xl leading-relaxed'
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We design, develop, and implement automated tools that help you work
            smarter, not harder.
          </motion.p>
        </motion.div>
      </div>
      </motion.div>
    </section>
  )
}
