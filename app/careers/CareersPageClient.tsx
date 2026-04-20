'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Zap,
  Heart,
  TrendingUp,
  ArrowRight,
  X,
  Mail,
  FileText,
} from 'lucide-react'

// Props interface for WordPress integration
interface CareersPageClientProps {
  pageData?: {
    hero_badge?: string
    hero_heading?: string
    hero_subheading?: string
    benefits_heading?: string
    benefits_subheading?: string
    positions_heading?: string
    positions_subheading?: string
    culture_heading?: string
    culture_subheading?: string
    culture_description?: string
    cta_heading?: string
    cta_subtext?: string
    cta_button_text?: string
    cta_button_link?: string
  }
  positions?: {
    id: number
    title: string
    type: string
    location: string
    department: string
    description?: string
  }[]
  benefits?: {
    title: string
    description: string
    iconName?: string
  }[]
}

function BlurSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start center'],
  })
  const blurValue = useTransform(scrollYProgress, [0, 1], [6, 0])
  const filterBlur = useTransform(blurValue, (v) => `blur(${v}px)`)

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ filter: filterBlur }}>
        {children}
      </motion.div>
    </div>
  )
}

// Benefits data (hardcoded with Lucide icons)
const defaultBenefits = [
  {
    icon: Users,
    title: 'Collaborative Culture',
    description:
      'Work alongside talented individuals who are passionate about innovation and building great products together.',
  },
  {
    icon: Zap,
    title: 'Growth Opportunities',
    description:
      'Continuous learning through mentorship, training programs, and exposure to cutting-edge technologies.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description:
      'Flexible work arrangements, generous PTO, and a culture that values your well-being and personal time.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Compensation',
    description:
      'Industry-leading salaries, equity options, comprehensive health benefits, and performance bonuses.',
  },
]

// Default open positions data
const defaultPositions = [
  {
    id: 1,
    title: 'Full Stack Developer',
    type: '1-4 yrs',
    location: 'Hyderabad',
    department: 'Engineering',
    description: 'Flutter/Dart, Node.js/Java/Python, REST APIs, Git, CI/CD pipelines.',
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    type: '2+ yrs',
    location: 'Hyderabad',
    department: 'Engineering',
    description: 'CI/CD pipelines, Terraform, Docker, Kubernetes, AWS/Azure/GCP.',
  },
  {
    id: 3,
    title: 'AI Video Editor',
    type: '1-2 yrs',
    location: 'Hyderabad',
    department: 'Marketing',
    description: 'Adobe Premiere Pro, After Effects, Runway ML, Pictory, Synthesia, Descript.',
  },
]

// Structured JD content for each position
interface JdSection {
  heading: string
  items: string[]
}

interface JdContent {
  subtitle: string
  meta: { label: string; value: string }[]
  about: string
  sections: JdSection[]
}

const jdContent: Record<number, JdContent> = {
  1: {
    subtitle: 'Frontend, Backend & AI-Integrated Web Applications',
    meta: [
      { label: 'Department', value: 'Engineering' },
      { label: 'Location', value: 'T-Hub 2.0, Hyderabad (Hybrid)' },
      { label: 'Employment Type', value: 'Full-Time' },
      { label: 'Experience', value: '1 – 4 Years' },
      { label: 'Reports To', value: 'Founder / Lead Engineer' },
    ],
    about:
      'Stanza Soft India Private Limited builds AI-powered platforms, enterprise solutions, and innovative SaaS products from our base at T-Hub 2.0, Hyderabad. Our engineering team works on production systems that serve government agencies and enterprise clients, using modern stacks including Next.js, React, Python, and cloud-native architectures. We are hiring a Full Stack Developer to design, build, and ship end-to-end features across our product portfolio—including AI-integrated web applications that modernise legacy software and deliver intelligent automation.',
    sections: [
      {
        heading: 'Key Responsibilities',
        items: [
          'Design and develop responsive, high-performance web applications using React, Next.js, and TypeScript on the frontend.',
          'Build robust backend APIs and services using Python (FastAPI / Flask) and/or Node.js with proper authentication, rate limiting, and error handling.',
          'Integrate AI/ML models and third-party AI APIs (OpenAI, Anthropic, Google Gemini) into production web applications.',
          'Work with databases including PostgreSQL, MongoDB, and Redis; design efficient schemas, queries, and caching strategies.',
          'Implement CI/CD pipelines, write automated tests, and follow engineering best practices for code quality and reliability.',
          'Collaborate with the design team to translate Figma mockups into pixel-perfect, accessible UI components.',
          'Participate in architecture discussions, code reviews, and sprint planning to maintain high engineering standards.',
          'Deploy and manage applications on cloud platforms (Vercel, AWS, or GCP) with proper monitoring and logging.',
          'Contribute to internal tooling, developer documentation, and reusable component libraries.',
        ],
      },
      {
        heading: 'Requirements',
        items: [
          '1–4 years of professional experience in full stack web development.',
          'Strong proficiency in React.js or Next.js with TypeScript.',
          'Backend development experience with Python (FastAPI/Flask) or Node.js (Express).',
          'Solid understanding of RESTful API design, authentication (JWT, OAuth), and API security best practices.',
          'Working knowledge of relational (PostgreSQL) and NoSQL (MongoDB) databases.',
          'Familiarity with Git, CI/CD workflows, and agile development methodologies.',
          'Experience deploying applications on Vercel, AWS, GCP, or similar cloud platforms.',
          'Strong problem-solving skills and attention to code quality, testing, and documentation.',
          "Bachelor's degree in Computer Science, IT, or equivalent practical experience.",
        ],
      },
      {
        heading: 'Nice to Have',
        items: [
          'Experience integrating LLM APIs (OpenAI, Anthropic, Google Gemini) into web applications.',
          'Familiarity with AI agent frameworks (LangChain, CrewAI, or similar).',
          'Exposure to Neo4j or graph database concepts.',
          'Experience with real-time features (WebSockets, Server-Sent Events).',
          'Contributions to open-source projects or a strong portfolio of personal projects.',
        ],
      },
      {
        heading: 'What We Offer',
        items: [
          'Work on production AI-integrated platforms used by real clients at scale.',
          'Direct collaboration with and mentorship from the Founder and senior engineers.',
          'Opportunity to shape technical direction in a growing deep-tech company.',
          'Flexible hybrid work model at T-Hub 2.0, Hyderabad.',
          'Continuous learning budget and access to industry events.',
        ],
      },
    ],
  },
  2: {
    subtitle: 'CI/CD, Infrastructure as Code & Cloud-Native Deployments',
    meta: [
      { label: 'Department', value: 'Engineering' },
      { label: 'Location', value: 'T-Hub 2.0, Hyderabad (On-site)' },
      { label: 'Employment Type', value: 'Full-Time' },
      { label: 'Experience', value: '2+ Years' },
      { label: 'Reports To', value: 'Lead Engineer / Founder' },
    ],
    about:
      'Stanza Soft India Private Limited builds SaaS and AI-driven products from T-Hub 2.0, Hyderabad. We are hiring a DevOps Engineer to streamline our development and deployment processes, build scalable, secure, and highly available infrastructure, and collaborate closely with our engineering and product teams to ship reliable systems.',
    sections: [
      {
        heading: 'Key Responsibilities',
        items: [
          'Design and manage CI/CD pipelines for fast, reliable releases.',
          'Automate infrastructure provisioning using Terraform and other IaC tools.',
          'Deploy and operate containerised workloads using Docker and Kubernetes.',
          'Monitor system performance, reliability, and availability across environments.',
          'Implement logging, monitoring, and alerting stacks for proactive incident response.',
          'Ensure DevSecOps practices are embedded across the SDLC.',
          'Troubleshoot production issues and continuously optimise systems for cost and performance.',
        ],
      },
      {
        heading: 'Required Skills',
        items: [
          '2+ years of experience in DevOps, SRE, or Platform Engineering.',
          'Hands-on experience with AWS, Azure, or GCP.',
          'Proficiency with CI/CD tools (Jenkins, GitHub Actions, GitLab CI).',
          'Strong working knowledge of Docker and Kubernetes.',
          'Experience with Terraform or other IaC tools.',
          'Solid Linux fundamentals and scripting skills (Bash, Python).',
          'Experience with monitoring tools such as Prometheus, Grafana, and the ELK stack.',
        ],
      },
      {
        heading: 'Good to Have',
        items: [
          'Experience authoring and managing Helm charts.',
          'Understanding of microservices architecture patterns.',
          'Exposure to cloud cost optimisation techniques.',
          'Familiarity with Agile / Scrum methodologies.',
        ],
      },
      {
        heading: 'What We Offer',
        items: [
          'Work on SaaS and AI-driven products used by enterprise clients.',
          'Collaborative work environment with senior engineers and the Founder.',
          'Learning & development support and a growth-focused culture.',
          'Competitive salary and incentives.',
        ],
      },
    ],
  },
  3: {
    subtitle: 'Creative Video Production Powered by AI Tools',
    meta: [
      { label: 'Department', value: 'Marketing' },
      { label: 'Location', value: 'T-Hub 2.0, Hyderabad (On-site)' },
      { label: 'Employment Type', value: 'Full-Time' },
      { label: 'Experience', value: '1 – 2 Years' },
      { label: 'Reports To', value: 'Founder / Marketing Lead' },
    ],
    about:
      'We are looking for a creative and tech-savvy AI Video Editor to produce engaging, high-quality video content using the latest AI-powered tools. The ideal candidate has a strong sense of storytelling, sharp editing skills, and hands-on experience with modern video creation platforms used across reels, explainers, tutorials, and ads.',
    sections: [
      {
        heading: 'Key Responsibilities',
        items: [
          'Create and edit engaging video content including reels, explainers, tutorials, and ads.',
          'Leverage AI tools for video generation, voiceovers, subtitles, and automation.',
          'Edit raw footage into polished videos using professional editing software.',
          'Collaborate with marketing and content teams to align videos with brand goals.',
          'Add effects, transitions, sound design, and motion graphics.',
          'Optimise videos for YouTube, Instagram, and LinkedIn.',
          'Stay updated with the latest AI video trends and tools.',
        ],
      },
      {
        heading: 'Required Skills & Qualifications',
        items: [
          '1–2 years of experience in video editing or AI-based content creation.',
          'Hands-on experience with Adobe Premiere Pro and After Effects.',
          'Experience with AI tools such as Runway ML, Pictory, Synthesia, and Descript.',
          'Working knowledge of Canva or similar design tools.',
          'Basic understanding of storytelling, pacing, and visual composition.',
          'Experience creating short-form content (Reels, Shorts).',
          'Strong attention to detail and creativity.',
        ],
      },
      {
        heading: 'Good to Have',
        items: [
          'Experience in EdTech, SaaS, or Digital Marketing content.',
          'Knowledge of motion graphics and animation.',
          'Familiarity with AI voice tools and avatar-based videos.',
          'Basic understanding of SEO for video platforms.',
        ],
      },
      {
        heading: 'What We Offer',
        items: [
          'Creative freedom to shape the visual voice of an AI-first brand.',
          'Direct collaboration with marketing, product, and the Founder.',
          'Access to premium AI and editing tools.',
          'On-site role at T-Hub 2.0, Hyderabad, with continuous learning support.',
        ],
      },
    ],
  },
}

// Team images
const teamImages = [
  {
    src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
    alt: 'Team collaboration',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    alt: 'Office meeting',
  },
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    alt: 'Team discussion',
  },
]

// Smooth fade-up animation for cards
const smoothItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export default function CareersPageClient({ pageData, positions, benefits }: CareersPageClientProps) {
  const [showApplyModal, setShowApplyModal] = useState(false)
  const [viewJdId, setViewJdId] = useState<number | null>(null)

  // Lock body scroll + stop Lenis when any modal is open
  useEffect(() => {
    const isOpen = showApplyModal || viewJdId !== null
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.__lenis?.stop()
    } else {
      document.body.style.overflow = ''
      window.__lenis?.start()
    }
    return () => {
      document.body.style.overflow = ''
      window.__lenis?.start()
    }
  }, [showApplyModal, viewJdId])
  const activePositions = positions && positions.length > 0 ? positions : defaultPositions

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background:
                'radial-gradient(circle at center, var(--primary) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />

          <div className="container-custom relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-foreground bg-primary/10 rounded-full border border-primary/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {pageData?.hero_badge || "We're Hiring"}
              </motion.span>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {pageData?.hero_heading || <>Join Our{' '}<span className="gradient-text">Team</span></>}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {pageData?.hero_subheading ||
                  "Be part of a product-centric technology company building enterprise-grade solutions. We're looking for talented individuals who want to make an impact and grow with us."}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {pageData?.benefits_heading || 'Why Work With Us'}
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                {pageData?.benefits_subheading ||
                  'We believe in creating an environment where everyone can thrive and do their best work.'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {defaultBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={smoothItemVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className={cn(
                    'relative p-6 rounded-3xl bg-surface-card border border-foreground/10',
                    'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300'
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {pageData?.positions_heading || 'Open Positions'}
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                {pageData?.positions_subheading ||
                  'Find your next opportunity and help us build the future.'}
              </p>
            </motion.div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {activePositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  variants={smoothItemVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className={cn(
                    'group relative p-6 rounded-3xl bg-surface-card border border-foreground/10',
                    'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300'
                  )}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-foreground bg-primary/10 px-2 py-0.5 rounded">
                          {position.department}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-foreground transition-colors">
                        {position.title}
                      </h3>
                      {position.description && (
                        <p className="text-sm text-muted mb-3 leading-relaxed">
                          {position.description}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex flex-col sm:flex-row gap-2">
                      {jdContent[position.id] && (
                        <Button
                          variant="outline"
                          size="md"
                          className="group/btn w-full md:w-auto"
                          onClick={() => setViewJdId(position.id)}
                        >
                          <FileText className="w-4 h-4 mr-1" />
                          View JD
                        </Button>
                      )}
                      <Button
                        variant="primary"
                        size="md"
                        className="group/btn w-full md:w-auto"
                        onClick={() => setShowApplyModal(true)}
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No positions message - hidden but can be used */}
            {activePositions.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Briefcase className="w-16 h-16 text-muted mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No Open Positions
                </h3>
                <p className="text-muted">
                  Check back soon or send us your resume for future opportunities.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Team Culture Section */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {pageData?.culture_heading || 'Our Culture'}
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                {pageData?.culture_subheading ||
                  'A glimpse into life at Stanzasoft - where innovation meets collaboration.'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={smoothItemVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className="relative rounded-3xl bg-surface-card border border-foreground/10 p-2 overflow-hidden group"
                >
                  <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Culture description */}
            <motion.div
              className="mt-12 max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-muted leading-relaxed">
                {pageData?.culture_description ||
                  'At Stanzasoft, we foster an environment of continuous learning, open communication, and mutual respect. Our diverse team brings together unique perspectives that drive innovation and create exceptional solutions for our clients.'}
              </p>
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
              <div className="bg-surface-card rounded-3xl border border-border px-8 py-16 md:px-16 md:py-20">
                  <div className="flex flex-col items-center text-center">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                      {pageData?.cta_heading || (
                        <>
                          Let AI do the Work so you can{' '}
                          <span className="text-foreground">
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
                          'bg-primary text-primary-foreground',
                          'font-semibold',
                          'px-10 py-5 text-lg rounded-xl',
                          'hover:opacity-90 hover:scale-105',
                          'transition-all duration-300'
                        )}
                      >
                        {pageData?.cta_button_text || 'Book a free call'}
                      </Button>
                    </Link>
                  </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Apply Modal */}
      <AnimatePresence>
        {showApplyModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowApplyModal(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Card */}
            <motion.div
              className="relative bg-surface-card rounded-3xl border border-foreground/10 p-6 sm:p-8 md:p-10 max-w-md w-full shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Close button */}
              <button
                onClick={() => setShowApplyModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-muted" />
              </button>

              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Mail className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Apply for This Role
                </h3>
                <p className="text-muted leading-relaxed mb-8">
                  Please mail your resume to{' '}
                  <span className="text-foreground font-medium">careers@stanzasoft.com</span>{' '}
                  with the role title in the subject line.
                </p>
                <a
                  href="mailto:careers@stanzasoft.com?subject=Job Application — Stanzasoft"
                  className={cn(
                    'inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold',
                    'bg-primary text-white shadow-lg shadow-primary/25',
                    'hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]',
                    'transition-all duration-300'
                  )}
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* View JD Popup */}
      <AnimatePresence>
        {viewJdId !== null && jdContent[viewJdId] && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setViewJdId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Popup box — constrained height, internal scroll */}
            <motion.div
              className="relative bg-surface-card rounded-3xl border border-foreground/10 shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col"
              style={{ overscrollBehavior: 'contain' }}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setViewJdId(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-muted" />
              </button>

              {/* Scrollable content inside the card */}
              <div
                className="overflow-y-auto p-6 sm:p-8"
                style={{ overscrollBehavior: 'contain' }}
                data-lenis-prevent
                onWheel={(e) => e.stopPropagation()}
              >
                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-1 pr-10">
                  {activePositions.find((p) => p.id === viewJdId)?.title}
                </h3>
                <p className="text-sm text-muted mb-6">{jdContent[viewJdId].subtitle}</p>

                {/* About */}
                <p className="text-sm text-muted leading-relaxed whitespace-pre-line mb-6">
                  {jdContent[viewJdId].about}
                </p>

                {/* All sections */}
                <div className="space-y-6">
                  {jdContent[viewJdId].sections.map((section) => (
                    <div key={section.heading}>
                      <h4 className="text-sm font-semibold text-foreground mb-3">{section.heading}</h4>
                      <ul className="space-y-1.5">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground/40 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
