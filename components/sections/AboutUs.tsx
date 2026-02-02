'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const clients = [
  { name: 'Cognizant', abbrev: 'C' },
  { name: 'Capgemini', abbrev: 'CG' },
  { name: 'Hitachi', abbrev: 'H' },
  { name: 'GitLab', abbrev: 'GL' },
]

export function AboutUs() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Gray Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-[#1A1A1A] rounded-3xl p-6 md:p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left: Team Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                alt="Stanzasoft team collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 via-transparent to-transparent" />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="py-2 md:py-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6">
                About Us
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
                Stanzasoft is a team of builders, designers, and talent experts. We help companies
                design, develop, and hire - all in one place.
              </p>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                From end-to-end product design and development to HR consulting and talent acquisition,
                we provide comprehensive solutions that help businesses scale with scalable products
                and strong teams. We believe great products are built by the right people, and we make
                both happen.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="mt-16 text-center"
        >
          <p className="text-muted text-sm font-medium uppercase tracking-wider mb-8">
            Over 50+ businesses trust us
          </p>

          {/* Logo Placeholders */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                  ease: 'easeOut',
                }}
                className="w-28 h-12 flex items-center justify-center bg-white/10 rounded-lg border border-white/10 hover:bg-white/30 hover:border-white/30 transition-all duration-300"
              >
                <span className="text-white/60 font-semibold text-sm">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
