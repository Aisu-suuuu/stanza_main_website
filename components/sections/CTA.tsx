'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface CTAProps {
  heading?: string
  subtext?: string
  buttonText?: string
  buttonLink?: string
}

export function CTA({ heading, subtext, buttonText, buttonLink }: CTAProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Scroll-driven blur + parallax scale
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const blurProgress = useTransform(scrollYProgress, [0, 0.3], [6, 0])
  const filterBlur = useTransform(blurProgress, (v) => `blur(${v}px)`)
  const cardScale = useTransform(scrollYProgress, [0.1, 0.4], [0.95, 1])

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
          style={{ scale: cardScale }}
        >
          {/* Card with border */}
          <div className="relative rounded-3xl border border-border bg-surface-card px-8 py-16 md:px-16 md:py-20">
            <div className="flex flex-col items-center text-center">
              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                {heading || (
                  <>
                    Let AI do the Work so you can{' '}
                    <span className="text-foreground">
                      Scale Faster
                    </span>
                  </>
                )}
              </h2>

              {/* Subtitle */}
              <p className="text-muted text-lg md:text-xl mb-10 max-w-xl">
                {subtext || 'Book a Call Today and Start Automating'}
              </p>

              {/* CTA Button */}
              <Link href={buttonLink || '/contact'}>
                <Button
                  size="lg"
                  className={cn(
                    'bg-primary text-primary-foreground',
                    'font-semibold',
                    'px-7 py-3 text-base rounded-xl',
                    'hover:opacity-90 hover:scale-105',
                    'transition-all duration-300'
                  )}
                >
                  {buttonText || 'Book a free call'}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
