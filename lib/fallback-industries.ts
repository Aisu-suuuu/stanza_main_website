export interface FallbackIndustry {
  title: string
  slug: string
  description: string
  overview: string
  features: string[]
  challenges: { title: string; description: string }[]
  colorFrom: string
  colorTo: string
  iconName: string
}

export const fallbackIndustries: FallbackIndustry[] = [
  {
    title: 'Healthcare',
    slug: 'healthcare',
    description:
      'Digital health solutions — from EHR integration and telemedicine platforms to patient engagement tools and healthcare compliance automation.',
    overview:
      'Healthcare organizations face unique challenges: strict regulatory requirements, complex data ecosystems, and the critical need for reliability. Stanzasoft builds healthcare technology solutions that improve patient outcomes, streamline clinical workflows, and ensure HIPAA compliance. From custom EHR integrations to AI-powered diagnostic tools, we help healthcare providers and health-tech companies deliver better care through technology.',
    features: [
      'EHR/EMR system integration and interoperability',
      'Telemedicine and virtual care platforms',
      'Patient engagement and portal development',
      'Healthcare data analytics and population health',
      'HIPAA compliance and security automation',
      'Medical device data integration (IoMT)',
      'Claims processing and revenue cycle optimization',
      'Clinical decision support systems',
    ],
    challenges: [
      { title: 'Data Interoperability', description: 'We connect disparate healthcare systems using HL7 FHIR and custom APIs to enable seamless data exchange across your organization.' },
      { title: 'Regulatory Compliance', description: 'Our solutions are built with HIPAA, HITECH, and SOC 2 compliance from day one, with automated audit trails and encryption.' },
      { title: 'Patient Experience', description: 'We design intuitive patient-facing applications that improve engagement, reduce no-shows, and streamline care coordination.' },
    ],
    colorFrom: '#10B981',
    colorTo: '#059669',
    iconName: 'Heart',
  },
  {
    title: 'Finance & Banking',
    slug: 'finance-banking',
    description:
      'Fintech solutions — from digital banking and payment processing to risk management, regulatory compliance, and fraud detection systems.',
    overview:
      'The financial services industry is undergoing rapid digital transformation. Stanzasoft helps banks, fintechs, and financial institutions build secure, compliant, and innovative technology solutions. From core banking modernization to AI-powered fraud detection and real-time payment processing, we deliver solutions that meet stringent regulatory requirements while providing exceptional customer experiences.',
    features: [
      'Digital banking and mobile wallet platforms',
      'Payment processing and gateway integration',
      'AI-powered fraud detection and AML systems',
      'Risk management and credit scoring models',
      'Regulatory compliance automation (KYC, PCI DSS)',
      'Core banking system modernization',
      'Open banking and API marketplace development',
      'Financial data analytics and reporting',
    ],
    challenges: [
      { title: 'Security & Compliance', description: 'We build systems with bank-grade security, encryption, and automated compliance reporting for PCI DSS, SOX, and regional regulations.' },
      { title: 'Real-Time Processing', description: 'Our architectures handle millions of transactions per second with sub-millisecond latency for payment processing and fraud detection.' },
      { title: 'Legacy Modernization', description: 'We help banks migrate from monolithic legacy systems to cloud-native microservices without disrupting ongoing operations.' },
    ],
    colorFrom: '#3B82F6',
    colorTo: '#1D4ED8',
    iconName: 'Landmark',
  },
  {
    title: 'Retail & E-commerce',
    slug: 'retail-ecommerce',
    description:
      'Retail transformation — from omnichannel commerce and inventory management to customer analytics and personalized shopping experiences.',
    overview:
      'Modern retail demands seamless omnichannel experiences, personalized customer journeys, and data-driven inventory management. Stanzasoft helps retailers and e-commerce businesses build technology platforms that unify online and offline channels, optimize supply chains, and leverage AI for personalization. From headless commerce architectures to real-time inventory sync, we enable retailers to compete in the digital-first economy.',
    features: [
      'Headless commerce and custom storefront development',
      'Omnichannel order management and fulfillment',
      'Real-time inventory sync across channels',
      'AI-powered product recommendations',
      'Customer analytics and segmentation',
      'POS system integration and modernization',
      'Supply chain visibility and optimization',
      'Loyalty program and CRM development',
    ],
    challenges: [
      { title: 'Omnichannel Consistency', description: 'We unify inventory, pricing, and customer data across web, mobile, and physical stores for a seamless shopping experience.' },
      { title: 'Personalization at Scale', description: 'Our AI models deliver personalized product recommendations, dynamic pricing, and targeted promotions in real-time.' },
      { title: 'Supply Chain Agility', description: 'We build demand forecasting and inventory optimization systems that reduce stockouts and overstock by up to 30%.' },
    ],
    colorFrom: '#F59E0B',
    colorTo: '#D97706',
    iconName: 'ShoppingCart',
  },
  {
    title: 'Manufacturing',
    slug: 'manufacturing',
    description:
      'Industry 4.0 solutions — from IoT integration and predictive maintenance to supply chain optimization and smart factory platforms.',
    overview:
      'Manufacturing is being transformed by Industry 4.0 technologies — IoT sensors, AI-driven quality control, digital twins, and smart supply chains. Stanzasoft helps manufacturers digitize their operations, connect factory floor data to enterprise systems, and implement predictive maintenance that reduces downtime. Our solutions bridge the gap between operational technology (OT) and information technology (IT) for complete manufacturing visibility.',
    features: [
      'IoT platform development and sensor integration',
      'Predictive maintenance and asset monitoring',
      'Manufacturing execution system (MES) development',
      'Supply chain management and logistics optimization',
      'Quality management and defect detection (AI/CV)',
      'Digital twin simulation and modeling',
      'Production planning and scheduling optimization',
      'ERP integration and shop floor connectivity',
    ],
    challenges: [
      { title: 'OT/IT Convergence', description: 'We bridge the gap between factory floor systems (PLCs, SCADA) and enterprise IT with secure, real-time data integration.' },
      { title: 'Downtime Reduction', description: 'Our predictive maintenance models analyze sensor data to predict failures 2-4 weeks in advance, reducing unplanned downtime by up to 45%.' },
      { title: 'Quality Assurance', description: 'Computer vision and AI-powered inspection systems detect defects in real-time with accuracy exceeding manual inspection.' },
    ],
    colorFrom: '#6366F1',
    colorTo: '#4F46E5',
    iconName: 'Factory',
  },
  {
    title: 'Education',
    slug: 'education',
    description:
      'EdTech solutions — from LMS platforms and virtual classrooms to student analytics, content management, and adaptive learning systems.',
    overview:
      'Education technology is reshaping how institutions teach, assess, and engage with students. Stanzasoft builds EdTech platforms that support modern learning experiences — from K-12 school management systems to corporate training platforms and university learning management systems. We leverage AI for adaptive learning, build engaging virtual classroom experiences, and create analytics tools that help educators understand and improve student outcomes.',
    features: [
      'Custom LMS and e-learning platform development',
      'Virtual classroom and video conferencing integration',
      'AI-powered adaptive learning and content recommendation',
      'Student information system (SIS) development',
      'Assessment and examination management tools',
      'Learning analytics and outcome tracking dashboards',
      'Content authoring and management platforms',
      'Mobile learning apps for iOS and Android',
    ],
    challenges: [
      { title: 'Engagement & Retention', description: 'We build gamified learning experiences, interactive content, and social features that keep learners engaged and improve completion rates.' },
      { title: 'Accessibility', description: 'Our platforms are built to WCAG 2.1 AA standards, ensuring inclusive learning experiences for students with diverse needs.' },
      { title: 'Scale & Performance', description: 'We architect platforms that handle thousands of concurrent users during peak exam periods without degradation.' },
    ],
    colorFrom: '#EC4899',
    colorTo: '#DB2777',
    iconName: 'GraduationCap',
  },
  {
    title: 'Real Estate',
    slug: 'real-estate',
    description:
      'PropTech solutions — from property management platforms and virtual tours to CRM systems, market analytics, and tenant portals.',
    overview:
      'The real estate industry is embracing technology to streamline property management, enhance buyer/renter experiences, and make data-driven investment decisions. Stanzasoft builds PropTech solutions that digitize property operations, create immersive virtual tour experiences, and provide market intelligence tools. From custom CRM platforms for brokerages to tenant management portals for property managers, we deliver technology that modernizes real estate operations.',
    features: [
      'Property management and tenant portal development',
      'Virtual tour and 3D walkthrough integration',
      'Real estate CRM and lead management',
      'Market analytics and property valuation tools',
      'Listing syndication and MLS integration',
      'Document management and digital lease signing',
      'Maintenance request tracking and vendor management',
      'Investment analytics and portfolio management',
    ],
    challenges: [
      { title: 'Digital Listings', description: 'We build platforms with immersive virtual tours, AI-powered property matching, and seamless MLS integration to accelerate transactions.' },
      { title: 'Operational Efficiency', description: 'Our property management platforms automate rent collection, maintenance workflows, and tenant communications, reducing administrative overhead by 50%.' },
      { title: 'Market Intelligence', description: 'AI-powered valuation models and market analytics give investors and agents data-driven insights for better decision-making.' },
    ],
    colorFrom: '#14B8A6',
    colorTo: '#0D9488',
    iconName: 'Building2',
  },
]

export function getFallbackIndustry(slug: string): FallbackIndustry | undefined {
  return fallbackIndustries.find((i) => i.slug === slug)
}

export function getFallbackIndustrySlugs(): string[] {
  return fallbackIndustries.map((i) => i.slug)
}
