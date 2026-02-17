import { MetadataRoute } from 'next'

const baseUrl = 'https://stanzasoft.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date()

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Service detail pages
  const serviceSlugs = ['ai-ml', 'salesforce', 'cloud', 'data-integration']
  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Product detail pages
  const productSlugs = ['stanzabot', 'stanzaflow', 'stanzaanalytics', 'stanzahr']
  const productRoutes: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Solution detail pages
  const solutionSlugs = ['digital-transformation', 'enterprise-ai', 'custom-software', 'data-analytics']
  const solutionRoutes: MetadataRoute.Sitemap = solutionSlugs.map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Industry detail pages
  const industrySlugs = ['healthcare', 'finance-banking', 'retail-ecommerce', 'manufacturing', 'education', 'real-estate']
  const industryRoutes: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog posts — fetch from WordPress, fall back to known slugs
  let blogSlugs = [
    'ai-integration-transforming-business-operations',
    'smart-workflows-automating-with-ai',
    'agentic-ai-future-of-enterprise-automation',
    'salesforce-ai-integration-einstein-copilot',
    'building-ai-first-products',
    'workflow-automation-roi-calculator',
  ]

  try {
    const wpApiUrl = process.env.WORDPRESS_API_URL || 'https://cms-wp.stanzasoft.ai/wp-json/wp/v2'
    const res = await fetch(`${wpApiUrl}/posts?per_page=100&_fields=slug`, { next: { revalidate: 3600 } })
    if (res.ok) {
      const posts: { slug: string }[] = await res.json()
      if (posts.length > 0) {
        blogSlugs = posts.map((p) => p.slug)
      }
    }
  } catch {
    // Use fallback slugs
  }

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...solutionRoutes,
    ...industryRoutes,
    ...blogRoutes,
  ]
}
