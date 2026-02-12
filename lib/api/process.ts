import { wpFetch } from '@/lib/wordpress'
import type { WPProcessStep } from '@/types/wordpress'

export async function getProcessSteps(): Promise<WPProcessStep[]> {
  const steps = await wpFetch<WPProcessStep[]>(
    '/process_step?per_page=100&_fields=id,title,acf&orderby=date&order=asc',
    { revalidate: 3600, tags: ['process-steps'] }
  )
  if (!steps) return []
  return steps.sort((a, b) => (a.acf.display_order || 0) - (b.acf.display_order || 0))
}
