export interface FallbackProduct {
  title: string
  slug: string
  description: string
  overview: string
  features: string[]
  highlights: { title: string; description: string }[]
  gradient: string
}

export const fallbackProducts: FallbackProduct[] = [
  {
    title: 'StanzaBot',
    slug: 'stanzabot',
    description:
      'AI-powered customer service chatbot platform that automates support, integrates with your CRM, and learns from every interaction to deliver exceptional customer experiences.',
    overview:
      'StanzaBot is our flagship conversational AI platform designed to transform how businesses handle customer interactions. Built on advanced natural language processing and machine learning, StanzaBot understands context, handles complex queries, and seamlessly escalates to human agents when needed. It integrates with popular CRM platforms, ticketing systems, and communication channels to provide a unified support experience.',
    features: [
      'Natural language understanding with contextual awareness',
      'Multi-channel deployment (web, mobile, WhatsApp, Slack)',
      'Seamless CRM integration (Salesforce, HubSpot, Zoho)',
      'Automated ticket creation and routing',
      'Real-time sentiment analysis and escalation',
      'Custom training on your business data',
      'Analytics dashboard with conversation insights',
      'Multi-language support for global teams',
    ],
    highlights: [
      {
        title: 'Reduce Support Costs by 60%',
        description:
          'Automate repetitive queries and free your team to handle complex issues that require human expertise.',
      },
      {
        title: '24/7 Instant Responses',
        description:
          'Deliver round-the-clock support without staffing overhead, ensuring customers get help whenever they need it.',
      },
      {
        title: 'Continuous Learning',
        description:
          'StanzaBot improves with every interaction, learning from resolved tickets and agent feedback to enhance accuracy.',
      },
    ],
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'StanzaFlow',
    slug: 'stanzaflow',
    description:
      'Intelligent workflow automation platform for process orchestration, task automation, and business rule engine — helping teams eliminate manual bottlenecks.',
    overview:
      'StanzaFlow is a powerful workflow automation platform that enables businesses to design, execute, and monitor complex business processes without writing code. With its visual workflow builder, teams can create sophisticated automation rules, set up approval chains, and integrate with existing systems. StanzaFlow handles everything from simple task assignments to enterprise-grade process orchestration across departments.',
    features: [
      'Visual drag-and-drop workflow builder',
      'Conditional logic and business rule engine',
      'Multi-step approval workflows',
      'Integration with 100+ enterprise applications',
      'Real-time process monitoring and alerts',
      'Role-based access and audit trails',
      'Scheduled and event-triggered automations',
      'Custom reporting and process analytics',
    ],
    highlights: [
      {
        title: 'No-Code Automation',
        description:
          'Business teams can build and modify workflows without developer involvement, accelerating time-to-value.',
      },
      {
        title: 'Enterprise-Grade Reliability',
        description:
          'Built for mission-critical processes with fault tolerance, retry logic, and guaranteed execution.',
      },
      {
        title: 'Complete Visibility',
        description:
          'Track every process in real-time with detailed audit logs, bottleneck detection, and performance analytics.',
      },
    ],
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'StanzaAnalytics',
    slug: 'stanzaanalytics',
    description:
      'Business intelligence and analytics dashboard that delivers real-time insights, custom reports, and predictive analytics to drive data-informed decisions.',
    overview:
      'StanzaAnalytics transforms raw business data into actionable intelligence. Connect to any data source — databases, APIs, spreadsheets, or cloud services — and build interactive dashboards that tell your business story. With built-in predictive models and AI-powered anomaly detection, StanzaAnalytics helps teams move from reactive reporting to proactive decision-making.',
    features: [
      'Connect to 50+ data sources out of the box',
      'Interactive drag-and-drop dashboard builder',
      'AI-powered predictive analytics and forecasting',
      'Real-time data streaming and live dashboards',
      'Automated anomaly detection and alerts',
      'Custom report scheduling and distribution',
      'Embedded analytics for your applications',
      'Row-level security and data governance',
    ],
    highlights: [
      {
        title: 'Unified Data View',
        description:
          'Consolidate data from all your systems into a single source of truth, eliminating data silos and inconsistencies.',
      },
      {
        title: 'Predictive Intelligence',
        description:
          'Go beyond historical reporting with AI models that forecast trends, detect anomalies, and recommend actions.',
      },
      {
        title: 'Self-Service Analytics',
        description:
          'Empower every team member to explore data and build reports without depending on data engineering resources.',
      },
    ],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'StanzaHR',
    slug: 'stanzahr',
    description:
      'Comprehensive HR management and recruitment platform with applicant tracking, onboarding automation, and performance management tools.',
    overview:
      'StanzaHR streamlines the entire employee lifecycle from recruitment to retirement. Our platform combines applicant tracking, automated onboarding, performance reviews, and employee engagement tools in a single unified system. With AI-powered candidate matching and intelligent workflow automation, HR teams can focus on strategic initiatives while StanzaHR handles the operational heavy lifting.',
    features: [
      'AI-powered applicant tracking and candidate matching',
      'Automated onboarding workflows and document management',
      'Performance review cycles with 360-degree feedback',
      'Employee self-service portal and mobile app',
      'Leave management and attendance tracking',
      'Compensation planning and benefits administration',
      'Learning management and skill development tracking',
      'HR analytics and workforce planning dashboards',
    ],
    highlights: [
      {
        title: 'Hire 3x Faster',
        description:
          'AI-powered screening and automated scheduling reduce time-to-hire while improving candidate quality.',
      },
      {
        title: 'Seamless Onboarding',
        description:
          'Automated document collection, training assignments, and welcome workflows ensure new hires are productive from day one.',
      },
      {
        title: 'Data-Driven HR',
        description:
          'Real-time dashboards for attrition risk, engagement scores, and workforce demographics enable proactive people management.',
      },
    ],
    gradient: 'from-orange-500 to-rose-600',
  },
]

export function getFallbackProduct(slug: string): FallbackProduct | undefined {
  return fallbackProducts.find((p) => p.slug === slug)
}

export function getFallbackProductSlugs(): string[] {
  return fallbackProducts.map((p) => p.slug)
}
