'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  Layers,
  Monitor,
  Settings,
  GraduationCap,
  ArrowRight,
  MessageSquare,
  Lightbulb,
  Rocket,
  CheckCircle,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/Button'

interface ServicesPageClientProps {
  pageData?: {
    hero_badge?: string
    hero_heading?: string
    hero_subheading?: string
    process_badge?: string
    process_heading?: string
    process_subheading?: string
    cta_heading?: string
    cta_subtext?: string
    cta_button_text?: string
    cta_button_link?: string
  }
  services?: {
    title: string
    description: string
    iconName?: string
    href: string
    bulletPoints: string[]
  }[]
}

function BlurSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start center'],
  })
  const blurValue = useTransform(scrollYProgress, [0, 1], [6, 0])
  const filterBlur = useTransform(blurValue, (v) => `blur(${v}px)`)

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ filter: filterBlur }}>
        {children}
      </motion.div>
    </div>
  )
}

// Services data with tags
const services = [
  {
    icon: Layers,
    title: 'Project Outsourcing',
    description:
      'End-to-end project outsourcing with dedicated teams that seamlessly integrate into your workflow — from requirement gathering and planning to development, testing, and delivery.',
    tags: [
      { icon: '🧑‍💻', label: 'Dedicated Teams' },
      { icon: '📋', label: 'Agile Management' },
      { icon: '✅', label: 'QA & Testing' },
      { icon: '🔗', label: 'Team Integration' },
      { icon: '🚀', label: 'On-time Delivery' },
    ],
    detail:
      'Our project outsourcing services provide you with fully managed, cross-functional teams that work as an extension of your own. We handle recruitment, onboarding, and project management so you can focus on strategy while we handle execution at scale.',
  },
  {
    icon: Monitor,
    title: 'Managed IT Services',
    description:
      'Comprehensive IT management and support solutions that keep your infrastructure running smoothly, securely, and efficiently around the clock.',
    tags: [
      { icon: '📡', label: 'Infrastructure Monitoring' },
      { icon: '☁️', label: 'Cloud Operations' },
      { icon: '🛡️', label: 'Security & Compliance' },
      { icon: '🕐', label: '24/7 Support' },
    ],
    detail:
      'Our managed IT services are designed to give you peace of mind. We proactively monitor, maintain, and optimize your infrastructure — from cloud environments and networking to security patching and disaster recovery — so your systems stay reliable and secure.',
  },
  {
    icon: Settings,
    title: 'Technology Consulting',
    description:
      'Strategic technology advisory services that help businesses navigate digital transformation, adopt modern architectures, and make data-driven technology decisions.',
    tags: [
      { icon: '🔄', label: 'Digital Transformation' },
      { icon: '🏗️', label: 'Architecture Planning' },
      { icon: '🤖', label: 'AI/ML Roadmaps' },
      { icon: '📊', label: 'Tech Assessment' },
    ],
    detail:
      'Our technology consulting engagements start with a deep understanding of your business goals. We assess your current stack, identify gaps and opportunities, and deliver actionable roadmaps that align your technology investments with measurable business outcomes.',
  },
  {
    icon: GraduationCap,
    title: 'Training and Upskilling',
    description:
      'Customized training programs designed to upskill your workforce in cutting-edge technologies, AI/ML tools, and modern development practices.',
    tags: [
      { icon: '🧠', label: 'AI & ML Workshops' },
      { icon: '☁️', label: 'Cloud & DevOps' },
      { icon: '🏢', label: 'Corporate Programs' },
      { icon: '💻', label: 'Hands-on Projects' },
    ],
    detail:
      'Our training programs combine expert instruction with real-world, project-based learning. Whether you need to upskill your engineering team on AI/ML, cloud-native development, or DevOps practices, we tailor every curriculum to your team\'s current level and your business objectives.',
  },
]

// Process steps data
const processSteps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Discovery',
    description:
      'We begin by understanding your business challenges, goals, and requirements through in-depth consultations and analysis.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Strategy',
    description:
      'Our experts design a tailored solution roadmap aligned with your objectives, timeline, and budget constraints.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Implementation',
    description:
      'We execute with precision using agile methodologies, ensuring quality delivery with regular updates and feedback loops.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Support',
    description:
      'Post-launch support and optimization to ensure your solutions continue to deliver value and evolve with your needs.',
  },
]

// Scroll-spy services section (Grownex-style)
function ServicesAccordionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeNav, setActiveNav] = useState(0)
  const [expanded, setExpanded] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const headerY = useTransform(scrollYProgress, [0, 0.4], [12, -4])

  // Scroll-spy: update activeNav based on which card is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) setActiveNav(index)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 }
    )

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToCard = (i: number) => {
    setActiveNav(i)
    cardRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const toggle = (i: number) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Layout: Sticky Sidebar + Scrolling Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-8 md:gap-12"
        >
          {/* Sticky Sidebar Nav */}
          <nav className="hidden md:block md:w-[260px] flex-shrink-0">
            <div className="sticky top-[120px] space-y-1">
              {services.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => scrollToCard(i)}
                  className={cn(
                    'text-left text-[14px] md:text-[15px] w-full py-2.5 transition-colors duration-200 flex items-center gap-2',
                    activeNav === i
                      ? 'font-bold text-foreground'
                      : 'text-muted hover:text-foreground'
                  )}
                >
                  {activeNav === i && (
                    <motion.span
                      layoutId="service-indicator"
                      className="text-[#A78BFA] text-[11px]"
                      transition={{ duration: 0.25 }}
                    >
                      &#9654;
                    </motion.span>
                  )}
                  {s.title}
                </button>
              ))}
            </div>
          </nav>

          {/* Service Cards */}
          <div className="flex-1 space-y-5">
            {services.map((service, i) => (
              <div
                key={service.title}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                className="bg-surface-card rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-[18px] md:text-[20px] font-bold text-foreground mb-2.5">
                  {service.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-muted leading-[1.7] mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background rounded-full text-[12px] md:text-[13px] text-foreground border border-border/50"
                    >
                      <span className="text-[12px]">{tag.icon}</span>
                      {tag.label}
                    </span>
                  ))}
                </div>

                {/* Accordion */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between pt-4 border-t border-border/50 group"
                >
                  <span className="text-[15px] font-medium text-foreground group-hover:text-[#A78BFA] transition-colors">
                    View Details
                  </span>
                  <motion.span
                    animate={{ rotate: expanded.has(i) ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[22px] leading-none text-muted group-hover:text-[#A78BFA] transition-colors"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {expanded.has(i) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-[13px] text-muted leading-[1.7]">
                        {service.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Process Step Component
function ProcessStep({
  step,
  index,
}: {
  step: (typeof processSteps)[0]
  index: number
}) {
  const Icon = step.icon

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Connector line (hidden on last item) */}
      {index < processSteps.length - 1 && (
        <div
          className={cn(
            'hidden lg:block absolute top-10 left-[calc(100%+1rem)]',
            'w-[calc(100%-2rem)] h-0.5',
            'bg-primary/50'
          )}
        />
      )}

      <div className="flex flex-col items-center text-center">
        {/* Number badge */}
        <div className="relative mb-6">
          <div
            className={cn(
              'w-20 h-20 rounded-2xl',
              'bg-primary',
              'flex items-center justify-center',
              'shadow-lg shadow-primary/25'
            )}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          {/* Step number */}
          <span
            className={cn(
              'absolute -top-2 -right-2',
              'w-8 h-8 rounded-full',
              'bg-surface-card border-2 border-primary',
              'flex items-center justify-center',
              'text-sm font-bold text-foreground'
            )}
          >
            {step.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed max-w-xs">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function ServicesPageClient({ pageData }: ServicesPageClientProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className={cn(
                'absolute -top-40 -right-40 w-[600px] h-[600px]',
                'bg-primary/20 rounded-full blur-[120px]'
              )}
            />
            <div
              className={cn(
                'absolute -bottom-40 -left-40 w-[500px] h-[500px]',
                'bg-primary/20 rounded-full blur-[120px]'
              )}
            />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Tagline */}
              <motion.span
                className={cn(
                  'inline-block px-4 py-2 mb-6',
                  'text-sm font-medium text-foreground',
                  'bg-primary/10 rounded-full border border-primary/20'
                )}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {pageData?.hero_badge || 'Our Core Capabilities'}
              </motion.span>

              {/* Headline with gradient */}
              <motion.h1
                className={cn(
                  'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl',
                  'font-display font-bold leading-tight mb-6'
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-foreground">
                  {pageData?.hero_heading
                    ? pageData.hero_heading.replace(/\{gradient\}.*\{\/gradient\}/, '')
                    : 'Our Services '}
                </span>
                <span className="gradient-text">
                  {pageData?.hero_heading
                    ? (pageData.hero_heading.match(/\{gradient\}(.*?)\{\/gradient\}/)?.[1] || 'with AI/ML')
                    : 'with AI/ML'}
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {pageData?.hero_subheading ||
                  'From end-to-end product development to AI automation and strategic HR consulting — we deliver high-impact solutions that drive measurable outcomes.'}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Section — Grownex-style sidebar + cards */}
        <BlurSection>
          <ServicesAccordionSection />
        </BlurSection>

        {/* Process Section */}
        <BlurSection>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            {/* Section Header */}
            <motion.div
              className="max-w-2xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <span
                className={cn(
                  'inline-block px-4 py-2 mb-6',
                  'text-sm font-medium text-foreground',
                  'bg-primary/10 rounded-full border border-primary/20'
                )}
              >
                {pageData?.process_badge || 'Our Process'}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {pageData?.process_heading
                  ? (
                    <>
                      <span>
                        {pageData.process_heading.replace(/\{gradient\}.*\{\/gradient\}/, '')}
                      </span>
                      <span className="gradient-text">
                        {pageData.process_heading.match(/\{gradient\}(.*?)\{\/gradient\}/)?.[1] || 'Work'}
                      </span>
                    </>
                  )
                  : (
                    <>
                      How We <span className="gradient-text">Work</span>
                    </>
                  )}
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                {pageData?.process_subheading ||
                  'Our proven methodology ensures successful project delivery from concept to completion.'}
              </p>
            </motion.div>

            {/* Process Steps */}
            <motion.div
              className="bg-surface-card rounded-3xl p-8 lg:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {processSteps.map((step, index) => (
                  <ProcessStep key={step.title} step={step} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        </BlurSection>

        {/* CTA Section */}
        <BlurSection>
        <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-surface-card rounded-3xl border border-border px-8 py-16 md:px-16 md:py-20">
                  <div className="flex flex-col items-center text-center">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                      {pageData?.cta_heading || (
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
                      {pageData?.cta_subtext || 'Book a Call Today and Start Automating'}
                    </p>

                    {/* CTA Button */}
                    <Link href={pageData?.cta_button_link || '/contact'}>
                      <Button
                        size="lg"
                        className={cn(
                          'bg-primary text-primary-foreground',
                          'font-semibold',
                          'px-10 py-5 text-lg rounded-xl',
                          'hover:opacity-90 hover:scale-105',
                          'transition-all duration-300'
                        )}
                      >
                        {pageData?.cta_button_text || 'Book a free call'}
                      </Button>
                    </Link>
                  </div>
                </div>
            </motion.div>
          </div>
        </section>
        </BlurSection>
      </main>
    </>
  )
}
