import { wpFetch } from '@/lib/wordpress'
import type { WPCareerPosition, WPCareerBenefit } from '@/types/wordpress'

export async function getCareerPositions(): Promise<WPCareerPosition[]> {
  const positions = await wpFetch<WPCareerPosition[]>(
    '/career_position?per_page=100&_fields=id,title,acf&orderby=date&order=asc',
    { revalidate: 1800, tags: ['career-positions'] }
  )
  if (!positions) return []
  return positions.sort((a, b) => (a.acf.display_order || 0) - (b.acf.display_order || 0))
}

export async function getCareerBenefits(): Promise<WPCareerBenefit[]> {
  const benefits = await wpFetch<WPCareerBenefit[]>(
    '/career_benefit?per_page=100&_fields=id,title,acf&orderby=date&order=asc',
    { revalidate: 3600, tags: ['career-benefits'] }
  )
  if (!benefits) return []
  return benefits.sort((a, b) => (a.acf.display_order || 0) - (b.acf.display_order || 0))
}
