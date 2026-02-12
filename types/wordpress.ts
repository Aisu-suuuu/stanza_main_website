// WordPress REST API response types

// Base WordPress post structure
export interface WPPost {
  id: number
  date: string
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  featured_media: number
  categories: number[]
  tags: number[]
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>
  }
  acf: {
    read_time?: string
    featured?: boolean
    [key: string]: unknown
  }
}

// WordPress page with ACF fields
export interface WPPage {
  id: number
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  acf: Record<string, unknown>
}

// === Page ACF field interfaces ===

export interface HomePageFields {
  hero_headline: string
  hero_subheadline: string
  hero_cta_primary_text: string
  hero_cta_primary_link: string
  hero_cta_secondary_text: string
  hero_cta_secondary_link: string
  about_heading: string
  about_paragraph_1: string
  about_paragraph_2: string
  about_image: string
  about_clients_tagline: string
  products_section_heading: string
  products_section_subheading: string
  steps_section_badge: string
  steps_section_heading: string
  steps_section_subheading: string
  process_section_badge: string
  process_section_heading: string
  faq_heading: string
  faq_subheading: string
  cta_heading: string
  cta_subtext: string
  cta_button_text: string
  cta_button_link: string
}

export interface AboutPageFields {
  hero_badge: string
  hero_heading: string
  hero_subheading: string
  mission_heading: string
  mission_paragraph_1: string
  mission_paragraph_2: string
  mission_image: string
  values_heading: string
  values_subheading: string
  team_heading: string
  team_subheading: string
  team_description_1: string
  team_description_2: string
  cta_heading: string
  cta_subtext: string
  cta_button_text: string
  cta_button_link: string
}

export interface ServicesPageFields {
  hero_badge: string
  hero_heading: string
  hero_subheading: string
  process_badge: string
  process_heading: string
  process_subheading: string
  cta_heading: string
  cta_subtext: string
  cta_button_text: string
  cta_button_link: string
}

export interface SolutionsPageFields {
  hero_badge: string
  hero_heading: string
  hero_subheading: string
  grid_heading: string
  grid_subheading: string
  why_badge: string
  why_heading: string
  why_paragraph: string
  cta_heading: string
  cta_subtext: string
  cta_button_text: string
  cta_button_link: string
}

export interface ProductsPageFields {
  hero_badge: string
  hero_heading: string
  hero_subheading: string
  featured_heading: string
  featured_subheading: string
  testimonials_heading: string
  testimonials_subheading: string
  cta_heading: string
  cta_subtext: string
  cta_button_text: string
  cta_button_link: string
}

export interface IndustriesPageFields {
  hero_badge: string
  hero_heading: string
  hero_subheading: string
  approach_heading: string
  approach_subheading: string
  trust_heading: string
  trust_paragraph: string
  cta_heading: string
  cta_subtext: string
  cta_button_text: string
  cta_button_link: string
}

export interface BlogPageFields {
  hero_badge: string
  hero_heading: string
  hero_subheading: string
  newsletter_badge: string
  newsletter_heading: string
  newsletter_subheading: string
  newsletter_disclaimer: string
}

export interface ContactPageFields {
  hero_badge: string
  hero_heading: string
  hero_subheading: string
  form_heading: string
  form_subheading: string
  form_success_message: string
  email: string
  phone: string
  faq_cta_heading: string
  faq_cta_paragraph: string
}

export interface CareersPageFields {
  hero_badge: string
  hero_heading: string
  hero_subheading: string
  benefits_heading: string
  benefits_subheading: string
  positions_heading: string
  positions_subheading: string
  culture_heading: string
  culture_subheading: string
  culture_description: string
  cta_heading: string
  cta_subtext: string
  cta_button_text: string
  cta_button_link: string
}

// === Custom Post Type interfaces ===

export interface WPService {
  id: number
  title: { rendered: string }
  slug: string
  acf: {
    description: string
    icon_name: string
    href: string
    bullet_points: string
    display_order: number
  }
}

export interface WPSolution {
  id: number
  title: { rendered: string }
  slug: string
  acf: {
    description: string
    icon_name: string
    features: string
    href: string
    display_order: number
  }
}

export interface WPProduct {
  id: number
  title: { rendered: string }
  slug: string
  featured_media: number
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>
  }
  acf: {
    description: string
    description_2: string
    features: string
    product_image: string
    gradient: string
    display_order: number
  }
}

export interface WPIndustry {
  id: number
  title: { rendered: string }
  slug: string
  acf: {
    description: string
    features: string
    icon_name: string
    color_from: string
    color_to: string
    icon_color: string
    display_order: number
  }
}

export interface WPFaqItem {
  id: number
  title: { rendered: string }
  acf: {
    answer: string
    display_order: number
  }
}

export interface WPStat {
  id: number
  title: { rendered: string }
  acf: {
    value: number
    suffix: string
    display_order: number
  }
}

export interface WPStep {
  id: number
  title: { rendered: string }
  featured_media: number
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>
  }
  acf: {
    number: string
    badge: string
    description: string
    tags: string
    step_image: string
    display_order: number
  }
}

export interface WPProcessStep {
  id: number
  title: { rendered: string }
  acf: {
    number: number
    description: string
    display_order: number
  }
}

export interface WPTestimonial {
  id: number
  title: { rendered: string }
  featured_media: number
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>
  }
  acf: {
    quote: string
    role: string
    avatar: string
    rating: number
    display_order: number
  }
}

export interface WPTeamDepartment {
  id: number
  title: { rendered: string }
  acf: {
    description: string
    display_order: number
  }
}

export interface WPValueProp {
  id: number
  title: { rendered: string }
  acf: {
    description: string
    icon_name: string
    display_order: number
  }
}

export interface WPCareerPosition {
  id: number
  title: { rendered: string }
  acf: {
    type: string
    location: string
    department: string
    display_order: number
  }
}

export interface WPCareerBenefit {
  id: number
  title: { rendered: string }
  acf: {
    description: string
    icon_name: string
    display_order: number
  }
}

export interface WPClientLogo {
  id: number
  title: { rendered: string }
  featured_media: number
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>
  }
  acf: {
    logo: string
    display_order: number
  }
}

export interface WPOfficeLocation {
  id: number
  title: { rendered: string }
  acf: {
    country: string
    address: string
    timezone: string
    display_order: number
  }
}

export interface WPCategory {
  id: number
  name: string
  slug: string
  count: number
}
