'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Layers,
  Bot,
  MessageSquareText,
  Users,
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

// Core Capabilities data
const services = [
  {
    icon: Layers,
    title: 'End-to-End Product Development',
    description:
      'We transform concepts into robust, scalable digital products through a structured and strategic development lifecycle — from ideation and UX architecture to full-stack engineering and deployment.',
    href: '/contact',
    bulletPoints: [
      'Product Strategy & Roadmapping',
      'UI/UX Design & System Architecture',
      'Application Development',
      'Quality Assurance & Optimization',
      'Production Deployment & Scaling',
    ],
  },
  {
    icon: Bot,
    title: 'Agentic AI Solutions',
    description:
      'We develop intelligent AI platforms designed to automate workflows, optimize business processes, and enhance operational efficiency.',
    href: '/contact',
    bulletPoints: [
      'Reduce manual dependency',
      'Improve decision-making speed',
      'Streamline internal operations',
      'Enhance productivity at scale',
    ],
  },
  {
    icon: MessageSquareText,
    title: 'AI-Driven Chatbots',
    description:
      'We design advanced conversational AI systems that enhance customer engagement and automate support processes while maintaining high-quality interactions.',
    href: '/contact',
    bulletPoints: [],
  },
  {
    icon: Users,
    title: 'HR Consulting & Recruitment',
    description:
      'Stanzasoft provides strategic HR and recruitment solutions, enabling organizations to acquire high-quality talent aligned with their operational and growth objectives.',
    href: '/contact',
    bulletPoints: [
      'Talent Acquisition',
      'Recruitment Strategy',
    ],
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

// Service Card Component
function ServiceCard({
  service,
}: {
  service: (typeof services)[0]
}) {
  const Icon = service.icon

  return (
    <motion.div variants={itemVariants}>
      <div
        className={cn(
          'group relative h-full p-6 lg:p-8',
          'bg-surface-card rounded-3xl border border-border/50',
          'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10',
          'transition-all duration-300 ease-out',
          'hover:-translate-y-1'
        )}
      >
        {/* Icon */}
        <div
          className={cn(
            'inline-flex items-center justify-center',
            'w-14 h-14 rounded-xl mb-6',
            'bg-gradient-to-br from-primary/20 to-secondary/20',
            'group-hover:from-primary/30 group-hover:to-secondary/30',
            'transition-colors duration-300'
          )}
        >
          <Icon className="w-7 h-7 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-muted leading-relaxed mb-4">{service.description}</p>

        {/* Bullet Points */}
        {service.bulletPoints && service.bulletPoints.length > 0 && (
          <ul className="space-y-2 mb-6">
            {service.bulletPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                <span className="text-primary mt-1 flex-shrink-0">&#9670;</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Learn More Link */}
        <Link
          href={service.href}
          className={cn(
            'inline-flex items-center gap-2',
            'text-primary font-medium',
            'hover:gap-3 transition-all duration-300'
          )}
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
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
            'bg-gradient-to-r from-primary/50 to-secondary/50'
          )}
        />
      )}

      <div className="flex flex-col items-center text-center">
        {/* Number badge */}
        <div className="relative mb-6">
          <div
            className={cn(
              'w-20 h-20 rounded-2xl',
              'bg-gradient-to-br from-primary to-secondary',
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
              'text-sm font-bold text-primary'
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
                'bg-secondary/20 rounded-full blur-[120px]'
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
                  'text-sm font-medium text-primary',
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
                    : 'What We '}
                </span>
                <span className="gradient-text">
                  {pageData?.hero_heading
                    ? (pageData.hero_heading.match(/\{gradient\}(.*?)\{\/gradient\}/)?.[1] || 'Build')
                    : 'Build'}
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

        {/* Services Grid Section - Gray Card Containers */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section - Gray Card Container */}
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
                  'text-sm font-medium text-primary',
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

            {/* Process Steps - Wrapped in Gray Card */}
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

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
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
                      {pageData?.cta_heading || (
                        <>
                          Let AI do the Work so you can{' '}
                          <span className="bg-gradient-to-r from-[#814AC8] via-[#DF7AFE] to-[#814AC8] bg-clip-text text-transparent">
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
                          'bg-gradient-to-r from-[#814AC8] via-[#DF7AFE] to-[#814AC8]',
                          'text-white font-semibold',
                          'px-10 py-5 text-lg rounded-xl',
                          'shadow-2xl shadow-[#814AC8]/30',
                          'hover:shadow-[#814AC8]/50 hover:scale-105',
                          'transition-all duration-300'
                        )}
                      >
                        {pageData?.cta_button_text || 'Book a free call'}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
