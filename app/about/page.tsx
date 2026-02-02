'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb, Shield, Users, Target } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

// Team members data
const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Michael Torres',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'David Kim',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP of Operations',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'James Wilson',
    role: 'Lead Architect',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
]

// Values data
const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex problems and drive progress.',
  },
  {
    icon: Shield,
    title: 'Quality',
    description: 'Excellence is our standard. We deliver robust, scalable solutions that exceed expectations every time.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We build lasting relationships with our clients, working as an extension of their team to achieve shared goals.',
  },
  {
    icon: Target,
    title: 'Integrity',
    description: 'Honesty and transparency guide everything we do. We maintain the highest ethical standards in all interactions.',
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
              background: 'radial-gradient(circle at 30% 30%, #8B5CF6 0%, #A855F7 40%, #EC4899 70%, transparent 100%)',
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
                We are a team of passionate innovators dedicated to transforming businesses
                through cutting-edge technology solutions and exceptional talent.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section - Gray Card Container */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <motion.div
              className="bg-[#1A1A1A] rounded-3xl p-8 lg:p-12"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Our Mission
                  </h2>
                  <p className="text-muted text-lg leading-relaxed">
                    At Stanzasoft, we believe technology should empower businesses to achieve
                    their full potential. Founded with a vision to bridge the gap between
                    complex technology and practical business solutions, we have grown into
                    a trusted partner for companies worldwide.
                  </p>
                  <p className="text-muted text-lg leading-relaxed">
                    Our journey began with a simple idea: make enterprise-grade technology
                    accessible to businesses of all sizes. Today, we continue to innovate
                    and push boundaries, helping our clients navigate the ever-evolving
                    digital landscape with confidence.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">100+</span>
                      </div>
                      <span className="text-sm text-muted">Projects Delivered</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-secondary font-bold">50+</span>
                      </div>
                      <span className="text-sm text-muted">Happy Clients</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-bold">8+</span>
                      </div>
                      <span className="text-sm text-muted">Years of Experience</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section - Gray Card Styling */}
        <section className="py-20 md:py-28 bg-[#0D0D0D]">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                These principles guide everything we do and define who we are as a company.
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
                      'h-full p-6 text-center bg-[#1A1A1A] rounded-3xl',
                      'border border-border/50',
                      'hover:border-primary/50 transition-all duration-300',
                      'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10'
                    )}
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section - Gray Card Backgrounds */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                The talented individuals driving innovation and excellence at Stanzasoft.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-[#1A1A1A] border border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                      <p className="text-primary text-sm">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
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

          <div className="container-custom relative z-10">
            <motion.div
              className="flex flex-col items-center text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl">
                Let's discuss how Stanzasoft can help you achieve your goals with
                innovative technology solutions.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className={cn(
                    'bg-white text-[#8B5CF6] hover:bg-white/90',
                    'shadow-2xl shadow-black/20',
                    'px-10 py-4 text-lg font-semibold',
                    'hover:scale-105 transition-transform duration-300'
                  )}
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
