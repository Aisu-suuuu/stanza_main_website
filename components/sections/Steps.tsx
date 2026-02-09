'use client'

import { useRef, useState, useEffect } from 'react'
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
  },
]

// Individual Card Component - receives active state from parent
function StepCard({ step, index, isActive }: { step: Step; index: number; isActive: boolean }) {
  const stickyTop = 100 + index * 40

  return (
    <div
      className="sticky pb-5"
      style={{ top: stickyTop, zIndex: index + 1 }}
    >
      <div
        className={cn(
          'rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl transition-all duration-500',
          isActive
            ? 'border-2 border-transparent'
            : 'border border-foreground/20 dark:border-foreground/10 bg-surface-card'
        )}
        style={
          isActive
            ? {
                background:
                  'linear-gradient(var(--surface-card), var(--surface-card)) padding-box, linear-gradient(135deg, rgba(255,255,255,0.95), rgba(155,111,212,0.8)) border-box',
              }
            : undefined
        }
      >
        <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Large Number */}
          <span
            className={cn(
              'text-7xl lg:text-8xl font-bold leading-none hidden lg:block transition-colors duration-500',
              isActive ? 'text-[#9B6FD4]/20' : 'text-foreground/10'
            )}
          >
            {step.number}.
          </span>

          {/* Content */}
          <div className="space-y-3 lg:space-y-4">
            {/* Badge */}
            <span
              className={cn(
                'inline-block px-3 py-1 backdrop-blur-sm rounded-full text-sm font-medium transition-colors duration-500',
                isActive
                  ? 'bg-[#9B6FD4]/10 text-[#9B6FD4]'
                  : 'bg-foreground/10 text-foreground/90'
              )}
            >
              {step.badge}
            </span>

            {/* Mobile Number */}
            <div className="flex items-center gap-3 lg:hidden">
              <span
                className={cn(
                  'text-4xl sm:text-5xl font-bold transition-colors duration-500',
                  isActive ? 'text-[#9B6FD4]/30' : 'text-foreground/30'
                )}
              >
                {step.number}.
              </span>
            </div>

            {/* Title */}
            <h3
              className={cn(
                'text-2xl lg:text-3xl font-bold transition-colors duration-500 text-foreground'
              )}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-base lg:text-lg leading-relaxed transition-colors duration-500 text-muted">
              {step.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {step.tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-sm transition-colors duration-500',
                    isActive
                      ? 'border border-[#9B6FD4]/30 text-[#9B6FD4]'
                      : 'border border-foreground/30 text-foreground/90'
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Know More Link */}
            <a
              href="#"
              className={cn(
                'inline-flex items-center gap-2 transition-colors duration-300 mt-2',
                isActive
                  ? 'text-[#9B6FD4] hover:text-[#7B52B4]'
                  : 'text-muted hover:text-foreground'
              )}
            >
              Know more
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={step.imageUrl}
              alt={step.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Steps() {
  const cardCount = steps.length
  const ref = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Scroll-driven blur effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start center'],
  })
  const blurValue = useTransform(scrollYProgress, [0, 1], [8, 0])
  const filterBlur = useTransform(blurValue, (v) => `blur(${v}px)`)

  // Track which card is frontmost by checking which card's top is in the upper portion of viewport
  useEffect(() => {
    const container = cardsRef.current
    if (!container) return

    const handleScroll = () => {
      const cards = container.children
      let latestVisibleIndex = 0
      const viewportMid = window.innerHeight * 0.5

      // The last card whose top is above the middle of the viewport is the active one
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement
        const rect = card.getBoundingClientRect()
        if (rect.top < viewportMid) {
          latestVisibleIndex = i
        }
      }

      setActiveIndex(latestVisibleIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={ref} className="bg-background py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-6 lg:px-8" style={{ filter: filterBlur }}>
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className={cn(
              'inline-block px-4 py-1.5 mb-6',
              'text-sm font-medium text-primary',
              'bg-primary/10 rounded-full',
              'border border-primary/20'
            )}
          >
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl leading-tight mb-6">
            AI Solutions That Take Your Business to the{' '}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Next Level
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            We design, develop, and implement automated tools that help you work
            smarter, not harder.
          </p>
        </motion.div>

        {/* Stacking Cards */}
        <div
          ref={cardsRef}
          className="relative"
          style={{ height: `${cardCount * 65}vh` }}
        >
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Steps
