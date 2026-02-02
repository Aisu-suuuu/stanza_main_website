'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
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
            'bg-white/10 rounded-full blur-3xl'
          )}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <motion.h2
            className={cn(
              'text-4xl md:text-5xl lg:text-6xl font-bold',
              'text-white leading-tight mb-8'
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Book a Call Today and Start Automating
          </motion.h2>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="mt-6 text-white/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            No commitment required. Let's explore what's possible together.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
