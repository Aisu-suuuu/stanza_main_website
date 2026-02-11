'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

// Full blog post content
const blogContent: Record<
  string,
  {
    title: string
    category: string
    date: string
    readTime: string
    image: string
    content: {
      type: 'paragraph' | 'heading' | 'list' | 'quote'
      text: string
      items?: string[]
    }[]
    relatedSlugs: string[]
  }
> = {
  'ai-integration-transforming-business-operations': {
    title: 'AI Integration: How It\'s Transforming Business Operations in 2026',
    category: 'AI Integration',
    date: 'Feb 5, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1400&h=800&fit=crop&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'Artificial intelligence is no longer a futuristic concept reserved for tech giants. In 2026, businesses of every size are integrating AI into their core operations, fundamentally changing how they serve customers, make decisions, and compete in the market.',
      },
      {
        type: 'heading',
        text: 'Why AI Integration Matters Now',
      },
      {
        type: 'paragraph',
        text: 'The cost of AI infrastructure has dropped by 60% over the past three years while capabilities have increased exponentially. This convergence means that integrating AI is no longer a question of "if" but "how fast." Companies that delay risk falling behind competitors who are already leveraging AI to automate customer interactions, optimize supply chains, and generate data-driven insights in real time.',
      },
      {
        type: 'heading',
        text: 'Key Areas Where AI Is Making an Impact',
      },
      {
        type: 'list',
        text: '',
        items: [
          'Customer Support Automation — AI-powered agents handle 70% of routine inquiries, reducing response times from hours to seconds while maintaining high satisfaction scores.',
          'Predictive Analytics — Machine learning models forecast demand, identify churn risks, and surface revenue opportunities before human analysts can spot the patterns.',
          'Document Processing — Intelligent document parsing extracts data from invoices, contracts, and forms with 99% accuracy, eliminating manual data entry.',
          'Sales Intelligence — AI analyzes prospect behavior, recommends next-best actions, and automatically generates personalized outreach at scale.',
        ],
      },
      {
        type: 'heading',
        text: 'The Integration Approach That Works',
      },
      {
        type: 'paragraph',
        text: 'Successful AI integration doesn\'t mean replacing everything at once. The companies seeing the best results follow a phased approach: identify high-impact, low-risk processes first, build a proof of concept, measure results, and then expand. This iterative method reduces risk and builds organizational confidence in AI capabilities.',
      },
      {
        type: 'quote',
        text: 'The best AI integrations are invisible to end users — they simply make everything faster, smarter, and more reliable.',
      },
      {
        type: 'heading',
        text: 'Common Pitfalls to Avoid',
      },
      {
        type: 'paragraph',
        text: 'Not every AI project succeeds. The most common mistakes include trying to automate processes that aren\'t well-defined, underestimating data quality requirements, and failing to involve end users in the design process. AI works best when it\'s trained on clean, representative data and deployed in workflows that have clear success metrics.',
      },
      {
        type: 'heading',
        text: 'Getting Started',
      },
      {
        type: 'paragraph',
        text: 'If your business hasn\'t started its AI integration journey, now is the time. Begin with an audit of your most repetitive, time-consuming processes. Look for areas where decisions are data-driven but currently manual. These are your highest-ROI opportunities for AI integration. At Stanzasoft, we help companies identify these opportunities and build AI solutions that deliver measurable results from day one.',
      },
    ],
    relatedSlugs: ['smart-workflows-automating-with-ai', 'agentic-ai-future-of-enterprise-automation'],
  },
  'smart-workflows-automating-with-ai': {
    title: 'Smart Workflows: Building Intelligent Automation That Scales',
    category: 'Smart Workflows',
    date: 'Jan 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=800&fit=crop&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'Every growing company hits the same wall: processes that worked with 10 people break down at 100. Manual handoffs, email-based approvals, and spreadsheet tracking don\'t scale. Smart workflows powered by AI solve this by automating the routine while keeping humans in the loop for decisions that matter.',
      },
      {
        type: 'heading',
        text: 'What Makes a Workflow "Smart"?',
      },
      {
        type: 'paragraph',
        text: 'A smart workflow goes beyond simple if-then automation. It uses AI to understand context, make decisions, and adapt to exceptions. Traditional automation breaks when something unexpected happens. Smart workflows handle edge cases by reasoning about the situation and either resolving it automatically or escalating to the right person with full context.',
      },
      {
        type: 'heading',
        text: 'Real-World Smart Workflow Examples',
      },
      {
        type: 'list',
        text: '',
        items: [
          'Invoice Processing — AI reads invoices in any format, matches them to purchase orders, flags discrepancies, routes approvals based on amount thresholds, and posts to accounting software automatically.',
          'Employee Onboarding — From the moment an offer is accepted, smart workflows trigger account provisioning, equipment ordering, training schedules, and mentor assignments without HR lifting a finger.',
          'Lead Qualification — Incoming leads are scored by AI, enriched with firmographic data, assigned to the right sales rep, and auto-scheduled for follow-up based on engagement signals.',
          'Support Ticket Routing — AI categorizes tickets, estimates severity, routes to the specialist with the right expertise and current lowest load, and suggests resolution steps.',
        ],
      },
      {
        type: 'heading',
        text: 'Building Your First Smart Workflow',
      },
      {
        type: 'paragraph',
        text: 'Start by mapping your current process end-to-end. Identify every decision point, handoff, and waiting period. Then ask: which of these steps require genuine human judgment, and which are just following rules? The rule-based steps are your automation candidates. The judgment-heavy steps are where AI assistance — not full automation — delivers the most value.',
      },
      {
        type: 'quote',
        text: 'The goal of smart workflows isn\'t to remove humans from the process — it\'s to remove the process from humans so they can focus on work that requires creativity and judgment.',
      },
      {
        type: 'heading',
        text: 'Measuring Workflow ROI',
      },
      {
        type: 'paragraph',
        text: 'Track three metrics: cycle time (how long the process takes end-to-end), error rate (how often things go wrong), and human hours (how much staff time is consumed). Most companies see 40-60% reduction in cycle time and 80%+ reduction in errors within the first quarter of implementing smart workflows.',
      },
      {
        type: 'heading',
        text: 'The Technology Stack',
      },
      {
        type: 'paragraph',
        text: 'Modern smart workflows combine workflow orchestration platforms with AI/ML services, API integrations, and monitoring tools. The key is choosing components that work together seamlessly and can scale as your needs grow. At Stanzasoft, we design workflow architectures that are modular, maintainable, and ready for the next wave of AI capabilities.',
      },
    ],
    relatedSlugs: ['ai-integration-transforming-business-operations', 'workflow-automation-roi-calculator'],
  },
  'agentic-ai-future-of-enterprise-automation': {
    title: 'Agentic AI: The Future of Enterprise Automation',
    category: 'AI & Machine Learning',
    date: 'Jan 15, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&h=800&fit=crop&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'The AI landscape has shifted dramatically. We\'ve moved from chatbots that answer questions to autonomous agents that can plan, reason, and execute complex multi-step tasks. This is agentic AI, and it represents the biggest leap in enterprise automation since the introduction of cloud computing.',
      },
      {
        type: 'heading',
        text: 'From Chatbots to Agents: What Changed?',
      },
      {
        type: 'paragraph',
        text: 'Traditional AI assistants respond to prompts one at a time. Agentic AI systems operate differently — they receive a goal, break it into subtasks, execute them autonomously, handle errors, and report back with results. They can use tools, access databases, call APIs, and coordinate with other agents to accomplish objectives that previously required human oversight at every step.',
      },
      {
        type: 'heading',
        text: 'Enterprise Use Cases for Agentic AI',
      },
      {
        type: 'list',
        text: '',
        items: [
          'Research & Analysis — An agent can research a market, analyze competitors, pull financial data, and produce a comprehensive report in minutes instead of days.',
          'Code Development — AI agents write, test, debug, and deploy code changes, handling everything from bug fixes to feature implementation with human review at key checkpoints.',
          'Data Pipeline Management — Agents monitor data quality, fix schema issues, optimize queries, and ensure data freshness across your entire analytics infrastructure.',
          'Customer Success — Proactive agents monitor customer health scores, identify at-risk accounts, prepare retention strategies, and draft personalized outreach.',
        ],
      },
      {
        type: 'quote',
        text: 'Agentic AI isn\'t about replacing your team — it\'s about giving every employee a team of tireless digital assistants that handle the operational complexity so humans can focus on strategy and relationships.',
      },
      {
        type: 'heading',
        text: 'Building Trust with Autonomous Systems',
      },
      {
        type: 'paragraph',
        text: 'The biggest challenge with agentic AI isn\'t technical — it\'s trust. Organizations need to establish clear boundaries for what agents can do autonomously versus what requires human approval. The best implementations use a graduated autonomy model: start with AI suggesting actions for human approval, then graduate to autonomous execution for routine decisions as confidence builds.',
      },
      {
        type: 'heading',
        text: 'Getting Ready for the Agentic Era',
      },
      {
        type: 'paragraph',
        text: 'Companies that will benefit most from agentic AI are those investing now in clean data, well-documented processes, and API-accessible tools. If your systems are isolated, your data is messy, and your processes are undocumented, you\'re not ready for agents. Start there. At Stanzasoft, we help companies build the foundation for agentic AI while delivering immediate value through targeted automation.',
      },
    ],
    relatedSlugs: ['ai-integration-transforming-business-operations', 'building-ai-first-products'],
  },
  'salesforce-ai-integration-einstein-copilot': {
    title: 'Salesforce + AI: Unlocking the Power of Einstein Copilot',
    category: 'Salesforce',
    date: 'Jan 3, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=800&fit=crop&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'Salesforce has always been the backbone of enterprise CRM. Now with Einstein Copilot, it\'s becoming the brain. AI-powered features are transforming how sales teams prospect, engage, and close — and the companies adopting these tools are seeing dramatic improvements in pipeline velocity.',
      },
      {
        type: 'heading',
        text: 'What Einstein Copilot Actually Does',
      },
      {
        type: 'paragraph',
        text: 'Einstein Copilot is an AI assistant embedded directly into the Salesforce interface. It can summarize account histories, draft emails, create reports, update records, and answer natural language questions about your data. But its real power lies in proactive insights: it surfaces opportunities you\'d miss and warns about risks before they materialize.',
      },
      {
        type: 'heading',
        text: 'High-Impact Features for Sales Teams',
      },
      {
        type: 'list',
        text: '',
        items: [
          'Automated Call Summaries — Every sales call is transcribed, summarized, and key action items are automatically added to the opportunity record.',
          'Predictive Lead Scoring — AI analyzes historical win patterns to score leads by likelihood to convert, helping reps prioritize their pipeline.',
          'Email Generation — Draft personalized follow-up emails based on meeting notes, account context, and previous interactions.',
          'Pipeline Forecasting — Machine learning models predict quarterly revenue with greater accuracy than traditional forecasting methods.',
        ],
      },
      {
        type: 'heading',
        text: 'Implementation Best Practices',
      },
      {
        type: 'paragraph',
        text: 'The key to successful Einstein deployment is data quality. AI is only as good as the data it\'s trained on. Before enabling Einstein features, ensure your Salesforce instance has clean, consistent data — complete contact records, accurate opportunity stages, and proper activity logging. Companies that skip this step see poor AI performance and lose team trust in the technology.',
      },
      {
        type: 'quote',
        text: 'Einstein Copilot doesn\'t replace great salespeople — it removes the administrative burden so they can spend more time selling and less time updating CRM records.',
      },
      {
        type: 'heading',
        text: 'Measuring Success',
      },
      {
        type: 'paragraph',
        text: 'Track adoption metrics (how many reps use Einstein features daily), productivity metrics (time saved on admin tasks), and outcome metrics (deal velocity, win rates, forecast accuracy). The best implementations show ROI within 90 days. At Stanzasoft, our Salesforce team specializes in Einstein configuration, custom AI model training, and change management to ensure your investment delivers results.',
      },
    ],
    relatedSlugs: ['ai-integration-transforming-business-operations', 'smart-workflows-automating-with-ai'],
  },
  'building-ai-first-products': {
    title: 'Building AI-First Products: A Framework for Startups',
    category: 'Product Strategy',
    date: 'Dec 18, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1400&h=800&fit=crop&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'The most successful AI products don\'t add AI as a feature — they\'re designed around it from the ground up. Building AI-first means rethinking product architecture, user experience, and business models through the lens of what AI makes possible.',
      },
      {
        type: 'heading',
        text: 'What "AI-First" Actually Means',
      },
      {
        type: 'paragraph',
        text: 'An AI-first product is one where the core value proposition depends on AI. Remove the AI, and the product doesn\'t work or becomes dramatically less useful. This is different from AI-enhanced products where intelligence is layered on top of existing functionality. Both approaches are valid, but AI-first products tend to create stronger moats and higher switching costs.',
      },
      {
        type: 'heading',
        text: 'The AI-First Product Framework',
      },
      {
        type: 'list',
        text: '',
        items: [
          'Start with the Data — Before writing a line of code, ask: what data do we need, where does it come from, and how will it improve over time? Your data strategy IS your product strategy.',
          'Design for Uncertainty — AI outputs aren\'t deterministic. Design interfaces that handle confidence levels, provide explanations, and let users correct mistakes gracefully.',
          'Build Feedback Loops — Every user interaction should make the AI better. Design your product so that normal usage generates training data for model improvement.',
          'Plan for Scale — AI inference costs can explode with growth. Choose architectures that let you optimize models, cache results, and batch processing as you scale.',
        ],
      },
      {
        type: 'heading',
        text: 'Common Mistakes in AI-First Development',
      },
      {
        type: 'paragraph',
        text: 'The biggest mistake is building the AI model before validating the problem. Use a "Wizard of Oz" approach — manually deliver the AI-powered experience to validate that customers want it before investing in model development. Another common error is over-promising AI accuracy. Set realistic expectations and design your product to gracefully handle cases where the AI is wrong.',
      },
      {
        type: 'quote',
        text: 'The best AI products feel like magic to users because the complexity is hidden. Every error state, edge case, and uncertainty is handled so smoothly that users only see the result.',
      },
      {
        type: 'heading',
        text: 'From MVP to Scale',
      },
      {
        type: 'paragraph',
        text: 'Start with the simplest AI model that delivers value. Use pre-trained models and APIs before building custom solutions. As you grow and collect more data, gradually replace off-the-shelf components with proprietary models trained on your unique dataset. This approach gets you to market faster while building toward a defensible long-term advantage. At Stanzasoft, we help startups navigate this journey from concept to scaled AI product.',
      },
    ],
    relatedSlugs: ['agentic-ai-future-of-enterprise-automation', 'ai-integration-transforming-business-operations'],
  },
  'workflow-automation-roi-calculator': {
    title: 'The ROI of Workflow Automation: What the Numbers Say',
    category: 'Smart Workflows',
    date: 'Dec 5, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&h=800&fit=crop&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'Leadership teams want hard numbers before investing in automation. Fair enough. Here\'s the data on what workflow automation actually delivers, based on real implementations across dozens of companies.',
      },
      {
        type: 'heading',
        text: 'The Numbers at a Glance',
      },
      {
        type: 'list',
        text: '',
        items: [
          '30-50% reduction in operational costs — by eliminating manual data entry, routing, and follow-up tasks.',
          '60-80% faster process cycle times — approvals that took days now take minutes.',
          '90%+ reduction in human errors — automated data validation and rule enforcement eliminate the most common mistakes.',
          '3-6 month payback period — most workflow automation projects pay for themselves within two quarters.',
        ],
      },
      {
        type: 'heading',
        text: 'How to Calculate Your ROI',
      },
      {
        type: 'paragraph',
        text: 'Start by measuring the current cost of a process: count the number of people involved, estimate hours spent per week, and multiply by their loaded cost. Then estimate the post-automation state: how many hours will the automated process save? What\'s the cost of the automation platform? The difference is your ROI.',
      },
      {
        type: 'heading',
        text: 'Hidden Benefits Most Companies Miss',
      },
      {
        type: 'paragraph',
        text: 'The direct cost savings are just the beginning. Automated workflows also deliver speed-to-market advantages, better compliance and audit trails, improved employee satisfaction (nobody likes manual data entry), and scalability — your automated process handles 10x volume without hiring 10x people.',
      },
      {
        type: 'quote',
        text: 'The real cost of manual processes isn\'t just the salary of the people doing them — it\'s the opportunity cost of what those people could be doing instead.',
      },
      {
        type: 'heading',
        text: 'Where to Start for Maximum ROI',
      },
      {
        type: 'paragraph',
        text: 'Focus on processes that are high-volume, rule-based, and cross-functional. These typically deliver the highest ROI because they involve the most handoffs and waiting time. Common high-ROI targets include invoice processing, employee onboarding, contract approvals, and customer data synchronization. At Stanzasoft, we conduct ROI assessments as part of our workflow automation engagements so you have clear visibility into expected returns before committing to a project.',
      },
    ],
    relatedSlugs: ['smart-workflows-automating-with-ai', 'ai-integration-transforming-business-operations'],
  },
}

// All posts for "related articles" lookup
const allPosts = [
  { slug: 'ai-integration-transforming-business-operations', title: 'AI Integration: How It\'s Transforming Business Operations in 2026', category: 'AI Integration', date: 'Feb 5, 2026', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1400&h=800&fit=crop&q=80' },
  { slug: 'smart-workflows-automating-with-ai', title: 'Smart Workflows: Building Intelligent Automation That Scales', category: 'Smart Workflows', date: 'Jan 28, 2026', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=800&fit=crop&q=80' },
  { slug: 'agentic-ai-future-of-enterprise-automation', title: 'Agentic AI: The Future of Enterprise Automation', category: 'AI & Machine Learning', date: 'Jan 15, 2026', readTime: '10 min read', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&h=800&fit=crop&q=80' },
  { slug: 'salesforce-ai-integration-einstein-copilot', title: 'Salesforce + AI: Unlocking the Power of Einstein Copilot', category: 'Salesforce', date: 'Jan 3, 2026', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=800&fit=crop&q=80' },
  { slug: 'building-ai-first-products', title: 'Building AI-First Products: A Framework for Startups', category: 'Product Strategy', date: 'Dec 18, 2025', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1400&h=800&fit=crop&q=80' },
  { slug: 'workflow-automation-roi-calculator', title: 'The ROI of Workflow Automation: What the Numbers Say', category: 'Smart Workflows', date: 'Dec 5, 2025', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&h=800&fit=crop&q=80' },
]

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogContent[slug]

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-32 pb-20 bg-background">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/blog">
              <Button variant="primary">Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const relatedPosts = allPosts.filter((p) => post.relatedSlugs.includes(p.slug))

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

            {/* Content */}
            <div className="space-y-6">
              {post.content.map((block, index) => {
                if (block.type === 'heading') {
                  return (
                    <h2
                      key={index}
                      className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4"
                    >
                      {block.text}
                    </h2>
                  )
                }
                if (block.type === 'paragraph') {
                  return (
                    <p
                      key={index}
                      className="text-muted text-lg leading-relaxed"
                    >
                      {block.text}
                    </p>
                  )
                }
                if (block.type === 'list') {
                  return (
                    <ul key={index} className="space-y-4 pl-1">
                      {block.items?.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-muted text-lg leading-relaxed"
                        >
                          <span className="text-primary mt-1.5 flex-shrink-0">&#9670;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
                }
                if (block.type === 'quote') {
                  return (
                    <blockquote
                      key={index}
                      className="border-l-4 border-primary pl-6 py-4 my-8"
                    >
                      <p className="text-foreground text-xl font-medium italic leading-relaxed">
                        &ldquo;{block.text}&rdquo;
                      </p>
                    </blockquote>
                  )
                }
                return null
              })}
            </div>

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
      <Footer />
    </>
  )
}
