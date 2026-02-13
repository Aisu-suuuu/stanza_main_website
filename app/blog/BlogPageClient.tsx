'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Clock,
  ArrowRight,
  Tag,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/Button'

interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  featured: boolean
  image: string
}

interface BlogPageClientProps {
  pageData?: {
    hero_badge?: string
    hero_heading?: string
    hero_subheading?: string
    newsletter_badge?: string
    newsletter_heading?: string
    newsletter_subheading?: string
    newsletter_disclaimer?: string
  }
  posts?: BlogPost[]
}

// Blog posts data (fallback)
const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'ai-integration-transforming-business-operations',
    title: 'AI Integration: How It\'s Transforming Business Operations in 2026',
    excerpt:
      'From automating customer support to predicting market trends, AI integration is no longer optional — it\'s the competitive edge every business needs. Learn how companies are embedding AI into their core workflows.',
    category: 'AI Integration',
    date: 'Feb 5, 2026',
    readTime: '8 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1400&h=800&fit=crop&q=80',
  },
  {
    id: 2,
    slug: 'smart-workflows-automating-with-ai',
    title: 'Smart Workflows: Building Intelligent Automation That Scales',
    excerpt:
      'Manual processes drain resources and slow growth. Discover how smart workflows powered by AI can automate repetitive tasks, reduce errors, and free your team to focus on high-value work.',
    category: 'Smart Workflows',
    date: 'Jan 28, 2026',
    readTime: '6 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=800&fit=crop&q=80',
  },
  {
    id: 3,
    slug: 'agentic-ai-future-of-enterprise-automation',
    title: 'Agentic AI: The Future of Enterprise Automation',
    excerpt:
      'Agentic AI goes beyond chatbots — these autonomous systems can reason, plan, and execute multi-step tasks. Explore how agentic AI is reshaping enterprise operations from sales to engineering.',
    category: 'AI & Machine Learning',
    date: 'Jan 15, 2026',
    readTime: '10 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&h=800&fit=crop&q=80',
  },
  {
    id: 4,
    slug: 'salesforce-ai-integration-einstein-copilot',
    title: 'Salesforce + AI: Unlocking the Power of Einstein Copilot',
    excerpt:
      'Salesforce Einstein is bringing generative AI directly into CRM workflows. Learn how to leverage AI-powered insights, automated data entry, and predictive analytics to close deals faster.',
    category: 'Salesforce',
    date: 'Jan 3, 2026',
    readTime: '7 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=800&fit=crop&q=80',
  },
  {
    id: 5,
    slug: 'building-ai-first-products',
    title: 'Building AI-First Products: A Framework for Startups',
    excerpt:
      'The best AI products don\'t bolt on intelligence as an afterthought — they\'re designed around it. Here\'s a practical framework for building AI-first products from concept to launch.',
    category: 'Product Strategy',
    date: 'Dec 18, 2025',
    readTime: '9 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1400&h=800&fit=crop&q=80',
  },
  {
    id: 6,
    slug: 'workflow-automation-roi-calculator',
    title: 'The ROI of Workflow Automation: What the Numbers Say',
    excerpt:
      'Companies adopting workflow automation see 30-50% reduction in operational costs. We break down the real numbers behind automation ROI and how to calculate yours.',
    category: 'Smart Workflows',
    date: 'Dec 5, 2025',
    readTime: '5 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&h=800&fit=crop&q=80',
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

// Blog Card Component
function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost
  featured?: boolean
}) {
  return (
    <motion.div variants={itemVariants} className={featured ? 'md:col-span-2' : ''}>
      <Link href={`/blog/${post.slug}`}>
        <div
          className={cn(
            'group relative h-full',
            'bg-surface-card rounded-3xl border border-border/50',
            'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10',
            'transition-all duration-300 ease-out',
            'hover:-translate-y-1',
            'overflow-hidden'
          )}
        >
          {/* Image */}
          <div
            className={cn(
              'relative w-full overflow-hidden',
              featured ? 'h-64 md:h-80' : 'h-48'
            )}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {/* Category Tag */}
            <div className="absolute top-4 left-4">
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-1.5',
                  'text-xs font-medium text-white',
                  'bg-black/40 backdrop-blur-sm rounded-full',
                  'border border-white/20'
                )}
              >
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8">
            {/* Meta info */}
            <div className="flex items-center gap-4 text-sm text-muted mb-4">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span>{post.date}</span>
            </div>

            {/* Title */}
            <h3
              className={cn(
                'font-semibold text-foreground mb-3',
                'group-hover:text-primary transition-colors duration-300',
                featured ? 'text-2xl md:text-3xl' : 'text-xl'
              )}
            >
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-muted leading-relaxed mb-6">{post.excerpt}</p>

            {/* Read More Link */}
            <span
              className={cn(
                'inline-flex items-center gap-2',
                'text-primary font-medium',
                'group-hover:gap-3 transition-all duration-300'
              )}
            >
              Read Article
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function BlogPageClient({ pageData, posts }: BlogPageClientProps) {
  const displayPosts = posts && posts.length > 0 ? posts : blogPosts

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
                {pageData?.hero_badge || 'Insights & Resources'}
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
                <span className="gradient-text">{pageData?.hero_heading || 'Blog'}</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {pageData?.hero_subheading || 'Stay updated with the latest insights on enterprise technology, digital transformation, and industry best practices from our experts.'}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid Section */}
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
                Latest <span className="gradient-text">Articles</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Insights on AI integration, smart workflows, and building technology that scales.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {displayPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  featured={index === 0}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="bg-surface-card rounded-3xl p-8 lg:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-2xl mx-auto text-center">
                <span
                  className={cn(
                    'inline-block px-4 py-2 mb-6',
                    'text-sm font-medium text-primary',
                    'bg-primary/10 rounded-full border border-primary/20'
                  )}
                >
                  {pageData?.newsletter_badge || 'Newsletter'}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Stay <span className="gradient-text">{pageData?.newsletter_heading || 'Informed'}</span>
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  {pageData?.newsletter_subheading || 'Subscribe to receive the latest insights, industry trends, and exclusive content directly in your inbox.'}
                </p>

                {/* Newsletter Form Placeholder */}
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={cn(
                      'flex-1 px-6 py-4 rounded-xl',
                      'bg-background border border-border/50',
                      'text-foreground placeholder:text-muted',
                      'focus:outline-none focus:border-primary/50',
                      'transition-colors duration-300'
                    )}
                  />
                  <Button size="lg" className="px-8">
                    Subscribe
                  </Button>
                </div>
                <p className="mt-4 text-muted text-sm">
                  {pageData?.newsletter_disclaimer || 'No spam. Unsubscribe anytime.'}
                </p>
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
    </>
  )
}
