import { wpFetch } from '@/lib/wordpress'
import type { WPSolution } from '@/types/wordpress'

export async function getSolutions(): Promise<WPSolution[]> {
  const solutions = await wpFetch<WPSolution[]>(
    '/solution?per_page=100&_fields=id,title,slug,acf&orderby=date&order=asc',
    { revalidate: 3600, tags: ['solutions'] }
  )
  if (!solutions) return []
  return solutions.sort((a, b) => (a.acf.display_order || 0) - (b.acf.display_order || 0))
}

export async function getSolutionBySlug(slug: string): Promise<WPSolution | null> {
  const solutions = await wpFetch<WPSolution[]>(
    `/solution?slug=${slug}&_fields=id,title,slug,acf`,
    { revalidate: 3600, tags: [`solution-${slug}`] }
  )
  return solutions?.[0] || null
}
