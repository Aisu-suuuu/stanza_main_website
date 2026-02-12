'use client'

import { motion } from 'framer-motion'
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
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

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

// Solution Card Component
function SolutionCard({
  solution,
}: {
  solution: (typeof solutions)[0]
}) {
  const Icon = solution.icon

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
          {solution.title}
        </h3>

        {/* Description */}
        <p className="text-muted leading-relaxed mb-6">{solution.description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {solution.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <Link
          href={solution.href}
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

        {/* Solutions Grid Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            {/* Section Header */}
            <motion.div
              className="max-w-2xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {pageData?.grid_heading ? (
                  <span className="gradient-text">{pageData.grid_heading}</span>
                ) : (
                  <>Built for <span className="gradient-text">Real Impact</span></>
                )}
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                {pageData?.grid_subheading || 'Every solution we build is designed to solve real business problems — from intelligent automation to scalable product platforms.'}
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {solutions.map((solution) => (
                <SolutionCard key={solution.title} solution={solution} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Stanzasoft Section */}
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
                      'text-sm font-medium text-primary',
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

                {/* Right Content - Value Props */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Scalable AI-Driven Systems', description: 'Intelligent platforms built for growth and automation.' },
                    { title: 'Integrated Tech & Talent', description: 'Technology solutions paired with strategic HR consulting.' },
                    { title: 'Long-Term Partnerships', description: 'We invest in relationships, not just deliverables.' },
                    { title: 'Outcome-Focused Delivery', description: 'Every engagement is measured by real business results.' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      className={cn(
                        'p-6 rounded-2xl',
                        'bg-background border border-border/50'
                      )}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </div>
                      <div className="text-muted text-sm">{item.description}</div>
                    </motion.div>
                  ))}
                </div>
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
                      {pageData?.cta_heading ? (
                        <span className="bg-gradient-to-r from-[#814AC8] via-[#DF7AFE] to-[#814AC8] bg-clip-text text-transparent">
                          {pageData.cta_heading}
                        </span>
                      ) : (
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
      <Footer />
    </>
  )
}
