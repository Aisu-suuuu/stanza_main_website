'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

export function ContactForm() {
  const ref = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const blurProgress = useTransform(scrollYProgress, [0, 0.3], [6, 0])
  const filterBlur = useTransform(blurProgress, (v) => `blur(${v}px)`)
  const cardScale = useTransform(scrollYProgress, [0.1, 0.4], [0.95, 1])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      <motion.div
        className="container mx-auto px-4 md:px-6 relative z-10"
        style={{ filter: filterBlur }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ scale: cardScale }}
        >
          {/* Card with border */}
          <div className="relative rounded-3xl border border-border bg-surface-card px-8 py-16 md:px-16 md:py-20">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                Get in <span className="text-foreground">Touch</span>
              </h2>
              <p className="text-muted text-lg md:text-xl mb-10 max-w-xl">
                Have a project in mind? Let&apos;s talk about how we can help.
              </p>

              <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={cn(
                    'w-full px-5 py-4 rounded-xl',
                    'bg-background border border-border',
                    'text-foreground placeholder:text-muted',
                    'focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary',
                    'transition-colors duration-200'
                  )}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={cn(
                    'w-full px-5 py-4 rounded-xl',
                    'bg-background border border-border',
                    'text-foreground placeholder:text-muted',
                    'focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary',
                    'transition-colors duration-200'
                  )}
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={cn(
                    'w-full px-5 py-4 rounded-xl resize-none',
                    'bg-background border border-border',
                    'text-foreground placeholder:text-muted',
                    'focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary',
                    'transition-colors duration-200'
                  )}
                />
                <button
                  type="submit"
                  className={cn(
                    'w-full py-4 rounded-xl font-semibold text-lg',
                    'bg-primary text-primary-foreground',
                    'hover:opacity-90 hover:scale-[1.02]',
                    'transition-all duration-300',
                    'cursor-pointer'
                  )}
                >
                  SEND A MESSAGE
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactForm
