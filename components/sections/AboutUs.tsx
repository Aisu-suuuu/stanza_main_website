'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

interface AboutUsProps {
  heading?: string
  paragraph1?: string
  paragraph2?: string
  aboutImage?: string
}

export function AboutUs({
  heading,
  paragraph1,
  paragraph2,
  aboutImage,
}: AboutUsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Scroll-driven blur + parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const blurProgress = useTransform(scrollYProgress, [0, 0.3], [8, 0])
  const filterBlur = useTransform(blurProgress, (v) => `blur(${v}px)`)
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={ref} className="relative pt-20 pb-32 lg:pt-28 lg:pb-40 bg-background">
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        style={{ filter: filterBlur }}
      >
        {/* About Content - No Background */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="grid md:grid-cols-5 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left: Team Image (smaller - 2 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="md:col-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden max-w-md"
            >
              <motion.div style={{ y: imageY }} className="absolute inset-0 -top-16 -bottom-16">
                <Image
                  src={aboutImage || '/images/about-team.png'}
                  alt="Stanzasoft team collaborating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
              </motion.div>
            </motion.div>

            {/* Right: Content (larger - 3 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="md:col-span-3 py-2 md:py-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
                {heading || 'About Us'}
              </h2>
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-4">
                {paragraph1 || 'Stanzasoft is a product-centric technology company delivering enterprise-grade digital solutions and AI-powered platforms. We specialize in building scalable, production-ready systems that enable organizations to operate more efficiently, intelligently, and competitively.'}
              </p>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                {paragraph2 || 'With expertise spanning product development, AI automation, and strategic HR consulting, Stanzasoft partners with businesses to design, develop, and deploy high-impact solutions that drive measurable outcomes.'}
              </p>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default AboutUs
