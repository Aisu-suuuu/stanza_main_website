'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, Star, Quote } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface ProductsPageClientProps {
  pageData?: {
    hero_badge?: string
    hero_heading?: string
    hero_subheading?: string
    featured_heading?: string
    featured_subheading?: string
    testimonials_heading?: string
    testimonials_subheading?: string
    cta_heading?: string
    cta_subtext?: string
    cta_button_text?: string
    cta_button_link?: string
  }
}

// Product data
const products = [
  {
    id: 'prepmonkey',
    title: 'PrepMonkey',
    description:
      'An AI-powered EdTech platform designed to optimize competitive exam preparation through structured learning paths, performance tracking, and intelligent study assistance.',
    features: [
      'Structured learning paths',
      'Performance tracking & analytics',
      'Intelligent study assistance',
      'Practice tests & mock exams',
      'AI-powered recommendations',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80',
    gradient: 'from-accent via-primary to-secondary',
  },
  {
    id: 'agentic-ai-platform',
    title: 'Agentic AI Platform',
    description:
      'A comprehensive AI automation platform built to transform operational workflows, reduce inefficiencies, and accelerate business performance.',
    features: [
      'Autonomous workflow automation',
      'Operational efficiency optimization',
      'Decision-making acceleration',
      'Scalable AI infrastructure',
      'Seamless system integration',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80',
    gradient: 'from-primary via-secondary to-accent',
  },
]

// Testimonials data
const testimonials = [
  {
    quote:
      'The Agentic AI Platform transformed our workflow completely. Tasks that took hours now complete in minutes with remarkable accuracy.',
    author: 'Sarah Chen',
    role: 'CTO, TechFlow Solutions',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    quote:
      'PrepMonkey helped our students improve their test scores by an average of 35%. The structured learning paths and intelligent study assistance are game-changers.',
    author: 'Dr. Michael Rivera',
    role: 'Director, Apex Academy',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    quote:
      'Stanzasoft\'s AI solutions have given us a competitive edge we never thought possible. Their outcome-focused approach delivers real results.',
    author: 'Emily Watson',
    role: 'VP Operations, DataDrive Inc',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
]

// Hero Section Component
function HeroSection({ pageData }: ProductsPageClientProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              {pageData?.hero_badge || 'Innovative Solutions'}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {pageData?.hero_heading || 'Our'}{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Products
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {pageData?.hero_subheading || 'Purpose-built platforms that solve real business and education challenges — from AI automation to competitive exam preparation.'}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// Product Card Component
interface ProductCardProps {
  product: (typeof products)[0]
  index: number
  isInView: boolean
}

function ProductCard({ product, index, isInView }: ProductCardProps) {
  const isReversed = index % 2 === 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={cn(
        'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center',
        isReversed && 'lg:grid-flow-dense'
      )}
    >
      {/* Image Section */}
      <motion.div
        className={cn('relative group', isReversed && 'lg:col-start-2')}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className={cn(
            'relative aspect-[4/3] rounded-2xl overflow-hidden',
            'border border-border',
            'shadow-2xl shadow-primary/10'
          )}
        >
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className={cn(
              'object-cover',
              'transition-transform duration-700 ease-out',
              'group-hover:scale-110'
            )}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

          {/* Product label */}
          <div className="absolute bottom-6 left-6">
            <span
              className={cn(
                'inline-flex items-center px-4 py-2 rounded-full',
                'bg-foreground/10 backdrop-blur-sm border border-foreground/20',
                'text-sm font-medium text-foreground'
              )}
            >
              Featured Product
            </span>
          </div>
        </div>

        {/* Decorative gradient blur */}
        <div
          className={cn(
            'absolute -inset-4 -z-10 rounded-3xl opacity-50 blur-2xl',
            `bg-gradient-to-r ${product.gradient}`
          )}
        />
      </motion.div>

      {/* Content Section */}
      <div className={cn('space-y-6', isReversed && 'lg:col-start-1')}>
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground"
          initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isReversed ? 30 : -30 }
          }
          transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
        >
          {product.title}
        </motion.h2>

        <motion.p
          className="text-lg text-muted leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
        >
          {product.description}
        </motion.p>

        {/* Features list */}
        <motion.ul
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
        >
          {product.features.map((feature, featureIndex) => (
            <motion.li
              key={feature}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 0.4,
                delay: 0.5 + index * 0.1 + featureIndex * 0.05,
              }}
            >
              <span
                className={cn(
                  'flex-shrink-0 w-6 h-6 rounded-full',
                  'bg-gradient-to-r from-primary to-secondary',
                  'flex items-center justify-center'
                )}
              >
                <Check className="w-4 h-4 text-white" />
              </span>
              <span className="text-muted">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
        >
          <Link href={`/products/${product.id}`}>
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Request Demo
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Featured Products Section
function FeaturedProductsSection({ pageData }: ProductsPageClientProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 lg:py-32 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {pageData?.featured_heading || 'Featured Products'}
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {pageData?.featured_subheading || 'Explore our flagship solutions that are transforming industries'}
          </p>
        </motion.div>

        {/* Products */}
        <div className="space-y-24 lg:space-y-32">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonial Card Component
interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0]
  index: number
  isInView: boolean
}

function TestimonialCard({ testimonial, index, isInView }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: 0.2 + index * 0.15,
        ease: 'easeOut',
      }}
      className={cn(
        'relative p-8 rounded-3xl',
        'bg-surface-card border border-border/50',
        'hover:border-primary/30 transition-all duration-300',
        'hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10'
      )}
    >
      {/* Quote icon */}
      <div
        className={cn(
          'absolute -top-4 left-8',
          'w-8 h-8 rounded-full',
          'bg-gradient-to-r from-primary to-secondary',
          'flex items-center justify-center'
        )}
      >
        <Quote className="w-4 h-4 text-white" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground text-lg leading-relaxed mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-foreground">{testimonial.author}</p>
          <p className="text-sm text-muted">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Testimonials Section
function TestimonialsSection({ pageData }: ProductsPageClientProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {pageData?.testimonials_heading || 'What Our Clients Say'}
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {pageData?.testimonials_subheading || 'Hear from businesses that have transformed with our products'}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>

      {/* Top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}

// CTA Section
function CTASection({ pageData }: ProductsPageClientProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
                  {pageData?.cta_heading || 'Let AI do the Work so you can'}{' '}
                  <span className="bg-gradient-to-r from-[#814AC8] via-[#DF7AFE] to-[#814AC8] bg-clip-text text-transparent">
                    Scale Faster
                  </span>
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
  )
}

// Main Products Page Client
export default function ProductsPageClient({ pageData }: ProductsPageClientProps) {
  return (
    <>
      <Header />
      <main className="bg-background">
        <HeroSection pageData={pageData} />
        <FeaturedProductsSection pageData={pageData} />
        <TestimonialsSection pageData={pageData} />
        <CTASection pageData={pageData} />
      </main>
      <Footer />
    </>
  )
}
