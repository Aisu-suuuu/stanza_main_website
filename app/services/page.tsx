'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Brain,
  Cloud,
  Database,
  FileSignature,
  Server,
  Shield,
  Users,
  Workflow,
  ArrowRight,
  MessageSquare,
  Lightbulb,
  Rocket,
  CheckCircle,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

// Services data
const services = [
  {
    icon: Brain,
    title: 'AI/ML',
    description:
      'Harness the power of Artificial Intelligence and Machine Learning to automate processes, gain predictive insights, and drive innovation across your organization.',
    href: '/services/ai-ml',
  },
  {
    icon: Cloud,
    title: 'Salesforce',
    description:
      'End-to-end Salesforce CRM implementation, customization, and optimization to transform your customer relationships and sales processes.',
    href: '/services/salesforce',
  },
  {
    icon: FileSignature,
    title: 'DocuSign CLM+',
    description:
      'Streamline contract lifecycle management with DocuSign CLM+ integration, automating workflows from creation to execution and renewal.',
    href: '/services/docusign-clm',
  },
  {
    icon: Server,
    title: 'Oracle Services',
    description:
      'Comprehensive Oracle ERP solutions for enterprise resource planning, helping you optimize operations and make data-driven decisions.',
    href: '/services/oracle',
  },
  {
    icon: Shield,
    title: 'Cloud Security & Services',
    description:
      'Secure cloud infrastructure across AWS, Azure, and GCP with robust security frameworks, compliance management, and 24/7 monitoring.',
    href: '/services/cloud',
  },
  {
    icon: Database,
    title: 'Data Integration',
    description:
      'Build robust ETL pipelines and data integration solutions to unify your data sources and enable seamless information flow across systems.',
    href: '/services/data-integration',
  },
  {
    icon: Users,
    title: 'Workday ERP',
    description:
      'Transform your HR and finance operations with Workday ERP implementation, delivering unified solutions for workforce and financial management.',
    href: '/services/workday',
  },
  {
    icon: Workflow,
    title: 'SAP',
    description:
      'Enterprise-grade SAP solutions to streamline business processes, enhance productivity, and drive digital transformation at scale.',
    href: '/services/sap',
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
          'bg-[#1A1A1A] rounded-3xl border border-border/50',
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
        <p className="text-muted leading-relaxed mb-6">{service.description}</p>

        {/* Learn More Link */}
        <Link
          href={service.href}
          className={cn(
            'inline-flex items-center gap-2',
            'text-primary font-medium',
            'hover:gap-3 transition-all duration-300'
          )}
        >
          Learn More
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
              'bg-[#1A1A1A] border-2 border-primary',
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

export default function ServicesPage() {
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
                What We Offer
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
                <span className="gradient-text">Services</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                We deliver comprehensive technology solutions tailored to your
                business needs. From AI-powered automation to enterprise
                integrations, we help you thrive in the digital age.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid Section - Gray Card Containers */}
        <section className="py-16 md:py-24 bg-[#0D0D0D]">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
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
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                How We <span className="gradient-text">Work</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Our proven methodology ensures successful project delivery from
                concept to completion.
              </p>
            </motion.div>

            {/* Process Steps - Wrapped in Gray Card */}
            <motion.div
              className="bg-[#1A1A1A] rounded-3xl p-8 lg:p-12"
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
        <section
          className={cn(
            'relative py-24 md:py-32 overflow-hidden',
            'bg-gradient-to-br from-[#8B5CF6] via-[#A855F7] to-[#7C3AED]'
          )}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={cn(
                'absolute -top-1/2 -right-1/4 w-[800px] h-[800px]',
                'bg-white/10 rounded-full blur-3xl'
              )}
            />
            <div
              className={cn(
                'absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px]',
                'bg-white/5 rounded-full blur-3xl'
              )}
            />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              className="flex flex-col items-center text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              {/* Headline */}
              <motion.h2
                className={cn(
                  'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold',
                  'text-white leading-tight mb-6'
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Ready to Transform Your Business?
              </motion.h2>

              {/* Subtext */}
              <motion.p
                className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                Let's discuss how our services can help you achieve your goals.
                Schedule a free consultation with our experts today.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  size="lg"
                  className={cn(
                    'bg-white text-[#8B5CF6] hover:bg-white/90',
                    'shadow-2xl shadow-black/20',
                    'px-8 py-4 text-lg font-semibold',
                    'hover:scale-105 transition-transform duration-300'
                  )}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    'border-white/30 text-white hover:bg-white/10',
                    'px-8 py-4 text-lg font-semibold'
                  )}
                >
                  Contact Sales
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.p
                className="mt-8 text-white/60 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                No commitment required. Let's explore what's possible together.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
