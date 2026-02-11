'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cpu, Layers, Handshake, Target } from 'lucide-react'
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
            <motion.div
              className="bg-surface-card rounded-3xl p-8 lg:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Team
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  At Stanzasoft, our strength lies in our people. We are a team of engineers,
                  designers, strategists, and problem-solvers united by a shared commitment to
                  building enterprise-grade solutions. Our team brings together deep expertise
                  across product development, AI/ML, cloud architecture, and digital transformation.
                </p>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  We foster a culture of continuous learning, collaboration, and accountability.
                  Every team member is empowered to contribute ideas, take ownership, and make
                  a meaningful impact on the solutions we deliver for our clients.
                </p>
                <p className="text-muted text-lg leading-relaxed">
                  Whether working remotely or from our offices in San Francisco and Hyderabad,
                  our team stays connected through shared values: integrity, innovation, and an
                  unwavering commitment to client success.
                </p>
              </div>
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
