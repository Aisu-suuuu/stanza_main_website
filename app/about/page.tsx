'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cpu, Layers, Handshake, Target, Code2, Palette, Brain, UserCheck } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

// Values data
const values = [
  {
    icon: Cpu,
    title: 'Scalable AI-Driven Systems',
    description: 'We build intelligent, production-ready AI systems designed to scale with your business and deliver measurable impact.',
  },
  {
    icon: Layers,
    title: 'Integrated Technology & Talent',
    description: 'From product development to recruitment, we provide end-to-end solutions that combine technology and talent under one roof.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Strategic Partnerships',
    description: 'We invest in lasting relationships with our clients, working as an extension of their team to achieve shared goals.',
  },
  {
    icon: Target,
    title: 'Outcome-Focused Delivery',
    description: 'Every solution we build is tied to clear business outcomes — efficiency gains, cost savings, and accelerated growth.',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

          {/* Decorative orb */}
          <motion.div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #814AC8 0%, #DF7AFE 40%, #DF7AFE 70%, transparent 100%)',
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
                About Us
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                About{' '}
                <span className="gradient-text">Stanzasoft</span>
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                Engineering intelligent solutions for modern enterprises — delivering
                enterprise-grade digital solutions and AI-powered platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section - Gray Card Container */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <motion.div
              className="bg-surface-card rounded-3xl p-8 lg:p-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                      alt="Stanzasoft team collaborating"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-card/60 via-transparent to-transparent" />
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    About Us
                  </h2>
                  <p className="text-muted text-lg leading-relaxed">
                    Stanzasoft is a product-centric technology company delivering enterprise-grade
                    digital solutions and AI-powered platforms. We specialize in building scalable,
                    production-ready systems that enable organizations to operate more efficiently,
                    intelligently, and competitively.
                  </p>
                  <p className="text-muted text-lg leading-relaxed">
                    With expertise spanning product development, AI automation, and strategic HR
                    consulting, Stanzasoft partners with businesses to design, develop, and deploy
                    high-impact solutions that drive measurable outcomes.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section - Gray Card Styling */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why <span className="gradient-text">Stanzasoft</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                What sets us apart as a technology and talent partner.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {values.map((value) => (
                <motion.div key={value.title} variants={itemVariants}>
                  <div
                    className={cn(
                      'h-full p-6 text-center bg-surface-card rounded-3xl',
                      'border border-border/50',
                      'hover:border-primary/50 transition-all duration-300',
                      'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10'
                    )}
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                A multidisciplinary team of engineers, designers, AI specialists, and
                talent strategists building solutions that matter.
              </p>
            </motion.div>

            {/* Team Intro Card */}
            <motion.div
              className="bg-surface-card rounded-3xl p-8 lg:p-12 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Illustration - Team Collaboration Doodle */}
                <div className="relative flex items-center justify-center">
                  <svg viewBox="0 0 500 400" className="w-full max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background circle */}
                    <circle cx="250" cy="200" r="160" fill="url(#teamGrad)" opacity="0.08" />
                    {/* Desk */}
                    <rect x="100" y="260" width="300" height="8" rx="4" fill="currentColor" className="text-muted" opacity="0.2" />
                    <rect x="140" y="268" width="8" height="60" rx="2" fill="currentColor" className="text-muted" opacity="0.15" />
                    <rect x="352" y="268" width="8" height="60" rx="2" fill="currentColor" className="text-muted" opacity="0.15" />
                    {/* Person 1 - Left */}
                    <circle cx="170" cy="190" r="22" fill="#814AC8" opacity="0.2" />
                    <circle cx="170" cy="190" r="22" stroke="#814AC8" strokeWidth="2.5" strokeDasharray="4 3" />
                    <circle cx="170" cy="182" r="8" fill="#814AC8" opacity="0.6" />
                    <path d="M155 205 C155 195, 185 195, 185 205" stroke="#814AC8" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Laptop 1 */}
                    <rect x="148" y="238" width="44" height="22" rx="3" stroke="#814AC8" strokeWidth="2" fill="#814AC8" opacity="0.08" />
                    <rect x="140" y="258" width="60" height="4" rx="2" fill="#814AC8" opacity="0.15" />
                    {/* Person 2 - Center */}
                    <circle cx="250" cy="170" r="26" fill="#DF7AFE" opacity="0.2" />
                    <circle cx="250" cy="170" r="26" stroke="#DF7AFE" strokeWidth="2.5" strokeDasharray="4 3" />
                    <circle cx="250" cy="161" r="9" fill="#DF7AFE" opacity="0.6" />
                    <path d="M233 188 C233 177, 267 177, 267 188" stroke="#DF7AFE" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Laptop 2 */}
                    <rect x="226" y="230" width="48" height="24" rx="3" stroke="#DF7AFE" strokeWidth="2" fill="#DF7AFE" opacity="0.08" />
                    <rect x="218" y="252" width="64" height="4" rx="2" fill="#DF7AFE" opacity="0.15" />
                    {/* Person 3 - Right */}
                    <circle cx="330" cy="190" r="22" fill="#06B6D4" opacity="0.2" />
                    <circle cx="330" cy="190" r="22" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="4 3" />
                    <circle cx="330" cy="182" r="8" fill="#06B6D4" opacity="0.6" />
                    <path d="M315 205 C315 195, 345 195, 345 205" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Laptop 3 */}
                    <rect x="308" y="238" width="44" height="22" rx="3" stroke="#06B6D4" strokeWidth="2" fill="#06B6D4" opacity="0.08" />
                    <rect x="300" y="258" width="60" height="4" rx="2" fill="#06B6D4" opacity="0.15" />
                    {/* Connection lines (collaboration) */}
                    <path d="M195 185 L225 175" stroke="#814AC8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                    <path d="M275 175 L305 185" stroke="#DF7AFE" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                    {/* Idea bubbles */}
                    <circle cx="200" cy="148" r="12" stroke="#814AC8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
                    <text x="196" y="152" fontSize="12" fill="#814AC8" opacity="0.7">&#x2728;</text>
                    <circle cx="290" cy="130" r="14" stroke="#DF7AFE" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
                    <text x="284" y="135" fontSize="14" fill="#DF7AFE" opacity="0.7">&#x1F4A1;</text>
                    <circle cx="355" cy="150" r="11" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
                    <text x="350" y="154" fontSize="11" fill="#06B6D4" opacity="0.7">&#x2699;</text>
                    {/* Floating elements */}
                    <rect x="110" y="130" width="24" height="18" rx="3" stroke="#814AC8" strokeWidth="1.5" opacity="0.3" transform="rotate(-12 122 139)" />
                    <rect x="370" y="125" width="28" height="20" rx="3" stroke="#06B6D4" strokeWidth="1.5" opacity="0.3" transform="rotate(8 384 135)" />
                    <defs>
                      <radialGradient id="teamGrad" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" stopColor="#814AC8" />
                        <stop offset="100%" stopColor="#DF7AFE" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>

                {/* Content */}
                <div className="space-y-5">
                  <p className="text-foreground text-lg leading-relaxed">
                    At Stanzasoft, our strength lies in our people. We are a cross-functional
                    team of engineers, designers, AI specialists, and talent strategists — united
                    by a shared commitment to building enterprise-grade solutions that deliver
                    real business impact.
                  </p>
                  <p className="text-muted text-lg leading-relaxed">
                    We foster a culture of continuous learning, collaboration, and accountability.
                    Every team member is empowered to contribute ideas, take ownership, and make
                    a meaningful difference in the solutions we deliver.
                  </p>
                  <p className="text-muted text-lg leading-relaxed">
                    Whether working remotely or from our offices in San Francisco and Hyderabad,
                    our team stays connected through shared values: integrity, innovation, and an
                    unwavering commitment to client success.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Team Pillars Grid with Doodle Icons */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Engineering */}
              <motion.div variants={itemVariants}>
                <div
                  className={cn(
                    'h-full p-6 text-center bg-surface-card rounded-3xl',
                    'border border-border/50',
                    'hover:border-primary/50 transition-all duration-300',
                    'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10'
                  )}
                >
                  <div className="relative w-24 h-24 mx-auto mb-5">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="#814AC8" opacity="0.08" />
                      <circle cx="50" cy="50" r="40" stroke="#814AC8" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
                      <path d="M35 42 L45 55 L35 68" stroke="#814AC8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M50 68 H65" stroke="#814AC8" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="70" cy="30" r="4" fill="#DF7AFE" opacity="0.4" />
                      <circle cx="28" cy="35" r="3" fill="#814AC8" opacity="0.3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Engineering</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Full-stack engineers and architects building scalable, production-ready
                    systems from frontend to cloud infrastructure.
                  </p>
                </div>
              </motion.div>

              {/* Design */}
              <motion.div variants={itemVariants}>
                <div
                  className={cn(
                    'h-full p-6 text-center bg-surface-card rounded-3xl',
                    'border border-border/50',
                    'hover:border-primary/50 transition-all duration-300',
                    'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10'
                  )}
                >
                  <div className="relative w-24 h-24 mx-auto mb-5">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="#DF7AFE" opacity="0.08" />
                      <circle cx="50" cy="50" r="40" stroke="#DF7AFE" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
                      <rect x="30" y="30" width="40" height="40" rx="6" stroke="#DF7AFE" strokeWidth="2.5" />
                      <circle cx="42" cy="48" r="8" stroke="#DF7AFE" strokeWidth="2" strokeDasharray="3 2" />
                      <path d="M55 58 L62 65" stroke="#DF7AFE" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="72" cy="28" r="3" fill="#814AC8" opacity="0.3" />
                      <circle cx="25" cy="65" r="4" fill="#DF7AFE" opacity="0.3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Design</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    UI/UX designers and product thinkers crafting intuitive interfaces
                    and seamless user experiences.
                  </p>
                </div>
              </motion.div>

              {/* AI & Data */}
              <motion.div variants={itemVariants}>
                <div
                  className={cn(
                    'h-full p-6 text-center bg-surface-card rounded-3xl',
                    'border border-border/50',
                    'hover:border-primary/50 transition-all duration-300',
                    'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10'
                  )}
                >
                  <div className="relative w-24 h-24 mx-auto mb-5">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="#814AC8" opacity="0.08" />
                      <circle cx="50" cy="50" r="40" stroke="#814AC8" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
                      {/* Brain shape */}
                      <path d="M42 60 C30 60, 28 45, 38 40 C35 32, 45 26, 50 32 C55 26, 65 32, 62 40 C72 45, 70 60, 58 60" stroke="#814AC8" strokeWidth="2.5" strokeLinecap="round" fill="#814AC8" opacity="0.06" />
                      <path d="M50 38 V58" stroke="#814AC8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
                      <circle cx="42" cy="48" r="2.5" fill="#DF7AFE" opacity="0.6" />
                      <circle cx="58" cy="48" r="2.5" fill="#DF7AFE" opacity="0.6" />
                      <circle cx="50" cy="42" r="2.5" fill="#814AC8" opacity="0.6" />
                      <circle cx="30" cy="30" r="3" fill="#DF7AFE" opacity="0.3" />
                      <circle cx="74" cy="65" r="3.5" fill="#814AC8" opacity="0.25" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">AI & Data</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    AI/ML engineers and data scientists developing intelligent automation
                    and agentic AI platforms.
                  </p>
                </div>
              </motion.div>

              {/* Talent & HR */}
              <motion.div variants={itemVariants}>
                <div
                  className={cn(
                    'h-full p-6 text-center bg-surface-card rounded-3xl',
                    'border border-border/50',
                    'hover:border-primary/50 transition-all duration-300',
                    'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10'
                  )}
                >
                  <div className="relative w-24 h-24 mx-auto mb-5">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="#06B6D4" opacity="0.08" />
                      <circle cx="50" cy="50" r="40" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
                      {/* Person with checkmark */}
                      <circle cx="45" cy="40" r="10" stroke="#06B6D4" strokeWidth="2.5" />
                      <circle cx="45" cy="37" r="4" fill="#06B6D4" opacity="0.5" />
                      <path d="M30 62 C30 52, 60 52, 60 62" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Checkmark badge */}
                      <circle cx="64" cy="38" r="10" fill="#06B6D4" opacity="0.15" stroke="#06B6D4" strokeWidth="1.5" />
                      <path d="M59 38 L63 42 L70 34" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="28" cy="30" r="3" fill="#06B6D4" opacity="0.3" />
                      <circle cx="72" cy="62" r="3.5" fill="#06B6D4" opacity="0.25" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Talent & HR</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Recruitment strategists and HR consultants connecting organizations
                    with high-quality talent.
                  </p>
                </div>
              </motion.div>
            </motion.div>
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
                      Let AI do the Work so you can{' '}
                      <span className="bg-gradient-to-r from-[#814AC8] via-[#DF7AFE] to-[#814AC8] bg-clip-text text-transparent">
                        Scale Faster
                      </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-muted text-lg md:text-xl mb-10 max-w-xl">
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
