import { wpFetch } from '@/lib/wordpress'
import type { WPIndustry } from '@/types/wordpress'

export async function getIndustries(): Promise<WPIndustry[]> {
  const industries = await wpFetch<WPIndustry[]>(
    '/industry?per_page=100&_fields=id,title,slug,acf&orderby=date&order=asc',
    { revalidate: 3600, tags: ['industries'] }
  )
  if (!industries) return []
  return industries.sort((a, b) => (a.acf.display_order || 0) - (b.acf.display_order || 0))
}

export async function getIndustryBySlug(slug: string): Promise<WPIndustry | null> {
  const industries = await wpFetch<WPIndustry[]>(
    `/industry?slug=${slug}&_fields=id,title,slug,acf`,
    { revalidate: 3600, tags: [`industry-${slug}`] }
  )
  return industries?.[0] || null
}
