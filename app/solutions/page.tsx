'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Building2,
  Cog,
  LineChart,
  ShieldCheck,
  Zap,
  Globe,
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
    icon: Building2,
    title: 'Enterprise Resource Planning',
    description:
      'Unified ERP solutions that streamline your operations, finance, HR, and supply chain into one cohesive platform for maximum efficiency.',
    features: ['Financial Management', 'Supply Chain Optimization', 'HR Integration', 'Real-time Analytics'],
    href: '/contact',
  },
  {
    icon: LineChart,
    title: 'Business Intelligence & Analytics',
    description:
      'Transform raw data into actionable insights with our advanced BI solutions, enabling data-driven decision making across your organization.',
    features: ['Custom Dashboards', 'Predictive Analytics', 'Data Visualization', 'Automated Reporting'],
    href: '/contact',
  },
  {
    icon: Cog,
    title: 'Process Automation',
    description:
      'Automate repetitive tasks and complex workflows to reduce costs, minimize errors, and free your team to focus on strategic initiatives.',
    features: ['Workflow Automation', 'RPA Integration', 'Document Processing', 'Task Orchestration'],
    href: '/contact',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Security',
    description:
      'Comprehensive security solutions to protect your data, ensure regulatory compliance, and maintain customer trust in an evolving threat landscape.',
    features: ['Risk Assessment', 'Compliance Management', 'Security Audits', 'Data Protection'],
    href: '/contact',
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description:
      'End-to-end digital transformation services to modernize legacy systems, adopt cloud technologies, and build agile, future-ready organizations.',
    features: ['Legacy Modernization', 'Cloud Migration', 'API Development', 'Change Management'],
    href: '/contact',
  },
  {
    icon: Globe,
    title: 'Integration Services',
    description:
      'Seamlessly connect your applications, data sources, and business processes with our enterprise integration solutions for unified operations.',
    features: ['API Integration', 'Data Synchronization', 'System Connectivity', 'Middleware Solutions'],
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

export default function SolutionsPage() {
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
                Enterprise Solutions
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
                <span className="gradient-text">Solutions</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Comprehensive enterprise solutions designed to solve complex business
                challenges. We help organizations streamline operations, drive innovation,
                and achieve sustainable growth.
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
                Tailored for <span className="gradient-text">Enterprise Success</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                From ERP implementations to digital transformation, our solutions
                address the unique challenges of modern enterprises.
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

        {/* Why Choose Us Section */}
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
                    Why Stanzasoft
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Your Partner in{' '}
                    <span className="gradient-text">Digital Excellence</span>
                  </h2>
                  <p className="text-muted text-lg leading-relaxed mb-8">
                    With deep expertise across enterprise platforms and a commitment to
                    delivering measurable results, we help businesses navigate their
                    digital journey with confidence.
                  </p>
                  <Link href="/contact">
                    <Button size="lg">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                {/* Right Content - Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '500+', label: 'Enterprise Clients' },
                    { number: '98%', label: 'Client Satisfaction' },
                    { number: '15+', label: 'Years Experience' },
                    { number: '24/7', label: 'Support Available' },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      className={cn(
                        'text-center p-6 rounded-2xl',
                        'bg-background border border-border/50'
                      )}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                        {stat.number}
                      </div>
                      <div className="text-muted text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0a0a0a]">
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
                <div className="relative bg-[#1a1a1a] rounded-3xl px-8 py-16 md:px-16 md:py-20">
                  <div className="flex flex-col items-center text-center">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                      Let AI do the Work so you can{' '}
                      <span className="bg-gradient-to-r from-[#814AC8] via-[#DF7AFE] to-[#814AC8] bg-clip-text text-transparent">
                        Scale Faster
                      </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-white/60 text-lg md:text-xl mb-10 max-w-xl">
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
