import { notFound } from 'next/navigation'
import { getIndustryBySlug, getIndustries } from '@/lib/api/industries'
import { getFallbackIndustry, getFallbackIndustrySlugs, fallbackIndustries } from '@/lib/fallback-industries'
import { stripHtml, parseNewlineList } from '@/lib/wordpress'
import type { Metadata } from 'next'
import IndustryDetailClient from './IndustryDetailClient'

export async function generateStaticParams() {
  const wpIndustries = await getIndustries()
  const wpSlugs = wpIndustries.map((i) => i.slug)
  const fbSlugs = getFallbackIndustrySlugs()
  const allSlugs = Array.from(new Set([...wpSlugs, ...fbSlugs]))
  return allSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const industry = await getIndustryBySlug(slug)
  if (industry) {
    return {
      title: `${stripHtml(industry.title.rendered)} | Stanzasoft Industries`,
      description: industry.acf.description,
    }
  }
  const fallback = getFallbackIndustry(slug)
  if (fallback) {
    return {
      title: `${fallback.title} | Stanzasoft Industries`,
      description: fallback.description,
    }
  }
  return { title: 'Industry Not Found | Stanzasoft' }
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const industry = await getIndustryBySlug(slug)
  if (industry) {
    const allIndustries = await getIndustries()
    const otherIndustries = allIndustries
      .filter((i) => i.slug !== slug)
      .slice(0, 3)
      .map((i) => ({
        slug: i.slug,
        title: stripHtml(i.title.rendered),
        description: i.acf.description,
        colorFrom: i.acf.color_from || '#7C3AED',
        colorTo: i.acf.color_to || '#7C3AED',
      }))

    return (
      <IndustryDetailClient
        industry={{
          title: stripHtml(industry.title.rendered),
          slug: industry.slug,
          description: industry.acf.description,
          overview: industry.acf.description,
          features: industry.acf.features ? parseNewlineList(industry.acf.features) : [],
          challenges: [],
          colorFrom: industry.acf.color_from || '#7C3AED',
          colorTo: industry.acf.color_to || '#7C3AED',
          iconName: industry.acf.icon_name || 'Building2',
        }}
        otherIndustries={otherIndustries}
      />
    )
  }

  const fallback = getFallbackIndustry(slug)
  if (!fallback) {
    notFound()
  }

  const otherIndustries = fallbackIndustries
    .filter((i) => i.slug !== slug)
    .slice(0, 3)
    .map((i) => ({ slug: i.slug, title: i.title, description: i.description, colorFrom: i.colorFrom, colorTo: i.colorTo }))

  return (
    <IndustryDetailClient
      industry={fallback}
      otherIndustries={otherIndustries}
    />
  )
}
