'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  Layers,
  Bot,
  MessageSquareText,
  UserCheck,
  Rocket,
  Settings2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/Button'

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

// Solutions data
const solutions = [
  {
    icon: Layers,
    title: 'End-to-End Product Development',
    description:
      'We transform concepts into robust, scalable digital products through a structured development lifecycle — from ideation and UX architecture to full-stack engineering and deployment.',
    features: ['Product Strategy & Roadmapping', 'UI/UX Design & Architecture', 'Full-Stack Engineering', 'Quality Assurance & Deployment'],
    href: '/contact',
  },
  {
    icon: Bot,
    title: 'Agentic AI Solutions',
    description:
      'We develop intelligent AI platforms designed to automate workflows, optimize business processes, and enhance operational efficiency across your organization.',
    features: ['Workflow Automation', 'Decision-Making Acceleration', 'Operational Streamlining', 'Scalable AI Infrastructure'],
    href: '/contact',
  },
  {
    icon: MessageSquareText,
    title: 'AI-Driven Chatbots',
    description:
      'We design advanced conversational AI systems that enhance customer engagement and automate support processes while maintaining high-quality, natural interactions.',
    features: ['Natural Language Processing', 'Multi-Channel Deployment', 'Contextual Understanding', 'Analytics & Insights'],
    href: '/contact',
  },
  {
    icon: UserCheck,
    title: 'HR Consulting & Recruitment',
    description:
      'Strategic HR and recruitment solutions enabling organizations to acquire high-quality talent aligned with their operational and growth objectives.',
    features: ['Talent Acquisition', 'Recruitment Strategy', 'Workforce Planning', 'Onboarding Solutions'],
    href: '/contact',
  },
  {
    icon: Rocket,
    title: 'PrepMonkey — AI Test Prep',
    description:
      'Our flagship AI-powered test preparation platform that delivers adaptive learning paths, real-time performance tracking, and intelligent practice for standardized exams.',
    features: ['Adaptive Question Engine', 'Performance Analytics', 'Personalized Study Plans', 'Real-Time Feedback'],
    href: '/contact',
  },
  {
    icon: Settings2,
    title: 'Custom Enterprise Platforms',
    description:
      'Tailored enterprise software solutions built to address your unique operational challenges — from internal tools and dashboards to customer-facing applications.',
    features: ['Custom Dashboards', 'API Integrations', 'Cloud-Native Architecture', 'Scalable Infrastructure'],
    href: '/contact',
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

// Accordion Solution Card Row
function SolutionAccordionRow({
  items,
  activeLocal,
  onSelect,
  isInView,
  displayOffset,
}: {
  items: typeof solutions
  activeLocal: number
  onSelect: (localIndex: number) => void
  isInView: boolean
  displayOffset: number
}) {
  return (
    <div className="flex gap-2 lg:gap-3" style={{ height: '460px' }}>
      {items.map((solution, index) => {
        const displayNumber = displayOffset + index + 1
        const isActive = activeLocal === index
        const Icon = solution.icon

        return (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              opacity: { duration: 0.45, delay: 0.25 + index * 0.08 },
              y: { duration: 0.45, delay: 0.25 + index * 0.08 },
            }}
            onClick={() => onSelect(index)}
            className={cn(
              'rounded-[28px] lg:rounded-[32px] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col overflow-hidden h-full',
              isActive
                ? 'flex-1 bg-surface-card border border-border/50 p-7 lg:p-10'
                : 'w-[60px] lg:w-[85px] flex-shrink-0 bg-primary/15 dark:bg-primary/20 p-4 lg:p-6 hover:bg-primary/25'
            )}
          >
            <AnimatePresence mode="wait">
              {isActive ? (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex gap-5 lg:gap-8 h-full overflow-hidden"
                >
                  {/* Icon on the left */}
                  <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-primary/20 flex-shrink-0">
                    <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-foreground" />
                  </div>

                  {/* All content to the right */}
                  <div className="flex flex-col flex-1 pt-1">
                    {/* Title */}
                    <h3 className="text-[18px] lg:text-[22px] font-bold text-foreground leading-tight">
                      {solution.title}
                    </h3>

                    {/* Features */}
                    <ul className="mt-5 space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                          <CheckCircle2 className="w-4 h-4 text-[#A78BFA] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Bottom: description + link */}
                    <div className="mt-auto">
                      <p className="text-[14px] md:text-[15px] text-muted leading-[1.65] max-w-[560px] mb-5">
                        {solution.description}
                      </p>
                      <Link
                        href={solution.href}
                        className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="collapsed"
                  initial={{ opacity: 0, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="flex flex-col items-center justify-center h-full"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/20">
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#A78BFA]" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}

// Mobile Solution Card
function MobileSolutionCard({
  solution,
  index,
  isActive,
  onToggle,
}: {
  solution: (typeof solutions)[0]
  index: number
  isActive: boolean
  onToggle: () => void
}) {
  const Icon = solution.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onToggle}
      className={cn(
        'rounded-2xl cursor-pointer transition-all duration-500 ease-out overflow-hidden',
        isActive
          ? 'bg-surface-card border border-border/50 p-6'
          : 'bg-primary/10 p-5'
      )}
    >
      <AnimatePresence mode="wait">
        {isActive ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 flex-shrink-0">
                <Icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{solution.title}</h3>
            </div>
            <ul className="space-y-2 mb-4">
              {solution.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                  <CheckCircle2 className="w-4 h-4 text-[#A78BFA] flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted leading-relaxed mb-4">{solution.description}</p>
            <Link
              href={solution.href}
              className="inline-flex items-center gap-2 text-foreground font-medium text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-4"
          >
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/20 flex-shrink-0">
              <Icon className="w-5 h-5 text-[#A78BFA]" />
            </div>
            <span className="text-foreground font-medium">{solution.title}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Auto-cycling value props carousel
const whyItems = [
  { title: 'Scalable AI-Driven Systems', description: 'We architect intelligent platforms that grow with your business — from MVP to enterprise scale. Our AI-driven systems are built for high availability, real-time processing, and seamless automation across your entire tech stack.' },
  { title: 'Integrated Tech & Talent', description: 'Technology alone isn\'t enough. We pair cutting-edge engineering with strategic HR consulting to ensure your teams have the right skills, structure, and support to drive innovation and deliver results consistently.' },
  { title: 'Long-Term Partnerships', description: 'We don\'t just ship and disappear. Our engagement model is built on lasting relationships — continuous support, iterative improvements, and a shared commitment to your long-term success beyond the initial launch.' },
  { title: 'Outcome-Focused Delivery', description: 'Every project is measured by real business impact, not just lines of code. We define success metrics upfront — revenue growth, cost reduction, efficiency gains — and align our delivery to hit those targets.' },
]

function WhyStanzasoftCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % whyItems.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative flex flex-col items-center gap-6">
      {/* Card */}
      <div className="relative w-full max-w-md h-[240px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 p-8 rounded-2xl bg-foreground/[0.07] flex flex-col justify-center"
          >
            <div className="text-xl font-semibold text-foreground mb-3">
              {whyItems[active].title}
            </div>
            <div className="text-muted text-[15px] leading-relaxed">
              {whyItems[active].description}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2">
        {whyItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              i === active ? 'w-6 bg-primary' : 'bg-foreground/20 hover:bg-foreground/40'
            )}
          />
        ))}
      </div>
    </div>
  )
}

interface SolutionsPageClientProps {
  pageData?: {
    hero_badge?: string
    hero_heading?: string
    hero_subheading?: string
    grid_heading?: string
    grid_subheading?: string
    why_badge?: string
    why_heading?: string
    why_paragraph?: string
    cta_heading?: string
    cta_subtext?: string
    cta_button_text?: string
    cta_button_link?: string
  }
}

function SolutionsAccordionSection({ pageData }: SolutionsPageClientProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-foreground tracking-[-0.02em] mb-3">
            {pageData?.grid_heading ? (
              <span className="gradient-text">{pageData.grid_heading}</span>
            ) : (
              <>Built for <span className="gradient-text">Real Impact</span></>
            )}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-muted text-[14px] md:text-[16px] max-w-[520px] mx-auto leading-[1.7]"
          >
            {pageData?.grid_subheading || 'Every solution we build is designed to solve real business problems — from intelligent automation to scalable product platforms.'}
          </motion.p>
        </motion.div>

        {/* Desktop Accordion — Single row of 6 */}
        <div className="hidden md:block">
          <SolutionAccordionRow
            items={solutions}
            activeLocal={active}
            onSelect={setActive}
            isInView={isInView}
            displayOffset={0}
          />
        </div>

        {/* Mobile — Stacked cards */}
        <div className="flex flex-col gap-3 md:hidden">
          {solutions.map((solution, index) => (
            <MobileSolutionCard
              key={solution.title}
              solution={solution}
              index={index}
              isActive={active === index}
              onToggle={() => setActive(active === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function SolutionsPageClient({ pageData }: SolutionsPageClientProps) {
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
                {pageData?.hero_badge || 'What We Deliver'}
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
                <span className="text-foreground">Our </span>
                <span className="gradient-text">{pageData?.hero_heading || 'Solutions'}</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {pageData?.hero_subheading || 'From product development and AI automation to talent acquisition — we deliver high-impact solutions that drive measurable outcomes for modern enterprises.'}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Accordion Section */}
        <BlurSection>
          <SolutionsAccordionSection pageData={pageData} />
        </BlurSection>

        {/* Why Stanzasoft Section */}
        <BlurSection>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="bg-surface-card rounded-3xl p-8 lg:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <span
                    className={cn(
                      'inline-block px-4 py-2 mb-6',
                      'text-sm font-medium text-foreground',
                      'bg-primary/10 rounded-full border border-primary/20'
                    )}
                  >
                    {pageData?.why_badge || 'Why Stanzasoft'}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {pageData?.why_heading ? (
                      <span className="gradient-text">{pageData.why_heading}</span>
                    ) : (
                      <>Your Partner in{' '}<span className="gradient-text">Digital Excellence</span></>
                    )}
                  </h2>
                  <p className="text-muted text-lg leading-relaxed mb-8">
                    {pageData?.why_paragraph || 'We combine deep technical expertise with a product-centric mindset to deliver solutions that create lasting business value. Our approach is built on transparency, partnership, and measurable outcomes.'}
                  </p>
                  <Link href="/contact">
                    <Button size="lg">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                {/* Right Content - Auto-cycling single card */}
                <WhyStanzasoftCarousel />
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
                      {pageData?.cta_heading ? (
                        <span className="text-foreground">
                          {pageData.cta_heading}
                        </span>
                      ) : (
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
