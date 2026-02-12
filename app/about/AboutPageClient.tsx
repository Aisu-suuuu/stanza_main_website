'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cpu, Layers, Handshake, Target, Code2, Palette, Brain, UserCheck } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface AboutPageClientProps {
  pageData?: {
    hero_badge?: string
    hero_heading?: string
    hero_subheading?: string
    mission_heading?: string
    mission_paragraph_1?: string
    mission_paragraph_2?: string
    mission_image?: string
    values_heading?: string
    values_subheading?: string
    team_heading?: string
    team_subheading?: string
    team_description_1?: string
    team_description_2?: string
    cta_heading?: string
    cta_subtext?: string
    cta_button_text?: string
    cta_button_link?: string
  }
  values?: { title: string; description: string; iconName?: string }[]
  departments?: { title: string; description: string }[]
}

// Values data
const values = [
  {
    icon: Cpu,
    title: 'Scalable AI-Driven Systems',
    description: 'We build intelligent, production-ready AI systems designed to scale with your business and deliver measurable impact.',
  },
  {
    icon: Layers,
    title: 'Integrated Technology & Talent',
    description: 'From product development to recruitment, we provide end-to-end solutions that combine technology and talent under one roof.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Strategic Partnerships',
    description: 'We invest in lasting relationships with our clients, working as an extension of their team to achieve shared goals.',
  },
  {
    icon: Target,
    title: 'Outcome-Focused Delivery',
    description: 'Every solution we build is tied to clear business outcomes — efficiency gains, cost savings, and accelerated growth.',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export default function AboutPageClient({ pageData, values: valuesFromWP, departments }: AboutPageClientProps) {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

          {/* Decorative orb */}
          <motion.div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #814AC8 0%, #DF7AFE 40%, #DF7AFE 70%, transparent 100%)',
              filter: 'blur(80px)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="container-custom relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {pageData?.hero_badge || 'About Us'}
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {pageData?.hero_heading ? (
                  pageData.hero_heading
                ) : (
                  <>
                    About{' '}
                    <span className="gradient-text">Stanzasoft</span>
                  </>
                )}
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                {pageData?.hero_subheading || 'Engineering intelligent solutions for modern enterprises — delivering enterprise-grade digital solutions and AI-powered platforms.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section - Gray Card Container */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <motion.div
              className="bg-surface-card rounded-3xl p-8 lg:p-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={pageData?.mission_image || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop'}
                      alt="Stanzasoft team collaborating"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-card/60 via-transparent to-transparent" />
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {pageData?.mission_heading || 'About Us'}
                  </h2>
                  <p className="text-muted text-lg leading-relaxed">
                    {pageData?.mission_paragraph_1 || 'Stanzasoft is a product-centric technology company delivering enterprise-grade digital solutions and AI-powered platforms. We specialize in building scalable, production-ready systems that enable organizations to operate more efficiently, intelligently, and competitively.'}
                  </p>
                  <p className="text-muted text-lg leading-relaxed">
                    {pageData?.mission_paragraph_2 || 'With expertise spanning product development, AI automation, and strategic HR consulting, Stanzasoft partners with businesses to design, develop, and deploy high-impact solutions that drive measurable outcomes.'}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section - Gray Card Styling */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {pageData?.values_heading ? (
                  pageData.values_heading
                ) : (
                  <>
                    Why <span className="gradient-text">Stanzasoft</span>
                  </>
                )}
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                {pageData?.values_subheading || 'What sets us apart as a technology and talent partner.'}
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {values.map((value) => (
                <motion.div key={value.title} variants={itemVariants}>
                  <div
                    className={cn(
                      'h-full p-6 text-center bg-surface-card rounded-3xl',
                      'border border-border/50',
                      'hover:border-primary/50 transition-all duration-300',
                      'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10'
                    )}
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {pageData?.team_heading ? (
                  pageData.team_heading
                ) : (
                  <>
                    Our <span className="gradient-text">Team</span>
                  </>
                )}
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                {pageData?.team_subheading || 'A multidisciplinary team of engineers, designers, AI specialists, and talent strategists building solutions that matter.'}
              </p>
            </motion.div>

            {/* Team Portrait Gallery */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Engineering - Male, side-parted hair, dress shirt */}
              <motion.div variants={itemVariants}>
                <div
                  className={cn(
                    'h-full p-6 text-center bg-surface-card rounded-3xl',
                    'border border-border/50',
                    'hover:border-primary/50 transition-all duration-300',
                    'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10'
                  )}
                >
                  <div className="mx-auto mb-5 w-40 h-52">
                    <svg viewBox="0 0 200 260" className="w-full h-full text-foreground" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Frame */}
                      <rect x="10" y="10" width="180" height="240" rx="2" stroke="currentColor" strokeWidth="2.5" opacity="0.8" />
                      <rect x="6" y="6" width="188" height="248" rx="3" stroke="currentColor" strokeWidth="1" opacity="0.15" />
                      {/* Corner hatching - TL */}
                      <g opacity="0.18" stroke="currentColor" strokeWidth="0.9">
                        <line x1="14" y1="14" x2="38" y2="38" /><line x1="14" y1="24" x2="28" y2="38" />
                        <line x1="24" y1="14" x2="38" y2="28" /><line x1="34" y1="14" x2="38" y2="18" />
                        <line x1="14" y1="34" x2="18" y2="38" />
                      </g>
                      {/* Corner hatching - TR */}
                      <g opacity="0.18" stroke="currentColor" strokeWidth="0.9">
                        <line x1="162" y1="14" x2="186" y2="38" /><line x1="172" y1="14" x2="186" y2="28" />
                        <line x1="162" y1="24" x2="176" y2="38" /><line x1="182" y1="14" x2="186" y2="18" />
                        <line x1="162" y1="34" x2="166" y2="38" />
                      </g>
                      {/* Corner hatching - BL */}
                      <g opacity="0.18" stroke="currentColor" strokeWidth="0.9">
                        <line x1="14" y1="216" x2="38" y2="240" /><line x1="14" y1="226" x2="28" y2="240" />
                        <line x1="24" y1="216" x2="38" y2="230" /><line x1="14" y1="236" x2="18" y2="240" />
                      </g>
                      {/* Corner hatching - BR */}
                      <g opacity="0.18" stroke="currentColor" strokeWidth="0.9">
                        <line x1="162" y1="216" x2="186" y2="240" /><line x1="172" y1="216" x2="186" y2="230" />
                        <line x1="162" y1="226" x2="176" y2="240" /><line x1="182" y1="216" x2="186" y2="220" />
                      </g>
                      {/* Head */}
                      <path d="M73 108 C71 75, 82 58, 100 55 C118 58, 129 75, 127 108 C127 120, 121 132, 112 139 C106 143, 94 143, 88 139 C79 132, 73 120, 73 108" stroke="currentColor" strokeWidth="2" />
                      {/* Hair - side parted, slicked */}
                      <path d="M73 88 C73 65, 84 54, 100 52 C116 54, 127 65, 127 88" stroke="currentColor" strokeWidth="2.2" />
                      <path d="M74 85 C76 68, 84 57, 95 54" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
                      <path d="M80 82 C82 68, 88 58, 97 55" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                      <path d="M86 80 C88 70, 92 62, 99 56" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
                      <path d="M126 85 C124 68, 118 57, 107 54" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
                      <path d="M122 82 C120 68, 114 58, 105 55" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                      {/* Part line */}
                      <path d="M88 54 C90 52, 92 75, 90 82" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                      {/* Ears */}
                      <path d="M73 96 C67 96, 66 106, 73 108" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M127 96 C133 96, 134 106, 127 108" stroke="currentColor" strokeWidth="1.5" />
                      {/* Eyebrows */}
                      <path d="M82 92 C86 88, 94 88, 97 91" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M103 91 C106 88, 114 88, 118 92" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      {/* Eyes */}
                      <ellipse cx="89" cy="99" rx="5" ry="3.2" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="90" cy="99" r="2" fill="currentColor" />
                      <ellipse cx="111" cy="99" rx="5" ry="3.2" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="110" cy="99" r="2" fill="currentColor" />
                      {/* Nose */}
                      <path d="M100 102 C98 110, 96 116, 98 118 C100 119, 102 118, 100 102" stroke="currentColor" strokeWidth="1" opacity="0.55" />
                      {/* Mouth */}
                      <path d="M92 126 C96 130, 104 130, 108 126" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Neck */}
                      <line x1="92" y1="142" x2="88" y2="165" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="108" y1="142" x2="112" y2="165" stroke="currentColor" strokeWidth="1.5" />
                      {/* Shirt collar */}
                      <path d="M88 165 L100 182" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M112 165 L100 182" stroke="currentColor" strokeWidth="1.8" />
                      {/* Jacket lapels */}
                      <path d="M88 165 L80 178 L65 250" stroke="currentColor" strokeWidth="2" />
                      <path d="M112 165 L120 178 L135 250" stroke="currentColor" strokeWidth="2" />
                      {/* Shoulders */}
                      <path d="M88 165 C58 172, 28 185, 14 250" stroke="currentColor" strokeWidth="2.2" />
                      <path d="M112 165 C142 172, 172 185, 186 250" stroke="currentColor" strokeWidth="2.2" />
                      {/* Jacket crosshatch - left */}
                      <g opacity="0.12" stroke="currentColor" strokeWidth="0.8">
                        <line x1="28" y1="200" x2="52" y2="224" /><line x1="33" y1="195" x2="57" y2="219" />
                        <line x1="38" y1="190" x2="62" y2="214" /><line x1="43" y1="185" x2="67" y2="209" />
                        <line x1="52" y1="200" x2="28" y2="224" /><line x1="57" y1="195" x2="33" y2="219" />
                        <line x1="62" y1="190" x2="38" y2="214" />
                      </g>
                      {/* Jacket crosshatch - right */}
                      <g opacity="0.12" stroke="currentColor" strokeWidth="0.8">
                        <line x1="138" y1="200" x2="162" y2="224" /><line x1="143" y1="195" x2="167" y2="219" />
                        <line x1="148" y1="190" x2="172" y2="214" /><line x1="153" y1="185" x2="177" y2="209" />
                        <line x1="162" y1="200" x2="138" y2="224" /><line x1="167" y1="195" x2="143" y2="219" />
                        <line x1="172" y1="190" x2="148" y2="214" />
                      </g>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Engineering</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Full-stack engineers and architects building scalable, production-ready
                    systems from frontend to cloud infrastructure.
                  </p>
                </div>
              </motion.div>

              {/* Design - Female, wavy hair, turtleneck */}
              <motion.div variants={itemVariants}>
                <div
                  className={cn(
                    'h-full p-6 text-center bg-surface-card rounded-3xl',
                    'border border-border/50',
                    'hover:border-primary/50 transition-all duration-300',
                    'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10'
                  )}
                >
                  <div className="mx-auto mb-5 w-40 h-52">
                    <svg viewBox="0 0 200 260" className="w-full h-full text-foreground" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Frame */}
                      <rect x="10" y="10" width="180" height="240" rx="2" stroke="currentColor" strokeWidth="2.5" opacity="0.8" />
                      <rect x="6" y="6" width="188" height="248" rx="3" stroke="currentColor" strokeWidth="1" opacity="0.15" />
                      {/* Corner hatching */}
                      <g opacity="0.18" stroke="currentColor" strokeWidth="0.9">
                        <line x1="14" y1="14" x2="38" y2="38" /><line x1="14" y1="24" x2="28" y2="38" />
                        <line x1="24" y1="14" x2="38" y2="28" /><line x1="34" y1="14" x2="38" y2="18" />
                        <line x1="162" y1="14" x2="186" y2="38" /><line x1="172" y1="14" x2="186" y2="28" />
                        <line x1="162" y1="24" x2="176" y2="38" /><line x1="182" y1="14" x2="186" y2="18" />
                        <line x1="14" y1="216" x2="38" y2="240" /><line x1="14" y1="226" x2="28" y2="240" />
                        <line x1="24" y1="216" x2="38" y2="230" />
                        <line x1="162" y1="216" x2="186" y2="240" /><line x1="172" y1="216" x2="186" y2="230" />
                        <line x1="162" y1="226" x2="176" y2="240" />
                      </g>
                      {/* Hair - flowing wavy, shoulder length */}
                      <path d="M65 75 C60 55, 80 40, 100 38 C120 40, 140 55, 135 75" stroke="currentColor" strokeWidth="2.2" />
                      <path d="M65 75 C58 95, 52 120, 48 150" stroke="currentColor" strokeWidth="2" />
                      <path d="M135 75 C142 95, 148 120, 152 150" stroke="currentColor" strokeWidth="2" />
                      {/* Hair wave detail lines */}
                      <path d="M62 80 C58 100, 55 115, 52 135" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                      <path d="M68 78 C64 98, 60 118, 55 140" stroke="currentColor" strokeWidth="1" opacity="0.35" />
                      <path d="M138 78 C142 98, 146 118, 149 140" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                      <path d="M132 80 C136 100, 140 115, 145 135" stroke="currentColor" strokeWidth="1" opacity="0.35" />
                      {/* Hair top detail */}
                      <path d="M67 68 C72 48, 88 40, 100 39" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                      <path d="M75 65 C80 50, 90 42, 100 40" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
                      <path d="M133 68 C128 48, 112 40, 100 39" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                      {/* Head */}
                      <path d="M74 108 C72 80, 82 65, 100 62 C118 65, 128 80, 126 108 C126 120, 120 132, 112 138 C106 142, 94 142, 88 138 C80 132, 74 120, 74 108" stroke="currentColor" strokeWidth="2" />
                      {/* Eyebrows */}
                      <path d="M83 94 C87 91, 93 91, 96 93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M104 93 C107 91, 113 91, 117 94" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Eyes - slightly larger, feminine */}
                      <ellipse cx="89" cy="100" rx="5.5" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="90" cy="100" r="2.2" fill="currentColor" />
                      <path d="M83 98 C85 96, 93 96, 95 98" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
                      <ellipse cx="111" cy="100" rx="5.5" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="110" cy="100" r="2.2" fill="currentColor" />
                      <path d="M105 98 C107 96, 115 96, 117 98" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
                      {/* Nose */}
                      <path d="M100 104 C98 112, 97 116, 99 117" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                      {/* Lips */}
                      <path d="M93 124 C96 128, 100 129, 107 124" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M94 124 C98 122, 102 122, 106 124" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                      {/* Neck */}
                      <line x1="93" y1="140" x2="90" y2="162" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="107" y1="140" x2="110" y2="162" stroke="currentColor" strokeWidth="1.5" />
                      {/* Turtleneck */}
                      <path d="M88 158 C88 168, 112 168, 112 158" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M88 162 C88 172, 112 172, 112 162" stroke="currentColor" strokeWidth="1.5" />
                      {/* Shoulders */}
                      <path d="M88 170 C58 178, 28 190, 14 250" stroke="currentColor" strokeWidth="2.2" />
                      <path d="M112 170 C142 178, 172 190, 186 250" stroke="currentColor" strokeWidth="2.2" />
                      {/* Top crosshatch detail */}
                      <g opacity="0.1" stroke="currentColor" strokeWidth="0.7">
                        <line x1="60" y1="195" x2="80" y2="215" /><line x1="55" y1="200" x2="75" y2="220" />
                        <line x1="50" y1="205" x2="70" y2="225" /><line x1="65" y1="195" x2="85" y2="215" />
                        <line x1="80" y1="215" x2="60" y2="195" />
                        <line x1="120" y1="195" x2="140" y2="215" /><line x1="125" y1="200" x2="145" y2="220" />
                        <line x1="130" y1="205" x2="150" y2="225" /><line x1="135" y1="195" x2="155" y2="215" />
                        <line x1="140" y1="215" x2="120" y2="195" />
                      </g>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Design</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    UI/UX designers and product thinkers crafting intuitive interfaces
                    and seamless user experiences.
                  </p>
                </div>
              </motion.div>

              {/* AI & Data - Male, glasses, casual collar */}
              <motion.div variants={itemVariants}>
                <div
                  className={cn(
                    'h-full p-6 text-center bg-surface-card rounded-3xl',
                    'border border-border/50',
                    'hover:border-primary/50 transition-all duration-300',
                    'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10'
                  )}
                >
                  <div className="mx-auto mb-5 w-40 h-52">
                    <svg viewBox="0 0 200 260" className="w-full h-full text-foreground" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Frame */}
                      <rect x="10" y="10" width="180" height="240" rx="2" stroke="currentColor" strokeWidth="2.5" opacity="0.8" />
                      <rect x="6" y="6" width="188" height="248" rx="3" stroke="currentColor" strokeWidth="1" opacity="0.15" />
                      {/* Corner hatching */}
                      <g opacity="0.18" stroke="currentColor" strokeWidth="0.9">
                        <line x1="14" y1="14" x2="38" y2="38" /><line x1="14" y1="24" x2="28" y2="38" />
                        <line x1="24" y1="14" x2="38" y2="28" /><line x1="34" y1="14" x2="38" y2="18" />
                        <line x1="162" y1="14" x2="186" y2="38" /><line x1="172" y1="14" x2="186" y2="28" />
                        <line x1="162" y1="24" x2="176" y2="38" /><line x1="182" y1="14" x2="186" y2="18" />
                        <line x1="14" y1="216" x2="38" y2="240" /><line x1="14" y1="226" x2="28" y2="240" />
                        <line x1="24" y1="216" x2="38" y2="230" />
                        <line x1="162" y1="216" x2="186" y2="240" /><line x1="172" y1="216" x2="186" y2="230" />
                        <line x1="162" y1="226" x2="176" y2="240" />
                      </g>
                      {/* Head */}
                      <path d="M73 108 C71 75, 82 58, 100 55 C118 58, 129 75, 127 108 C127 120, 121 132, 112 139 C106 143, 94 143, 88 139 C79 132, 73 120, 73 108" stroke="currentColor" strokeWidth="2" />
                      {/* Hair - short, textured */}
                      <path d="M73 82 C73 60, 86 48, 100 46 C114 48, 127 60, 127 82" stroke="currentColor" strokeWidth="2.2" />
                      <path d="M76 78 C78 62, 88 52, 100 50" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
                      <path d="M82 74 C84 62, 92 54, 100 51" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                      <path d="M124 78 C122 62, 112 52, 100 50" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
                      <path d="M118 74 C116 62, 108 54, 100 51" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                      {/* Hair texture strokes */}
                      <path d="M88 50 L92 46" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                      <path d="M100 48 L100 44" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                      <path d="M112 50 L108 46" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                      {/* Ears */}
                      <path d="M73 94 C67 94, 66 104, 73 106" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M127 94 C133 94, 134 104, 127 106" stroke="currentColor" strokeWidth="1.5" />
                      {/* Glasses - round */}
                      <circle cx="88" cy="98" r="11" stroke="currentColor" strokeWidth="1.8" />
                      <circle cx="112" cy="98" r="11" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M99 97 L101 97" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M73 96 L77 97" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M127 96 L123 97" stroke="currentColor" strokeWidth="1.5" />
                      {/* Eyes behind glasses */}
                      <ellipse cx="88" cy="99" rx="4" ry="2.5" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="89" cy="99" r="1.8" fill="currentColor" />
                      <ellipse cx="112" cy="99" rx="4" ry="2.5" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="111" cy="99" r="1.8" fill="currentColor" />
                      {/* Eyebrows above glasses */}
                      <path d="M80 85 C84 82, 92 82, 96 84" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M104 84 C108 82, 116 82, 120 85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Nose */}
                      <path d="M100 104 C98 112, 97 117, 99 118" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                      {/* Slight smile */}
                      <path d="M93 126 C97 129, 103 129, 107 126" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Neck */}
                      <line x1="92" y1="142" x2="88" y2="164" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="108" y1="142" x2="112" y2="164" stroke="currentColor" strokeWidth="1.5" />
                      {/* Collar - casual button-down */}
                      <path d="M88 164 L82 172 L78 180" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M112 164 L118 172 L122 180" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M82 172 L92 178" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
                      <path d="M118 172 L108 178" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
                      {/* Shoulders */}
                      <path d="M88 164 C58 172, 28 185, 14 250" stroke="currentColor" strokeWidth="2.2" />
                      <path d="M112 164 C142 172, 172 185, 186 250" stroke="currentColor" strokeWidth="2.2" />
                      {/* Shirt button line */}
                      <line x1="100" y1="178" x2="100" y2="250" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
                      <circle cx="100" cy="195" r="1.5" fill="currentColor" opacity="0.3" />
                      <circle cx="100" cy="215" r="1.5" fill="currentColor" opacity="0.3" />
                      <circle cx="100" cy="235" r="1.5" fill="currentColor" opacity="0.3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">AI & Data</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    AI/ML engineers and data scientists developing intelligent automation
                    and agentic AI platforms.
                  </p>
                </div>
              </motion.div>

              {/* Talent & HR - Female, bob haircut, blazer */}
              <motion.div variants={itemVariants}>
                <div
                  className={cn(
                    'h-full p-6 text-center bg-surface-card rounded-3xl',
                    'border border-border/50',
                    'hover:border-primary/50 transition-all duration-300',
                    'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10'
                  )}
                >
                  <div className="mx-auto mb-5 w-40 h-52">
                    <svg viewBox="0 0 200 260" className="w-full h-full text-foreground" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Frame */}
                      <rect x="10" y="10" width="180" height="240" rx="2" stroke="currentColor" strokeWidth="2.5" opacity="0.8" />
                      <rect x="6" y="6" width="188" height="248" rx="3" stroke="currentColor" strokeWidth="1" opacity="0.15" />
                      {/* Corner hatching */}
                      <g opacity="0.18" stroke="currentColor" strokeWidth="0.9">
                        <line x1="14" y1="14" x2="38" y2="38" /><line x1="14" y1="24" x2="28" y2="38" />
                        <line x1="24" y1="14" x2="38" y2="28" /><line x1="34" y1="14" x2="38" y2="18" />
                        <line x1="162" y1="14" x2="186" y2="38" /><line x1="172" y1="14" x2="186" y2="28" />
                        <line x1="162" y1="24" x2="176" y2="38" /><line x1="182" y1="14" x2="186" y2="18" />
                        <line x1="14" y1="216" x2="38" y2="240" /><line x1="14" y1="226" x2="28" y2="240" />
                        <line x1="24" y1="216" x2="38" y2="230" />
                        <line x1="162" y1="216" x2="186" y2="240" /><line x1="172" y1="216" x2="186" y2="230" />
                        <line x1="162" y1="226" x2="176" y2="240" />
                      </g>
                      {/* Hair - professional bob */}
                      <path d="M62 78 C58 55, 78 38, 100 36 C122 38, 142 55, 138 78" stroke="currentColor" strokeWidth="2.2" />
                      <path d="M62 78 C58 100, 56 125, 60 140" stroke="currentColor" strokeWidth="2" />
                      <path d="M138 78 C142 100, 144 125, 140 140" stroke="currentColor" strokeWidth="2" />
                      {/* Bob ends - curved inward */}
                      <path d="M60 140 C62 146, 68 148, 72 145" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M140 140 C138 146, 132 148, 128 145" stroke="currentColor" strokeWidth="1.8" />
                      {/* Hair detail */}
                      <path d="M64 82 C62 65, 78 45, 95 40" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                      <path d="M70 78 C68 65, 82 48, 98 42" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
                      <path d="M136 82 C138 65, 122 45, 105 40" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                      <path d="M130 78 C132 65, 118 48, 102 42" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
                      {/* Head */}
                      <path d="M74 108 C72 80, 82 65, 100 62 C118 65, 128 80, 126 108 C126 120, 120 132, 112 138 C106 142, 94 142, 88 138 C80 132, 74 120, 74 108" stroke="currentColor" strokeWidth="2" />
                      {/* Eyebrows - arched */}
                      <path d="M82 92 C85 88, 93 88, 97 91" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M103 91 C107 88, 115 88, 118 92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Eyes */}
                      <ellipse cx="89" cy="99" rx="5.5" ry="3.2" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="90" cy="99" r="2" fill="currentColor" />
                      <line x1="83.5" y1="97" x2="94.5" y2="97" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
                      <ellipse cx="111" cy="99" rx="5.5" ry="3.2" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="110" cy="99" r="2" fill="currentColor" />
                      {/* Eyelashes hint */}
                      <path d="M84 97 C86 95, 92 95, 94 97" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
                      <path d="M106 97 C108 95, 114 95, 116 97" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
                      {/* Nose */}
                      <path d="M100 104 C98 110, 97 115, 99 116" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                      {/* Lips */}
                      <path d="M93 124 C96 128, 100 129, 107 124" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M94 124 C98 122, 102 122, 106 124" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                      {/* Earrings */}
                      <circle cx="72" cy="110" r="2.5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                      <circle cx="128" cy="110" r="2.5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                      {/* Neck */}
                      <line x1="93" y1="140" x2="90" y2="162" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="107" y1="140" x2="110" y2="162" stroke="currentColor" strokeWidth="1.5" />
                      {/* Blazer V-neck */}
                      <path d="M90 162 L100 182" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M110 162 L100 182" stroke="currentColor" strokeWidth="1.8" />
                      {/* Blazer lapels */}
                      <path d="M90 162 L82 175 L68 250" stroke="currentColor" strokeWidth="2" />
                      <path d="M110 162 L118 175 L132 250" stroke="currentColor" strokeWidth="2" />
                      {/* Shoulders */}
                      <path d="M90 162 C60 170, 30 185, 14 250" stroke="currentColor" strokeWidth="2.2" />
                      <path d="M110 162 C140 170, 170 185, 186 250" stroke="currentColor" strokeWidth="2.2" />
                      {/* Blazer crosshatch - left */}
                      <g opacity="0.12" stroke="currentColor" strokeWidth="0.8">
                        <line x1="30" y1="198" x2="52" y2="220" /><line x1="35" y1="193" x2="57" y2="215" />
                        <line x1="40" y1="188" x2="62" y2="210" /><line x1="45" y1="183" x2="67" y2="205" />
                        <line x1="52" y1="198" x2="30" y2="220" /><line x1="57" y1="193" x2="35" y2="215" />
                        <line x1="62" y1="188" x2="40" y2="210" />
                      </g>
                      {/* Blazer crosshatch - right */}
                      <g opacity="0.12" stroke="currentColor" strokeWidth="0.8">
                        <line x1="138" y1="198" x2="162" y2="220" /><line x1="143" y1="193" x2="167" y2="215" />
                        <line x1="148" y1="188" x2="172" y2="210" /><line x1="153" y1="183" x2="177" y2="205" />
                        <line x1="162" y1="198" x2="138" y2="220" /><line x1="167" y1="193" x2="143" y2="215" />
                        <line x1="172" y1="188" x2="148" y2="210" />
                      </g>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Talent & HR</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Recruitment strategists and HR consultants connecting organizations
                    with high-quality talent.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Team Description */}
            <motion.div
              className="bg-surface-card rounded-3xl p-8 lg:p-12 mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="max-w-3xl mx-auto space-y-5 text-center">
                <p className="text-foreground text-lg leading-relaxed">
                  {pageData?.team_description_1 || 'At Stanzasoft, our strength lies in our people. We are a cross-functional team of engineers, designers, AI specialists, and talent strategists — united by a shared commitment to building enterprise-grade solutions that deliver real business impact.'}
                </p>
                <p className="text-muted text-lg leading-relaxed">
                  {pageData?.team_description_2 || 'We foster a culture of continuous learning, collaboration, and accountability. Whether working remotely or from our offices, our team stays connected through shared values: integrity, innovation, and an unwavering commitment to client success.'}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
          <div className="container-custom relative z-10">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                      {pageData?.cta_heading ? (
                        pageData.cta_heading
                      ) : (
                        <>
                          Let AI do the Work so you can{' '}
                          <span className="bg-gradient-to-r from-[#814AC8] via-[#DF7AFE] to-[#814AC8] bg-clip-text text-transparent">
                            Scale Faster
                          </span>
                        </>
                      )}
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
      </main>
      <Footer />
    </>
  )
}
