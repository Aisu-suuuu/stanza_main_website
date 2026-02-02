'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Header, Footer } from '@/components/layout'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Zap,
  Heart,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'

// Benefits data
const benefits = [
  {
    icon: Users,
    title: 'Collaborative Culture',
    description:
      'Work alongside talented individuals who are passionate about innovation and building great products together.',
  },
  {
    icon: Zap,
    title: 'Growth Opportunities',
    description:
      'Continuous learning through mentorship, training programs, and exposure to cutting-edge technologies.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description:
      'Flexible work arrangements, generous PTO, and a culture that values your well-being and personal time.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Compensation',
    description:
      'Industry-leading salaries, equity options, comprehensive health benefits, and performance bonuses.',
  },
]

// Open positions data
const positions = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
  },
  {
    id: 2,
    title: 'Product Designer',
    type: 'Full-time',
    location: 'Hybrid',
    department: 'Design',
  },
  {
    id: 3,
    title: 'AI/ML Engineer',
    type: 'Full-time',
    location: 'San Francisco',
    department: 'Engineering',
  },
  {
    id: 4,
    title: 'Salesforce Developer',
    type: 'Full-time',
    location: 'Hyderabad',
    department: 'Engineering',
  },
]

// Team images
const teamImages = [
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    alt: 'Team collaboration',
  },
  {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
    alt: 'Office meeting',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    alt: 'Team discussion',
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

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background:
                'radial-gradient(circle at center, #8B5CF6 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />

          <div className="container-custom relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                We're Hiring
              </motion.span>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Join Our{' '}
                <span className="gradient-text">Team</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Be part of a team that's shaping the future of technology. We're
                looking for passionate individuals who want to make an impact and
                grow with us.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With Us
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                We believe in creating an environment where everyone can thrive
                and do their best work.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={cn(
                    'relative p-6 rounded-3xl bg-[#1A1A1A] border border-white/10',
                    'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300'
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 md:py-28 bg-[#0D0D0D]">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Find your next opportunity and help us build the future.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {positions.map((position) => (
                <motion.div
                  key={position.id}
                  variants={itemVariants}
                  className={cn(
                    'group relative p-6 rounded-3xl bg-[#1A1A1A] border border-white/10',
                    'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300'
                  )}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                          {position.department}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Link href="/contact">
                        <Button
                          variant="primary"
                          size="md"
                          className="group/btn w-full md:w-auto"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No positions message - hidden but can be used */}
            {positions.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Briefcase className="w-16 h-16 text-muted mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  No Open Positions
                </h3>
                <p className="text-muted">
                  Check back soon or send us your resume for future opportunities.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Team Culture Section */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Culture
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                A glimpse into life at Stanzasoft - where innovation meets
                collaboration.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {teamImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative rounded-3xl bg-[#1A1A1A] border border-white/10 p-2 overflow-hidden group"
                >
                  <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Culture description */}
            <motion.div
              className="mt-12 max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-muted leading-relaxed">
                At Stanzasoft, we foster an environment of continuous learning,
                open communication, and mutual respect. Our diverse team brings
                together unique perspectives that drive innovation and create
                exceptional solutions for our clients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#8B5CF6] via-[#A855F7] to-[#7C3AED] relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Don't see a position that fits? We're always looking for talented
                people. Send us your resume and let's talk.
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
