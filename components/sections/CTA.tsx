'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

export function CTA() {
  const ref = useRef<HTMLDivElement>(null)

  // Scroll-driven blur effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start center'],
  })
  const blurValue = useTransform(scrollYProgress, [0, 1], [8, 0])
  const filterBlur = useTransform(blurValue, (v) => `blur(${v}px)`)

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      <motion.div
        className="container mx-auto px-4 md:px-6 relative z-10"
        style={{ filter: filterBlur }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Card with animated gradient border */}
          <div className="relative p-[2px] rounded-3xl overflow-hidden">
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'conic-gradient(from 0deg, #814AC8, #DF7AFE, transparent, transparent, #814AC8)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />

            {/* Glow effect */}
            <div className="absolute inset-0 blur-xl opacity-50">
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'conic-gradient(from 0deg, #814AC8, #DF7AFE, transparent, transparent, #814AC8)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Inner card content */}
            <div className="relative bg-surface-card rounded-3xl px-8 py-16 md:px-16 md:py-20">
              <div className="flex flex-col items-center text-center">
                {/* Headline */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  Let AI do the Work so you can{' '}
                  <span className="bg-gradient-to-r from-[#814AC8] via-[#DF7AFE] to-[#814AC8] bg-clip-text text-transparent">
                    Scale Faster
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="text-muted text-lg md:text-xl mb-10 max-w-xl">
                  Book a Call Today and Start Automating
                </p>

                {/* CTA Button */}
                <Link href="/contact">
                  <Button
                    size="lg"
                    className={cn(
                      'bg-gradient-to-r from-[#814AC8] via-[#DF7AFE] to-[#814AC8]',
                      'text-white font-semibold',
                      'px-10 py-5 text-lg rounded-xl',
                      'shadow-2xl shadow-[#814AC8]/30',
                      'hover:shadow-[#814AC8]/50 hover:scale-105',
                      'transition-all duration-300'
                    )}
                  >
                    Book a free call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
