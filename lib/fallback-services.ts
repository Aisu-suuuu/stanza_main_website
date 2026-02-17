export interface FallbackService {
  title: string
  slug: string
  description: string
  overview: string
  features: string[]
  useCases: { title: string; description: string }[]
  iconName: string
}

export const fallbackServices: FallbackService[] = [
  {
    title: 'AI & Machine Learning',
    slug: 'ai-ml',
    description:
      'Transform your business with cutting-edge AI and machine learning solutions — from predictive analytics to natural language processing and computer vision.',
    overview:
      'Our AI & ML practice helps organizations harness the power of artificial intelligence to automate processes, uncover insights, and create intelligent products. We work across the full AI lifecycle — from data strategy and model development to production deployment and monitoring. Whether you need a recommendation engine, fraud detection system, or conversational AI, our team delivers solutions that drive measurable ROI.',
    features: [
      'Custom machine learning model development and training',
      'Natural Language Processing (NLP) and text analytics',
      'Computer vision and image recognition systems',
      'Predictive analytics and demand forecasting',
      'Recommendation engines and personalization',
      'MLOps and model monitoring infrastructure',
      'Conversational AI and intelligent chatbots',
      'Data pipeline design for AI workloads',
    ],
    useCases: [
      {
        title: 'Intelligent Document Processing',
        description:
          'Automate extraction of data from invoices, contracts, and forms using OCR and NLP, reducing manual processing time by up to 80%.',
      },
      {
        title: 'Predictive Maintenance',
        description:
          'Leverage sensor data and ML models to predict equipment failures before they happen, minimizing downtime and maintenance costs.',
      },
      {
        title: 'Customer Churn Prediction',
        description:
          'Identify at-risk customers using behavioral patterns and proactively engage them with targeted retention strategies.',
      },
      {
        title: 'Supply Chain Optimization',
        description:
          'Use demand forecasting and route optimization models to reduce inventory costs and improve delivery timelines.',
      },
    ],
    iconName: 'Brain',
  },
  {
    title: 'Salesforce Solutions',
    slug: 'salesforce',
    description:
      'End-to-end Salesforce consulting — from CRM implementation and customization to integration, migration, and ongoing managed services.',
    overview:
      'As a Salesforce consulting partner, Stanzasoft delivers comprehensive CRM solutions that help businesses streamline sales, marketing, and service operations. Our certified Salesforce consultants bring deep expertise across Sales Cloud, Service Cloud, Marketing Cloud, and custom Salesforce development. We handle everything from greenfield implementations to complex migrations and integrations with your existing tech stack.',
    features: [
      'Sales Cloud and Service Cloud implementation',
      'Custom Salesforce app development (Lightning & Apex)',
      'Salesforce integration with ERP, marketing, and analytics tools',
      'Data migration from legacy CRM systems',
      'Marketing Cloud and Pardot automation setup',
      'Salesforce CPQ and billing configuration',
      'Managed services and ongoing administration',
      'User training and adoption strategy',
    ],
    useCases: [
      {
        title: 'CRM Consolidation',
        description:
          'Migrate from multiple disconnected systems to a unified Salesforce platform, giving sales teams a complete 360-degree customer view.',
      },
      {
        title: 'Sales Process Automation',
        description:
          'Automate lead scoring, opportunity management, and quote generation to accelerate your sales cycle and improve win rates.',
      },
      {
        title: 'Customer Service Transformation',
        description:
          'Implement Service Cloud with AI-powered case routing, knowledge base, and self-service portals to improve resolution times.',
      },
    ],
    iconName: 'Cloud',
  },
  {
    title: 'Cloud Services',
    slug: 'cloud',
    description:
      'Cloud strategy, migration, and managed services across AWS, Azure, and GCP — helping you build scalable, secure, and cost-optimized infrastructure.',
    overview:
      'Our cloud practice helps businesses at every stage of their cloud journey — from strategy and assessment to migration, optimization, and managed operations. We are platform-agnostic, working across AWS, Microsoft Azure, and Google Cloud Platform to design architectures that meet your performance, security, and compliance requirements. Our DevOps and SRE expertise ensures your cloud infrastructure is automated, observable, and continuously improving.',
    features: [
      'Cloud readiness assessment and migration strategy',
      'Lift-and-shift and re-architecture migrations',
      'Kubernetes and container orchestration',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'CI/CD pipeline design and implementation',
      'Cloud cost optimization and FinOps',
      'Security hardening and compliance automation',
      'Managed cloud operations and 24/7 monitoring',
    ],
    useCases: [
      {
        title: 'Legacy to Cloud Migration',
        description:
          'Migrate on-premises workloads to the cloud with minimal disruption, reducing infrastructure costs by 30-50% while improving scalability.',
      },
      {
        title: 'Cloud-Native Development',
        description:
          'Build microservices-based applications using containers and serverless architecture for maximum agility and scalability.',
      },
      {
        title: 'Multi-Cloud Strategy',
        description:
          'Design and implement multi-cloud architectures that avoid vendor lock-in while leveraging the best services from each provider.',
      },
    ],
    iconName: 'CloudCog',
  },
  {
    title: 'Data Integration',
    slug: 'data-integration',
    description:
      'Connect, transform, and unify your data with enterprise ETL pipelines, real-time sync, API integrations, and modern data warehouse solutions.',
    overview:
      'Stanzasoft\'s data integration services help businesses break down data silos and build a unified data foundation. We design and implement ETL/ELT pipelines, real-time data streaming, and API integrations that connect your applications, databases, and third-party services. Our solutions ensure data quality, consistency, and accessibility across your organization — enabling better decision-making and operational efficiency.',
    features: [
      'ETL/ELT pipeline design and implementation',
      'Real-time data streaming with Kafka and Spark',
      'API development and integration (REST, GraphQL)',
      'Data warehouse and data lake architecture',
      'Master data management and data quality',
      'CDC (Change Data Capture) implementation',
      'Third-party SaaS integration (Salesforce, SAP, etc.)',
      'Data governance and lineage tracking',
    ],
    useCases: [
      {
        title: 'Enterprise Data Warehouse',
        description:
          'Consolidate data from dozens of source systems into a single cloud data warehouse, enabling company-wide analytics and reporting.',
      },
      {
        title: 'Real-Time Event Processing',
        description:
          'Build streaming data pipelines that process millions of events per second for real-time dashboards, alerting, and automation.',
      },
      {
        title: 'SaaS Integration Hub',
        description:
          'Create a centralized integration layer connecting your CRM, ERP, marketing, and support tools for seamless data flow.',
      },
    ],
    iconName: 'Database',
  },
]

export function getFallbackService(slug: string): FallbackService | undefined {
  return fallbackServices.find((s) => s.slug === slug)
}

export function getFallbackServiceSlugs(): string[] {
  return fallbackServices.map((s) => s.slug)
}
