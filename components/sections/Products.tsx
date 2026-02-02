'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface Product {
  title: string
  description: string[]
  imageUrl: string
  imageOnLeft: boolean
}

const products: Product[] = [
  {
    title: 'Ed Tech Project',
    description: [
      'Stanzasoft is revolutionizing education through innovative technology solutions. Our EdTech platform provides personalized learning experiences and interactive content delivery.',
      'We believe education should be accessible, engaging, and effective for all learners. Our solutions help institutions achieve their educational goals while empowering students to succeed.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60',
    imageOnLeft: true,
  },
  {
    title: 'Agentic AI',
    description: [
      'Intelligent AI agents that work autonomously to accomplish complex tasks. Our Agentic AI solutions leverage cutting-edge language models and reasoning capabilities.',
      'From automating workflows to enhancing decision-making, our AI-powered solutions help businesses drive efficiency and innovation at scale.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    imageOnLeft: false,
  },
]

interface ProductRowProps {
  product: Product
  index: number
  isInView: boolean
}

function ProductRow({ product, index, isInView }: ProductRowProps) {
  const delay = 0.2 + index * 0.2
  const isReversed = !product.imageOnLeft

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="group"
    >
      <div
        className={cn(
          'grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center',
          'bg-[#1A1A1A]/50 rounded-3xl p-6 md:p-8',
          'hover:-translate-y-1 transition-transform duration-300',
          'overflow-hidden'
        )}
      >
        {/* Image */}
        <div
          className={cn(
            'relative aspect-[4/3] rounded-2xl overflow-hidden',
            isReversed && 'md:order-2'
          )}
        >
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className={cn(
              'object-cover',
              'transition-transform duration-500 ease-out',
              'group-hover:scale-105'
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50 opacity-40" />
        </div>

        {/* Content */}
        <div className={cn('py-2 md:py-4', isReversed && 'md:order-1')}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            {product.title}
          </h3>
          {product.description.map((paragraph, idx) => (
            <p key={idx} className="text-muted text-base md:text-lg leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
          <Link
            href={`/products`}
            className={cn(
              'inline-flex items-center gap-2',
              'text-primary font-medium',
              'hover:gap-3 transition-all duration-300 mt-2'
            )}
          >
            Learn more
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export function Products() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-[#0D0D0D] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Products
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Innovative solutions designed to transform your business and drive growth
          </p>
        </motion.div>

        {/* Products - Alternating Layout */}
        <div className="space-y-20 lg:space-y-28">
          {products.map((product, index) => (
            <ProductRow
              key={product.title}
              product={product}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Our Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
          className="flex justify-center mt-16 lg:mt-20"
        >
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
            >
              Our Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-secondary/5 to-transparent blur-3xl" />
      </div>

      {/* Top border line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}

export default Products
