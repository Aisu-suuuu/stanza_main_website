'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Sparkles,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/Button'

interface ProductDetailClientProps {
  product: {
    title: string
    slug: string
    description: string
    overview: string
    features: string[]
    highlights: { title: string; description: string }[]
    gradient: string
  }
  otherProducts?: { slug: string; title: string; description: string }[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
}

function BlurSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start center'],
  })
  const blurValue = useTransform(scrollYProgress, [0, 1], [6, 0])
  const filterBlur = useTransform(blurValue, (v) => `blur(${v}px)`)

  return (
    <div ref={ref}>
      <motion.div style={{ filter: filterBlur }}>
        {children}
      </motion.div>
    </div>
  )
}

export default function ProductDetailClient({
  product,
  otherProducts = [],
}: ProductDetailClientProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Breadcrumb */}
            <motion.nav
              className="flex items-center gap-2 text-sm text-muted mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground">{product.title}</span>
            </motion.nav>

            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="inline-block px-4 py-2 mb-6 text-sm font-medium text-foreground bg-primary/10 rounded-full border border-primary/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Our Products
              </motion.span>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="gradient-text">{product.title}</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {product.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
                    Request a Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <BlurSection>
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="bg-surface-card rounded-3xl p-8 lg:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Overview</h2>
              </div>
              <p className="text-muted text-lg leading-relaxed max-w-4xl">{product.overview}</p>
            </motion.div>
          </div>
        </section>
        </BlurSection>

        {/* Features Grid */}
        {product.features.length > 0 && (
          <BlurSection>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="max-w-2xl mx-auto text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-foreground bg-primary/10 rounded-full border border-primary/20">
                  Features
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  What <span className="gradient-text">{product.title}</span> Offers
                </h2>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={cn(
                      'group p-6 lg:p-8',
                      'bg-surface-card rounded-3xl border border-border/50',
                      'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10',
                      'transition-all duration-300 hover:-translate-y-1'
                    )}
                  >
                    <CheckCircle className="w-6 h-6 text-foreground mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-foreground font-medium">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
          </BlurSection>
        )}

        {/* Highlights */}
        {product.highlights.length > 0 && (
          <BlurSection>
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="max-w-2xl mx-auto text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-foreground bg-primary/10 rounded-full border border-primary/20">
                  Why Choose {product.title}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  Key <span className="gradient-text">Advantages</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {product.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="bg-surface-card rounded-3xl p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/25">
                      <span className="text-white font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{highlight.title}</h3>
                    <p className="text-muted leading-relaxed">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          </BlurSection>
        )}

        {/* Other Products */}
        {otherProducts.length > 0 && (
          <BlurSection>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="max-w-2xl mx-auto text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Explore More <span className="gradient-text">Products</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherProducts.map((p, index) => (
                  <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={`/products/${p.slug}`}
                      className={cn(
                        'block h-full p-6 lg:p-8',
                        'bg-surface-card rounded-3xl border border-border/50',
                        'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10',
                        'transition-all duration-300 hover:-translate-y-1'
                      )}
                    >
                      <h3 className="text-xl font-semibold text-foreground mb-3">{p.title}</h3>
                      <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">{p.description}</p>
                      <span className="inline-flex items-center gap-2 text-foreground font-medium text-sm">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          </BlurSection>
        )}

        {/* CTA Section */}
        <BlurSection>
        <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-surface-card rounded-3xl border border-border px-8 py-16 md:px-16 md:py-20">
                  <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                      Ready to Transform Your Business with{' '}
                      <span className="text-foreground">
                        {product.title}
                      </span>
                      ?
                    </h2>
                    <p className="text-muted text-lg md:text-xl mb-10 max-w-xl">
                      Schedule a personalized demo and see how {product.title} can solve your challenges.
                    </p>
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-primary text-primary-foreground font-semibold px-10 py-5 text-lg rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300"
                      >
                        Request a Demo
                      </Button>
                    </Link>

                    <Link
                      href="/products"
                      className="mt-6 inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to All Products
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
