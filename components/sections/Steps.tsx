'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Step {
  number: string
  badge: string
  title: string
  description: string
  tags: string[]
  imageUrl: string
  gradient?: string
  isGray?: boolean
}

const steps: Step[] = [
  {
    number: '01',
    badge: 'AI Assistant',
    title: 'Delegate Daily Tasks',
    description:
      'From managing calendars to drafting emails and summarizing meetings, our AI assistants handle your routine work so you can focus on what matters.',
    tags: ['Summarize', 'Scheduling', 'Easy mode'],
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    gradient: 'from-[#8B5CF6] to-[#6D28D9]',
  },
  {
    number: '02',
    badge: 'Analytics',
    title: 'Analyze & Optimize',
    description:
      'Transform raw data into actionable insights. Our intelligent analytics tools identify patterns, predict trends, and recommend optimizations in real-time.',
    tags: ['Analytics', 'Insights', 'Real-time'],
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    isGray: true,
  },
  {
    number: '03',
    badge: 'Scalability',
    title: 'Scale Seamlessly',
    description:
      'Grow your operations without growing complexity. Our automation solutions adapt to your business needs and scale effortlessly as you expand.',
    tags: ['Scalability', 'Growth', 'Flexibility'],
    imageUrl:
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80',
    isGray: true,
  },
  {
    number: '04',
    badge: 'Integration',
    title: 'Integrate Everything',
    description:
      'Connect all your tools and platforms into one unified workflow. Our AI bridges the gaps between systems, creating a seamless operational ecosystem.',
    tags: ['Integration', 'Workflow', 'Unified'],
    imageUrl:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
    isGray: true,
  },
]

interface StepCardProps {
  step: Step
  index: number
  total: number
}

function StepCard({ step, index, total }: StepCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6])

  const bgClass = step.isGray
    ? 'bg-[#1A1A1A]'
    : `bg-gradient-to-br ${step.gradient}`

  return (
    <motion.div
      ref={cardRef}
      className="sticky top-24 mb-8"
      style={{
        scale,
        opacity,
        zIndex: total - index,
      }}
    >
      <div className={cn(bgClass, 'rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl')}>
        <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Large Number */}
          <motion.span
            className="text-7xl lg:text-8xl font-bold text-white/10 leading-none hidden lg:block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {step.number}.
          </motion.span>

          {/* Content */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Badge */}
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 font-medium">
              {step.badge}
            </span>

            {/* Mobile Number */}
            <div className="flex items-center gap-3 lg:hidden">
              <span className="text-4xl sm:text-5xl font-bold text-white/30">{step.number}.</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-white/60 text-base lg:text-lg leading-relaxed">
              {step.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {step.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 border border-white/30 rounded-full text-sm text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Know More Link */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 mt-4"
            >
              Know more
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={step.imageUrl}
              alt={step.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function Steps() {
  return (
    <section className="bg-background py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Our streamlined process takes you from idea to implementation in four simple steps
          </p>
        </motion.div>

        {/* Parallax Cards Container */}
        <div className="relative">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              total={steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps
