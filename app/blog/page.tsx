'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Clock,
  ArrowRight,
  Tag,
  Bell,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

// Blog posts data (placeholder)
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Enterprise AI: Trends to Watch in 2025',
    excerpt:
      'Explore the emerging AI technologies that are reshaping how enterprises operate, from generative AI to autonomous agents.',
    category: 'AI & Machine Learning',
    date: 'Coming Soon',
    readTime: '8 min read',
    featured: true,
    image: '/blog/ai-enterprise.jpg',
  },
  {
    id: 2,
    title: 'Maximizing ROI with Salesforce Implementation',
    excerpt:
      'Learn best practices for implementing Salesforce CRM to drive customer engagement and sales performance.',
    category: 'Salesforce',
    date: 'Coming Soon',
    readTime: '6 min read',
    featured: false,
    image: '/blog/salesforce-roi.jpg',
  },
  {
    id: 3,
    title: 'Cloud Security Best Practices for 2025',
    excerpt:
      'Essential security strategies to protect your cloud infrastructure and maintain compliance in an evolving threat landscape.',
    category: 'Cloud Security',
    date: 'Coming Soon',
    readTime: '10 min read',
    featured: false,
    image: '/blog/cloud-security.jpg',
  },
  {
    id: 4,
    title: 'Digital Transformation: A Roadmap for Success',
    excerpt:
      'A comprehensive guide to navigating your organization through digital transformation with minimal disruption.',
    category: 'Digital Strategy',
    date: 'Coming Soon',
    readTime: '12 min read',
    featured: false,
    image: '/blog/digital-transformation.jpg',
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
  post: (typeof blogPosts)[0]
  featured?: boolean
}) {
  return (
    <motion.div variants={itemVariants} className={featured ? 'md:col-span-2' : ''}>
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
        {/* Image Placeholder */}
        <div
          className={cn(
            'relative w-full overflow-hidden',
            featured ? 'h-64 md:h-80' : 'h-48'
          )}
        >
          <div
            className={cn(
              'absolute inset-0',
              'bg-gradient-to-br from-primary/30 to-secondary/30',
              'flex items-center justify-center'
            )}
          >
            <span className="text-muted text-sm font-medium">Image Coming Soon</span>
          </div>
          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1.5',
                'text-xs font-medium text-primary',
                'bg-surface-card/80 backdrop-blur-sm rounded-full',
                'border border-primary/20'
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
              'group-hover:gap-3 transition-all duration-300',
              'cursor-not-allowed opacity-70'
            )}
          >
            Coming Soon
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function BlogPage() {
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
                Insights & Resources
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
                <span className="gradient-text">Blog</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Stay updated with the latest insights on enterprise technology,
                digital transformation, and industry best practices from our experts.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className={cn(
                'bg-gradient-to-r from-primary/10 to-secondary/10',
                'border border-primary/20 rounded-2xl p-6',
                'flex flex-col md:flex-row items-center justify-between gap-4'
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    'w-12 h-12 rounded-xl',
                    'bg-primary/20 flex items-center justify-center'
                  )}
                >
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Blog Coming Soon</h3>
                  <p className="text-muted text-sm">
                    We're preparing insightful content for you. Stay tuned!
                  </p>
                </div>
              </div>
              <Link href="/contact">
                <Button variant="outline" size="md">
                  Get Notified
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
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
                Preview of <span className="gradient-text">Upcoming Articles</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Here's a sneak peek at the topics we'll be covering in our upcoming blog posts.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {blogPosts.map((post, index) => (
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
                  Newsletter
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Stay <span className="gradient-text">Informed</span>
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  Subscribe to receive the latest insights, industry trends, and
                  exclusive content directly in your inbox.
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
                  No spam. Unsubscribe anytime.
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
