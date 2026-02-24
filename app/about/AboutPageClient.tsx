'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface AboutPageClientProps {
  pageData?: {
    hero_badge?: string
    hero_heading?: string
    hero_subheading?: string
    mission_heading?: string
    mission_paragraph_1?: string
    mission_paragraph_2?: string
    mission_image?: string
    values_heading?: string
    values_subheading?: string
    team_heading?: string
    team_subheading?: string
    team_description_1?: string
    team_description_2?: string
    cta_heading?: string
    cta_subtext?: string
    cta_button_text?: string
    cta_button_link?: string
  }
  values?: { title: string; description: string; iconName?: string }[]
  departments?: { title: string; description: string }[]
}

// Values data
const values = [
  {
    title: 'Scalable AI-Driven Systems',
    description: 'We build intelligent, production-ready AI systems designed to scale with your business and deliver measurable impact.',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop&q=80',
  },
  {
    title: 'Integrated Technology & Talent',
    description: 'From product development to recruitment, we provide end-to-end solutions that combine technology and talent under one roof.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80',
  },
  {
    title: 'Long-Term Strategic Partnerships',
    description: 'We invest in lasting relationships with our clients, working as an extension of their team to achieve shared goals.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop&q=80',
  },
  {
    title: 'Outcome-Focused Delivery',
    description: 'Every solution we build is tied to clear business outcomes — efficiency gains, cost savings, and accelerated growth.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
  },
]


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

function WhyStanzasoft({ pageData }: { pageData?: AboutPageClientProps['pageData'] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = values[activeIndex]

  const goPrev = () => setActiveIndex((prev) => (prev === 0 ? values.length - 1 : prev - 1))
  const goNext = () => setActiveIndex((prev) => (prev === values.length - 1 ? 0 : prev + 1))

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-custom">
        {/* Section heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-center">
          {/* Left — Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Right — Content */}
          <div className="flex flex-col justify-between min-h-[360px]">
            <div>
              {/* Step number */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.1] mb-4">
                    {active.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg text-muted leading-relaxed max-w-lg">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom — Arrows */}
            <div className="mt-8">
              <div className="h-px bg-foreground/10 mb-5" />
              <div className="flex gap-3">
                <button
                  onClick={goPrev}
                  className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center text-foreground hover:bg-foreground/5 transition-colors duration-200"
                  aria-label="Previous"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button
                  onClick={goNext}
                  className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center text-foreground hover:bg-foreground/5 transition-colors duration-200"
                  aria-label="Next"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AboutPageClient({ pageData, values: valuesFromWP, departments }: AboutPageClientProps) {
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
              background: 'radial-gradient(circle at 30% 30%, var(--primary) 0%, var(--primary) 40%, var(--primary) 70%, transparent 100%)',
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
                className="inline-block px-4 py-2 mb-6 text-sm font-medium text-foreground bg-primary/10 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {pageData?.hero_badge || 'About Us'}
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {pageData?.hero_heading ? (
                  pageData.hero_heading
                ) : (
                  <>
                    About{' '}
                    <span className="gradient-text">Stanzasoft</span>
                  </>
                )}
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                {pageData?.hero_subheading || 'Engineering intelligent solutions for modern enterprises — delivering enterprise-grade digital solutions and AI-powered platforms.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section — Minimal statement layout */}
        <BlurSection>
        <section className="py-20 md:py-28">
          <div className="container-custom">
            {/* Top separator line */}
            <div className="h-px bg-foreground/10 mb-16" />

            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-10 lg:gap-16">
              {/* Left — Label */}
              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-[3px] rounded-full bg-primary self-stretch" />
                <div>
                  <p className="text-foreground text-lg font-semibold">About us</p>
                </div>
              </motion.div>

              {/* Right — Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Large statement */}
                <p className="text-2xl md:text-3xl lg:text-[2.2rem] font-semibold text-foreground leading-[1.4] mb-8 max-w-4xl">
                  {pageData?.mission_paragraph_1 || 'Stanzasoft is a product-centric technology company delivering enterprise-grade digital solutions and AI-powered platforms — helping businesses operate more efficiently, intelligently, and competitively.'}
                </p>

                {/* Smaller detail paragraph */}
                <p className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-3xl">
                  {pageData?.mission_paragraph_2 || 'With expertise spanning product development, AI automation, and strategic HR consulting, Stanzasoft partners with businesses to design, develop, and deploy high-impact solutions that drive measurable outcomes.'}
                </p>

                {/* Link */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-foreground font-medium hover:text-foreground transition-colors duration-300 group/link"
                >
                  Our services
                  <ArrowRight className="w-4 h-4 -rotate-45 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        </BlurSection>

        {/* Our Vision & Mission — Side by side */}
        <BlurSection>
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <div className="h-px bg-foreground/10 mb-16" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex gap-3 mb-6">
                  <div className="w-[3px] rounded-full bg-primary self-stretch" />
                  <div>
                    <p className="text-foreground text-lg font-semibold">Our Vision</p>
                  </div>
                </div>
                <p className="text-xl md:text-2xl font-semibold text-foreground leading-[1.4] mb-5">
                  To be the most trusted technology partner for enterprises worldwide — empowering them with intelligent, scalable solutions that redefine how businesses operate and grow.
                </p>
                <p className="text-base text-muted leading-relaxed">
                  We envision a future where every business, regardless of size, has access to enterprise-grade AI and digital tools that unlock new levels of efficiency, innovation, and competitive advantage.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="flex gap-3 mb-6">
                  <div className="w-[3px] rounded-full bg-primary self-stretch" />
                  <div>
                    <p className="text-foreground text-lg font-semibold">Our Mission</p>
                  </div>
                </div>
                <p className="text-xl md:text-2xl font-semibold text-foreground leading-[1.4] mb-5">
                  To design, develop, and deploy enterprise-grade digital solutions and AI-powered platforms that help businesses operate more efficiently, intelligently, and competitively.
                </p>
                <p className="text-base text-muted leading-relaxed">
                  We combine deep technical expertise in product development, AI automation, and strategic HR consulting to deliver measurable outcomes — turning complex challenges into streamlined, intelligent workflows.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        </BlurSection>

        {/* Our Services Section — Carousel layout */}
        <BlurSection>
          <WhyStanzasoft pageData={pageData} />
        </BlurSection>

        {/* Work with us Section */}
        <BlurSection>
        <section className="py-20 md:py-28 bg-surface-dark">
          <div className="container-custom">
            {/* Top separator line */}
            <div className="h-px bg-foreground/10 mb-16" />

            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-10 lg:gap-16">
              {/* Left — Label */}
              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-[3px] rounded-full bg-primary self-stretch" />
                <div>
                  <p className="text-foreground text-lg font-semibold">Work with us</p>
                </div>
              </motion.div>

              {/* Right — Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-2xl md:text-3xl lg:text-[2.2rem] font-semibold text-foreground leading-[1.4] mb-8 max-w-4xl">
                  Every successful project begins with understanding your unique story and goals. We start with a deep dive into your current systems and digital presence to uncover the most impactful opportunities for growth and improvement.
                </p>
                <p className="text-base md:text-lg text-muted leading-relaxed mb-10 max-w-3xl">
                  Ready to elevate your business? We kick off each engagement with a thorough analysis of your technology and operational needs to identify key areas for innovation. Let&apos;s explore how custom AI-powered solutions can strengthen your operations and accelerate your success.
                </p>

                <Link
                  href="/contact"
                  className={cn(
                    'inline-flex items-center gap-3 px-8 py-4 rounded-lg',
                    'bg-primary text-white font-semibold text-lg',
                    'hover:bg-primary/90 transition-all duration-300',
                    'shadow-lg shadow-primary/25 hover:shadow-primary/40'
                  )}
                >
                  Get started
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        </BlurSection>

        {/* CTA Section */}
        <BlurSection>
        <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
          <div className="container-custom relative z-10">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Card with border */}
              <div className="bg-surface-card rounded-3xl border border-border px-8 py-16 md:px-16 md:py-20">
                  <div className="flex flex-col items-center text-center">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                      {pageData?.cta_heading ? (
                        pageData.cta_heading
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
