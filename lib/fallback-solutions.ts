export interface FallbackSolution {
  title: string
  slug: string
  description: string
  overview: string
  features: string[]
  approach: { title: string; description: string }[]
  iconName: string
}

export const fallbackSolutions: FallbackSolution[] = [
  {
    title: 'Digital Transformation',
    slug: 'digital-transformation',
    description:
      'End-to-end digital transformation strategy — from legacy modernization and cloud migration to digital workflows and intelligent automation.',
    overview:
      'Digital transformation is more than adopting new technology — it\'s about reimagining how your organization creates value. Stanzasoft partners with businesses to develop and execute comprehensive digital transformation roadmaps. We assess your current technology landscape, identify high-impact opportunities, and implement solutions that modernize operations, improve customer experiences, and create competitive advantages.',
    features: [
      'Digital maturity assessment and roadmap planning',
      'Legacy system modernization and re-platforming',
      'Process digitization and workflow automation',
      'Customer experience transformation',
      'Data-driven decision-making enablement',
      'Change management and organizational alignment',
      'Technology stack evaluation and selection',
      'Agile transformation coaching',
    ],
    approach: [
      { title: 'Assess', description: 'We evaluate your current digital maturity, technology landscape, and business processes to identify transformation opportunities.' },
      { title: 'Strategize', description: 'We develop a phased transformation roadmap prioritized by business impact, technical feasibility, and organizational readiness.' },
      { title: 'Execute', description: 'Our cross-functional teams implement solutions using agile sprints with regular stakeholder reviews and course corrections.' },
      { title: 'Scale', description: 'We ensure adopted solutions are scalable, train your teams, and establish governance for sustained digital excellence.' },
    ],
    iconName: 'Rocket',
  },
  {
    title: 'Enterprise AI',
    slug: 'enterprise-ai',
    description:
      'AI-powered enterprise solutions — from intelligent automation and machine learning models to decision support systems and AI-driven analytics.',
    overview:
      'Enterprise AI goes beyond point solutions to transform how entire organizations operate. Stanzasoft helps companies embed artificial intelligence across their value chain — from customer-facing applications to back-office operations. We build custom AI models, integrate pre-trained systems, and design AI governance frameworks that ensure responsible, scalable deployment of intelligence across your enterprise.',
    features: [
      'AI strategy and use case identification',
      'Custom model development and fine-tuning',
      'Generative AI and LLM integration',
      'Intelligent process automation (IPA)',
      'AI-powered decision support systems',
      'MLOps infrastructure and model governance',
      'Knowledge graph and semantic search',
      'AI ethics and responsible AI frameworks',
    ],
    approach: [
      { title: 'Discover', description: 'We identify high-value AI use cases through workshops, data audits, and process analysis with your domain experts.' },
      { title: 'Prototype', description: 'We build rapid proof-of-concepts to validate feasibility, measure potential ROI, and secure stakeholder buy-in.' },
      { title: 'Productionize', description: 'Validated prototypes are re-engineered for production with robust data pipelines, monitoring, and scalable infrastructure.' },
      { title: 'Govern', description: 'We establish AI governance policies, model monitoring dashboards, and retraining pipelines for long-term reliability.' },
    ],
    iconName: 'Brain',
  },
  {
    title: 'Custom Software',
    slug: 'custom-software',
    description:
      'Bespoke software development tailored to your unique business needs — from web and mobile applications to complex enterprise systems.',
    overview:
      'Off-the-shelf software rarely fits perfectly. Stanzasoft builds custom software solutions designed around your specific workflows, integrations, and growth plans. Our full-stack engineering teams use modern architectures (microservices, event-driven, serverless) and agile methodologies to deliver high-quality software on time and on budget. From MVPs for startups to enterprise-grade platforms, we handle the full development lifecycle.',
    features: [
      'Full-stack web application development',
      'Native and cross-platform mobile apps',
      'Microservices and API-first architecture',
      'Enterprise system integration',
      'UI/UX design and prototyping',
      'Quality assurance and automated testing',
      'DevOps and continuous deployment',
      'Post-launch support and feature evolution',
    ],
    approach: [
      { title: 'Define', description: 'We translate your business requirements into detailed technical specifications, user stories, and architecture designs.' },
      { title: 'Design', description: 'Our UX team creates wireframes and interactive prototypes validated through user testing before development begins.' },
      { title: 'Develop', description: 'Engineering sprints deliver working software every two weeks with demos, feedback loops, and quality gates.' },
      { title: 'Deliver', description: 'We deploy to production with CI/CD pipelines, conduct thorough testing, and provide documentation and knowledge transfer.' },
    ],
    iconName: 'Code',
  },
  {
    title: 'Data & Analytics',
    slug: 'data-analytics',
    description:
      'Data-driven insights and analytics — from business intelligence and data engineering to visualization dashboards and predictive modeling.',
    overview:
      'Data is your most valuable asset, but only if you can access, understand, and act on it. Stanzasoft\'s data and analytics practice helps organizations build modern data platforms, create insightful dashboards, and implement advanced analytics that drive strategic decisions. We work with your existing data infrastructure to deliver quick wins while building toward a comprehensive, scalable data strategy.',
    features: [
      'Data strategy and architecture consulting',
      'Data warehouse and data lake implementation',
      'Business intelligence dashboard development',
      'Advanced analytics and statistical modeling',
      'Data quality management and governance',
      'Self-service analytics platform setup',
      'Real-time analytics and streaming dashboards',
      'Data visualization and storytelling',
    ],
    approach: [
      { title: 'Audit', description: 'We assess your current data landscape — sources, quality, infrastructure, and team capabilities — to identify gaps and opportunities.' },
      { title: 'Architect', description: 'We design a modern data architecture (lakehouse, mesh, or warehouse) aligned with your analytics goals and scale requirements.' },
      { title: 'Build', description: 'Our engineers implement data pipelines, transformations, and dashboards with automated testing and data quality checks.' },
      { title: 'Enable', description: 'We train your teams on self-service analytics, establish data governance practices, and set up ongoing monitoring.' },
    ],
    iconName: 'BarChart3',
  },
]

export function getFallbackSolution(slug: string): FallbackSolution | undefined {
  return fallbackSolutions.find((s) => s.slug === slug)
}

export function getFallbackSolutionSlugs(): string[] {
  return fallbackSolutions.map((s) => s.slug)
}
