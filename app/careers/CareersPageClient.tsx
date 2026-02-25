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
    title: 'IT Sales Executive',
    type: '2-5 yrs',
    location: 'Hyderabad',
    department: 'Business Development',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    type: '1-4 yrs',
    location: 'Hyderabad',
    department: 'Engineering',
    description: 'Flutter/Dart, Node.js/Java/Python, REST APIs, Git, CI/CD pipelines.',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    type: '2-5 yrs',
    location: 'Hyderabad',
    department: 'Engineering / Platform',
    description: 'Docker, Kubernetes, CI/CD, Terraform, AWS/GCP/Azure, monitoring & observability.',
  },
  {
    id: 4,
    title: 'SaaS Marketing & BD Manager',
    type: '3+ yrs',
    location: 'T-Hub, Hyderabad',
    department: 'Marketing',
    description: 'B2B SaaS demand generation, ABM, content strategy, partnerships, CRM management.',
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
    subtitle: 'Business Development & Client Acquisition',
    meta: [
      { label: 'Department', value: 'Business Development & Sales' },
      { label: 'Location', value: 'T-Hub 2.0, Hyderabad (Hybrid)' },
      { label: 'Employment Type', value: 'Full-Time' },
      { label: 'Experience', value: '2 – 5 Years' },
      { label: 'Reports To', value: 'Founder / Head of Business Operations' },
    ],
    about:
      'Stanza Soft India Private Limited is a technology company headquartered at T-Hub 2.0, Hyderabad, with a US presence in San Francisco. We build AI-powered intelligence systems, enterprise platforms, and SaaS products for government agencies, mid-market, and enterprise clients. Our flagship projects include AI-driven agentic platforms and legacy software modernisation tools. We are looking for a driven IT Sales Executive to spearhead client acquisition, manage the sales pipeline, and help us scale revenue across India and the US.',
    sections: [
      {
        heading: 'Key Responsibilities',
        items: [
          'Identify, prospect, and engage potential clients across enterprise, government, and mid-market segments through cold outreach, networking, and inbound lead qualification.',
          'Own the full sales cycle from lead generation through proposal, negotiation, and deal closure for IT services and SaaS product offerings.',
          'Build and maintain a healthy sales pipeline using CRM tools; provide accurate weekly and monthly forecasts to leadership.',
          'Develop compelling pitch decks, proposals, and RFP/RFI responses tailored to client needs in collaboration with the technical and design teams.',
          'Establish and nurture long-term relationships with key decision-makers, C-suite executives, and procurement teams.',
          'Research market trends, competitor offerings, and industry developments to refine go-to-market strategies.',
          'Collaborate closely with the delivery and engineering teams to ensure smooth handoffs and realistic project scoping.',
          'Represent Stanza Soft at industry events, conferences, and client meetings to build brand visibility.',
          'Track and report on KPIs including revenue targets, conversion rates, and client acquisition costs.',
        ],
      },
      {
        heading: 'Requirements',
        items: [
          '2–5 years of experience in B2B IT sales, enterprise software sales, or technology consulting sales.',
          'Demonstrated track record of meeting or exceeding revenue targets in IT services or SaaS sales.',
          'Strong understanding of the IT services landscape including cloud, AI/ML, DevOps, and digital transformation.',
          'Excellent verbal and written communication skills with the ability to articulate complex technical solutions to non-technical stakeholders.',
          'Experience with CRM platforms (Salesforce, HubSpot, or equivalent).',
          'Self-motivated, target-driven, and comfortable working in a fast-paced startup environment.',
          'Familiarity with government procurement processes (GeM, tenders) is a strong plus.',
          "Bachelor's degree in Business, Marketing, IT, or a related field.",
        ],
      },
      {
        heading: 'Nice to Have',
        items: [
          'Prior experience selling to government or law enforcement agencies in India.',
          'Exposure to SaaS product sales and recurring revenue models.',
          'Existing network of enterprise or government contacts in the Telangana / AP region.',
          'Understanding of proposal frameworks for US-based clients.',
        ],
      },
      {
        heading: 'What We Offer',
        items: [
          'Competitive base salary with an aggressive commission structure.',
          'Opportunity to shape the sales function at a growing deep-tech company.',
          'Direct mentorship from the Founder and leadership team.',
          'Flexible hybrid work model based at T-Hub 2.0, Hyderabad.',
          'Exposure to cutting-edge AI/ML projects and government-scale platforms.',
        ],
      },
    ],
  },
  2: {
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
  3: {
    subtitle: 'Cloud Infrastructure, CI/CD & Platform Reliability',
    meta: [
      { label: 'Department', value: 'Engineering / Platform' },
      { label: 'Location', value: 'T-Hub 2.0, Hyderabad (Hybrid)' },
      { label: 'Employment Type', value: 'Full-Time' },
      { label: 'Experience', value: '2 – 5 Years' },
      { label: 'Reports To', value: 'Founder / Lead Engineer' },
    ],
    about:
      'Stanza Soft India Private Limited operates AI-powered platforms and enterprise solutions that demand high availability, security, and scalable infrastructure. Our systems serve government agencies and enterprise clients where downtime is not an option. We are looking for a DevOps Engineer to own and evolve our cloud infrastructure, CI/CD pipelines, and platform reliability—ensuring our applications are deployed, monitored, and scaled efficiently across Vercel, AWS, and hybrid environments.',
    sections: [
      {
        heading: 'Key Responsibilities',
        items: [
          'Design, implement, and maintain CI/CD pipelines for automated builds, testing, and deployments across multiple environments (staging, production).',
          'Manage and optimize cloud infrastructure on AWS (EC2, S3, RDS, Lambda, ECS/EKS) and Vercel for frontend deployments.',
          'Containerise applications using Docker and orchestrate workloads with Kubernetes or ECS as needed.',
          'Implement Infrastructure as Code (IaC) using Terraform, CloudFormation, or Pulumi for reproducible, version-controlled environments.',
          'Set up comprehensive monitoring, alerting, and logging using tools like CloudWatch, Grafana, Prometheus, or Datadog.',
          'Harden security posture by managing IAM policies, secrets management (AWS Secrets Manager / Vault), network configurations, and compliance controls.',
          'Automate routine operational tasks including backups, scaling policies, certificate renewals, and database maintenance.',
          'Collaborate with the development team to optimize application performance, troubleshoot production issues, and improve deployment frequency.',
          'Document infrastructure architecture, runbooks, and incident response procedures.',
          'Evaluate and recommend new tools, services, and practices to improve platform reliability and developer productivity.',
        ],
      },
      {
        heading: 'Requirements',
        items: [
          '2–5 years of hands-on DevOps or Site Reliability Engineering (SRE) experience.',
          'Strong expertise with AWS services (EC2, S3, RDS, Lambda, VPC, IAM, ECS/EKS).',
          'Proficiency in Docker containerisation and experience with Kubernetes or ECS orchestration.',
          'Hands-on experience with CI/CD tools such as GitHub Actions, GitLab CI, Jenkins, or CircleCI.',
          'Working knowledge of Infrastructure as Code (Terraform, CloudFormation, or Pulumi).',
          'Solid scripting skills in Bash, Python, or similar for automation tasks.',
          'Understanding of networking fundamentals, DNS, load balancing, SSL/TLS, and firewall configurations.',
          'Experience with monitoring and observability stacks (Prometheus, Grafana, ELK, Datadog, or CloudWatch).',
          "Bachelor's degree in Computer Science, IT, or equivalent practical experience.",
        ],
      },
      {
        heading: 'Nice to Have',
        items: [
          'AWS Solutions Architect or DevOps Engineer certification.',
          'Experience managing infrastructure for AI/ML workloads (GPU instances, model serving).',
          'Familiarity with Vercel deployment pipelines and serverless architectures.',
          'Exposure to cost optimisation strategies for cloud spend.',
          'Experience with security compliance frameworks (SOC 2, ISO 27001).',
        ],
      },
      {
        heading: 'What We Offer',
        items: [
          'Own the infrastructure for mission-critical AI and enterprise platforms.',
          'Direct collaboration with the Founder and engineering leadership.',
          'Opportunity to build the DevOps function from the ground up at a growing company.',
          'Flexible hybrid work model at T-Hub 2.0, Hyderabad.',
          'Access to modern cloud tooling and continuous learning opportunities.',
        ],
      },
    ],
  },
  4: {
    subtitle: 'Client Acquisition, Revenue Growth & Go-to-Market Strategy',
    meta: [
      { label: 'Company', value: 'Stanza Soft India Private Limited' },
      { label: 'Department', value: 'Marketing & Business Development' },
      { label: 'Location', value: 'T-Hub 2.0, Hyderabad (Hybrid) | Remote flexibility for US/UK hours' },
      { label: 'Employment Type', value: 'Full-Time' },
      { label: 'Experience', value: '3+ Years in B2B SaaS / Technology Sales & Marketing' },
      { label: 'Education', value: 'B.Tech/B.E. (CSE/IT) + MBA from Tier-1/Tier-2 B-School' },
      { label: 'Reports To', value: 'Founder / CEO' },
    ],
    about:
      'Stanza Soft India Private Limited is a deep-tech company headquartered at T-Hub 2.0, Hyderabad, with a US presence in San Francisco. We build AI-powered platforms and SaaS products for enterprise clients, government agencies, and SMBs across India, US, and UK markets.\n\nWe are looking for a high-impact SaaS Marketing & Business Development Manager who combines technical understanding with exceptional communication skills to drive customer acquisition, revenue growth, and market expansion. This is a client-facing, revenue-accountable role where you will own the entire funnel from lead generation and qualification to demos, proposals, negotiations, and conversions.\n\nYou will work directly with the Founder to shape go-to-market strategy, execute multi-channel marketing campaigns, build partnerships, and establish our SaaS products in India, US, and UK markets.',
    sections: [
      {
        heading: 'Key Responsibilities',
        items: [
          'Own end-to-end client acquisition: identify, qualify, engage, demo, negotiate, and close B2B SaaS deals with agencies, SaaS companies, e-commerce businesses, and enterprises.',
          'Conduct discovery calls and product demos tailored to prospect pain points; translate technical capabilities into business value propositions.',
          'Manage and optimize the sales pipeline using CRM tools (HubSpot, Salesforce, or equivalent); maintain accurate forecasts and conversion metrics.',
          'Achieve monthly/quarterly revenue targets and MRR growth goals; take ownership of CAC, LTV, and conversion rate KPIs.',
          'Develop and execute outbound prospecting strategies including LinkedIn outreach, cold email campaigns, and targeted account-based marketing (ABM).',
          'Plan and execute multi-channel marketing campaigns across content marketing, SEO, paid ads (Google, LinkedIn), email nurture sequences, and community engagement.',
          'Create compelling sales collateral: pitch decks, case studies, ROI calculators, whitepapers, and product one-pagers tailored to different buyer personas.',
          'Drive product launches on Product Hunt, Hacker News, and developer communities (Reddit, Dev.to, Discord, Stack Overflow).',
          'Coordinate webinars, live demos, and virtual events to generate qualified leads and build brand awareness.',
          'Collaborate with the product and engineering teams to translate customer feedback into product improvements and feature prioritization.',
          'Lead go-to-market efforts for US and UK markets; adapt messaging, pricing, and positioning for international audiences.',
          'Build and manage partner relationships with agencies, consultancies, and channel partners in target markets.',
          'Represent Stanza Soft at industry conferences, SaaS events, and developer meetups.',
          'Develop deep product expertise to conduct technical demos and answer prospect questions on architecture, security, and integration.',
          'Provide market intelligence and competitive analysis to inform product roadmap and positioning decisions.',
        ],
      },
      {
        heading: 'Required Qualifications',
        items: [
          'B.Tech / B.E. in Computer Science, Information Technology, or related engineering discipline from a recognized institution.',
          'MBA / PGDM from a Tier-1 or Tier-2 B-School (IIMs, ISB, XLRI, FMS, MDI, SPJIMR, NMIMS, SIBM, or equivalent) with specialization in Marketing, Sales, or Strategy.',
          'Minimum 3+ years of experience in B2B SaaS sales, technology marketing, or business development roles with demonstrated revenue impact.',
          'Proven track record of meeting or exceeding sales targets in SaaS, cloud services, or enterprise software sales.',
          'Experience with full-cycle sales: lead generation, qualification, demos, proposals, negotiations, and closing.',
          'Hands-on experience with CRM platforms (HubSpot, Salesforce, Pipedrive) and marketing automation tools.',
          'Exceptional English communication skills — both written and verbal — with the ability to craft compelling narratives and deliver polished presentations.',
          'Proven ability to engage C-suite executives, CTOs, VP Engineering, and technical decision-makers in consultative sales conversations.',
          'Experience conducting product demos, discovery calls, and client meetings with professionalism and technical credibility.',
          'Strong presentation skills with experience creating and delivering pitch decks to enterprise clients.',
          'Solid understanding of software development lifecycle, web technologies, and cloud infrastructure.',
          'Familiarity with SaaS business models, subscription metrics (MRR, ARR, churn, LTV, CAC), and growth marketing strategies.',
          'Ability to quickly learn and articulate complex technical products to both technical and non-technical audiences.',
        ],
      },
      {
        heading: 'Nice to Have',
        items: [
          'Prior experience selling developer tools, DevOps platforms, or enterprise software solutions.',
          'Experience with international sales, particularly US and UK enterprise markets.',
          'Background in product marketing, growth hacking, or demand generation for early-stage startups.',
          'Familiarity with AI/ML products and ability to communicate AI value propositions effectively.',
          'Experience with content marketing, SEO strategy, and thought leadership development.',
          'Existing network of contacts in technology companies, SaaS businesses, or enterprise IT decision-makers.',
          'Track record of successful Product Hunt launches or developer community engagement.',
        ],
      },
      {
        heading: 'What We Offer',
        items: [
          'Competitive base salary with aggressive performance-based incentives and commission structure tied to revenue targets.',
          'Opportunity to shape the go-to-market strategy for cutting-edge AI-powered products from the ground up.',
          'Direct mentorship from the Founder with exposure to strategic decision-making and investor interactions.',
          'Equity/ESOP participation for exceptional performers (subject to company policy).',
          "Flexible hybrid work model based at T-Hub 2.0, Hyderabad — India's largest innovation ecosystem.",
          'International exposure with opportunities for US/UK client engagement and potential travel.',
          'Continuous learning budget for certifications, conferences, and professional development.',
          'Fast-track career growth in a high-impact role at an early-stage deep-tech company.',
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
