'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface BlogPostClientProps {
  post: {
    title: string
    category: string
    date: string
    readTime: string
    image: string
    content: string // HTML content from WordPress
  }
  relatedPosts?: {
    slug: string
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    image: string
  }[]
}

export default function BlogPostClient({ post, relatedPosts = [] }: BlogPostClientProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Image */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Article Content */}
        <div className="container-custom relative z-10 -mt-32">
          <motion.article
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-primary bg-primary/10 rounded-full border border-primary/20">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-10">
              {post.title}
            </h1>

            {/* WordPress HTML Content */}
            <div
              className={cn(
                'prose prose-lg prose-invert max-w-none',
                // Headings
                'prose-headings:text-foreground prose-headings:font-bold',
                'prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-4',
                'prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-3',
                // Paragraphs
                'prose-p:text-muted prose-p:text-lg prose-p:leading-relaxed',
                // Lists
                'prose-li:text-muted prose-li:text-lg prose-li:leading-relaxed',
                'prose-ul:space-y-2 prose-ol:space-y-2',
                // Blockquotes
                'prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:my-8',
                'prose-blockquote:text-foreground prose-blockquote:text-xl prose-blockquote:font-medium prose-blockquote:italic',
                'prose-blockquote:not-italic',
                // Links
                'prose-a:text-primary prose-a:no-underline hover:prose-a:underline',
                // Strong
                'prose-strong:text-foreground',
                // Images
                'prose-img:rounded-2xl prose-img:my-8',
                // Code
                'prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-0.5 prose-code:rounded',
                'prose-pre:bg-surface-card prose-pre:border prose-pre:border-border/50 prose-pre:rounded-xl'
              )}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA */}
            <div className="mt-16 p-8 md:p-12 bg-surface-card rounded-3xl border border-border/50 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-muted mb-6 max-w-lg mx-auto">
                Let&apos;s discuss how Stanzasoft can help you implement these solutions for your business.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className={cn(
                    'bg-gradient-to-r from-[#814AC8] via-[#DF7AFE] to-[#814AC8]',
                    'text-white font-semibold',
                    'px-8 py-4 text-lg rounded-xl',
                    'shadow-lg shadow-[#814AC8]/25',
                    'hover:shadow-[#814AC8]/50 hover:scale-105',
                    'transition-all duration-300'
                  )}
                >
                  Book a Free Call
                </Button>
              </Link>
            </div>
          </motion.article>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <motion.section
              className="max-w-5xl mx-auto mt-20 mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`}>
                    <div
                      className={cn(
                        'group flex gap-4 p-4 rounded-2xl',
                        'bg-surface-card border border-border/50',
                        'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10',
                        'transition-all duration-300 hover:-translate-y-0.5'
                      )}
                    >
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs text-primary font-medium">{related.category}</span>
                        <h3 className="text-foreground font-semibold mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                          {related.title}
                        </h3>
                        <span className="text-muted text-sm mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {related.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>
    </>
  )
}
