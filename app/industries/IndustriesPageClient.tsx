'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  GraduationCap,
  Landmark,
  ShoppingCart,
  Stethoscope,
  Building2,
  Cpu,
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

interface IndustriesPageClientProps {
  pageData?: {
    hero_badge?: string
    hero_heading?: string
    hero_subheading?: string
    approach_heading?: string
    approach_subheading?: string
    trust_heading?: string
    trust_paragraph?: string
    cta_heading?: string
    cta_subtext?: string
    cta_button_text?: string
    cta_button_link?: string
  }
}

// Industries data
const industries = [
  {
    icon: GraduationCap,
    title: 'Education & EdTech',
    description:
      'Building intelligent learning platforms and AI-powered test preparation tools that personalize education and improve student outcomes at scale.',
    features: ['Adaptive Learning', 'AI Test Preparation', 'Performance Analytics', 'LMS Integration'],
    color: 'from-[#814AC8]/20 to-[#DF7AFE]/20',
    iconColor: 'text-[#DF7AFE]',
  },
  {
    icon: Cpu,
    title: 'Technology & SaaS',
    description:
      'Enabling technology companies with scalable product development, cloud-native architecture, and AI-driven automation platforms.',
    features: ['Product Engineering', 'Cloud Architecture', 'AI/ML Platforms', 'SaaS Development'],
    color: 'from-cyan-500/20 to-teal-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description:
      'Developing digital health solutions that streamline patient engagement, automate administrative workflows, and support data-driven clinical decisions.',
    features: ['Patient Portals', 'Workflow Automation', 'Health Data Analytics', 'Compliance Solutions'],
    color: 'from-red-500/20 to-pink-500/20',
    iconColor: 'text-red-400',
  },
  {
    icon: Landmark,
    title: 'Finance & Banking',
    description:
      'Delivering secure, intelligent platforms for financial services — from automated compliance tools to customer-facing digital banking applications.',
    features: ['Process Automation', 'Compliance Tools', 'Digital Banking', 'Data-Driven Insights'],
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-Commerce',
    description:
      'Building modern commerce experiences with AI-powered recommendations, intelligent inventory systems, and seamless omnichannel platforms.',
    features: ['E-commerce Platforms', 'AI Recommendations', 'Inventory Automation', 'Customer Analytics'],
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Building2,
    title: 'Enterprise & Professional Services',
    description:
      'Supporting enterprises and consulting firms with custom internal tools, workflow automation, and strategic talent acquisition solutions.',
    features: ['Custom Platforms', 'HR & Recruitment', 'Workflow Automation', 'Internal Tools'],
    color: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-orange-400',
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export default function IndustriesPageClient({ pageData }: IndustriesPageClientProps) {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

          {/* Decorative orbs */}
          <motion.div
            className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #814AC8 0%, #DF7AFE 40%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 70% 70%, #06B6D4 0%, #DF7AFE 50%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            animate={{
              scale: [1, 0.9, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="container-custom relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {pageData?.hero_badge || 'Industries'}
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {pageData?.hero_heading
                  ? (
                    <>
                      <span>
                        {pageData.hero_heading.replace(/\{gradient\}.*\{\/gradient\}/, '')}
                      </span>
                      <span className="gradient-text">
                        {pageData.hero_heading.match(/\{gradient\}(.*?)\{\/gradient\}/)?.[1] || 'We Serve'}
                      </span>
                    </>
                  )
                  : (
                    <>
                      Industries{' '}
                      <span className="gradient-text">We Serve</span>
                    </>
                  )}
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                {pageData?.hero_subheading ||
                  'We bring product-centric thinking and AI-driven solutions to organizations across high-impact sectors — helping them innovate, automate, and scale.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid Section */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {industries.map((industry, index) => (
                <motion.div key={industry.title} variants={itemVariants}>
                  <Card
                    className={cn(
                      'h-full p-8 group cursor-pointer',
                      'bg-surface-card rounded-3xl border-border/50',
                      'hover:border-primary/50 transition-all duration-500',
                      'hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10'
                    )}
                  >
                    {/* Icon */}
                    <div
                      className={cn(
                        'w-16 h-16 mb-6 rounded-2xl flex items-center justify-center',
                        'bg-gradient-to-br transition-transform duration-300',
                        'group-hover:scale-110',
                        industry.color
                      )}
                    >
                      <industry.icon className={cn('w-8 h-8', industry.iconColor)} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {industry.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn more link */}
                    <div className="flex items-center gap-2 text-primary font-medium group/link">
                      <span className="text-sm">Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 md:py-28 bg-card/50">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {pageData?.approach_heading
                  ? (
                    <>
                      <span>
                        {pageData.approach_heading.replace(/\{gradient\}.*\{\/gradient\}/, '')}
                      </span>
                      <span className="gradient-text">
                        {pageData.approach_heading.match(/\{gradient\}(.*?)\{\/gradient\}/)?.[1] || 'Approach'}
                      </span>
                    </>
                  )
                  : (
                    <>
                      Our Industry <span className="gradient-text">Approach</span>
                    </>
                  )}
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                {pageData?.approach_subheading ||
                  'We go beyond generic solutions \u2014 understanding each industry\u0027s unique challenges to deliver tailored, high-impact results.'}
              </p>
            </motion.div>

            <motion.div
              className="bg-surface-card rounded-3xl border border-border/50 p-8 lg:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: 'Domain Discovery', description: 'Deep-dive into industry-specific pain points and workflows before building.' },
                  { title: 'AI-First Thinking', description: 'Every solution is designed with intelligent automation at its core.' },
                  { title: 'Scalable Architecture', description: 'Built to grow with your business — from startup to enterprise scale.' },
                  { title: 'Outcome-Driven', description: 'We measure success by the real business impact our solutions deliver.' },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </div>
                    <div className="text-muted text-sm leading-relaxed">{item.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <div className="bg-surface-card rounded-3xl border border-border/50 p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  {pageData?.trust_heading
                    ? (
                      <>
                        <span>
                          {pageData.trust_heading.replace(/\{gradient\}.*\{\/gradient\}/, '')}
                        </span>
                        <span className="gradient-text">
                          {pageData.trust_heading.match(/\{gradient\}(.*?)\{\/gradient\}/)?.[1] || 'Trust Us'}
                        </span>
                      </>
                    )
                    : (
                      <>
                        Why Organizations <span className="gradient-text">Trust Us</span>
                      </>
                    )}
                </h2>
                <p className="text-muted text-lg leading-relaxed">
                  {pageData?.trust_paragraph ||
                    'Our product-centric approach and deep domain understanding allow us to build solutions that create real, measurable business impact.'}
                </p>
                <div className="space-y-4">
                  {[
                    'Scalable AI-driven systems built for enterprise needs',
                    'Integrated technology and talent solutions',
                    'Long-term strategic partnerships, not just projects',
                    'Outcome-focused delivery with measurable results',
                    'Cross-functional expertise in engineering, design, and AI',
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: GraduationCap, label: 'Education', color: 'from-[#814AC8]/20 to-[#DF7AFE]/20' },
                    { icon: Cpu, label: 'Technology', color: 'from-cyan-500/20 to-teal-500/20' },
                    { icon: Stethoscope, label: 'Healthcare', color: 'from-red-500/20 to-pink-500/20' },
                    { icon: Building2, label: 'Enterprise', color: 'from-orange-500/20 to-amber-500/20' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className={cn(
                        'p-6 rounded-2xl bg-surface-card border border-border/50',
                        'hover:border-primary/50 transition-all duration-300'
                      )}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className={cn('w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br', item.color)}>
                        <item.icon className="w-6 h-6 text-foreground" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10" />
              </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
          <div className="container-custom relative z-10">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
      <Footer />
    </>
  )
}
