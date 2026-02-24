'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const defaultClients = [
  { name: 'GitLab', logo: '/logos/gitlab.svg' },
  { name: 'Hitachi', logo: '/logos/hitachi.svg' },
  { name: 'Juniper Networks', logo: '/logos/juniper.svg' },
  { name: 'RingCentral', logo: '/logos/ringcentral.svg' },
  { name: 'Samsung', logo: '/logos/samsung.svg' },
  { name: 'Sysco', logo: '/logos/sysco.svg' },
]

interface OurClientsProps {
  tagline?: string
  clients?: { name: string; logo: string }[]
}

export function OurClients({ tagline, clients }: OurClientsProps) {
  const clientList = clients && clients.length > 0 ? clients : defaultClients
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const blurProgress = useTransform(scrollYProgress, [0, 0.3], [6, 0])
  const filterBlur = useTransform(blurProgress, (v) => `blur(${v}px)`)

  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-background">
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        style={{ filter: filterBlur }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-16">
            Our Clients
          </h2>

          {/* Auto-scrolling logo marquee */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee whitespace-nowrap">
              {[...clientList, ...clientList, ...clientList, ...clientList].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="mx-10 lg:mx-12 flex-shrink-0 flex items-center justify-center h-10 w-28 lg:w-34"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={36}
                    className="object-contain h-7 lg:h-8 w-auto max-w-full dark:brightness-0 dark:invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default OurClients
