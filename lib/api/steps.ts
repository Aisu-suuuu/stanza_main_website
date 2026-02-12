import { wpFetch } from '@/lib/wordpress'
import type { WPStep } from '@/types/wordpress'

export async function getSteps(): Promise<WPStep[]> {
  const steps = await wpFetch<WPStep[]>(
    '/step?per_page=100&_fields=id,title,acf&orderby=date&order=asc',
    { revalidate: 3600, tags: ['steps'] }
  )
  if (!steps) return []
  return steps.sort((a, b) => (a.acf.display_order || 0) - (b.acf.display_order || 0))
}
